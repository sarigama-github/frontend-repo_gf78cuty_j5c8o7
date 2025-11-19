import { Menu, Phone } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-900 flex items-center justify-center text-white font-semibold tracking-widest">GB</div>
            <div className="leading-tight">
              <div className="text-emerald-900 font-semibold tracking-wide">Graf Bernstoff</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-emerald-900/70">Consulting</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#leistungen" className="text-emerald-900/80 hover:text-emerald-900 transition">Leistungen</a>
            <a href="#prozess" className="text-emerald-900/80 hover:text-emerald-900 transition">Prozess</a>
            <a href="#warum" className="text-emerald-900/80 hover:text-emerald-900 transition">Warum wir</a>
            <a href="#kontakt" className="text-emerald-900/80 hover:text-emerald-900 transition">Kontakt</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full border border-emerald-900/20 px-4 py-2 text-emerald-900 hover:bg-emerald-50 transition">
              <Phone className="w-4 h-4" />
              Termin anfragen
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-emerald-900/20 text-emerald-900">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a onClick={()=>setOpen(false)} href="#leistungen" className="block px-3 py-2 rounded-lg text-emerald-900/90 hover:bg-emerald-50">Leistungen</a>
              <a onClick={()=>setOpen(false)} href="#prozess" className="block px-3 py-2 rounded-lg text-emerald-900/90 hover:bg-emerald-50">Prozess</a>
              <a onClick={()=>setOpen(false)} href="#warum" className="block px-3 py-2 rounded-lg text-emerald-900/90 hover:bg-emerald-50">Warum wir</a>
              <a onClick={()=>setOpen(false)} href="#kontakt" className="block px-3 py-2 rounded-lg text-emerald-900/90 hover:bg-emerald-50">Kontakt</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
