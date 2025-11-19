import AboutMe from '../components/AboutMe'
import ContactStrip from '../components/ContactStrip'

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="pt-28 md:pt-36 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-[12px] uppercase tracking-[0.25em] text-zinc-500">Profil</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Über Moritz Bernstorff</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">Klarheit, Disziplin und langfristiger Werterhalt. Meine Arbeit verbindet unternehmerisches Denken mit präziser Umsetzung – in Immobilien und Photovoltaik.</p>
        </div>
      </section>

      <AboutMe />

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900">Werte & Arbeitsweise</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-3">
            {["Kapitalerhalt vor Renditemaximierung","Absolute Transparenz in Berichten","Konsequentes Risikomanagement"].map((t)=> (
              <div key={t} className="border border-zinc-200 bg-white p-6 rounded-none">
                <div className="text-zinc-900 font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  )
}
