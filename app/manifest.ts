import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hanzla Ahmad | Full-Stack & Systems Developer",
    short_name: "Hanzla Ahmad",
    description:
      "Production-grade full-stack web platforms, deterministic control planes, and Generative AI pipelines by Hanzla Ahmad (Cheemæ).",
    start_url: "/",
    display: "standalone",
    background_color: "#070A11",
    theme_color: "#070A11",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
