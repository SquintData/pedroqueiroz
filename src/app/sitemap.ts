import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteConfig.baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4
    }
  ];
}
