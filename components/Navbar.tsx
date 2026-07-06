"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

const links = [
  { href: "#o-meni", label: "O meni" },
  { href: "#projekti", label: "Projekti" },
  { href: "#znanja", label: "Znanja" },
  { href: "#izkusnje", label: "Izkušnje" },
  { href: "#izobrazba", label: "Izobrazba" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
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
        <a href="#" className="text-base font-semibold tracking-tight text-white">
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

        <a
          href={`mailto:${personal.email}`}
          className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10 md:inline-block"
        >
          Pošlji sporočilo
        </a>

        {/* Mobilni gumb */}
        <button
          type="button"
          aria-label="Meni"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
        >
          <span className="sr-only">Odpri meni</span>
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
                href={`mailto:${personal.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-accent px-3 py-2 text-center font-medium text-white"
              >
                Pošlji sporočilo
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
