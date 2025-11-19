import { Building2, Sun, ShieldCheck, LineChart } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Immobilieninvestment",
      text: "Ankauf, Strukturierung und Management von Wohn- & Gewerbeimmobilien mit Fokus auf stabile Cashflows.",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Photovoltaik-Anlagen",
      text: "Entwicklung, Finanzierung und Betrieb von PV-Portfolios – von Dachanlagen bis Utility Scale.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Risikomanagement",
      text: "Sorgfältige Due Diligence, konservative Annahmen und laufendes Monitoring zur Absicherung des Kapitals.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Rendite & Reporting",
      text: "Transparente Berichte, KPI-Dashboards und erfolgsabhängige Modelle für maximale Interessengleichheit.",
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-emerald-900">Leistungen im Überblick</h2>
          <p className="mt-3 text-emerald-900/80">
            Wir begleiten Sie ganzheitlich – von der Strategie bis zur Umsetzung. Diskret, effizient und ergebnisorientiert.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border border-emerald-900/10 p-6 hover:shadow-sm hover:border-emerald-900/20 transition">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center">
                {i.icon}
              </div>
              <h3 className="mt-4 font-semibold text-emerald-900">{i.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
