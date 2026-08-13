import Section from "./Section";
import Reveal from "./Reveal";
import { content, type Locale } from "@/lib/data";

export default function About({ locale }: { locale: Locale }) {
  const c = content[locale];
  const s = c.sections.about;

  return (
    <Section id={s.id} eyebrow={s.eyebrow} title={s.title}>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            {c.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>
              {c.about.interest.before}
              <span className="font-medium text-white">{c.about.interest.strong}</span>
              {c.about.interest.after}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {c.about.highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-accent/40 hover:bg-surface">
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
