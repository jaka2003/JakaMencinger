import Section from "./Section";
import Reveal from "./Reveal";
import { content, shared, type Locale } from "@/lib/data";

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.7}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.7}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.7}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Contact({ locale }: { locale: Locale }) {
  const c = content[locale];
  const s = c.sections.contact;
  const socials = [{ label: "GitHub", href: shared.github }];

  return (
    <Section id={s.id} eyebrow={s.eyebrow} title={s.title}>
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-slate-300">
            {c.contact.text}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${shared.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:bg-accent-soft"
            >
              <EmailIcon /> {c.contact.sendEmail}
            </a>

            <a
              href={c.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-white/5"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              {c.contact.downloadCv}
            </a>

            {socials.map((so) =>
              so.href ? (
                <a
                  key={so.label}
                  href={so.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:bg-white/5"
                >
                  {so.label}
                </a>
              ) : (
                <span
                  key={so.label}
                  aria-disabled="true"
                  title={c.contact.linkSoon}
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-white/10 px-6 py-3 font-medium text-slate-500"
                >
                  {so.label}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${shared.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                  <EmailIcon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">{c.contact.emailLabel}</span>
                  <span className="font-medium text-white">{shared.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${c.personal.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-slate-500">{c.contact.phoneLabel}</span>
                  <span className="font-medium text-white">{c.personal.phone}</span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-white/10 bg-surface/60 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <PinIcon />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-slate-500">{c.contact.locationLabel}</span>
                <span className="font-medium text-white">{c.personal.location}</span>
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
