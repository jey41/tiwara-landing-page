import React, { useState, useRef } from 'react';

// ─── FAQ Data ────────────────────────────────────────────────
const faqItems = [
  {
    q: 'Apakah ada biaya pendaftaran?',
    a: 'Tidak ada biaya sama sekali. Program ini sepenuhnya gratis dan terbuka untuk semua petani di Kalimantan Timur.',
  },
  {
    q: 'Berapa luas lahan minimum?',
    a: 'Minimal 0.1 hektar (1.000 m²) untuk memulai. Kami juga menerima petani dengan lahan lebih kecil jika bergabung dalam kelompok tani.',
  },
  {
    q: 'Apakah saya harus punya pengalaman?',
    a: 'Tidak perlu. Kami menyediakan pendampingan teknis dari awal, termasuk pelatihan budidaya, pengendalian hama, dan teknik panen terbaik.',
  },
  {
    q: 'Bagaimana proses seleksinya?',
    a: 'Tim kami akan menghubungi Anda dalam 3 hari kerja melalui WhatsApp untuk verifikasi data dan menjadwalkan kunjungan lahan.',
  },
  {
    q: 'Berapa harga beli bawang tiwai?',
    a: 'Harga beli dijamin di atas pasar, disesuaikan dengan kualitas dan kuantitas panen. Detail akan dibahas saat kunjungan tim kami.',
  },
];

