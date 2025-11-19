export default function ContactStrip() {
  return (
    <section className="py-10 bg-white border-t border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          <div className="border border-zinc-200 p-4 rounded-none">
            <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">E-Mail</div>
            <div className="mt-1 text-zinc-900">kontakt@bernstorff.consulting</div>
          </div>
          <div className="border border-zinc-200 p-4 rounded-none">
            <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Telefon</div>
            <div className="mt-1 text-zinc-900">+49 (0) 30 123 45 67</div>
          </div>
          <div className="border border-zinc-200 p-4 rounded-none">
            <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">Standort</div>
            <div className="mt-1 text-zinc-900">Berlin • München</div>
          </div>
        </div>
      </div>
    </section>
  );
}
