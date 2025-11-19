export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Analyse",
      text: "Ziele, Restriktionen, Asset-Allokation."
    },
    {
      step: "02",
      title: "Sourcing",
      text: "Dealflow, Due Diligence, Modellierung."
    },
    {
      step: "03",
      title: "Struktur",
      text: "Vehikel, Steuern, Finanzierung."
    },
    {
      step: "04",
      title: "Umsetzung",
      text: "Execution, Monitoring, Reporting."
    },
  ];

  return (
    <section id="prozess" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Prozess</h2>
            <p className="mt-3 text-zinc-600">Konsequent. Transparent. Zielgerichtet.</p>
          </div>
          <div className="hidden md:block text-[12px] uppercase tracking-[0.25em] text-zinc-500">No Nonsense</div>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-3">
          {steps.map((s) => (
            <div key={s.step} className="border border-zinc-200 bg-white p-6 rounded-none">
              <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">{s.step}</div>
              <h3 className="mt-2 font-medium text-zinc-900">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
