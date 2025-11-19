export default function AboutMe() {
  return (
    <section id="ueber-mich" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] border border-zinc-200 bg-[url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" aria-label="Porträt Moritz Bernstorff" />
          </div>
          <div className="lg:col-span-7">
            <div className="text-[12px] uppercase tracking-[0.25em] text-zinc-500">Über mich</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-zinc-900">Moritz Bernstorff</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Unternehmer und Berater mit Fokus auf Immobilien und Photovoltaik. Ich strukturiere Investments konservativ, transparent und mit klaren Entscheidungsgrundlagen – von der Idee bis zum Betrieb. Meine Maxime: Kapitalerhalt vor Renditemaximierung, Qualität vor Quantität.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="border border-zinc-200 p-5 rounded-none">
                <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Erfahrung</div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900">15+ Jahre</div>
              </div>
              <div className="border border-zinc-200 p-5 rounded-none">
                <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Volumen</div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900">250 Mio.€+</div>
              </div>
              <div className="border border-zinc-200 p-5 rounded-none">
                <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Schwerpunkte</div>
                <div className="mt-1 text-2xl font-semibold text-zinc-900">RE & PV</div>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <a href="#kontakt" className="inline-flex justify-center items-center bg-zinc-900 text-white px-6 py-3 rounded-none hover:opacity-90 transition">Erstgespräch</a>
              <a href="/about" className="inline-flex justify-center items-center border border-zinc-900 text-zinc-900 px-6 py-3 rounded-none hover:bg-zinc-900 hover:text-white transition">Vita & Werte</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
