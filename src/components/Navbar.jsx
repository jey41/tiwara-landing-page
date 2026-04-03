import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
          </div>
          <h2 className="text-primary text-2xl font-black tracking-tighter uppercase">TIWARA</h2>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-primary :text-primary transition-colors" href="/">Home</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-primary :text-primary transition-colors" href="/products">Produk</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-primary :text-primary transition-colors" href="/traceability">Traceability</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 hover:text-primary transition-colors" href="/daftar-petani">
            Daftar Petani
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/50 text-slate-700 hover:bg-primary/20 hover:text-primary transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
