export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Analyse & Zieldefinition",
      text: "Gründliches Verständnis Ihrer Vermögensstruktur, Renditeziele und Risikopräferenzen.",
    },
    {
      step: "02",
      title: "Sourcing & Due Diligence",
      text: "Exklusiver Dealflow, detaillierte Prüfung, konservative Modellierung.",
    },
    {
      step: "03",
      title: "Strukturierung & Finanzierung",
      text: "Optimierte Vehikel, steuerliche Struktur und Fremdkapitalbeschaffung.",
    },
    {
      step: "04",
      title: "Umsetzung & Reporting",
      text: "Professionelle Ausführung, laufendes Monitoring und transparentes Reporting.",
    },
  ];

  return (
    <section id="prozess" className="py-20 bg-emerald-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-900">Unser Prozess</h2>
          <p className="mt-3 text-emerald-900/80">Strukturiert, transparent und auf Ihre Ziele ausgerichtet.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl bg-white border border-emerald-900/10 p-6">
              <div className="text-sm font-mono text-emerald-900/60">{s.step}</div>
              <h3 className="mt-2 font-semibold text-emerald-900">{s.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
