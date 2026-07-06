import Section from "./Section";
import Reveal from "./Reveal";
import { education, languages } from "@/lib/data";

const CapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.7}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={1.7}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9S9.5 5.5 12 3Z" />
  </svg>
);

export default function Education() {
  return (
    <Section id="izobrazba" eyebrow="Izobrazba & jeziki" title="Ozadje">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6">
            <div className="mb-5 flex items-center gap-3 text-accent-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                <CapIcon />
              </span>
              <h3 className="text-lg font-semibold text-white">Izobrazba</h3>
            </div>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-medium text-white">{e.school}</p>
                  <p className="text-sm text-slate-400">
                    {e.degree} · {e.field}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6">
            <div className="mb-5 flex items-center gap-3 text-accent-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15">
                <GlobeIcon />
              </span>
              <h3 className="text-lg font-semibold text-white">Jeziki</h3>
            </div>
            <ul className="space-y-3">
              {languages.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-white">{l.name}</span>
                  <span className="text-sm text-slate-400">{l.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
