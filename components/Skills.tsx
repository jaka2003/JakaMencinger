import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="znanja" eyebrow="Tehnična znanja" title="S čim delam">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <Reveal key={skill} delay={i * 40}>
            <span className="inline-flex items-center rounded-xl border border-white/10 bg-surface/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-white">
              {skill}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
