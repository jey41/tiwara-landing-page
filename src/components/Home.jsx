import React from 'react';
import KhmInfographic from './KhmInfographic';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
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
              
              <h1 className="text-5xl lg:text-[4.5rem] font-sans font-bold text-slate-900 leading-[1.05] tracking-tight mb-6 mt-0">
                Sang Kesatria<br />Bawang dari<br />Jantung Borneo
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-normal">
                Inovasi fungsional dari bumbu tradisional Borneo, dirancang secara presisi oleh sains untuk kesehatan yang dioptimalkan.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/products" className="inline-flex items-center justify-center px-9 py-4 rounded-[1rem] bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiUuDFGJTr81lAKklAzRp1gVcmCpcSgV5ltnm8QJkm9JVIVehTAIuGzIdrPQlvbscK9J8i2vfLnVolQe7osoK4nI9Bhyezymo42J3GMPGMFA7XBt1omPfXscYXIudUxYg5CgSIT5L7EOcJDtkxeEQwXxmy7VyYYV7rozvvwV_nuEo4ioMMJLWra05IYW_jEvj9sE8o4gJ8oO8pu13YApa-Wz9WwIZpocfZZoZMgLc8g0W8HvtIWz94m6ctuNB4lrO-2Oz0OmBpd6k" 
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

      {/* KHM MRSA Infographic — Bukti Ilmiah */}
      <KhmInfographic />

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
