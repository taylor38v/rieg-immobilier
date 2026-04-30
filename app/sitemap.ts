import type { MetadataRoute } from "next";
import { secteurs } from "./lib/data";
import { articles } from "./lib/articles";

export const dynamic = "force-static";
const BASE = "https://rieg-immobilier-preview.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "", "/rejoindre", "/avis-de-valeur", "/vendre", "/acheter", "/location",
    "/contact", "/actualites", "/outils",
    "/vendre/saint-didier", "/vendre/ouest-lyonnais", "/vendre/plaine-du-forez",
    "/honoraires", "/mentions-legales", "/confidentialite",
    "/outils/carte-prix", "/outils/capacite-achat", "/outils/projection",
    "/outils/vendabilite", "/outils/frais-notaire",
    "/outils/rentabilite-locative", "/outils/acheter-vs-louer", "/outils/dpe-express",
  ];
  return [
    ...staticRoutes.map((r) => ({ url: `${BASE}${r}`, lastModified: now, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.7 })),
    ...secteurs.map((s) => ({ url: `${BASE}/secteurs/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...articles.map((a) => ({ url: `${BASE}/actualites/${a.slug}`, lastModified: new Date(a.date), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
