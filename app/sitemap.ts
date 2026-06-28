import { MetadataRoute } from "next";
import menuMockData from "@/data/menu-mock-data.json";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/data/landing";

const BASE_URL = SITE.url;

const LEGAL_PAGES = ["/privacy", "/terms", "/refund", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const menuPages: MetadataRoute.Sitemap = menuMockData.menus.map((menu) => ({
    url: `${BASE_URL}/${menu.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const legalPages: MetadataRoute.Sitemap = LEGAL_PAGES.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/commission-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...blogPosts,
    ...menuPages,
    {
      url: `${BASE_URL}/signup`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/login`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...legalPages,
  ];
}
