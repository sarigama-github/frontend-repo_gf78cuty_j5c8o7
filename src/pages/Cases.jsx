import CaseStudies from '../components/CaseStudies'
import ContactStrip from '../components/ContactStrip'

export default function CasesPage() {
  return (
    <div className="bg-white text-zinc-900">
      <section className="pt-28 md:pt-36 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-[12px] uppercase tracking-[0.25em] text-zinc-500">Referenzen</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Case Studies</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">Ausgewählte Projekte mit klaren Kennzahlen und pragmatischen Ergebnissen.</p>
        </div>
      </section>

      <CaseStudies />

      <ContactStrip />
    </div>
  )
}
