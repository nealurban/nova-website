import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nova: Sobriety Companion",
    short_name: "Nova",

    description:
      "A calm, supportive sobriety companion to help you quit drinking or cut back, understand your patterns, track your progress, and find support.",

    start_url: "/",

    display: "standalone",

    orientation: "portrait",

    background_color: "#f5f0e8",

    theme_color: "#f5f0e8",

    categories: ["health", "lifestyle", "wellness"],

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}