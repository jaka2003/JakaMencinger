import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Gradientno ozadje + mehki "blobi" */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink to-surface" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan/20 blur-3xl animate-blob [animation-delay:-6s]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Na voljo za zaposlitev
          </p>

          <h1 className="animate-fade-up text-4xl font-bold leading-tight tracking-tight text-white [animation-delay:80ms] sm:text-6xl">
            {personal.name}
          </h1>

          <p className="mt-4 animate-fade-up text-xl font-medium text-gradient [animation-delay:160ms] sm:text-2xl">
            {personal.title}
          </p>

          <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-slate-300 [animation-delay:240ms] sm:text-lg">
            {personal.heroText}
          </p>

          <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:320ms] sm:flex-row">
            <a
              href="#projekti"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-accent/40"
            >
              Poglej projekte
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-white/5"
            >
              Kontaktiraj me
            </a>
            <a
              href={personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              Prenesi CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
