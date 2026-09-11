import type { Metadata } from "next";
import { content, shared, type Locale } from "./data";
import { cvContent } from "./cv";

/** Metadata za jezikovni layout – naslov, opis, OG in hreflang alternates. */
export function buildMetadata(locale: Locale): Metadata {
  const c = content[locale];
  const path = locale === "sl" ? "/" : "/en";

  return {
    metadataBase: new URL(shared.siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    authors: [{ name: shared.name }],
    alternates: {
      canonical: path,
      languages: {
        sl: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: path,
      siteName: shared.name,
      type: "website",
      locale: c.meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
  };
}

/** Metadata za samostojno CV stran (/cv in /en/cv). */
export function buildCvMetadata(locale: Locale): Metadata {
  const c = cvContent[locale];
  const path = locale === "sl" ? "/cv" : "/en/cv";

  return {
    metadataBase: new URL(shared.siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    authors: [{ name: shared.name }],
    alternates: {
      canonical: path,
      languages: {
        sl: "/cv",
        en: "/en/cv",
        "x-default": "/cv",
      },
    },
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      url: path,
      siteName: shared.name,
      type: "profile",
      locale: content[locale].meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
  };
}
