import React, { useEffect, useRef, useState } from 'react';

// ──────────────────────────────────────────────
// DATA — Sumber: Arung et al. (2018), Tropical Life Sciences Research, 29(2), 39–52
// PubMed: PMC6072726 | CC BY 4.0
// ──────────────────────────────────────────────
const khmData = [
  {
    label: 'Ekstrak Bawang Tiwai',
    sublabel: '(Eleutherine palmifolia — Metode M1)',
    value: 2,
    unit: 'mg/mL',
    percentage: 33,
    highlight: true,
  },
  {
    label: 'Ambang Resistansi MRSA',
    sublabel: '(Standar CLSI Internasional)',
    value: 4,
    unit: 'mg/mL',
    percentage: 67,
    highlight: false,
  },
];

const explainerCards = [
  {
    icon: '🦠',
    question: 'Apa itu MRSA?',
    answer:
      'MRSA adalah bakteri yang sudah kebal terhadap banyak antibiotik standar. Infeksi MRSA lebih sulit diobati dan bisa berbahaya jika tidak ditangani.',
  },
  {
    icon: '🧪',
    question: 'Apa itu KHM?',
    answer:
      'KHM (Kadar Hambat Minimum) adalah jumlah terkecil dari suatu bahan yang cukup untuk menghentikan pertumbuhan bakteri. Makin kecil nilainya, makin kuat kemampuan hambatnya.',
  },
  {
    icon: '✅',
    question: 'Apa artinya buat saya?',
    answer:
      'Bawang Tiwai yang diproses dengan Metode M1 terbukti di laboratorium mampu menghambat MRSA pada dosis sangat kecil, menjadikannya pilihan herbal fungsional yang terukur secara sains.',
  },
];

// ──────────────────────────────────────────────
// ANIMATED BAR CHART — Scroll-Triggered
// ──────────────────────────────────────────────
function KhmBarChart({ data }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {data.map((item) => (
        <div key={item.label}>
          {/* Label */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-2">
            <div>
              <p className={`text-sm font-bold ${item.highlight ? 'text-forest' : 'text-slate-600'}`}>
                {item.label}
              </p>
              <p className="text-xs text-slate-400">{item.sublabel}</p>
            </div>
            <p className={`text-lg font-black mt-1 sm:mt-0 ${item.highlight ? 'text-forest' : 'text-slate-500'}`}>
              {item.value} <span className="text-xs font-normal text-slate-400">{item.unit}</span>
            </p>
          </div>

          {/* Bar */}
          <div className="h-11 bg-slate-100 rounded-full overflow-hidden relative">
            <div
              className="h-full rounded-full flex items-center justify-end pr-3"
              style={{
                width: animated ? `${item.percentage}%` : '0%',
                backgroundColor: item.highlight ? 'var(--color-forest, #1a3c34)' : '#cbd5e1',
                transition: 'width 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {item.highlight && (
                <span className="text-xs font-bold text-cream/90 whitespace-nowrap">
                  Lebih efektif ✓
                </span>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Keterangan Bar */}
      <div className="flex items-start gap-2 mt-4 p-3 bg-primary/5 rounded-xl">
        <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">info</span>
        <p className="text-xs text-slate-500 leading-relaxed">
          * Nilai lebih kecil = lebih efektif. KHM menunjukkan <strong>konsentrasi minimum</strong> yang
          dibutuhkan untuk menghentikan pertumbuhan bakteri. Bar yang lebih pendek berarti dosis
          yang dibutuhkan lebih sedikit.
        </p>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────
export default function KhmInfographic() {
  return (
    <section className="relative py-24 px-6 bg-white border-b border-primary/5 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Label & Headline (Task 1A) */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 border border-forest/10 text-forest text-xs font-black uppercase tracking-[0.28em] mb-6">
            <span className="text-base">🔬</span>
            Bukti Ilmiah
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-forest leading-[1.1] tracking-tight">
            Sekecil ini dosis yang dibutuhkan untuk menghentikan bakteri MRSA.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
            Bawang Tiwai terbukti secara laboratorium mampu menghambat pertumbuhan
            MRSA — <span className="text-forest font-bold">bakteri yang sudah kebal terhadap banyak antibiotik umum</span> —
            pada konsentrasi yang sangat kecil.
          </p>
        </div>

        {/* Two Column: Chart + Explainer Cards */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
          {/* Left — Bar Chart (Task 1B + Task 3) */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-lg shadow-slate-100/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-forest text-xl">bar_chart</span>
              </div>
              <div>
                <p className="text-sm font-bold text-forest">Perbandingan KHM terhadap MRSA</p>
                <p className="text-xs text-slate-400">
                  KHM = Kadar Hambat Minimum (dosis terkecil untuk menghentikan bakteri)
                </p>
              </div>
            </div>

            <KhmBarChart data={khmData} />
          </div>

          {/* Right — Explainer Cards (Task 1C) */}
          <div className="space-y-5">
            {explainerCards.map((card) => (
              <div
                key={card.question}
                className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 md:p-7 hover:border-forest/20 hover:shadow-lg hover:shadow-forest/5 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest mb-2">{card.question}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{card.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer & Sumber (Task 1D) */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-slate-400 text-lg mt-0.5 shrink-0">menu_book</span>
            <div>
              <p className="text-xs text-slate-500 leading-relaxed">
                <strong>Sumber:</strong> Arung, E.T., et al. (2018). The Antibacterial Activity of Dayak Onion
                (<em>Eleutherine palmifolia</em> (L.) Merr) towards Pathogenic Bacteria.{' '}
                <em>Tropical Life Sciences Research</em>, 29(2), 39–52.
                Diterbitkan oleh Universiti Sains Malaysia (CC BY 4.0).
                Tersedia di:{' '}
                <a
                  href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6072726/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest underline hover:text-primary transition-colors"
                >PubMed PMC6072726</a>.
              </p>
              <p className="text-xs text-slate-400 mt-3">
                * Hasil uji laboratorium bersifat in vitro (uji di laboratorium) dan tidak merepresentasikan
                klaim medis atau pengobatan klinis. Konsultasikan dengan tenaga kesehatan
                untuk penggunaan terapeutik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
