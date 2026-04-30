#!/usr/bin/env node
// Génère app/lib/_generated/*.ts à partir de content/*.md|json
// Lancé en prebuild + predev pour que les composants client puissent importer la donnée.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const OUT = path.join(ROOT, "app", "lib", "_generated");

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function readMdFolder(folder) {
  const dir = path.join(CONTENT, folder);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const full = path.join(dir, f);
      const slug = f.replace(/\.md$/, "");
      const raw = fs.readFileSync(full, "utf8");
      const { data, content } = matter(raw);
      return { slug, ...data, body: content.trim() };
    });
}

function writeTs(name, code) {
  fs.writeFileSync(path.join(OUT, name), code, "utf8");
  console.log(`✓ generated ${path.relative(ROOT, path.join(OUT, name))}`);
}

// --- Articles ---
const articles = readMdFolder("articles")
  .filter((a) => a.publie !== false)
  .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

writeTs(
  "articles.ts",
  `// AUTO-GENERATED — ne pas éditer à la main.
// Source : content/articles/*.md  ·  Régénéré par scripts/build-content.mjs

export type Article = {
  slug: string;
  titre: string;
  chapo: string;
  rubrique: string;
  date: string;
  duree_lecture: number;
  auteur: string;
  image: string;
  publie: boolean;
  body: string;
};

export const articles: Article[] = ${JSON.stringify(articles, null, 2)};
`
);

// --- Biens ---
const biens = readMdFolder("biens").map((b) => ({
  ...b,
  // normalisation : champs absents → valeurs par défaut
  terrain: b.terrain || 0,
  charges: b.charges || 0,
  taxe_fonciere: b.taxe_fonciere || 0,
  gallery: b.gallery || [],
  atouts: b.atouts || [],
  description: b.description || [],
}));

writeTs(
  "biens.ts",
  `// AUTO-GENERATED — ne pas éditer à la main.
// Source : content/biens/*.md  ·  Régénéré par scripts/build-content.mjs

export type Bien = {
  slug: string;
  type: string;
  statut: "Vente" | "Location" | "Vendu" | "Off-market";
  titre: string;
  ville: string;
  prix: number;
  surface: number;
  pieces: number;
  chambres: number;
  terrain: number;
  dpe: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  ges: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  image: string;
  gallery: string[];
  atouts: string[];
  taxe_fonciere: number;
  charges: number;
  chauffage: string;
  travaux: string;
  ecoles: string;
  description: string[];
  body: string;
};

export const biens: Bien[] = ${JSON.stringify(biens, null, 2)};
`
);

// --- Témoignages ---
const temoignages = readMdFolder("temoignages")
  .filter((t) => t.publie !== false)
  .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

writeTs(
  "temoignages.ts",
  `// AUTO-GENERATED — ne pas éditer à la main.
// Source : content/temoignages/*.md  ·  Régénéré par scripts/build-content.mjs

export type Temoignage = {
  slug: string;
  nom: string;
  ville: string;
  contexte: string;
  note: number;
  date: string;
  publie: boolean;
  body: string;
};

export const temoignages: Temoignage[] = ${JSON.stringify(temoignages, null, 2)};
`
);

// --- Pages libres ---
const pages = readMdFolder("pages").filter((p) => p.publie !== false);

writeTs(
  "pages.ts",
  `// AUTO-GENERATED — ne pas éditer à la main.
// Source : content/pages/*.md  ·  Régénéré par scripts/build-content.mjs

export type PageLibre = {
  slug: string;
  titre: string;
  description?: string;
  hero_image?: string;
  publie: boolean;
  body: string;
};

export const pages: PageLibre[] = ${JSON.stringify(pages, null, 2)};
`
);

// --- Settings ---
const settingsPath = path.join(CONTENT, "settings.json");
const settings = fs.existsSync(settingsPath)
  ? JSON.parse(fs.readFileSync(settingsPath, "utf8"))
  : {};

writeTs(
  "settings.ts",
  `// AUTO-GENERATED — ne pas éditer à la main.
// Source : content/settings.json  ·  Régénéré par scripts/build-content.mjs

export type Settings = {
  nom: string;
  titre: string;
  telephone: string;
  telephone_lien: string;
  email: string;
  whatsapp: string;
  rcs: string;
  carte_pro: string;
  garantie: string;
  secteur_principal: string;
  instagram?: string;
  linkedin?: string;
  facebook?: string;
  calcom?: string;
  horaires: string;
  delai_avis: string;
  bio_courte: string;
  bio_longue: string;
};

export const settings: Settings = ${JSON.stringify(settings, null, 2)};
`
);

console.log("\n✅ Content built : ", articles.length, "articles · ", biens.length, "biens · ", temoignages.length, "témoignages · ", pages.length, "pages libres");
