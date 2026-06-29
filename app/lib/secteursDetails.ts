// Re-export depuis le contenu CMS (content/secteurs-detail/*.json)
import { secteursDetailContent } from "./_generated/secteurs-detail";

export type SecteurDetail = {
  nom?: string;
  intro?: string;
  population: number;
  superficie: number;
  cp: string;
  intercommunalite: string;
  altitude?: string;
  ce_qui_differencie: (string | { titre?: string; description?: string })[];
  ecoles: { nom: string; type: string; precision?: string }[];
  restaurants: { nom: string; cuisine: string; gamme: string; note?: number }[];
  associations: { nom: string; activite: string }[];
  quartiers: { nom: string; description: string; prix_indicatif?: string }[];
  evolution_prix: { annee: number; prixM2: number }[];
  video_insta?: { titre: string; duree: string; thumb?: string };
  galerie?: string[];
  video?: string;
  instagram_url?: string;
};

export const secteursDetails: Record<string, SecteurDetail> = secteursDetailContent;
