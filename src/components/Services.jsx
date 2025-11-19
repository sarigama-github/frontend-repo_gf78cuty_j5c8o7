export default function Services() {
  const services = [
    { title: "Mandat Immobilien", items: ["Strategie & Allokation", "Deal Sourcing & DD", "Struktur & Finanzierung", "Asset Management"] },
    { title: "Mandat Photovoltaik", items: ["Greenfield/RTB Entwicklung", "EPC/Operator Auswahl", "PPA/Abnahme", "Monitoring & O&M"] },
    { title: "Advisory & Special", items: ["Transaktionsberatung", "Refinanzierung", "Distressed/Value-Add", "Co-Investments"] },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Mandate & Leistungen</h2>
          <p className="mt-3 text-zinc-600">Klar definierte Leistungspakete mit messbaren Ergebnissen.</p>
        </div>
        <div className="mt-10 grid lg:grid-cols-3 gap-3">
          {services.map((s) => (
            <div key={s.title} className="border border-zinc-200 p-6 rounded-none">
              <h3 className="text-lg font-medium text-zinc-900">{s.title}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-600 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
