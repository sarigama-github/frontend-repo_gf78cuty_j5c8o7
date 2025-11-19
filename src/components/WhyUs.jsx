import { Shield, Gem, Handshake, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    { icon: <Shield className="w-4 h-4" />, title: "Kapitalerhalt", text: "Konservativer Ansatz mit klaren Risikogrenzen." },
    { icon: <Gem className="w-4 h-4" />, title: "Zugang", text: "Off-Market-Deals über gewachsene Netzwerke." },
    { icon: <Handshake className="w-4 h-4" />, title: "Partnerschaft", text: "Langfristig, transparent, auf Augenhöhe." },
    { icon: <CheckCircle2 className="w-4 h-4" />, title: "Incentives", text: "Erfolgsabhängige Modelle, klare KPIs." },
  ];

  return (
    <section id="warum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900">Warum wir</h2>
            <p className="mt-3 text-zinc-600">Werteorientiert, präzise, verlässlich. Ohne Spielereien.</p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {points.map((p, idx) => (
              <div key={idx} className="border border-zinc-200 p-6 rounded-none">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 grid place-items-center bg-emerald-100 text-zinc-900">{p.icon}</div>
                  <div className="font-medium text-zinc-900">{p.title}</div>
                </div>
                <p className="mt-2 text-sm text-zinc-600">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
