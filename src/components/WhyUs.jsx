import { Shield, Gem, Handshake, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    { icon: <Shield className="w-5 h-5" />, text: "Konservativer Ansatz mit Fokus auf Kapitalerhalt" },
    { icon: <Gem className="w-5 h-5" />, text: "Exklusiver Zugang zu Off-Market-Deals" },
    { icon: <Handshake className="w-5 h-5" />, text: "Langjährige Partnernetzwerke in DACH & EU" },
    { icon: <CheckCircle2 className="w-5 h-5" />, text: "Transparente Gebühren & erfolgsabhängige Modelle" },
  ];

  return (
    <section id="warum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-900">Warum Graf Bernstoff Consulting</h2>
            <p className="mt-3 text-emerald-900/80">
              Wir verbinden traditionelle Werte mit moderner Strukturierung. Diskretion, Qualität und Verlässlichkeit stehen an erster Stelle.
            </p>
            <div className="mt-6 grid gap-3">
              {points.map((p, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-900 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <div className="text-emerald-900/90">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-emerald-900/10">
              <img className="w-full h-full object-cover" alt="Solar & Immobilien" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-sm border border-emerald-900/10">
              <div className="text-sm text-emerald-900/80">Erfahrung: 15+ Jahre, 120+ Transaktionen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
