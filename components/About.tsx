import Section from "./Section";
import Reveal from "./Reveal";

const highlights = [
  {
    title: "Spletne strani za stranke",
    text: "Izkušnje z izdelavo modernih spletnih strani od zasnove do objave.",
  },
  {
    title: "SaaS razvoj",
    text: "Razvoj SaaS CRM sistema za nepremičninske agente – od ideje do delujočega produkta.",
  },
  {
    title: "Praksa v podjetju",
    text: "Praksa v podjetju Logix na področju razvoja programske opreme.",
  },
  {
    title: "Delo v ekipi",
    text: "Dobra komunikacija, zanesljivost, hitro učenje in sodelovanje v ekipi.",
  },
];

export default function About() {
  return (
    <Section id="o-meni" eyebrow="O meni" title="Kdo sem">
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Diplomiran informatik iz Lesc, z izkušnjami pri razvoju spletnih
              aplikacij, SaaS rešitev in CMS sistemov.
            </p>
            <p>
              Razvil sem CRM za nepremičninske agente in več spletnih strani za
              naročnike – od zasnove in oblikovanja do končne izvedbe ter
              komunikacije s strankami.
            </p>
            <p>
              Zanima me razvoj sodobnih spletnih aplikacij, kjer lahko
              nadgrajujem znanje{" "}
              <span className="font-medium text-white">
                Reacta, TypeScripta in backend tehnologij
              </span>
              .
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {highlights.map((item, i) => (
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
