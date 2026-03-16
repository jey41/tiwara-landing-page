import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 px-6 bg-mesh">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-cream/10 text-forest dark:text-cream text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-sm transition-transform hover:scale-105 cursor-default">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Puncak Inovasi Herbal Borneo
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-forest dark:text-cream tracking-tight">
              Sang Kesatria Bawang dari <span className="text-primary inline-block drop-shadow-sm">Jantung Borneo</span>
            </h1>
            <p className="text-lg md:text-xl text-forest/80 dark:text-cream/80 max-w-xl leading-relaxed font-medium">
              Bukan sekadar bumbu dapur. Kekuatan alami Borneo yang diproses dengan presisi ilmiah untuk kesehatan optimal Anda.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/products" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:-translate-y-1 transition-all shadow-lg shadow-primary/40 active:scale-95 flex items-center gap-2 group">
                Jelajahi Produk
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a href="/traceability" className="px-8 py-4 border-2 border-forest/80 dark:border-cream/80 text-forest dark:text-cream rounded-xl font-bold hover:bg-forest hover:text-white dark:hover:bg-cream dark:hover:text-forest transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95">
                Cek Bukti Ilmiah
              </a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2 group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
            
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 ease-out bg-forest border-4 border-cream dark:border-forest/50">
              <img 
                alt="Premium red garlic supplement bottle in lush forest" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000 ease-out" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA95ErVfZFD2Wh2xrTgx10TCA8bbkPdnxgir44R_d_gBQRu9DwKy9lx9nfgy3Pbaws_1av1fQBFaaOlIm_HRQzLMoIv2EayTjdZUe3OKu_eTwQ44VOuNqax63Jwx92WHj9SpQO4mLDlCSG5qkfX7C0LpEYYQTO7R3M8BLaBZiNaonxeAC46bJyOmWG34DvU6Hs17f6RhmkQfWDmdCLD0rx-corKq_jrWrkupLpda0G9xLG0TPzUvjdytA3B3CYJVQWNsI4wsByGjhg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-6 bg-cream/95 dark:bg-background-dark/95 backdrop-blur-md border border-forest/10 dark:border-cream/10 rounded-2xl shadow-xl max-w-xs transition-transform duration-500 hover:-translate-y-2 group-hover:scale-105 z-20">
              <p className="text-sm italic text-forest border-l-2 border-primary pl-3 font-medium dark:text-cream/90">"Kualitas farmasi dengan jiwa kearifan lokal Kalimantan Timur."</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400 drop-shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">star</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                    <span className="material-symbols-outlined text-[16px]">star</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter text-forest/70 dark:text-cream/70 mt-0.5">5.0</span>
                </div>
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-[10px] font-black uppercase tracking-widest">Certified Pure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The M1 Method */}
      <section className="py-24 px-6 bg-forest text-cream overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 max-w-2xl text-center md:text-left">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-block bg-primary/10 px-4 py-1.5 rounded-full">Metodologi Eksklusif</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">The M1 Method: Presisi Ilmiah</h3>
            <p className="text-cream/80 text-lg leading-relaxed md:text-xl font-light">
              Kami mendefinisikan ulang ekstraksi herbal melalui Maserasi I—proses yang memastikan setiap tetes mengandung potensi maksimal tanaman tanpa merusak strukturnya.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 md:p-10 rounded-[2rem] bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner">
                <span className="material-symbols-outlined text-3xl">ac_unit</span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">Label: Cold-processed</span>
              <h4 className="text-2xl font-bold mb-4">Maserasi I</h4>
              <p className="text-cream/70 text-base leading-relaxed">
                Metode ekstraksi dingin selama 48 jam untuk menjaga integritas senyawa aktif Alisin yang rentan terhadap panas.
              </p>
            </div>
            
            <div className="group p-8 md:p-10 rounded-[2rem] bg-cream/5 border border-cream/10 hover:bg-cream/10 hover:border-cream/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden mt-0 md:mt-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner">
                <span className="material-symbols-outlined text-3xl">science</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Molecular Integrity</h4>
              <p className="text-cream/70 text-base leading-relaxed">
                Mempertahankan rantai molekul asli tanaman agar tubuh dapat menyerap nutrisi secara instan dan efisien.
              </p>
            </div>
            
            <div className="group p-8 md:p-10 rounded-[2rem] bg-primary text-white border border-primary hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden mt-0 md:mt-24">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[120px] leading-none">verified</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-inner relative z-10">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">98% Purity</h4>
              <p className="text-white/90 text-base leading-relaxed relative z-10">
                Hasil akhir dengan konsentrasi murni tanpa bahan pengisi, pewarna buatan, atau pengawet kimiawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-32 px-6 relative bg-background-light dark:bg-background-dark border-b border-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-mesh rounded-full opacity-60 dark:opacity-20 blur-3xl -z-10 pointer-events-none"></div>
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-700 ease-in-out group">
                <img alt="Indonesian farmer harvesting red garlic bulbs" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8kbXu3TLekq7K2V5qsxV9xF0GN3prPSI7NXddYe0Q3seGeoHfrdus6cez1WIXLO3BqvFGka76P7BYFlCpmhEjU9sZoCP3tq208qer2U6k6ixcAYmLrrR_3AA4Nx5ZvJvjQ8nNGyDtPiFr5RNMLNAWpzrL0b7QUOgHBTxAAFnrL1nYfulCG9hNtVL0tzFFGYde4a3Jqd1waOEsHvuSmFGreDoE6VhUcyeUn3rvco82Xi92TkuqGNCj3N3EF-nc9I7WWnGzvFJdOJ0" />
              </div>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mt-16 hover:-translate-y-2 transition-transform duration-700 ease-in-out group border-4 border-background-light dark:border-background-dark">
                <img alt="Lush agricultural landscape of East Kalimantan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb2dExx8Dyis3gEgLgBvX8Yta-qLnG5xqX609iOHD9l5n6zfwnSqG8wkkKeTER8aibwRMvQM-QfTVBbobg93FhH2dzmyVoRKAiIuHxQQJme9km_lcIynBvrLWhh2e-c9MBfQCiAaxg-mSsgMPyZPERRzqPC-QA-cQv1SVpFSZG4MfOeYuFcGLZpxVbrcDclaONuKG98LYgDxJFNBxXAQfggHG0Z2DEuWDkFl9mFj1p8l86EeSYRw5ZVLMJVeN1w2TzRv_vJ7sDlBM" />
              </div>
            </div>
            {/* Trust badge floating */}
            <div className="absolute top-1/4 -right-10 bg-white dark:bg-forest shadow-2xl rounded-2xl p-4 flex items-center gap-4 z-20 border border-slate-100 dark:border-forest/50 hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-cream/60 uppercase">100% Organik</p>
                <p className="font-bold text-slate-900 dark:text-cream">Sertifikasi Alam</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-10 order-1 lg:order-2">
            <div>
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 inline-flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Dampak Sosial
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-forest dark:text-cream leading-[1.15] tracking-tight">
                Memberdayakan Akar, Menjaga Warisan Borneo
              </h3>
            </div>
            
            <p className="text-forest/75 dark:text-cream/75 text-lg md:text-xl leading-relaxed font-medium">
              Setiap produk TIWARA adalah bentuk kemitraan langsung dengan lebih dari 150 keluarga petani di Kalimantan Timur. Kami memastikan harga yang adil dan praktik pertanian regeneratif untuk menjaga ekosistem hutan hujan kita.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-8 border-y border-slate-200 dark:border-forest/20">
              <div className="group">
                <p className="text-4xl font-black text-primary group-hover:scale-110 origin-left transition-transform">150+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-forest/60 dark:text-cream/60 mt-2">Petani Mitra</p>
              </div>
              <div className="group">
                <p className="text-4xl font-black text-primary group-hover:scale-110 origin-left transition-transform">50 Ha</p>
                <p className="text-xs font-bold uppercase tracking-widest text-forest/60 dark:text-cream/60 mt-2">Lahan Organik</p>
              </div>
              <div className="group col-span-2 lg:col-span-1">
                <p className="text-4xl font-black text-primary group-hover:scale-110 origin-left transition-transform">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-forest/60 dark:text-cream/60 mt-2">Fair Trade</p>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-4 bg-slate-50 dark:bg-forest/20 px-6 py-4 rounded-2xl border border-slate-100 dark:border-forest/30">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 dark:text-cream/50 uppercase tracking-wider mb-1">Berbasis di</p>
                  <span className="text-lg font-bold text-slate-900 dark:text-cream tracking-tight">East Kalimantan, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest text-cream pt-24 pb-12 px-6 border-t-[8px] border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
            <div className="col-span-2 md:col-span-4 space-y-6">
              <a href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl text-white shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-3xl">shield_with_heart</span>
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase">TIWARA</span>
              </a>
              <p className="text-base text-cream/60 leading-relaxed max-w-sm">
                Memadukan kekuatan alam Borneo dengan sains modern untuk hidup yang lebih bermakna dan kesehatan optimal.
              </p>
            </div>
            
            <div className="col-span-1 md:col-span-2 md:col-start-6">
              <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-cream/40">Navigasi</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="/products">Koleksi Produk</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Metode M1</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="/traceability">Riset Ilmiah</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Kisah Petani</a></li>
              </ul>
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-cream/40">Dukungan</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Hubungi Kami</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Pengiriman</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">FAQ</a></li>
                <li><a className="text-cream/80 hover:text-white hover:translate-x-1 inline-block transition-all" href="#">Kebijakan Privasi</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-4">
              <h5 className="font-black uppercase tracking-widest text-xs mb-6 text-cream/40">Bergabung dengan Newsletter</h5>
              <p className="text-sm text-cream/60 mb-4">Dapatkan update terbaru tentang riset dan promosi eksklusif.</p>
              <div className="flex gap-2 p-1 bg-cream/10 rounded-xl focus-within:ring-2 focus-within:ring-primary transition-all">
                <input 
                  className="bg-transparent border-0 rounded-lg text-sm w-full focus:ring-0 text-cream placeholder-cream/40 px-4" 
                  placeholder="Alamat Email Anda" 
                  type="email" 
                />
                <button className="bg-primary hover:bg-primary/90 text-white px-5 rounded-lg flex items-center justify-center font-bold tracking-widest text-xs uppercase transition-colors shadow-sm">
                  Daftar
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-cream/40 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} TIWARA Pharmaceutical. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                Instagram
              </a>
              <a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-[18px]">tag</span>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
