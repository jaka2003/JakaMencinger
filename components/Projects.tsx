import Section from "./Section";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { content, type Locale } from "@/lib/data";

export default function Projects({ locale }: { locale: Locale }) {
  const c = content[locale];
  const s = c.sections.projects;

  return (
    <Section id={s.id} eyebrow={s.eyebrow} title={s.title} className="bg-surface/30">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {c.projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard project={project} locale={locale} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
