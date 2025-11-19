export default function Hero() {
  return (
    <section className="relative isolate pt-28 md:pt-36 bg-white">
      <div className="absolute inset-x-0 top-16 -z-10 h-72 bg-gradient-to-b from-emerald-100/70 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 border border-zinc-200 px-3 py-1 text-[12px] text-zinc-600 uppercase tracking-[0.25em]">
              Diskrete Anlagenstrategien
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-zinc-900 tracking-tight">
              Immobilien & Photovoltaik, kompromisslos professionell.
            </h1>
            <p className="mt-5 text-zinc-600 text-lg leading-relaxed max-w-2xl">
              Präzise Strukturierung, konservatives Risikomanagement, klare Berichte. Für vermögende Privatpersonen und Family Offices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="inline-flex justify-center rounded-none bg-zinc-900 px-6 py-3 text-white font-medium hover:opacity-90 transition">
                Erstgespräch sichern
              </a>
              <a href="#leistungen" className="inline-flex justify-center rounded-none border border-zinc-900 px-6 py-3 text-zinc-900 font-medium hover:bg-zinc-900 hover:text-white transition">
                Leistungen
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-8 text-zinc-500 text-sm">
              <div className="tracking-wide uppercase">250 Mio.€+ Investitionsvolumen</div>
              <div className="h-4 w-px bg-zinc-300 hidden md:block" />
              <div className="tracking-wide uppercase">15+ Jahre Erfahrung</div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] border border-zinc-200 bg-[url('https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="aspect-square border border-zinc-200 bg-[url('https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="aspect-square border border-zinc-200 bg-[url('https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="aspect-[3/4] border border-zinc-200 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
