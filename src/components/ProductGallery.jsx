import React, { useState } from 'react';

const galleryItems = [
  {
    id: 'hero',
    label: 'Produk Utama',
    title: 'Kemasan Premium',
    description: 'Tampilan utama Bubuk Bawang Tiwai dengan kemasan bersih dan fokus produk yang tegas.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiUuDFGJTr81lAKklAzRp1gVcmCpcSgV5ltnm8QJkm9JVIVehTAIuGzIdrPQlvbscK9J8i2vfLnVolQe7osoK4nI9Bhyezymo42J3GMPGMFA7XBt1omPfXscYXIudUxYg5CgSIT5L7EOcJDtkxeEQwXxmy7VyYYV7rozvvwV_nuEo4ioMMJLWra05IYW_jEvj9sE8o4gJ8oO8pu13YApa-Wz9WwIZpocfZZoZMgLc8g0W8HvtIWz94m6ctuNB4lrO-2Oz0OmBpd6k',
    alt: 'Kemasan Bubuk Bawang Tiwai',
  },
  {
    id: 'texture',
    label: 'Bahan Baku',
    title: 'Asal dari Kalimantan Timur',
    description: 'Bahan baku dipilih dari kawasan budidaya mitra untuk menjaga rasa, aroma, dan konsistensi kualitas.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb2dExx8Dyis3gEgLgBvX8Yta-qLnG5xqX609iOHD9l5n6zfwnSqG8wkkKeTER8aibwRMvQM-QfTVBbobg93FhH2dzmyVoRKAiIuHxQQJme9km_lcIynBvrLWhh2e-c9MBfQCiAaxg-mSsgMPyZPERRzqPC-QA-cQv1SVpFSZG4MfOeYuFcGLZpxVbrcDclaONuKG98LYgDxJFNBxXAQfggHG0Z2DEuWDkFl9mFj1p8l86EeSYRw5ZVLMJVeN1w2TzRv_vJ7sDlBM',
    alt: 'Lanskap lahan mitra TIWARA di Kalimantan Timur',
  },
  {
    id: 'farmer',
    label: 'Mitra Petani',
    title: 'Dikurasi bersama petani lokal',
    description: 'Kemitraan langsung membantu menjaga rantai pasok tetap pendek, lebih transparan, dan lebih terukur.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8kbXu3TLekq7K2V5qsxV9xF0GN3prPSI7NXddYe0Q3seGeoHfrdus6cez1WIXLO3BqvFGka76P7BYFlCpmhEjU9sZoCP3tq208qer2U6k6ixcAYmLrrR_3AA4Nx5ZvJvjQ8nNGyDtPiFr5RNMLNAWpzrL0b7QUOgHBTxAAFnrL1nYfulCG9hNtVL0tzFFGYde4a3Jqd1waOEsHvuSmFGreDoE6VhUcyeUn3rvco82Xi92TkuqGNCj3N3EF-nc9I7WWnGzvFJdOJ0',
    alt: 'Petani mitra TIWARA saat panen',
  },
  {
    id: 'usage',
    label: 'Penggunaan',
    title: 'Mudah masuk ke rutinitas harian',
    description: 'Dirancang untuk pengguna yang mencari format praktis dan mudah dipadukan ke konsumsi sehari-hari.',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA95ErVfZFD2Wh2xrTgx10TCA8bbkPdnxgir44R_d_gBQRu9DwKy9lx9nfgy3Pbaws_1av1fQBFaaOlIm_HRQzLMoIv2EayTjdZUe3OKu_eTwQ44VOuNqax63Jwx92WHj9SpQO4mLDlCSG5qkfX7C0LpEYYQTO7R3M8BLaBZiNaonxeAC46bJyOmWG34DvU6Hs17f6RhmkQfWDmdCLD0rx-corKq_jrWrkupLpda0G9xLG0TPzUvjdytA3B3CYJVQWNsI4wsByGjhg',
    alt: 'Produk TIWARA dalam konteks gaya hidup premium',
  },
];

const productFacts = [
  'Format bubuk yang ringkas untuk penggunaan harian.',
  'Diracik dari bahan baku bawang tiwai pilihan.',
  'Mudah dipadukan ke minuman hangat atau olahan resep.',
  'Cocok untuk pengguna yang mengutamakan kepraktisan premium.',
];

const quickSpecs = [
  { label: 'Isi Bersih', value: '100 g' },
  { label: 'Format', value: 'Bubuk Halus' },
  { label: 'Asal', value: 'Kalimantan Timur' },
  { label: 'Karakter', value: 'Aromatik dan mudah dicampur' },
];

const benefitCards = [
  {
    icon: 'local_cafe',
    title: 'Praktis untuk rutinitas harian',
    text: 'Format bubuk memudahkan produk ini masuk ke ritual konsumsi harian tanpa banyak persiapan.',
  },
  {
    icon: 'compost',
    title: 'Terasa natural dan bersih',
    text: 'Komunikasi produk menekankan kesan alami, premium, dan dapat dipercaya sejak pertama dilihat.',
  },
  {
    icon: 'workspace_premium',
    title: 'Dikemas untuk tampil unggul',
    text: 'Setiap elemen halaman mendukung positioning Bubuk Bawang Tiwai sebagai produk utama, bukan bagian dari katalog.',
  },
];

