import { Building2, Sun, ShieldCheck, LineChart } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Immobilien",
      text: "Core/Core+ Wohn- & Gewerbeobjekte mit stabilen Cashflows.",
    },
    {
      icon: <Sun className="w-5 h-5" />,
      title: "Photovoltaik",
      text: "Dachanlagen bis Utility Scale – Entwicklung, Finanzierung, Betrieb.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Risikomanagement",
      text: "Konservativ modelliert, Due Diligence, permanentes Monitoring.",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Reporting",
      text: "Transparente KPIs, quartalsweise Berichte, klare Entscheidungen.",
    },
  ];

  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Leistungen</h2>
          <p className="mt-3 text-zinc-600">
            Klar strukturiert. Ohne Schnörkel. Für messbare Ergebnisse.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((i) => (
            <div key={i.title} className="border border-zinc-200 p-6 hover:bg-zinc-50 transition rounded-none">
              <div className="w-9 h-9 grid place-items-center bg-emerald-100 text-zinc-900">
                {i.icon}
              </div>
              <h3 className="mt-4 font-medium text-zinc-900 tracking-tight">{i.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
