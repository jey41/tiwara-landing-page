import React from 'react';

export default function ProductGallery() {
  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">


          <main className="flex-1 flex flex-col items-center">
            <div className="max-w-[1200px] w-full px-6 py-12">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary">Premium Extract</span>
                <h1 className="text-slate-900 tracking-tight text-4xl md:text-5xl font-extrabold leading-tight mb-4">Siap Membawa Kesatria Bawang ke Dapur Anda?</h1>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">Varian ekstrak Bawang Tiwai pilihan untuk kesehatan dan kelezatan masakan keluarga Anda.</p>
              </div>

              {/* Category Filters */}
              <div className="flex gap-3 mb-10 overflow-x-auto pb-2 justify-start md:justify-center no-scrollbar">
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-6 text-white text-sm font-bold shadow-lg shadow-primary/20">
                  Semua
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 px-6 text-slate-700 text-sm font-semibold hover:border-primary transition-colors">
                  Ekstrak Murni
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 px-6 text-slate-700 text-sm font-semibold hover:border-primary transition-colors">
                  Capsule
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                </button>
                <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white border border-slate-200 px-6 text-slate-700 text-sm font-semibold hover:border-primary transition-colors">
                  Bubuk Premium
                  <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                </button>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product Card 1 */}
                <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZg_1DXGfjQJl11erzJASbI1oQtx8HSrH1eywtsytSYAdu32ZSZfIhl0J-gsUxBEECHGhP_t5T3hUgsUNzPbkULi6Fu9-5Vx2s6cHo77lJZPElR60TlQk72sOpeEOIXMDT-mApk47I_IKp6pT3RY2tVUTTJAdXD6PfslzFIRU4TwyFIqGKyTB2yHRAjRCjGLnXKlqFv_tuepBm6oVhxEkFocvwUhbUxxk11XQREDR6Xvi1wNZQTZdm1o0NgHh-NDwbn8Uftnzbhug")'}}></div>
                    <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Best Seller</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-slate-900 text-lg font-bold mb-1">Ekstrak Bawang Tiwai Cair</h3>
                    <p className="text-slate-500 text-xs mb-3">Isi 250ml - Konsentrasi Tinggi untuk kesehatan jantung.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">Rp 125.000</span>
                      <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product Card 2 */}
                <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv8PE2x3ciLGjz9SX5BCGj4bYVn7FbUh8-UoOBNUVhQ-qlBHdVaYUTv7pIgZbbMdrMlMyU-GnLjYu3gRjL0u7rjQbT0vRpuW22ugrgvStZBzecySeXdR7htqw0IdHVAyWDgy6dRXLMRx2NvovXBMibmnzTjBmjL3dfSZ760nz0xc3a9LNK0_49_ruQ_q06YpcdlsJV-73aK_vbTyEQheQRoqc1s-q84HQwc9nyQ33KTNRHZgi8KVVgY3yInAzDXTZz5YdQS-EZpg4")'}}></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-slate-900 text-lg font-bold mb-1">Kapsul Kesatria Bawang</h3>
                    <p className="text-slate-500 text-xs mb-3">Isi 60 Kapsul - Suplemen praktis untuk imun tubuh harian.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">Rp 150.000</span>
                      <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product Card 3 */}
                <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiUuDFGJTr81lAKklAzRp1gVcmCpcSgV5ltnm8QJkm9JVIVehTAIuGzIdrPQlvbscK9J8i2vfLnVolQe7osoK4nI9Bhyezymo42J3GMPGMFA7XBt1omPfXscYXIudUxYg5CgSIT5L7EOcJDtkxeEQwXxmy7VyYYV7rozvvwV_nuEo4ioMMJLWra05IYW_jEvj9sE8o4gJ8oO8pu13YApa-Wz9WwIZpocfZZoZMgLc8g0W8HvtIWz94m6ctuNB4lrO-2Oz0OmBpd6k")'}}></div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-slate-900 text-lg font-bold mb-1">Bubuk Tiwai Organik</h3>
                    <p className="text-slate-500 text-xs mb-3">Berat 100g - Bubuk murni siap saji sebagai bumbu dapur sehat.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">Rp 85.000</span>
                      <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Product Card 4 */}
                <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-square">
                    <div className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiShaiLmGs9K6hzNdtlX8GjKWMO8A9dvgPNZRlQqL_uimPt7pMaI_QUlx5J5syJNLSTHvrrxGruTABEGkohrEF3SrIrA8GOHexThrkjyeztrU6aIP-RLt94NhCnzTCuBJlYPt1gh1aNQGFzOz8xG37nZ7SoTnhbtWLdnWatnYk135nD7JwVl9iQRDvM9OkMkKvlo2Z_KnktNU_AN2ThzmFdT2sLqjJgV0pFh8w-vuXxM-IzNJvu4Ec_JYqiXGOO1jIN3o3Hlj9wxA")'}}></div>
                    <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Bundle</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-slate-900 text-lg font-bold mb-1">Paket Bundling Dapur</h3>
                    <p className="text-slate-500 text-xs mb-3">Hemat 15% - Paket lengkap untuk keluarga sehat.</p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">Rp 320.000</span>
                      <button className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="mt-20 flex flex-col items-center justify-center gap-6 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Siap Melakukan Pemesanan?</h2>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-secondary text-white text-base font-bold shadow-xl shadow-secondary/20 hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <span>Beli di Shopee</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-base font-bold shadow-xl shadow-primary/20 hover:brightness-110 transition-all">
                    <span className="material-symbols-outlined">chat</span>
                    <span>Konsultasi via WhatsApp</span>
                  </button>
                </div>
                <p className="text-slate-500 text-sm mt-4">Gratis konsultasi kesehatan dengan ahli herbal kami</p>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-primary py-12 px-6 text-white/80">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="flex items-center gap-3 text-white mb-6">
                  <span className="material-symbols-outlined text-3xl">fluid_med</span>
                  <h2 className="text-xl font-bold uppercase tracking-widest">TIWARA</h2>
                </div>
                <p className="text-sm leading-relaxed max-w-xs">
                  Pelopor ekstrak Bawang Tiwai premium dengan standar kualitas tinggi untuk gaya hidup sehat masyarakat Indonesia.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Navigasi</h4>
                <ul className="space-y-4 text-sm">
                  <li><a className="hover:text-white transition-colors" href="#">Katalog Produk</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Cara Pemesanan</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Kebijakan Pengembalian</a></li>
                  <li><a className="hover:text-white transition-colors" href="#">Hubungi Kami</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6">Ikuti Kami</h4>
                <div className="flex gap-4">
                  <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </a>
                  <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                    <span className="material-symbols-outlined text-[20px]">camera</span>
                  </a>
                  <a className="size-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
                    <span className="material-symbols-outlined text-[20px]">share</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto border-t border-white/10 mt-12 pt-8 text-center text-xs">
              © 2024 TIWARA Indonesia. Seluruh hak cipta dilindungi.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
