import type { MetadataRoute } from "next";
import { personal } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personal.siteUrl,
      lastModified: new Date("2026-07-06"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
