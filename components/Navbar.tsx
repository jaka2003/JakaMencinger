"use client";

import { useEffect, useState } from "react";
import { content, shared, type Locale } from "@/lib/data";

/** SL/EN preklopnik – navaden <a>, ker sta jezika ločeni statični strani. */
function LocaleSwitch({ locale }: { locale: Locale }) {
  const item = (l: Locale, href: string) => (
    <a
      href={href}
      aria-current={locale === l ? "page" : undefined}
      className={`rounded-full px-2.5 py-1 transition-colors ${
        locale === l ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
      }`}
    >
      {l.toUpperCase()}
    </a>
  );

  return (
    <div className="flex items-center rounded-full border border-white/15 p-0.5 text-xs font-medium">
      {item("sl", "/")}
      {item("en", "/en")}
    </div>
  );
}

export default function Navbar({ locale }: { locale: Locale }) {
  const c = content[locale];
  const links = c.nav.links;

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href={locale === "sl" ? "/" : "/en"} className="text-base font-semibold tracking-tight text-white">
          Jaka<span className="text-accent-soft">.</span>
        </a>

        {/* Namizna navigacija */}
        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LocaleSwitch locale={locale} />

          <a
            href={`mailto:${shared.email}`}
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10 md:inline-block"
          >
            {c.nav.cta}
          </a>

          {/* Mobilni gumb */}
          <button
            type="button"
            aria-label={c.nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          >
            <span className="sr-only">{c.nav.openMenu}</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobilni meni */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-5 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${shared.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-accent px-3 py-2 text-center font-medium text-white"
              >
                {c.nav.cta}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
