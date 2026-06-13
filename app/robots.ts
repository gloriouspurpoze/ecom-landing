import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/dashboard/"],
      },
    ],
    sitemap: "https://menufast.in/sitemap.xml",
    host: "https://menufast.in",
  };
}
