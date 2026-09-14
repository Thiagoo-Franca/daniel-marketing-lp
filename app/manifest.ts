import type { MetadataRoute } from "next";

// Serve para gerar o arquivo manifest.json para PWA (Progressive Web App) para caso usuario queira instalar o site como um aplicativo no celular

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel Marketing",
    short_name: "Daniel Marketing",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#0a0a0a",
    background_color: "#0a0a0a",
    display: "standalone",
  };
}
