"use client";

import { useState } from "react";
import { content, type Locale, type Project } from "@/lib/data";

/** Gumb za povezavo – če povezave (še) ni, je prikazan kot neaktiven. */
function LinkButton({
  href,
  children,
  linkSoon,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  linkSoon: string;
  primary?: boolean;
}) {
  const base =
    "inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        title={linkSoon}
        className={`${base} cursor-not-allowed border border-white/10 text-slate-500`}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? `${base} bg-accent text-white hover:bg-accent-soft`
          : `${base} border border-white/15 text-white hover:border-accent hover:bg-white/5`
      }
    >
      {children}
    </a>
  );
}

export default function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const t = content[locale].projectCard;
  const [imgOk, setImgOk] = useState(true);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10">
      {/* Slika projekta (z lepim placeholderjem, dokler slike ni) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface to-ink">
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={t.previewAlt(project.title)}
            onError={() => setImgOk(false)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-cyan/20 blur-2xl" />
            <span className="relative text-2xl font-bold text-white/80">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {f}
            </li>
          ))}
        </ul>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
              {t.technologies}
            </span>
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-soft"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-3 pt-6">
          <LinkButton href={project.liveUrl} linkSoon={t.linkSoon} primary>
            Live demo
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
