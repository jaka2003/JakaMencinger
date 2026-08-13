/**
 * Centralno mesto za vsebino strani – v obeh jezikih.
 * "sl" je na "/", "en" na "/en". Vsa besedila urejaš tukaj – brez brskanja po komponentah.
 */

export type Locale = "sl" | "en";

export const locales: Locale[] = ["sl", "en"];

/** Podatki, ki so enaki v obeh jezikih. */
export const shared = {
  name: "Jaka Mencinger",
  email: "jack.mencinger@gmail.com",
  siteUrl: "https://jakamencinger.dev",
  github: "https://github.com/jaka2003",
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

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
};

export type LanguageItem = {
  name: string;
  level: string;
};

type SectionHead = { id: string; eyebrow: string; title: string };

export type SiteContent = {
  personal: {
    title: string;
    location: string;
    phone: string;
    heroText: string;
    cvUrl: string; // CV za prenos (leži v /public)
  };
  nav: {
    links: { href: string; label: string }[];
    cta: string;
    menuLabel: string;
    openMenu: string;
  };
  hero: {
    available: string;
    viewProjects: string;
    contactMe: string;
    downloadCv: string;
  };
  sections: {
    about: SectionHead;
    projects: SectionHead;
    skills: SectionHead;
    experience: SectionHead;
    education: SectionHead;
    contact: SectionHead;
  };
  about: {
    paragraphs: [string, string];
    // Tretji odstavek s poudarjenim delom (bel, polkrepek tekst).
    interest: { before: string; strong: string; after: string };
    highlights: { title: string; text: string }[];
  };
  projectCard: {
    technologies: string;
    linkSoon: string;
    previewAlt: (title: string) => string;
  };
  projects: Project[];
  skills: string[];
  experience: ExperienceItem[];
  education: { title: string; items: EducationItem[] };
  languages: { title: string; items: LanguageItem[] };
  contact: {
    text: string;
    sendEmail: string;
    downloadCv: string;
    linkSoon: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogLocale: string;
  };
};

const sl: SiteContent = {
  personal: {
    title: "Razvijalec programske opreme",
    location: "Lesce, Slovenija",
    phone: "051 328 817",
    heroText:
      "Diplomiran informatik z izkušnjami pri razvoju spletnih aplikacij, SaaS rešitev in CMS sistemov. Razvijam praktične rešitve s poudarkom na čisti uporabniški izkušnji – od zasnove do delujočega produkta.",
    cvUrl: "/cv-jaka-mencinger.pdf",
  },

  nav: {
    links: [
      { href: "#o-meni", label: "O meni" },
      { href: "#projekti", label: "Projekti" },
      { href: "#znanja", label: "Znanja" },
      { href: "#izkusnje", label: "Izkušnje" },
      { href: "#izobrazba", label: "Izobrazba" },
      { href: "#kontakt", label: "Kontakt" },
    ],
    cta: "Pošlji sporočilo",
    menuLabel: "Meni",
    openMenu: "Odpri meni",
  },

  hero: {
    available: "Na voljo za zaposlitev",
    viewProjects: "Poglej projekte",
    contactMe: "Kontaktiraj me",
    downloadCv: "Prenesi CV",
  },

  sections: {
    about: { id: "o-meni", eyebrow: "O meni", title: "Kdo sem" },
    projects: { id: "projekti", eyebrow: "Projekti", title: "Izbrani projekti" },
    skills: { id: "znanja", eyebrow: "Tehnična znanja", title: "S čim delam" },
    experience: { id: "izkusnje", eyebrow: "Izkušnje", title: "Moja pot" },
    education: { id: "izobrazba", eyebrow: "Izobrazba & jeziki", title: "Ozadje" },
    contact: { id: "kontakt", eyebrow: "Kontakt", title: "Stopiva v stik" },
  },

  about: {
    paragraphs: [
      "Diplomiran informatik iz Lesc, z izkušnjami pri razvoju spletnih aplikacij, SaaS rešitev in CMS sistemov.",
      "Razvil sem CRM za nepremičninske agente in več spletnih strani za naročnike – od zasnove in oblikovanja do končne izvedbe ter komunikacije s strankami.",
    ],
    interest: {
      before: "Zanima me razvoj sodobnih spletnih aplikacij, kjer lahko nadgrajujem znanje ",
      strong: "Reacta, TypeScripta in backend tehnologij",
      after: ".",
    },
    highlights: [
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
    ],
  },

  projectCard: {
    technologies: "Tehnologije",
    linkSoon: "Povezava bo dodana kmalu",
    previewAlt: (title) => `Predogled projekta ${title}`,
  },

  projects: [
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
  ],

  skills: [
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
  ],

  experience: [
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
  ],

  education: {
    title: "Izobrazba",
    items: [
      {
        school: "Višja strokovna šola Kranj",
        degree: "Diploma",
        field: "Smer: Informatika",
      },
    ],
  },

  languages: {
    title: "Jeziki",
    items: [
      { name: "Slovenščina", level: "materni jezik" },
      { name: "Angleščina", level: "B2" },
      { name: "Srbohrvaščina", level: "osnovno znanje" },
    ],
  },

  contact: {
    text: "Iščeš razvijalca za zaposlitev? Z veseljem se pogovorim o priložnostih, projektih ali sodelovanju. Najhitreje me dobiš po e-pošti.",
    sendEmail: "Pošlji e-pošto",
    downloadCv: "Prenesi CV",
    linkSoon: "Povezava bo dodana kmalu",
    emailLabel: "E-pošta",
    phoneLabel: "Telefon",
    locationLabel: "Lokacija",
  },

  footer: {
    rights: "Vse pravice pridržane.",
    madeWith: "Izdelano z Next.js & Tailwind CSS",
  },

  meta: {
    title: "Jaka Mencinger – Razvijalec programske opreme",
    description:
      "Diplomiran informatik z izkušnjami pri razvoju spletnih aplikacij, SaaS rešitev in CMS sistemov. Razvijam praktične rešitve s poudarkom na čisti uporabniški izkušnji – od zasnove do delujočega produkta.",
    keywords: [
      "Jaka Mencinger",
      "Junior Developer",
      "Web Developer",
      "React",
      "Next.js",
      "Slovenija",
      "Lesce",
    ],
    ogLocale: "sl_SI",
  },
};

