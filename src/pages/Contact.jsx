export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <section className="pt-28 md:pt-36 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Kontakt</h1>
          <p className="mt-3 text-zinc-600">Nutzen Sie das Formular auf der Startseite oder schreiben Sie uns direkt.</p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="border border-zinc-200 p-4 rounded-none">kontakt@bernstorff.consulting</div>
            <div className="border border-zinc-200 p-4 rounded-none">+49 (0) 30 123 45 67</div>
          </div>
        </div>
      </section>
    </div>
  )
}
