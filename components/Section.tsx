import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** Enoten ovoj za sekcije: razmiki, naslov in oznaka. */
export default function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 sm:mb-16">
            {eyebrow && (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent-soft">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
