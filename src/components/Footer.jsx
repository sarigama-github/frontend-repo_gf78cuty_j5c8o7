export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-zinc-200 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[12px] tracking-wide uppercase text-zinc-500">
          © {new Date().getFullYear()} Graf Bernstorff Consulting — Immobilien & Photovoltaik
        </div>
        <div className="mt-3 text-sm">
          <a href="/impressum" className="text-zinc-600 hover:text-zinc-900">Impressum</a>
          <span className="mx-2 text-zinc-300">|</span>
          <a href="/datenschutz" className="text-zinc-600 hover:text-zinc-900">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
