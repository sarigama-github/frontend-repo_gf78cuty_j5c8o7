export default function CTA() {
  return (
    <section id="kontakt" className="py-20 bg-emerald-900 relative isolate">
      <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/45degreee_fabric.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Diskrete Erstberatung sichern</h2>
            <p className="mt-3 text-emerald-100/90">
              Hinterlassen Sie Ihre Kontaktdaten und Ziele – wir melden uns innerhalb von 24 Stunden für ein vertrauliches Gespräch.
            </p>
            <ul className="mt-6 grid gap-2 text-emerald-100/80 text-sm list-disc list-inside">
              <li>Individuelle Strategieempfehlung</li>
              <li>Kein Verkaufsgespräch – reine Fachberatung</li>
              <li>Auf Wunsch: Unterzeichnung einer NDA</li>
            </ul>
          </div>
          <form className="bg-white rounded-2xl p-6 border border-emerald-700/30 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-emerald-900/80 mb-1">Vorname</label>
                <input className="w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Max" />
              </div>
              <div>
                <label className="block text-sm text-emerald-900/80 mb-1">Nachname</label>
                <input className="w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Mustermann" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80 mb-1">E-Mail</label>
              <input type="email" className="w-full rounded-lg border border-emerald-900/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="max@example.com" />
            </div>
            <div>
              <label className="block text-sm text-emerald-900/80 mb-1">Ziel & Investitionsrahmen</label>
              <textarea className="w-full rounded-lg border border-emerald-900/20 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="z.B. Aufbau eines PV-Portfolios, 1–5 Mio. €"></textarea>
            </div>
            <button type="button" className="rounded-lg bg-emerald-900 text-white py-2.5 hover:bg-emerald-800 transition">
              Gespräch anfragen
            </button>
            <p className="text-xs text-emerald-900/70">Mit Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
