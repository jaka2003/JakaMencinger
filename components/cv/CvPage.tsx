import { shared, type Locale } from "@/lib/data";
import { cvContent } from "@/lib/cv";
import CopyEmail from "./CopyEmail";

const LINKEDIN_URL = "https://www.linkedin.com/in/jaka-mencinger-0298b0401";

const ExternalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-3 w-3"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

/** Zunanja povezava z ikono in odpiranjem v novem zavihku. */
function ExternalLink({
  href,
  children,
  hint,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  hint: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-slate-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft ${className}`}
    >
      {children}
      <span className="text-slate-500 print:hidden">
        <ExternalIcon />
      </span>
      <span className="sr-only"> ({hint})</span>
    </a>
  );
}

function TechBadges({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400 print:bg-transparent"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function SectionTitle({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 border-b border-white/10 pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent-soft"
    >
      {title}
    </h2>
  );
}

export default function CvPage({ locale }: { locale: Locale }) {
  const c = cvContent[locale];
  const homeHref = locale === "sl" ? "/" : "/en";

  return (
    <div className="cv-root min-h-screen bg-ink">
      <div className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8 xl:grid xl:grid-cols-[8.5rem_minmax(0,1fr)] xl:gap-10">
        {/* Sidrna navigacija: samo namizje, brez tiska */}
        <nav aria-label={c.ui.navLabel} className="hidden xl:block print:hidden">
          <ul className="sticky top-10 space-y-1 border-l border-white/10 pl-4 text-sm">
            {c.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0">
          {/* Vrstica nad glavo: nazaj + jezik. Brez tiska. */}
          <div className="mb-8 flex items-center justify-between print:hidden">
            <a
              href={homeHref}
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
            >
              <span aria-hidden="true">←</span> {c.ui.backToSite}
            </a>
            <div className="flex items-center rounded-full border border-white/15 p-0.5 text-xs font-medium">
              <a
                href="/cv"
                aria-current={locale === "sl" ? "page" : undefined}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === "sl" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                SL
              </a>
              <a
                href="/en/cv"
                aria-current={locale === "en" ? "page" : undefined}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  locale === "en" ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </a>
            </div>
          </div>

          {/* 1. Glava */}
          <header>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 print:hidden">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              {c.ui.available}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {shared.name}
                </h1>
                <p className="mt-1 text-lg font-medium text-accent-soft">{c.header.title}</p>
              </div>
              <a
                href={c.header.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#6344e8] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white print:hidden"
              >
                <DownloadIcon />
                {c.ui.downloadPdf}
              </a>
            </div>

            <div className="mt-4 space-y-1.5 text-sm text-slate-400">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>{c.header.location}</span>
                <span aria-hidden="true">·</span>
                <a
                  href={`tel:${c.header.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  {c.header.phone}
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={`mailto:${shared.email}`}
                  className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  {shared.email}
                </a>
                <CopyEmail email={shared.email} label={c.ui.copy} copiedLabel={c.ui.copied} />
              </p>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <a
                  href={homeHref}
                  className="transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
                >
                  jakamencinger.dev
                </a>
                <span aria-hidden="true">·</span>
                <ExternalLink href={shared.github} hint={c.ui.opensInNewTab}>
                  github.com/jaka2003
                </ExternalLink>
                <span aria-hidden="true">·</span>
                <ExternalLink href={LINKEDIN_URL} hint={c.ui.opensInNewTab}>
                  linkedin.com/in/jaka-mencinger
                </ExternalLink>
              </p>
            </div>
          </header>

          {/* 2. Tri številke */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-3 print:mt-4">
            {c.stats.map((s) => (
              <li
                key={s.label}
                className="rounded-2xl border border-white/10 bg-surface/60 p-4 print:p-2"
              >
                <p className="text-3xl font-bold tracking-tight text-white print:text-xl">{s.value}</p>
                <p className="mt-1 text-sm leading-snug text-slate-400">{s.label}</p>
              </li>
            ))}
          </ul>

          {/* 3. Profil */}
          <section aria-labelledby={c.sections.profile.id} className="mt-10 print:mt-5">
            <SectionTitle id={c.sections.profile.id} title={c.sections.profile.title} />
            <p className="mt-4 leading-relaxed text-slate-300">{c.profile}</p>
          </section>

          {/* 4. Projekti */}
          <section aria-labelledby={c.sections.projects.id} className="mt-10 print:mt-5">
            <SectionTitle id={c.sections.projects.id} title={c.sections.projects.title} />
            <div className="mt-4 space-y-8 print:space-y-4">
              {c.projects.map((p) => (
                <article key={p.title}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                    {p.url && p.linkLabel ? (
                      <ExternalLink href={p.url} hint={c.ui.opensInNewTab} className="text-sm">
                        {p.linkLabel}
                      </ExternalLink>
                    ) : p.meta ? (
                      <span className="text-sm text-slate-400">{p.meta}</span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 leading-relaxed text-slate-300">{p.description}</p>
                  {p.bullets.length > 0 && (
                    <ul className="mt-2.5 space-y-1.5">
                      {p.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                            aria-hidden="true"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <TechBadges tech={p.tech} />
                </article>
              ))}
            </div>
          </section>

          {/* 5. Izkušnje */}
          <section aria-labelledby={c.sections.experience.id} className="mt-10 print:mt-5">
            <SectionTitle id={c.sections.experience.id} title={c.sections.experience.title} />
            <div className="mt-4 space-y-6 print:space-y-3">
              {c.experience.map((e) => (
                <article key={e.role}>
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-semibold text-white">
                      {e.role}
                      <span className="font-normal text-slate-400">, {e.org}</span>
                    </h3>
                    <p className="shrink-0 text-sm text-accent-soft sm:pl-4">{e.period}</p>
                  </div>
                  <ul className="mt-1.5 space-y-1">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* 6. Tehnična znanja */}
          <section aria-labelledby={c.sections.skills.id} className="mt-10 print:mt-5">
            <SectionTitle id={c.sections.skills.id} title={c.sections.skills.title} />
            <dl className="mt-4 space-y-3">
              {c.skills.groups.map((g) => (
                <div key={g.label} className="sm:flex sm:gap-4">
                  <dt className="w-32 shrink-0 pt-0.5 text-sm font-medium text-slate-300">
                    {g.label}
                  </dt>
                  <dd>
                    <ul className="mt-1 flex flex-wrap gap-1.5 sm:mt-0">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-400 print:bg-transparent"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-slate-400">{c.skills.schoolNote}</p>
          </section>

          {/* 7. Izobrazba in jeziki */}
          <section aria-labelledby={c.sections.education.id} className="mt-10 print:mt-5">
            <SectionTitle id={c.sections.education.id} title={c.sections.education.title} />
            <p className="mt-4 text-slate-300">{c.education.school}</p>
            <p className="mt-2 text-sm text-slate-400">
              {c.education.languages.map((l, i) => (
                <span key={l.name}>
                  {i > 0 && <span aria-hidden="true"> · </span>}
                  <span className="text-slate-300">{l.name}</span> {l.level}
                </span>
              ))}
            </p>
          </section>

          {/* 8. Noga s pozivom. Brez tiska. */}
          <footer className="mt-12 rounded-2xl border border-white/10 bg-surface/60 p-6 print:hidden">
            <p className="text-lg font-semibold text-white">{c.cta.heading}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${shared.email}`}
                className="inline-flex items-center justify-center rounded-full bg-[#6344e8] px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {c.cta.email}
              </a>
              <a
                href={`tel:${c.header.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft"
              >
                {c.cta.phone}
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
