const fs = require('fs');

// Restoring index.astro specifically to have white background colors but leaving everything else pristine:
fs.writeFileSync('src/pages/index.astro', `---
import Layout from '../layouts/Layout.astro';
import Home from '../components/Home.jsx';

// Home Screen Colors
const themeColors = {
  'color-primary-val': '#800020',
  'color-forest-val': '#0B3D2E',
  'color-cream-val': '#FFFFFF',
  'color-bg-light-val': '#FFFFFF',
  'color-bg-dark-val': '#0B3D2E',
};
---

<Layout title="TIWARA - Sang Kesatria Bawang dari Jantung Borneo" themeColors={themeColors}>
<Home client:load />
</Layout>
`);

// Restoring Layout.astro back to Step 11
fs.writeFileSync('src/layouts/Layout.astro', `---
import '../styles/global.css';
import Navbar from '../components/Navbar.jsx';

interface Props {
title: string;
themeColors?: Record<string, string>;
}

const { title, themeColors } = Astro.props;
---

<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
{themeColors && (
<style define:vars={themeColors}></style>
)}
<Navbar client:load />
<slot />
</body>
</html>
`);

// Restoring Navbar.jsx to Step 14
fs.writeFileSync('src/components/Navbar.jsx', `import React from 'react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white shadow-md shadow-primary/20">
            <span className="material-symbols-outlined text-2xl">shield_with_heart</span>
          </div>
          <h2 className="text-primary dark:text-white text-2xl font-black tracking-tighter uppercase">TIWARA</h2>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors" href="/">Home</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors" href="/products">Produk</a>
          <a className="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors" href="/traceability">Traceability</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative items-center">
            <div className="absolute left-3 text-slate-400 dark:text-slate-500 pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="w-40 md:w-48 lg:w-64 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 border-none focus:ring-2 focus:ring-primary/50 focus:outline-none pl-10 pr-4 text-sm font-normal text-slate-900 dark:text-slate-100 transition-all shadow-inner" 
              placeholder="Cari..." 
            />
          </div>
          
          <button className="flex items-center justify-center rounded-full w-10 h-10 bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 hover:bg-primary/20 hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-background-light dark:border-background-dark"></span>
          </button>
          
          <div className="w-10 h-10 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center overflow-hidden shrink-0 hover:bg-primary/20 transition-colors cursor-pointer">
            <span className="material-symbols-outlined text-primary/80">person</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
`);

let css = fs.readFileSync('src/styles/global.css', 'utf8');
css = css.replace(/@media \(prefers-color-scheme: dark\) \{[\s\S]*?\}\n/g, '');
if (!css.includes('@custom-variant dark')) {
  css = css.replace('@import "tailwindcss";', '@import "tailwindcss";\n@custom-variant dark (&:where(.dark, .dark *));\n');
}
fs.writeFileSync('src/styles/global.css', css);
console.log('Restoration layout config complete!');
