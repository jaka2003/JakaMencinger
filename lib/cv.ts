import type { Locale } from "./data";

/**
 * Vsebina samostojne CV strani (/cv in /en/cv) – vse na enem mestu.
 * Stran je mišljena kot povezava za delodajalce, zato je vsebina tu in ne v data.ts.
 */

export type CvProject = {
  title: string;
  /** Domena za prikaz (brez protokola); prazno => brez žive povezave. */
  linkLabel?: string;
  url?: string;
  /** Dodatek ob naslovu, ko ni povezave (npr. letnica). */
  meta?: string;
  description: string;
  bullets: string[];
  tech: string[];
};

export type CvExperience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export type CvSkillGroup = {
  label: string;
  items: string[];
};

export type CvContent = {
  meta: { title: string; description: string };
  ui: {
    backToSite: string;
    downloadPdf: string;
    available: string;
    copy: string;
    copied: string;
    opensInNewTab: string;
    navLabel: string;
  };
  nav: { href: string; label: string }[];
  header: {
    title: string;
    location: string;
    phone: string;
    cvUrl: string;
  };
  stats: { value: string; label: string }[];
  sections: {
    profile: { id: string; title: string };
    projects: { id: string; title: string };
    experience: { id: string; title: string };
    skills: { id: string; title: string };
    education: { id: string; title: string };
  };
  profile: string;
  projects: CvProject[];
  experience: CvExperience[];
  skills: { groups: CvSkillGroup[]; schoolNote: string };
  education: { school: string; languages: { name: string; level: string }[] };
  cta: { heading: string; email: string; phone: string };
};

