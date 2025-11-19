import Services from '../components/Services'
import ContactStrip from '../components/ContactStrip'

export default function ServicesPage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="pt-28 md:pt-36 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-[12px] uppercase tracking-[0.25em] text-zinc-500">Leistungen</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Mandate & Leistungen</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">Strukturiert, belastbar, skalierbar. Leistungspakete für Immobilien und Photovoltaik.</p>
        </div>
      </section>

      <Services />

      <ContactStrip />
    </div>
  )
}
