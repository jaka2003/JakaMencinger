import type { MetadataRoute } from "next";
import { shared } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    sl: shared.siteUrl,
    en: `${shared.siteUrl}/en`,
  };

  return [
    {
      url: shared.siteUrl,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${shared.siteUrl}/en`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
  ];
}
