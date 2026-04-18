import type { MetadataRoute } from "next";
import { leistungen } from "@/lib/leistungen";
import { articles } from "@/lib/ratgeber";

const SITE = "https://fitmitmarco.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE}/erstgespraech`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE}/preise`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/fuer-angehoerige`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/agb`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const leistungRoutes: MetadataRoute.Sitemap = leistungen.map((l) => ({
    url: `${SITE}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const ratgeberIndex: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/ratgeber`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
  ];

  const ratgeberArticles: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE}/ratgeber/${a.slug}`,
    lastModified: new Date(a.updated || a.published),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...leistungRoutes,
    ...ratgeberIndex,
    ...ratgeberArticles,
  ];
}
