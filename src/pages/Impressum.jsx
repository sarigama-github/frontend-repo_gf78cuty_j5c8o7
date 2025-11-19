export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <section className="pt-28 md:pt-36 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Impressum</h1>
          <div className="mt-6 grid gap-4 text-sm text-zinc-700">
            <p>Angaben gemäß § 5 TMG</p>
            <p>Graf Bernstorff Consulting<br/>Beispielstraße 1<br/>10115 Berlin</p>
            <p>Kontakt: kontakt@bernstorff.consulting</p>
          </div>
        </div>
      </section>
    </div>
  )
}
