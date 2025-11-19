import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 grid place-items-center bg-zinc-900 text-white text-[11px] tracking-[0.25em]">
              GB
            </div>
            <div className="leading-tight">
              <div className="font-medium tracking-tight text-zinc-900 group-hover:text-zinc-700 transition">Graf Bernstoff</div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Consulting</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10 text-[15px]">
            <a href="#leistungen" className="text-zinc-600 hover:text-zinc-900 transition">Leistungen</a>
            <a href="#prozess" className="text-zinc-600 hover:text-zinc-900 transition">Prozess</a>
            <a href="#warum" className="text-zinc-600 hover:text-zinc-900 transition">Warum wir</a>
            <a href="#kontakt" className="text-zinc-600 hover:text-zinc-900 transition">Kontakt</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#kontakt" className="inline-flex items-center rounded-none border border-zinc-900 px-4 py-2 text-zinc-900 hover:bg-zinc-900 hover:text-white transition">
              Erstgespräch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 border border-zinc-300 text-zinc-700">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              <a onClick={()=>setOpen(false)} href="#leistungen" className="block px-3 py-2 border border-zinc-200">Leistungen</a>
              <a onClick={()=>setOpen(false)} href="#prozess" className="block px-3 py-2 border border-zinc-200">Prozess</a>
              <a onClick={()=>setOpen(false)} href="#warum" className="block px-3 py-2 border border-zinc-200">Warum wir</a>
              <a onClick={()=>setOpen(false)} href="#kontakt" className="block px-3 py-2 border border-zinc-200">Kontakt</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
