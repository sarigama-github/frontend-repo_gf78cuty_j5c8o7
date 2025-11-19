export default function Hero() {
  return (
    <section className="relative isolate pt-28 md:pt-36 bg-emerald-50/50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(6,95,70,0.15),transparent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 bg-white/70 px-3 py-1 text-[12px] text-emerald-900/70">
              Premium Beratung • Old Money Stil
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-emerald-900 tracking-tight">
              Diskrete Strategien für Immobilieninvestments & Photovoltaik-Anlagen
            </h1>
            <p className="mt-5 text-emerald-900/80 text-lg leading-relaxed">
              Graf Bernstoff Consulting begleitet vermögende Privatpersonen und Family Offices bei der strukturierten Kapitalanlage in renditestarke Immobilien und nachhaltige PV-Projekte – mit hanseatischer Solidität und messbaren Ergebnissen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="inline-flex justify-center rounded-full bg-emerald-900 px-6 py-3 text-white font-medium hover:bg-emerald-800 transition">
                Unverbindliches Erstgespräch
              </a>
              <a href="#leistungen" className="inline-flex justify-center rounded-full border border-emerald-900/20 px-6 py-3 text-emerald-900 font-medium hover:bg-emerald-50 transition">
                Leistungen entdecken
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-emerald-900/70">
              <div className="text-3xl font-semibold text-emerald-900">250 Mio.€+</div>
              betreutes Investitionsvolumen
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full max-w-md md:max-w-none md:ml-auto rounded-3xl bg-gradient-to-b from-emerald-900 to-emerald-700 p-2">
              <div className="h-full w-full rounded-2xl bg-white overflow-hidden">
                <div className="h-1/2 bg-[url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="h-1/2 grid grid-cols-2">
                  <div className="bg-[url('https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
                  <div className="bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white/80 backdrop-blur rounded-xl px-4 py-3 shadow-sm border border-emerald-900/10">
              <div className="text-sm text-emerald-900/80">Fokus: Core-Plus & PV-Utility Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