// ─── FAQ Accordion Item ──────────────────────────────────────
function FaqItem({ item }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border-b border-primary/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors pr-4">
          {item.q}
        </span>
        <span
          className={`material-symbols-outlined text-primary/50 text-2xl shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
      >
        <p className="pb-6 text-slate-600 leading-relaxed pr-12">{item.a}</p>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────
export default function FarmerRegistration() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    kelompokTani: '',
    alamatLahan: '',
    luasLahan: '',
    pengalaman: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nama.trim() || formData.nama.trim().length < 3)
      newErrors.nama = 'Nama harus diisi minimal 3 karakter.';
    if (!formData.whatsapp.trim() || !/^08\d{8,13}$/.test(formData.whatsapp.trim()))
      newErrors.whatsapp = 'Masukkan nomor WhatsApp yang valid (08xxx).';
    if (!formData.alamatLahan.trim())
      newErrors.alamatLahan = 'Alamat lahan wajib diisi.';
    if (!formData.luasLahan || parseFloat(formData.luasLahan) < 0.1)
      newErrors.luasLahan = 'Luas lahan minimal 0.1 hektar.';
    if (!formData.pengalaman)
      newErrors.pengalaman = 'Pilih salah satu opsi.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate async submit
    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem('tiwara_farmer_applications') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: `FA-${Date.now()}`,
      });
      localStorage.setItem('tiwara_farmer_applications', JSON.stringify(existing));
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  // ─── SUCCESS STATE ───────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light px-6">
        <div className="max-w-lg w-full text-center py-20">
          <div className="w-24 h-24 mx-auto bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce">
            <span className="material-symbols-outlined text-green-500 text-5xl">check_circle</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-forest mb-4">Pendaftaran Berhasil!</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Tim kami akan menghubungi Anda dalam <strong className="text-primary">3 hari kerja</strong> melalui WhatsApp untuk verifikasi dan menjadwalkan kunjungan lahan.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            <span className="material-symbols-outlined">home</span>
            Kembali ke Beranda
          </a>
        </div>
      </div>
    );
  }

  // ─── MAIN RENDER ─────────────────────────────────────────────
  return (
    <>
      {/* ─── HERO BANNER ───────────────────────────────────────── */}
      <section className="relative bg-forest text-cream overflow-hidden">
        {/* Background overlay */}
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOVhOfF2v2zbKKKZmE3uxN1ecNQ2--j-1bDhXDV3wqxEbOQrvHVextiyN-Y2uQf_5uJ7iroInjgHNVWzRHLVEndGxFQaiGjhSSx1TEzk3IT7sBFObRD7-Udds-MT6fI8Uo3z7QJuIFjzqcyqJpzPcF_Jzpo_5GLnI5qg7kO2TY97FpE4kRxf9ocGW095mYJa9Oz0vr368_GY8wsWoPrveM7C6sftFxVAQr1yLbrNU81wp0SalIhDcO24Vh6T08JM2wppRYMa5y74"
            alt="Plantation background"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest"></div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary text-xs font-black uppercase tracking-widest mb-8">
              <span className="material-symbols-outlined text-sm">eco</span>
              Program Kemitraan Petani
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight mb-6">
              Jadilah Bagian dari<br />
              <span className="text-scientific-teal">Revolusi Herbal</span> Borneo
            </h1>

            <p className="text-cream/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-light">
              Daftarkan lahan Anda dan bersama-sama kita wujudkan pertanian berkelanjutan dengan nilai jual premium. Tanpa biaya, tanpa kontrak mengikat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <p className="text-3xl md:text-4xl font-black text-scientific-teal">150+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-cream/50 mt-1">Petani Aktif</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-scientific-teal">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-cream/50 mt-1">Fair Trade</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-secondary">Gratis</p>
                <p className="text-xs font-bold uppercase tracking-widest text-cream/50 mt-1">Pendaftaran</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ─── BENEFIT CARDS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Kenapa Bergabung?
              <span className="w-8 h-px bg-primary"></span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-forest tracking-tight">
              Keuntungan Menjadi Petani Mitra
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 md:p-10 rounded-[2rem] border border-primary/10 clinical-shadow hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <span className="material-symbols-outlined text-3xl">payments</span>
              </div>
              <h4 className="text-xl font-bold text-forest mb-3">Harga Premium & Stabil</h4>
              <p className="text-slate-600 leading-relaxed">
                Kami menjamin harga beli di atas pasar untuk setiap kilogram bawang tiwai berkualitas. Pendapatan Anda naik, kesejahteraan keluarga terjaga.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 md:p-10 rounded-[2rem] border border-primary/10 clinical-shadow hover:-translate-y-2 transition-all duration-500 md:mt-8">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h4 className="text-xl font-bold text-forest mb-3">Pendampingan Teknis</h4>
              <p className="text-slate-600 leading-relaxed">
                Tim agronomis kami memberikan pelatihan budidaya, pengendalian hama, dan teknik panen terbaik secara langsung di lahan Anda.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 md:p-10 rounded-[2rem] border border-primary/10 clinical-shadow hover:-translate-y-2 transition-all duration-500 md:mt-16">
              <div className="w-16 h-16 rounded-2xl bg-forest/10 flex items-center justify-center text-forest mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h4 className="text-xl font-bold text-forest mb-3">Sertifikasi & Branding</h4>
              <p className="text-slate-600 leading-relaxed">
                Produk Anda akan dilacak dalam sistem traceability TIWARA dan mendapat label kualitas resmi yang diakui konsumen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGISTRATION FORM ─────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-slate-50 relative">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Formulir Pendaftaran
              <span className="w-8 h-px bg-primary"></span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-forest tracking-tight">
              Daftarkan Diri Anda Sekarang
            </h3>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* ── LEFT: Form ── */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 border border-primary/5 clinical-shadow"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Nama Lengkap */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-forest mb-2">
                    Nama Lengkap <span className="text-primary">*</span>
                  </label>
                  <input
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${
                      errors.nama ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    } text-slate-800 placeholder:text-slate-400 outline-none transition-all`}
                  />
                  {errors.nama && <p className="mt-2 text-sm text-red-500 font-medium">{errors.nama}</p>}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">
                    Nomor WhatsApp <span className="text-primary">*</span>
                  </label>
                  <input
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${
                      errors.whatsapp ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    } text-slate-800 placeholder:text-slate-400 outline-none transition-all`}
                  />
                  {errors.whatsapp && <p className="mt-2 text-sm text-red-500 font-medium">{errors.whatsapp}</p>}
                </div>

                {/* Kelompok Tani */}
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">
                    Nama Kelompok Tani <span className="text-slate-400 font-normal">(Opsional)</span>
                  </label>
                  <input
                    name="kelompokTani"
                    value={formData.kelompokTani}
                    onChange={handleChange}
                    type="text"
                    placeholder="Contoh: Kelompok Tani Harapan Jaya"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-slate-800 placeholder:text-slate-400 outline-none transition-all"
                  />
                </div>

                {/* Alamat Lahan */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-forest mb-2">
                    Alamat Lahan <span className="text-primary">*</span>
                  </label>
                  <textarea
                    name="alamatLahan"
                    value={formData.alamatLahan}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Desa, Kecamatan, Kabupaten, Provinsi"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border resize-none ${
                      errors.alamatLahan ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    } text-slate-800 placeholder:text-slate-400 outline-none transition-all`}
                  />
                  {errors.alamatLahan && <p className="mt-2 text-sm text-red-500 font-medium">{errors.alamatLahan}</p>}
                </div>

                {/* Luas Lahan */}
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">
                    Luas Lahan (Hektar) <span className="text-primary">*</span>
                  </label>
                  <input
                    name="luasLahan"
                    value={formData.luasLahan}
                    onChange={handleChange}
                    type="number"
                    step="0.1"
                    min="0.1"
                    placeholder="Contoh: 0.5"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border ${
                      errors.luasLahan ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    } text-slate-800 placeholder:text-slate-400 outline-none transition-all`}
                  />
                  {errors.luasLahan && <p className="mt-2 text-sm text-red-500 font-medium">{errors.luasLahan}</p>}
                </div>

                {/* Pengalaman */}
                <div>
                  <label className="block text-sm font-bold text-forest mb-2">
                    Pengalaman Bertani Bawang <span className="text-primary">*</span>
                  </label>
                  <select
                    name="pengalaman"
                    value={formData.pengalaman}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl bg-slate-50 border appearance-none cursor-pointer ${
                      errors.pengalaman ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20'
                    } text-slate-800 outline-none transition-all`}
                  >
                    <option value="">— Pilih —</option>
                    <option value="belum">Belum Pernah</option>
                    <option value="<1">{'< 1 Tahun'}</option>
                    <option value="1-3">1–3 Tahun</option>
                    <option value=">3">{'> 3 Tahun'}</option>
                  </select>
                  {errors.pengalaman && <p className="mt-2 text-sm text-red-500 font-medium">{errors.pengalaman}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-secondary text-white font-bold text-lg rounded-2xl shadow-lg shadow-secondary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Kirim Pendaftaran
                  </>
                )}
              </button>
            </form>

            {/* ── RIGHT: Info Panel ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Testimonial Card */}
              <div className="bg-white rounded-[2rem] p-8 border border-primary/5 clinical-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    <span className="material-symbols-outlined text-primary text-2xl">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-forest">Bapak Parno</p>
                    <p className="text-xs text-slate-500 font-medium">Petani Mitra sejak 2024</p>
                  </div>
                </div>
                <blockquote className="text-slate-700 italic leading-relaxed border-l-4 border-primary/20 pl-4">
                  "Sejak bergabung dengan TIWARA, penghasilan saya naik 3 kali lipat. Pendampingan dari tim sangat membantu."
                </blockquote>
              </div>

              {/* Checklist Card */}
              <div className="bg-forest rounded-[2rem] p-8 text-cream">
                <h4 className="font-bold text-lg mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">task_alt</span>
                  Yang Anda Dapatkan
                </h4>
                <ul className="space-y-4">
                  {[
                    'Gratis tanpa biaya pendaftaran',
                    'Tanpa kontrak mengikat',
                    'Pendampingan agronomis penuh',
                    'Harga beli dipastikan premium',
                    'Produk Anda masuk sistem traceability',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-secondary text-xl mt-0.5 shrink-0">check_circle</span>
                      <span className="text-cream/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact shortcut */}
              <div className="bg-white rounded-[2rem] p-8 border border-primary/5 clinical-shadow text-center">
                <p className="text-sm text-slate-500 mb-3">Butuh bantuan mengisi form?</p>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20TIWARA,%20saya%20ingin%20mendaftar%20sebagai%20petani%20mitra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              FAQ
              <span className="w-8 h-px bg-primary"></span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-forest tracking-tight">
              Pertanyaan Umum
            </h3>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-primary/5 clinical-shadow">
            {faqItems.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────────── */}
      <footer className="bg-forest text-cream pt-16 pb-10 px-6 border-t-[6px] border-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-xl text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">TIWARA</span>
          </a>
          <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} TIWARA Pharmaceutical. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
