import React from 'react';

export default function BatchResult({ record }) {
  if (!record) return null;

  return (
    <>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">


          <main className="flex-1 max-w-[1200px] mx-auto w-full p-4 md:p-8 space-y-8">
            {/* Page Title & Main Action */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>CERTIFIED QUALITY ASSURANCE</span>
                </div>
                <h1 className="text-3xl font-black leading-tight tracking-tight">Batch {record.batch_number}</h1>
                <p className="text-slate-500">Analysis Result • Production Date {new Date(record.production_date).toLocaleDateString()}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl h-11 px-6 bg-slate-900 text-white font-bold transition-all hover:opacity-90">
                  <span className="material-symbols-outlined">download</span>
                  <span>Download CoA</span>
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl h-11 px-4 bg-green-600 text-white font-bold">
                  <span className="material-symbols-outlined">share</span>
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Radial Progress Card */}
              <div className="lg:col-span-4 bg-white rounded-xl p-8 border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                <h3 className="text-lg font-bold mb-6">Antioxidant Content</h3>
                <div className="relative size-48 mb-6">
                  {/* SVG Radial Progress */}
                  <svg className="size-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle className="text-slate-100" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeWidth="8"></circle>
                    <circle className="text-scientific-teal" cx="50" cy="50" fill="transparent" r="45" stroke="currentColor" strokeDasharray="282.7" strokeDashoffset="42.4" strokeLinecap="round" strokeWidth="8"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-scientific-teal">{record.antioxidant_level ? record.antioxidant_level.split(" ")[0] : ""}</span>
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">{record.antioxidant_level ? record.antioxidant_level.split(" ").slice(1).join(" ") : "Level"}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{record.lab_test_result}</p>
              </div>

              {/* Right: KPI Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-scientific-teal/10 text-scientific-teal rounded-lg">
                      <span className="material-symbols-outlined">biotech</span>
                    </div>
                    <span className="text-green-500 text-xs font-bold bg-green-500/10 px-2 py-1 rounded-full">{record.quality_status}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Quality Status</p>
                  <p className="text-3xl font-bold tracking-tight">{record.quality_status === 'Approved' ? 'High' : record.quality_status}</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-100 text-blue-500 rounded-lg">
                      <span className="material-symbols-outlined">humidity_low</span>
                    </div>
                    <span className="text-blue-500 text-xs font-bold bg-blue-500/10 px-2 py-1 rounded-full">Optimal Range</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium mb-1">Moisture Level</p>
                  <p className="text-3xl font-bold tracking-tight">4.5%</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm md:col-span-2">
                  <p className="text-slate-500 text-sm font-medium mb-3">Composition Analysis</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Phenolic Content</span>
                        <span className="font-bold text-scientific-teal">72 mg/g</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-scientific-teal rounded-full" style={{width:"72%"}}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Chlorophyll Retention</span>
                        <span className="font-bold text-scientific-teal">94%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-scientific-teal rounded-full" style={{width:"94%"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Farmer & Provenance Section */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                <img alt="Portrait of farmer Pak Aris in his farm" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-1CyXuxpsptijLU8Goh2tcOuQn8LAGRNPxwdF-LVdGDiY_zPnXWwp0jEY65IqhCwWBnXYZMT4LH2QLlkqDfs991ImEEwDpj2G36rk_R8mGhk33eloUIoFLPPFKCRDjwxrqa1bkfy9ugl8bQsp-lMJKBMRuJ4ojaVaZSUIS2vtb-pEO__9Ffqpp2vaEtcQ4eQ5ibY1pEYxiloAHdUIX0WD0oY0nmLefi0p9XGDvbJNP2HfClrORfCFF4SQfsyhVcSASX0J3Uajx-4" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-sm font-bold">{record.farmer_name}</p>
                  <p className="text-white/80 text-xs">Master Cultivator</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 w-fit">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>{record.farm_location?.city ? record.farm_location.city.toUpperCase() : ''}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Tumbuh di Lahan {record.farmer_name}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Dipanen dari wilayah subur {record.farm_location?.city} menggunakan metode regeneratif. Lokasi di {record.farm_location?.village}, {record.farm_location?.district}, memastikan keseimbangan tanah tetap optimal untuk menghasilkan konsentrasi terbaik.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-scientific-teal">sunny</span>
                    <span className="text-sm font-medium">12h Sun Exposure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-scientific-teal">eco</span>
                    <span className="text-sm font-medium">100% Organic</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white font-black text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined">shopping_basket</span>
                <span>Beli Lagi</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-white border-2 border-slate-200 font-bold text-lg hover:bg-slate-50 :bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">share</span>
                <span>Bagikan ke WhatsApp</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
