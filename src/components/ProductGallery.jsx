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
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        {/* Futuristic tech streams in the background */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
          <svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300 Q 200 100, 400 300 T 800 300" stroke="currentColor" className="text-forest" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <path d="M0 350 Q 200 500, 400 350 T 800 350" stroke="currentColor" className="text-primary" strokeWidth="1" strokeDasharray="2 4" fill="none" />
            <circle cx="200" cy="200" r="4" fill="currentColor" className="text-forest" />
            <circle cx="600" cy="400" r="6" fill="currentColor" className="text-primary" />
            <circle cx="500" cy="200" r="60" stroke="currentColor" className="text-forest" strokeWidth="1" strokeDasharray="4 4" fill="none" />
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-forest"></span>
                <span className="text-forest text-sm font-bold tracking-[0.15em] uppercase">
                  Puncak Inovasi Herbal Borneo
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-[4.5rem] font-sans font-bold text-slate-900 leading-[1.05] tracking-tight mb-6">
                Sang Kesatria<br />Bawang dari<br />Jantung Borneo
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                Inovasi fungsional dari bumbu tradisional Borneo, dirancang secara presisi oleh sains untuk kesehatan yang dioptimalkan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#produk" className="inline-flex items-center justify-center px-9 py-4 rounded-[1rem] bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
                  Jelajahi Produk
                </a>
                <a href="/traceability" className="inline-flex items-center justify-center px-9 py-4 rounded-[1rem] border-2 border-primary text-primary font-bold text-lg hover:bg-primary/5 transition-colors">
                  Cek Bukti Ilmiah
                </a>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="relative flex flex-col items-center">
              {/* Decorative elements */}
              <div className="absolute top-[20%] -left-8 flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 z-10 hidden sm:flex">
                 <span className="material-symbols-outlined text-forest text-2xl">link</span>
              </div>
              <div className="absolute bottom-[25%] -right-12 w-28 opacity-40 pointer-events-none z-10 hidden sm:block">
                 <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="text-forest" strokeWidth="1">
                   <path d="M30,80 Q20,60 30,40 Q50,20 70,30 Q90,50 80,70 Q60,90 30,80 Z" strokeLinejoin="round"/>
                   <circle cx="65" cy="55" r="4" fill="currentColor"/>
                 </svg>
              </div>

              {/* Main Product Image */}
              <div className="relative w-full max-w-[400px] mx-auto flex justify-center items-end py-16">
                {/* Glowing pedestal effect */}
                <div className="absolute bottom-12 w-3/4 h-8 bg-slate-200/60 blur-xl rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.15)]"></div>
                {/* 3D Pouch Presentation */}
                <img 
                  src={galleryItems[0].src} 
                  alt="Tiwara Premium Pouch" 
                  className="relative z-10 w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Testimonial Integration */}
              <div className="mt-2 text-center max-w-sm mx-auto relative z-20">
                <p className="text-slate-500 italic mb-4 font-medium">"Kualitas farmasi dengan jiwa kearifan lokal Kalimantan Timur."</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <div className="flex gap-1 opacity-40">
                     <span className="material-symbols-outlined text-slate-800 text-lg">star</span>
                     <span className="material-symbols-outlined text-slate-800 text-lg">star</span>
                     <span className="material-symbols-outlined text-slate-800 text-lg">star</span>
                     <span className="material-symbols-outlined text-slate-800 text-lg">star</span>
                     <span className="material-symbols-outlined text-slate-800 text-lg">star_outline</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold tracking-widest text-slate-800 uppercase px-3 sm:border-l border-slate-200">
                      Testimonial Pengguna
                    </span>
                    <span className="px-2 py-1 bg-forest/10 text-forest text-[10px] font-black tracking-widest rounded-md uppercase whitespace-nowrap">
                      Certified Pure
                    </span>
                  </div>
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