const trustPoints = [
  {
    icon: 'verified',
    title: 'Kualitas yang terkurasi',
    text: 'Pemilihan bahan dan presentasi produk dirancang untuk menegaskan rasa percaya sejak awal.',
  },
  {
    icon: 'psychiatry',
    title: 'Narasi ilmiah yang ringan',
    text: 'Penjelasan manfaat disampaikan dengan jelas tanpa terasa terlalu teknis atau membingungkan.',
  },
  {
    icon: 'diversity_3',
    title: 'Dekat dengan asal-usulnya',
    text: 'Cerita produk tetap terhubung dengan petani mitra dan identitas Kalimantan Timur.',
  },
];

const usageIdeas = [
  'Campurkan ke minuman hangat untuk ritual pagi yang lebih praktis.',
  'Gunakan sebagai pelengkap racikan resep rumahan harian.',
  'Simpan sebagai stok herbal premium yang mudah dijangkau kapan saja.',
];

export default function ProductGallery() {
  const [activeImageId, setActiveImageId] = useState(galleryItems[0].id);

  const activeImage = galleryItems.find((item) => item.id === activeImageId) || galleryItems[0];

  return (
    <main className="overflow-hidden bg-background-light text-slate-900">
      <section className="relative isolate border-b border-primary/10 bg-mesh">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/15 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-14 lg:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-primary/10 bg-white/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-primary to-secondary p-6 text-white md:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.26),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.18),_transparent_34%)]"></div>
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/14 px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] backdrop-blur-sm">
                      <span className="material-symbols-outlined text-base">workspace_premium</span>
                      Bubuk Unggulan
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">
                      Fokus Tunggal
                    </div>
                  </div>

                  <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/8 shadow-2xl shadow-black/15">
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/70 to-transparent"></div>
                    <img
                      alt={activeImage.alt}
                      className="aspect-[4/4.8] w-full object-cover object-center"
                      src={activeImage.src}
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-3 px-5 py-5 text-xs font-semibold text-white/90 md:px-6">
                      <span className="rounded-full bg-white/14 px-3 py-1 backdrop-blur-sm">Bubuk Premium</span>
                      <span className="rounded-full bg-white/14 px-3 py-1 backdrop-blur-sm">Asal Kalimantan Timur</span>
                      <span className="rounded-full bg-white/14 px-3 py-1 backdrop-blur-sm">Siap untuk rutinitas harian</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {galleryItems.map((item) => {
                  const isActive = item.id === activeImage.id;

                  return (
                    <button
                      key={item.id}
                      className={`group overflow-hidden rounded-[1.4rem] border text-left transition-all ${
                        isActive
                          ? 'border-primary bg-white shadow-lg shadow-primary/10'
                          : 'border-primary/10 bg-white/70 hover:border-primary/30 hover:bg-white'
                      }`}
                      onClick={() => setActiveImageId(item.id)}
                      type="button"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          alt={item.alt}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={item.src}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent"></div>
                        <div className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-primary">
                          {item.label}
                        </div>
                      </div>
                      <div className="space-y-1 px-4 py-4">
                        <p className="text-sm font-bold text-slate-900">{item.title}</p>
                        <p className="text-xs leading-relaxed text-slate-500">{item.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-primary shadow-sm">
                <span className="material-symbols-outlined text-base">grain</span>
                Fokus pada satu produk utama
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-forest md:text-6xl">
                Bubuk Bawang Tiwai untuk rutinitas harian yang lebih ringkas dan terasa premium.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Halaman ini sepenuhnya menyorot satu produk agar pengguna langsung memahami bentuk produk, manfaat utamanya, dan langkah pembelian tanpa terdistraksi elemen katalog.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-primary/10 bg-white/85 p-6 shadow-xl shadow-primary/5 backdrop-blur-sm">
                <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Harga Produk</p>
                    <p className="mt-3 text-4xl font-black tracking-tight text-primary">Rp 85.000</p>
                    <p className="mt-2 text-sm text-slate-500">Bubuk murni siap saji untuk kebutuhan konsumsi dan penggunaan sehari-hari.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 sm:max-w-[220px]">
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Netto</p>
                      <p className="mt-1 font-semibold text-slate-900">100 g</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-400">Format</p>
                      <p className="mt-1 font-semibold text-slate-900">Bubuk</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {productFacts.map((fact) => (
                    <div key={fact} className="flex items-start gap-3 rounded-2xl bg-primary/5 px-4 py-4">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-[18px]">done</span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-700">{fact}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-secondary px-7 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-secondary/25 transition-all hover:-translate-y-1 hover:brightness-105"
                    href="#"
                  >
                    <span className="material-symbols-outlined">shopping_bag</span>
                    Beli di Shopee
                  </a>
                  <a
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-primary/15 bg-white px-7 text-sm font-black uppercase tracking-[0.2em] text-primary transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                    href="#"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Konsultasi via WhatsApp
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">Produk utama tunggal</span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">Visual fokus</span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2">CTA langsung</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-lg shadow-primary/5 md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Ringkasan Produk</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-forest md:text-4xl">
              Satu halaman, satu cerita, satu fokus pembelian.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Bubuk Bawang Tiwai dipresentasikan sebagai produk inti dengan pendekatan yang lebih editorial: visual besar, spesifikasi singkat, manfaat yang mudah dipindai, dan alur aksi yang langsung.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {quickSpecs.map((item) => (
                <div key={item.label} className="rounded-2xl bg-primary/5 px-5 py-5">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-forest p-8 text-cream shadow-2xl shadow-forest/10 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/30 text-primary">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight">Kenapa format bubuk lebih menonjol</h3>
              <p className="mt-4 text-base leading-relaxed text-cream/75">
                Bentuk bubuk terasa fleksibel dan mudah masuk ke kebiasaan konsumsi harian. Halaman ini memanfaatkan kelebihan itu dengan struktur yang cepat dipahami sejak first glance.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-lg shadow-primary/5 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined text-3xl">nutrition</span>
              </div>
              <h3 className="mt-6 text-2xl font-black tracking-tight text-forest">Arah komunikasi produk</h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Pesan utama dibuat singkat dan tegas: praktis digunakan, terasa premium, dan tetap membawa identitas TIWARA yang kuat dan terpercaya.
              </p>
            </div>

            <div className="rounded-[2rem] border border-primary/10 bg-white p-8 shadow-lg shadow-primary/5 md:col-span-2 md:p-10">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Cara menggunakan</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {usageIdeas.map((idea, index) => (
                  <div key={idea} className="rounded-2xl bg-slate-50 px-5 py-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-white shadow-lg shadow-primary/20">
                      0{index + 1}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{idea}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest px-6 py-20 text-cream md:py-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary">
              <span className="material-symbols-outlined text-base">diamond</span>
              Manfaat Utama
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Dibangun untuk terasa fokus, rapi, dan meyakinkan.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-cream/75">
              Seluruh komponen halaman diarahkan untuk memperjelas nilai produk tanpa beban visual dari katalog multi-item.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <div key={card.title} className="group rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/25 text-primary shadow-inner">
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3 className="mt-6 text-2xl font-black tracking-tight">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-cream/75">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary">
              <span className="material-symbols-outlined text-base">shield</span>
              Jaminan dan Kepercayaan
            </p>
            <h2 className="text-4xl font-black tracking-tight text-forest md:text-5xl">
              Bukan sekadar tampilan tunggal, tetapi fokus yang terasa lebih terpercaya.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Dengan menghapus grid multi-produk, seluruh perhatian pengguna diarahkan ke satu keputusan. Ini membuat narasi kualitas, asal-usul, dan manfaat terasa lebih jelas dan lebih kuat.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-primary/10 bg-white px-6 py-6 shadow-lg shadow-primary/5">
                <p className="text-3xl font-black text-primary">150+</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.26em] text-slate-500">Keluarga Mitra</p>
              </div>
              <div className="rounded-[1.75rem] border border-primary/10 bg-white px-6 py-6 shadow-lg shadow-primary/5">
                <p className="text-3xl font-black text-primary">1</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.26em] text-slate-500">Produk Fokus</p>
              </div>
              <div className="rounded-[1.75rem] border border-primary/10 bg-white px-6 py-6 shadow-lg shadow-primary/5">
                <p className="text-3xl font-black text-primary">100 g</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.26em] text-slate-500">Netto Produk</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => (
              <div key={point.title} className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-lg shadow-primary/5 md:min-h-[260px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">{point.icon}</span>
                </div>
                <h3 className="mt-5 text-xl font-black tracking-tight text-forest">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary via-forest to-primary px-8 py-10 text-white shadow-2xl shadow-primary/20 md:px-12 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/70">Aksi Penutup</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
                Jika yang dibutuhkan adalah satu produk utama yang jelas, Bubuk Bawang Tiwai sudah berada di depan pengguna.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Arahkan pengguna langsung ke pembelian atau konsultasi tanpa perlu melewati lapisan navigasi tambahan yang membuat keputusan terasa lebih lambat.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-secondary px-8 text-sm font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-secondary/30 transition-all hover:-translate-y-1 hover:brightness-105"
                href="#"
              >
                <span className="material-symbols-outlined">shopping_bag</span>
                Beli di Shopee
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 text-sm font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/20"
                href="#"
              >
                <span className="material-symbols-outlined">chat</span>
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/10 bg-white px-6 py-12 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3 text-primary">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
              </div>
              <span className="text-2xl font-black uppercase tracking-tight text-forest">TIWARA</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Presentasi satu produk untuk Bubuk Bawang Tiwai, dirancang agar halaman terasa fokus, premium, dan mudah ditindaklanjuti.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-black uppercase tracking-[0.22em] text-slate-400">
            <a className="transition-colors hover:text-primary" href="/products">Produk</a>
            <a className="transition-colors hover:text-primary" href="/traceability">Traceability</a>
            <a className="transition-colors hover:text-primary" href="/">Home</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