const sl: CvContent = {
  meta: {
    title: "Jaka Mencinger – CV",
    description:
      "CV: razvijalec programske opreme iz Lesc. Trije produkti v produkciji, TypeScript, Python, PostgreSQL, AI v živi uporabi.",
  },

  ui: {
    backToSite: "Nazaj na stran",
    downloadPdf: "Prenesi PDF",
    available: "Na voljo za zaposlitev",
    copy: "Kopiraj e-naslov",
    copied: "Kopirano",
    opensInNewTab: "odpre se v novem zavihku",
    navLabel: "Kazalo CV strani",
  },

  nav: [
    { href: "#profil", label: "Profil" },
    { href: "#projekti", label: "Projekti" },
    { href: "#izkusnje", label: "Izkušnje" },
    { href: "#znanja", label: "Znanja" },
    { href: "#izobrazba", label: "Izobrazba" },
  ],

  header: {
    title: "Razvijalec programske opreme",
    location: "Lesce, Slovenija",
    phone: "051 328 817",
    cvUrl: "/cv-jaka-mencinger.pdf",
  },

  stats: [
    { value: "3", label: "produkti v produkciji" },
    { value: "~166.000", label: "vrstic lastne kode v 1.228 commitih" },
    { value: "886", label: "avtomatiziranih testov v največjem projektu" },
  ],

  sections: {
    profile: { id: "profil", title: "Profil" },
    projects: { id: "projekti", title: "Projekti" },
    experience: { id: "izkusnje", title: "Izkušnje" },
    skills: { id: "znanja", title: "Tehnična znanja" },
    education: { id: "izobrazba", title: "Izobrazba in jeziki" },
  },

  profile:
    "Inženir informatike iz Lesc. Zadnji dve leti sam gradim in vzdržujem spletne aplikacije v produkciji, od podatkovnega modela do plačil in vzdrževanja. Delam v TypeScriptu (Next.js, React, Prisma) in Pythonu (FastAPI, SQLAlchemy) nad PostgreSQL, AI pa imam v živi uporabi, ne v demu.",

  projects: [
    {
      title: "Kontrolnik",
      linkLabel: "kontrolnik.com",
      url: "https://kontrolnik.com",
      description:
        "SaaS za HACCP evidence v gostinstvu. Od prvega commita do produkcije v 34 dneh, prava restavracija ga uporablja vsak dan.",
      bullets: [
        "Deluje brez interneta: service worker in IndexedDB vrsta, podvajanje prepreči unique ključ v bazi",
        "AI branje dobavnic s shemsko validacijo, varovali in dnevno kvoto",
        "886 avtomatiziranih testov, od tega 397 integracijskih proti pravemu PostgreSQL",
        "Stripe naročnine, večnajemniška izolacija skozi eno vstopno točko",
      ],
      tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Docker"],
    },
    {
      title: "TvojAgent",
      linkLabel: "tvojagent.com",
      url: "https://tvojagent.com",
      description: "CRM za nepremičninske agente, hkrati moja diplomska naloga.",
      bullets: [
        "253 API poti, 29 tabel, okoli 84.500 vrstic",
        "Integracija z državnim katastrom GURS, vključno s pretvorbo koordinat D96/TM v WGS84",
        "Idempotentna obdelava Stripe webhookov prek tabele obdelanih dogodkov",
        "Javno podpisovanje pogodb prek povezave, PDF z UPN QR kodo",
      ],
      tech: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Next.js", "Docker"],
    },
    {
      title: "Multitenant platforma za lokalne volitve",
      meta: "2026",
      description:
        "Ena aplikacija postreže spletno stran za vsako od 212 slovenskih občin.",
      bullets: [
        "Najemnik se razreši iz Host glave, izolacija pri branju in pisanju",
        "Šifriranje osebnih podatkov z AES-256-GCM",
        "Elektronski podpis soglasij prek žetona, shranjenega samo kot sha256 hash",
        "36 vsebinskih zbirk, 14 vlog, 262 testov",
      ],
      tech: ["Next.js 15", "TypeScript", "Payload CMS", "PostgreSQL"],
    },
    {
      title: "Potepuh",
      linkLabel: "potepuh-trgovine.si",
      url: "https://www.potepuh-trgovine.si",
      description:
        "Shopify trgovina, postavljena iz nič oktobra 2024 in vodena še danes.",
      bullets: [
        "Katalog, kolekcije, nakupni proces, plačila, pravne strani",
        "Prilagoditev teme v Liquidu na živi temi, prek duplikata in predogleda",
        "Tagiranje 900 variant prek skripte proti Admin GraphQL API, z obhodom omejitve stroška poizvedbe",
      ],
      tech: ["Shopify", "Liquid"],
    },
    {
      title: "Čistilni servis VG",
      linkLabel: "cistilniservis-vg.si",
      url: "https://www.cistilniservis-vg.si",
      description:
        "Predstavitvena stran: storitve, kontaktni obrazec, SEO, mobilna optimizacija.",
      bullets: [],
      tech: ["Next.js", "Tailwind CSS"],
    },
  ],

  experience: [
    {
      role: "Junior Software Engineer",
      org: "Uroš Mencinger s.p.",
      period: "okt. 2025 – danes",
      bullets: [
        "Produkcijo vodim sam: deployi, migracije baze, backupi, alerti",
        "AI funkcije v produkciji prek Anthropic API",
        "Delo z naročniki od zahtev do predaje",
      ],
    },
    {
      role: "Razvoj spletnih rešitev, samostojno",
      org: "Shopify trgovine in spletne strani za naročnike",
      period: "okt. 2024 – okt. 2025",
      bullets: [
        "Postavil in objavil Shopify trgovino Potepuh: katalog, kolekcije, nakupni proces, plačila",
        "Spletne strani za naročnike z Next.js in CMS, ki ga stranka ureja sama",
      ],
    },
    {
      role: "Praktikant za razvoj programske opreme",
      org: "Logix",
      period: "3 mesece",
      bullets: [
        "Praktično usposabljanje na področju razvoja programske opreme",
        "Spoznal delo v razvojni ekipi in delovne procese podjetja",
      ],
    },
  ],

  skills: {
    groups: [
      { label: "Jeziki", items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"] },
      { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { label: "Backend", items: ["FastAPI", "Prisma", "Payload CMS"] },
      { label: "Baze", items: ["PostgreSQL", "Relacijske baze podatkov"] },
      { label: "AI integracije", items: ["Anthropic API", "OCR", "Structured outputs"] },
      { label: "Infrastruktura", items: ["Docker", "Stripe"] },
      { label: "Testiranje", items: ["Vitest", "Playwright"] },
      { label: "Ostalo", items: ["Git / GitHub", "Shopify", "Liquid", "SaaS aplikacije", "CRM sistemi"] },
    ],
    schoolNote: "Šolsko znanje: C# in .NET, brez produkcijske kode.",
  },

  education: {
    school: "Inženir informatike, Višja strokovna šola Kranj, smer informatika",
    languages: [
      { name: "Slovenščina", level: "materni jezik" },
      { name: "Angleščina", level: "B2" },
      { name: "Srbohrvaščina", level: "osnovno" },
    ],
  },

  cta: {
    heading: "Iščeš razvijalca? Piši mi.",
    email: "Pošlji e-pošto",
    phone: "Pokliči",
  },
};

const en: CvContent = {
  meta: {
    title: "Jaka Mencinger – CV",
    description:
      "CV: Software Developer from Lesce, Slovenia. Three products in production, TypeScript, Python, PostgreSQL, AI in live use.",
  },

  ui: {
    backToSite: "Back to site",
    downloadPdf: "Download PDF",
    available: "Available for work",
    copy: "Copy email",
    copied: "Copied",
    opensInNewTab: "opens in a new tab",
    navLabel: "CV page contents",
  },

  nav: [
    { href: "#profile", label: "Profile" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
  ],

  header: {
    title: "Software Developer",
    location: "Lesce, Slovenia",
    phone: "+386 51 328 817",
    cvUrl: "/cv-jaka-mencinger-en.pdf",
  },

  stats: [
    { value: "3", label: "products in production" },
    { value: "~166,000", label: "lines of my own code across 1,228 commits" },
    { value: "886", label: "automated tests in the largest project" },
  ],

  sections: {
    profile: { id: "profile", title: "Profile" },
    projects: { id: "projects", title: "Projects" },
    experience: { id: "experience", title: "Experience" },
    skills: { id: "skills", title: "Technical skills" },
    education: { id: "education", title: "Education and languages" },
  },

  profile:
    "Engineer of Informatics from Lesce, Slovenia. For the past two years I have been building and maintaining production web applications on my own, from data model to payments and maintenance. I work in TypeScript (Next.js, React, Prisma) and Python (FastAPI, SQLAlchemy) on PostgreSQL, and my AI features run in production, not in demos.",

  projects: [
    {
      title: "Kontrolnik",
      linkLabel: "kontrolnik.com",
      url: "https://kontrolnik.com",
      description:
        "SaaS for HACCP compliance records in food service. From first commit to production in 34 days, a real restaurant uses it every day.",
      bullets: [
        "Works offline: a service worker and an IndexedDB queue, duplicates prevented by a unique key in the database",
        "AI reading of delivery notes with schema validation, guards and a daily quota",
        "886 automated tests, 397 of them integration tests against a real PostgreSQL",
        "Stripe subscriptions, multi-tenant isolation through a single entry point",
      ],
      tech: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Docker"],
    },
    {
      title: "TvojAgent",
      linkLabel: "tvojagent.com",
      url: "https://tvojagent.com",
      description: "CRM for real-estate agents, also my graduation thesis.",
      bullets: [
        "253 API routes, 29 tables, around 84,500 lines",
        "Integration with the national GURS cadastre, including D96/TM to WGS84 coordinate conversion",
        "Idempotent Stripe webhook processing via a table of processed events",
        "Public contract signing via a link, PDFs with UPN QR codes",
      ],
      tech: ["FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "Next.js", "Docker"],
    },
    {
      title: "Multi-tenant platform for local elections",
      meta: "2026",
      description:
        "One application serves a website for each of Slovenia's 212 municipalities.",
      bullets: [
        "Tenant resolved from the Host header, isolation on both reads and writes",
        "Personal data encrypted with AES-256-GCM",
        "Electronic signing of consents via a token stored only as a sha256 hash",
        "36 content collections, 14 roles, 262 tests",
      ],
      tech: ["Next.js 15", "TypeScript", "Payload CMS", "PostgreSQL"],
    },
    {
      title: "Potepuh",
      linkLabel: "potepuh-trgovine.si",
      url: "https://www.potepuh-trgovine.si",
      description:
        "Shopify store, built from scratch in October 2024 and still run today.",
      bullets: [
        "Catalogue, collections, checkout, payments, legal pages",
        "Theme customisation in Liquid on a live theme, via a duplicate and preview",
        "Tagged 900 variants with a script against the Admin GraphQL API, working around the query cost limit",
      ],
      tech: ["Shopify", "Liquid"],
    },
    {
      title: "Čistilni servis VG",
      linkLabel: "cistilniservis-vg.si",
      url: "https://www.cistilniservis-vg.si",
      description:
        "Marketing website: services, contact form, SEO, mobile optimization.",
      bullets: [],
      tech: ["Next.js", "Tailwind CSS"],
    },
  ],

  experience: [
    {
      role: "Junior Software Engineer",
      org: "Uroš Mencinger s.p.",
      period: "Oct 2025 – present",
      bullets: [
        "I run production myself: deploys, database migrations, backups, alerting",
        "AI features in production via the Anthropic API",
        "Client work from requirements to delivery",
      ],
    },
    {
      role: "Freelance web development",
      org: "Shopify stores and websites for clients",
      period: "Oct 2024 – Oct 2025",
      bullets: [
        "Built and launched the Potepuh Shopify store: catalogue, collections, checkout, payments",
        "Client websites in Next.js with a CMS the client manages independently",
      ],
    },
    {
      role: "Software development intern",
      org: "Logix",
      period: "3 months",
      bullets: [
        "Hands-on training in software development",
        "Learned how a development team and company processes work",
      ],
    },
  ],

  skills: {
    groups: [
      { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"] },
      { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
      { label: "Backend", items: ["FastAPI", "Prisma", "Payload CMS"] },
      { label: "Databases", items: ["PostgreSQL", "Relational databases"] },
      { label: "AI integrations", items: ["Anthropic API", "OCR", "Structured outputs"] },
      { label: "Infrastructure", items: ["Docker", "Stripe"] },
      { label: "Testing", items: ["Vitest", "Playwright"] },
      { label: "Other", items: ["Git / GitHub", "Shopify", "Liquid", "SaaS applications", "CRM systems"] },
    ],
    schoolNote: "Coursework only: C# and .NET, no production code.",
  },

  education: {
    school: "Engineer of Informatics, Višja strokovna šola Kranj, Informatics",
    languages: [
      { name: "Slovenian", level: "native" },
      { name: "English", level: "B2" },
      { name: "Serbo-Croatian", level: "basic" },
    ],
  },

  cta: {
    heading: "Looking for a developer? Write to me.",
    email: "Send an email",
    phone: "Call",
  },
};

export const cvContent: Record<Locale, CvContent> = { sl, en };
