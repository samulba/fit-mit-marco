import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fit mit Marco — Personal Trainer für Senioren",
    short_name: "Fit mit Marco",
    description:
      "Personal Training für Senioren in München – Kraft, Balance, Mobilität bei dir zuhause.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5F0",
    theme_color: "#1A3C34",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
    lang: "de-DE",
    categories: ["health", "fitness", "lifestyle"],
  };
}
