import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="izkusnje"
      eyebrow="Izkušnje"
      title="Moja pot"
      className="bg-surface/30"
    >
      <div className="relative">
        {/* Navpična črta časovnice */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-white/15 to-transparent sm:left-[9px]" />

        <ul className="space-y-8">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 100}>
              <li className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink sm:h-[18px] sm:w-[18px]" />
                <div className="rounded-2xl border border-white/10 bg-surface/60 p-6 transition-colors hover:border-accent/40">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-accent-soft">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-slate-400">{exp.org}</p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
