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
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative items-center">
            <div className="absolute left-3 text-slate-400 pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="w-40 md:w-48 lg:w-64 h-10 rounded-full bg-slate-200/50 border-none focus:ring-2 focus:ring-primary/50 focus:outline-none pl-10 pr-4 text-sm font-normal text-slate-900 transition-all shadow-inner" 
              placeholder="Cari..." 
            />
          </div>
          
          <button className="flex items-center justify-center rounded-full w-10 h-10 bg-slate-200/50 text-slate-700 hover:bg-primary/20 hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-background-light"></span>
          </button>
          
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center overflow-hidden shrink-0 hover:bg-primary/20 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary/80">person</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
