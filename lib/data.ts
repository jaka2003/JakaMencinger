/**
 * Centralno mesto za vsebino strani.
 * Tukaj enostavno urejaš besedila, povezave in slike – brez brskanja po komponentah.
 */

export const personal = {
  name: "Jaka Mencinger",
  title: "Razvijalec programske opreme",
  location: "Lesce, Slovenija",
  email: "jack.mencinger@gmail.com",
  phone: "051 328 817",

  // TODO: ko dobiš domeno, vpiši produkcijski URL (za SEO / OG predogled ob deljenju).
  //       Do takrat pusti placeholder – deluje, samo predogled kaže ta naslov.
  siteUrl: "https://jakamencinger.si",

  github: "https://github.com/jaka2003",

  // CV za prenos (leži v /public). Zamenjaš datoteko in pot ostane ista.
  cvUrl: "/cv-jaka-mencinger.pdf",

  heroText:
    "Diplomiran informatik z izkušnjami pri razvoju spletnih aplikacij, SaaS rešitev in CMS sistemov. Razvijam praktične rešitve s poudarkom na čisti uporabniški izkušnji – od zasnove do delujočega produkta.",
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  features: string[];
  tech: string[]; // uporabljene tehnologije (prikazane ločeno pod funkcijami)
  image: string; // pot do slike v /public
  liveUrl: string; // "" => gumb je neaktiven (placeholder)
  githubUrl: string; // "" => gumb je neaktiven (placeholder)
};

export const projects: Project[] = [
  {
    id: "tvojagent",
    title: "TvojAgent CRM",
    tag: "Nepremičninski CRM SaaS",
    description:
      "SaaS aplikacija za nepremičninske agente, namenjena upravljanju nepremičnin, strank, ogledov, oglasov, pogodb in vsakodnevnega dela agenta.",
    features: [
      "Upravljanje nepremičnin",
      "Stranke in kontakti",
      "Ogledi in statusi",
      "Oglasi, pogodbe, računi",
      "Dashboard za pregled dela",
    ],
    tech: ["React", "Next.js", "Python", "PostgreSQL"],
    image: "/projects/tvojagent.png",
    liveUrl: "https://tvojagent.com",
    githubUrl: "", // TODO: GitHub link (če je repo javen)
  },
  {
    id: "demokrati",
    title: "Demokrati Radovljica",
    tag: "Spletna stran + CMS",
    description:
      "Spletna stran in CMS za lokalno politično organizacijo – upravljanje novic, dogodkov, članstva in gradiv, enostavno za netehnične uporabnike.",
    features: [
      "Javna predstavitvena stran",
      "Interni CMS",
      "Novice in dogodki",
      "Upravljanje članstva",
      "Enostavna uporaba",
    ],
    tech: ["Next.js", "Payload CMS"],
    image: "/projects/demokrati.png",
    liveUrl: "https://demokratiradovljica.com",
    githubUrl: "", // TODO: GitHub link (če je repo javen)
  },
  {
    id: "ciscenje",
    title: "Spletna stran za čistilno podjetje",
    tag: "Predstavitvena spletna stran",
    description:
      "Moderna predstavitvena spletna stran za čistilni servis, namenjena pridobivanju novih strank in jasni predstavitvi storitev.",
    features: [
      "Predstavitev storitev",
      "Kontaktni obrazec",
      "CTA gumbi",
      "Moderna vizualna podoba",
      "Mobilna optimizacija",
    ],
    tech: ["Next.js", "Tailwind CSS", "SEO"],
    image: "/projects/cistilniservis.png",
    liveUrl: "https://www.cistilniservis-vg.si",
    githubUrl: "", // TODO: GitHub link (če je repo javen)
  },
  {
    id: "potepuh",
    title: "Potepuh",
    tag: "Spletna trgovina",
    description:
      "Spletna trgovina z ženskimi oblačili, postavljena na platformi Shopify – od kataloga izdelkov in kolekcij do nakupnega procesa.",
    features: [
      "Katalog izdelkov",
      "Kolekcije in kategorije",
      "Košarica in nakupni proces",
      "Urejanje vsebine",
      "Mobilna optimizacija",
    ],
    tech: ["Shopify", "E-commerce"],
    image: "/projects/potepuh.png",
    liveUrl: "https://www.potepuh-trgovine.si",
    githubUrl: "",
  },
];

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "PostgreSQL",
  "Payload CMS",
  "Shopify",
  "Git / GitHub",
  "SaaS aplikacije",
  "CRM sistemi",
  "SEO osnove",
  "Relacijske baze podatkov",
  "Responsive design",
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Oblikovalec in razvijalec (SaaS in spletne strani)",
    org: "Samostojno delo / projekti za naročnike",
    period: "1 leto",
    bullets: [
      "Oblikoval in razvil SaaS rešitev – CRM sistem za nepremičninske agente.",
      "Sodeloval s strankami od zasnove do končne izvedbe.",
      "Razvoj odzivnih (responsive) spletnih strani.",
      "Integracija CMS sistemov.",
      "Optimizacija hitrosti in SEO.",
      "Načrtovanje podatkovnih modelov.",
    ],
  },
  {
    role: "Praktikant – razvoj programske opreme",
    org: "Logix",
    period: "3 mesece",
    bullets: [
      "Praktično usposabljanje na področju razvoja programske opreme.",
      "Spoznal delo v razvojni ekipi in delovne procese podjetja.",
    ],
  },
  {
    role: "Natakar – študentsko delo",
    org: "Gostinstvo",
    period: "3 leta",
    bullets: [
      "Razvil odlične komunikacijske sposobnosti, delo pod pritiskom in timsko sodelovanje.",
    ],
  },
];

export type Education = {
  school: string;
  degree: string;
  field: string;
};

export const education: Education[] = [
  {
    school: "Višja strokovna šola Kranj",
    degree: "Diploma",
    field: "Smer: Informatika",
  },
];

export type Language = {
  name: string;
  level: string;
};

export const languages: Language[] = [
  { name: "Slovenščina", level: "materni jezik" },
  { name: "Angleščina", level: "B2" },
  { name: "Srbohrvaščina", level: "osnovno znanje" },
];