const en: SiteContent = {
  personal: {
    title: "Software Developer",
    location: "Lesce, Slovenia",
    phone: "+386 51 328 817",
    heroText:
      "Informatics graduate with experience building web applications, SaaS products and CMS systems. I build practical solutions with a focus on clean user experience — from concept to working product.",
    cvUrl: "/cv-jaka-mencinger-en.pdf",
  },

  nav: {
    links: [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Send a message",
    menuLabel: "Menu",
    openMenu: "Open menu",
  },

  hero: {
    available: "Available for work",
    viewProjects: "View projects",
    contactMe: "Contact me",
    downloadCv: "Download CV",
  },

  sections: {
    about: { id: "about", eyebrow: "About me", title: "Who I am" },
    projects: { id: "projects", eyebrow: "Projects", title: "Selected projects" },
    skills: { id: "skills", eyebrow: "Technical skills", title: "What I work with" },
    experience: { id: "experience", eyebrow: "Experience", title: "My path" },
    education: { id: "education", eyebrow: "Education & languages", title: "Background" },
    contact: { id: "contact", eyebrow: "Contact", title: "Let's get in touch" },
  },

  about: {
    paragraphs: [
      "Informatics graduate from Lesce, Slovenia, with experience building web applications, SaaS products and CMS systems.",
      "I built a CRM for real-estate agents and several client websites — from concept and design to final delivery and client communication.",
    ],
    interest: {
      before: "I'm drawn to modern web application development, where I can keep deepening my knowledge of ",
      strong: "React, TypeScript and backend technologies",
      after: ".",
    },
    highlights: [
      {
        title: "Client websites",
        text: "Experience building modern websites from concept to launch.",
      },
      {
        title: "SaaS development",
        text: "Built a SaaS CRM for real-estate agents — from idea to working product.",
      },
      {
        title: "Industry internship",
        text: "Software development internship at Logix.",
      },
      {
        title: "Teamwork",
        text: "Strong communication, reliability, fast learning and team collaboration.",
      },
    ],
  },

  projectCard: {
    technologies: "Technologies",
    linkSoon: "Link coming soon",
    previewAlt: (title) => `Preview of ${title}`,
  },

  projects: [
    {
      id: "tvojagent",
      title: "TvojAgent CRM",
      tag: "Real-estate CRM SaaS",
      description:
        "SaaS application for real-estate agents covering properties, clients, viewings, listings, contracts and the agent's day-to-day work.",
      features: [
        "Property management",
        "Clients & contacts",
        "Viewings & statuses",
        "Listings, contracts, invoices",
        "Work overview dashboard",
      ],
      tech: ["React", "Next.js", "Python", "PostgreSQL"],
      image: "/projects/tvojagent.png",
      liveUrl: "https://tvojagent.com",
      githubUrl: "",
    },
    {
      id: "demokrati",
      title: "Demokrati Radovljica",
      tag: "Website + CMS",
      description:
        "Website and CMS for a local political organization — news, events, membership and materials, easy to manage for non-technical users.",
      features: [
        "Public website",
        "Internal CMS",
        "News & events",
        "Membership management",
        "Simple to use",
      ],
      tech: ["Next.js", "Payload CMS"],
      image: "/projects/demokrati.png",
      liveUrl: "https://demokratiradovljica.com",
      githubUrl: "",
    },
    {
      id: "ciscenje",
      title: "Cleaning company website",
      tag: "Marketing website",
      description:
        "Modern marketing website for a cleaning service, built to win new clients and present the services clearly.",
      features: [
        "Service presentation",
        "Contact form",
        "CTA buttons",
        "Modern visual identity",
        "Mobile optimization",
      ],
      tech: ["Next.js", "Tailwind CSS", "SEO"],
      image: "/projects/cistilniservis.png",
      liveUrl: "https://www.cistilniservis-vg.si",
      githubUrl: "",
    },
    {
      id: "potepuh",
      title: "Potepuh",
      tag: "Online store",
      description:
        "Women's clothing online store built on Shopify — from product catalog and collections to the full checkout flow.",
      features: [
        "Product catalog",
        "Collections & categories",
        "Cart & checkout",
        "Content management",
        "Mobile optimization",
      ],
      tech: ["Shopify", "E-commerce"],
      image: "/projects/potepuh.png",
      liveUrl: "https://www.potepuh-trgovine.si",
      githubUrl: "",
    },
  ],

  skills: [
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
    "SaaS applications",
    "CRM systems",
    "SEO fundamentals",
    "Relational databases",
    "Responsive design",
  ],

  experience: [
    {
      role: "Designer & developer (SaaS and websites)",
      org: "Independent work / client projects",
      period: "1 year",
      bullets: [
        "Designed and built a SaaS product — a CRM system for real-estate agents.",
        "Worked with clients from concept to final delivery.",
        "Built responsive websites.",
        "Integrated CMS systems.",
        "Performance and SEO optimization.",
        "Data model design.",
      ],
    },
    {
      role: "Software development intern",
      org: "Logix",
      period: "3 months",
      bullets: [
        "Hands-on training in software development.",
        "Learned how a development team and company processes work.",
      ],
    },
    {
      role: "Waiter — student job",
      org: "Hospitality",
      period: "3 years",
      bullets: [
        "Developed strong communication skills, working under pressure and teamwork.",
      ],
    },
  ],

  education: {
    title: "Education",
    items: [
      {
        school: "Višja strokovna šola Kranj",
        degree: "Higher vocational diploma",
        field: "Informatics",
      },
    ],
  },

  languages: {
    title: "Languages",
    items: [
      { name: "Slovenian", level: "native" },
      { name: "English", level: "B2" },
      { name: "Serbo-Croatian", level: "basic" },
    ],
  },

  contact: {
    text: "Looking for a developer to join your team? I'm happy to talk about opportunities, projects or collaboration. Email is the fastest way to reach me.",
    sendEmail: "Send an email",
    downloadCv: "Download CV",
    linkSoon: "Link coming soon",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
  },

  footer: {
    rights: "All rights reserved.",
    madeWith: "Built with Next.js & Tailwind CSS",
  },

  meta: {
    title: "Jaka Mencinger – Software Developer",
    description:
      "Informatics graduate with experience building web applications, SaaS products and CMS systems. I build practical solutions with a focus on clean user experience — from concept to working product.",
    keywords: [
      "Jaka Mencinger",
      "Junior Developer",
      "Web Developer",
      "React",
      "Next.js",
      "Slovenia",
      "Lesce",
    ],
    ogLocale: "en_US",
  },
};

export const content: Record<Locale, SiteContent> = { sl, en };
