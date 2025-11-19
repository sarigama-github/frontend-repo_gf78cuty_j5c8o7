export default function CaseStudies() {
  const cases = [
    { title: "Wohnportfolio Rhein-Main", tag: "Immobilien", kpi: "IRR 6.1%", desc: "Core+ Mehrfamilienhäuser, konservativ finanziert, aktives Asset Management." },
    { title: "Gewerbe-Refurb Hamburg", tag: "Immobilien", kpi: "Stabilisierung", desc: "Revitalisierung B-Objekt mit ESG-Fokus und Cashflow-Sicherung." },
    { title: "PV-Dachanlagen Bayern", tag: "Photovoltaik", kpi: "75 MWp", desc: "Entwicklung & Betrieb mehrerer Cluster, langfristige PPA-Verträge." },
  ];

  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Case Studies</h2>
            <p className="mt-3 text-zinc-600">Ausgewählte Projekte. Klar dokumentiert.</p>
          </div>
          <a href="/cases" className="hidden md:inline-flex border border-zinc-900 px-4 py-2 rounded-none text-zinc-900 hover:bg-zinc-900 hover:text-white transition">Alle ansehen</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-3">
          {cases.map((c) => (
            <div key={c.title} className="border border-zinc-200 bg-white p-6 rounded-none">
              <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">{c.tag}</div>
              <h3 className="mt-2 text-xl font-medium text-zinc-900">{c.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{c.desc}</p>
              <div className="mt-6 text-sm text-zinc-900">KPI: {c.kpi}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
