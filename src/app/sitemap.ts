import type { MetadataRoute } from "next";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const BASE_URL = "https://markbunting.co.nz";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,                          lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                     lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`,                  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/find-your-fire`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/hire-your-fire`,   lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/spread-your-fire`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`,                      lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/podcast`,                   lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/videos`,                    lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE_URL}/quiz`,                      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
  ];

  const posts = await db
    .select({ slug: blogPosts.slug, updatedAt: blogPosts.updatedAt })
    .from(blogPosts)
    .where(eq(blogPosts.published, true));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt ?? now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
