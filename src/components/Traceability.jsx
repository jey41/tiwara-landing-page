import React, { useState } from 'react';
import batchRecords from '../data/batchRecords.json';
import BatchResult from './BatchResult.jsx';

export default function Traceability() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedBatch, setSearchedBatch] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e) => {
    if (e?.preventDefault) e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const found = batchRecords.find(b => b.batch_number.toLowerCase() === searchQuery.trim().toLowerCase());
    setSearchedBatch(found || null);
    setHasSearched(true);
  };

  return (
    <>
      <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">


        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto w-full px-6 pt-20 pb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Live Tracking System
            </div>
            <h1 className="text-primary text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Kejujuran dalam <br /><span className="text-secondary italic">Setiap Butir</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Transparansi penuh dari perkebunan hingga ke tangan Anda. Temukan asal-usul produk kami melalui sistem pelacakan digital yang presisi dan tervalidasi.
            </p>

            {/* Prominent Search Bar */}
            <div className="mt-12 max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="group relative flex items-center clinical-shadow rounded-2xl overflow-hidden bg-white border-2 border-primary/5 focus-within:border-secondary/50 transition-all duration-300">
                <div className="pl-6 text-primary/40 group-focus-within:text-secondary transition-colors">
                  <span className="material-symbols-outlined text-3xl">search</span>
                </div>
                <input 
                  name="id" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-6 px-4 bg-transparent border-none focus:outline-none focus:ring-0 text-xl font-medium placeholder:text-slate-300 text-slate-600" 
                  placeholder="Contoh: TW-B-260301-A" 
                  type="text" 
                />
                <div className="pr-3">
                  <button type="submit" className="bg-secondary hover:bg-secondary/90 text-white p-4 rounded-xl transition-all shadow-lg shadow-secondary/20">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </form>
              
              {hasSearched && !searchedBatch && (
                <div className="mt-6 text-red-500 font-bold p-4 bg-red-50 rounded-xl border border-red-100">
                  Batch number not found.
                </div>
              )}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <span className="text-sm text-slate-400">Pencarian Terpopuler:</span>
                <button type="button" onClick={() => { setSearchQuery('TW-B-260301-A'); handleSearch({preventDefault:()=>{}}); }} className="text-sm font-medium text-primary hover:underline underline-offset-4">TW-B-260301-A</button>
                <button type="button" onClick={() => { setSearchQuery('TW-B-260315-B'); handleSearch({preventDefault:()=>{}}); }} className="text-sm font-medium text-primary hover:underline underline-offset-4">TW-B-260315-B</button>
              </div>
            </div>
          </section>

          {searchedBatch ? (
            <div className="w-full pb-20">
              <BatchResult record={searchedBatch} />
            </div>
          ) : (
            <>
          {/* Status & Features */}
          <section className="max-w-7xl mx-auto w-full px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-primary/5 clinical-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Tervalidasi Digital</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Setiap kode produk terenkripsi dalam jaringan blockchain untuk menjamin keaslian data tanpa manipulasi.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/5 clinical-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Geolokasi Presisi</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Lihat koordinat tepat di mana produk Anda diproses, lengkap dengan profil petani lokal kami.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-primary/5 clinical-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Jejak Karbon</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Laporan dampak lingkungan real-time dari setiap siklus produksi yang kami lakukan secara berkelanjutan.</p>
            </div>
          </section>

          {/* Visual Divider */}
          <div className="w-full px-6 py-20 flex justify-center items-center">
            <div className="h-[1px] bg-primary/10 w-full max-w-4xl relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-light px-8">
                <span className="material-symbols-outlined text-primary/20 text-4xl">inventory_2</span>
              </div>
            </div>
          </div>

          {/* Map Placeholder / Traceability Flow */}
          <section className="max-w-7xl mx-auto w-full px-6 pb-24">
            <div className="rounded-3xl overflow-hidden relative group aspect-[21/9] bg-slate-200">
              <img alt="Aerial view of a sustainable green plantation" className="w-full h-full object-cover opacity-60 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOVhOfF2v2zbKKKZmE3uxN1ecNQ2--j-1bDhXDV3wqxEbOQrvHVextiyN-Y2uQf_5uJ7iroInjgHNVWzRHLVEndGxFQaiGjhSSx1TEzk3IT7sBFObRD7-Udds-MT6fI8Uo3z7QJuIFjzqcyqJpzPcF_Jzpo_5GLnI5qg7kO2TY97FpE4kRxf9ocGW095mYJa9Oz0vr368_GY8wsWoPrveM7C6sftFxVAQr1yLbrNU81wp0SalIhDcO24Vh6T08JM2wppRYMa5y74" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-12">
                <h2 className="text-white text-3xl font-bold mb-4">Alur Transparansi Produk</h2>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs">01</span>
                    <span className="font-medium">Pembibitan</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs">02</span>
                    <span className="font-medium">Panen Etis</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40">
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-xs">03</span>
                    <span className="font-medium">Laboratorium</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </>
          )}
        </main>

        <footer className="bg-primary py-16 text-white/60">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 text-white mb-6">
                <span className="material-symbols-outlined text-2xl">qr_code_2</span>
                <h2 className="text-xl font-bold tracking-tight uppercase">TIWARA</h2>
              </div>
              <p className="text-sm leading-relaxed">
                Membangun kepercayaan melalui data yang jujur dan transparansi tanpa batas bagi seluruh ekosistem pangan Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Navigasi</h4>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-secondary" href="#">Pusat Bantuan</a></li>
                <li><a className="hover:text-secondary" href="#">Metodologi Kami</a></li>
                <li><a className="hover:text-secondary" href="#">Kemitraan Petani</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Legalitas</h4>
              <ul className="space-y-4 text-sm">
                <li><a className="hover:text-secondary" href="#">Syarat &amp; Ketentuan</a></li>
                <li><a className="hover:text-secondary" href="#">Kebijakan Privasi</a></li>
                <li><a className="hover:text-secondary" href="#">Standar Audit</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Kontak</h4>
              <p className="text-sm mb-4">hello@tiwara.id</p>
              <div className="flex gap-4">
                <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </a>
                <a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors" href="#">
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs tracking-widest uppercase">
            © 2024 Tiwara Traceability Systems. Digital Clinical Quality.
          </div>
        </footer>
      </div>
    </>
  );
}
