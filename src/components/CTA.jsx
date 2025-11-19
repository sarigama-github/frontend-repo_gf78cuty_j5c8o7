export default function CTA() {
  return (
    <section id="kontakt" className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Erstberatung anfragen</h2>
            <p className="mt-3 text-zinc-300">
              Kurz. Präzise. Vertraulich. Wir melden uns innerhalb von 24 Stunden.
            </p>
            <ul className="mt-6 grid gap-2 text-zinc-300 text-sm list-disc list-inside">
              <li>Individuelle Strategie-Skizze</li>
              <li>Kein Verkaufsgespräch</li>
              <li>NDA auf Wunsch</li>
            </ul>
          </div>
          <form className="bg-white text-zinc-900 p-6 border border-zinc-700/30 grid gap-4 rounded-none">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Vorname</label>
                <input className="w-full border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-none" placeholder="Max" />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Nachname</label>
                <input className="w-full border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-none" placeholder="Mustermann" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">E-Mail</label>
              <input type="email" className="w-full border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-none" placeholder="max@example.com" />
            </div>
            <div>
              <label className="block text-sm text-zinc-600 mb-1">Ziel & Investitionsrahmen</label>
              <textarea className="w-full border border-zinc-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-none" placeholder="z.B. PV-Portfolio, 1–5 Mio. €"></textarea>
            </div>
            <button type="button" className="bg-emerald-600 text-white py-2.5 hover:bg-emerald-500 transition rounded-none">
              Gespräch anfragen
            </button>
            <p className="text-xs text-zinc-500">Mit Absenden stimmen Sie unserer Datenschutzerklärung zu.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
