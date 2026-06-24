import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Torq Orbit — Zero-Commission Online Ordering",
    short_name: "Torq Orbit",
    description:
      "Launch your branded online store in minutes. Zero commission, WhatsApp ordering, and your own customer data.",
    id: "/",
    start_url: "/?utm_source=pwa",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#fafaf8",
    theme_color: "#1d9e75",
    lang: "en-IN",
    categories: ["business", "food", "productivity"],
    icons: [
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
