import type { MetadataRoute } from "next";

import { getAllPosts } from "./utils/api";
import { caseStudies } from "./utils/constants/case-studies";
import { DOMAIN } from "./utils/constants/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${DOMAIN}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${DOMAIN}/blog`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${DOMAIN}/work/${study.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];

  try {
    const posts = (await getAllPosts(false)) ?? [];
    blogRoutes = posts
      .filter((post) => typeof post?.slug === "string" && post.slug.length > 0)
      .map((post): MetadataRoute.Sitemap[number] => {
        const published = post.publishDate ? new Date(post.publishDate) : null;
        const isValidDate = published !== null && !Number.isNaN(published.getTime());

        return {
          url: `${DOMAIN}/blog/${post.slug}`,
          lastModified: isValidDate ? published : lastModified,
          changeFrequency: "yearly",
          priority: 0.5,
        };
      });
  } catch {
    blogRoutes = [];
  }

  return [...staticRoutes, ...blogRoutes, ...workRoutes];
}
