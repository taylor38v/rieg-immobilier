// Biens : exposés depuis le CMS (content/biens/*.md, généré dans _generated/biens.ts)
export { biens, type Bien } from "./_generated/biens";
import type { Bien } from "./_generated/biens";

export type QA = { keywords: string[]; answer: string };

// Génère un FAQ standard à partir des champs CMS du bien.
// Les champs chauffage / travaux / ecoles / taxe_fonciere sont éditables dans Decap.
export const qaCommun = (bien: Bien): QA[] => [
  { keywords: ["chaudière", "chauffage", "pompe à chaleur", "pac"], answer: bien.chauffage || "Information disponible sur demande." },
  { keywords: ["taxe foncière", "taxe", "fonciere", "impôt"], answer: bien.taxe_fonciere ? `La taxe foncière s'élève à environ ${bien.taxe_fonciere.toLocaleString("fr-FR")} € par an (avis 2025).` : "Informations fiscales disponibles sur demande." },
  { keywords: ["travaux", "rénovation", "renovation", "neuf"], answer: bien.travaux || "État communiqué sur demande." },
  { keywords: ["école", "ecole", "scolaire", "collège", "lycée"], answer: bien.ecoles || "Informations scolaires sur demande." },
  { keywords: ["dpe", "diagnostic", "performance énergétique", "energie"], answer: "Le DPE complet (datant de moins de 6 mois) est disponible sur simple demande, ainsi que l'ensemble des diagnostics obligatoires (amiante, plomb, électricité, gaz, ERP)." },
  { keywords: ["voisinage", "voisin", "quartier", "calme", "bruit"], answer: `Quartier résidentiel calme à ${bien.ville}, voisinage majoritairement composé de propriétaires occupants. Aucune nuisance signalée par les vendeurs.` },
  { keywords: ["visite", "rdv", "rendez-vous", "voir"], answer: "Les visites se font sur rendez-vous qualifié, du lundi au samedi entre 9h et 19h. Romain vous accompagne personnellement, comptez environ 45 minutes." },
  { keywords: ["négocier", "negocier", "négociation", "prix"], answer: "Le prix affiché correspond à l'estimation argumentée du bien. Toute offre est étudiée — Romain reviendra vers vous sous 24h avec la position des vendeurs." },
  { keywords: ["disponible", "disponibilité", "libre", "occupé"], answer: "Le bien est libre à la vente sous 3 mois après signature de l'acte authentique." },
  { keywords: ["financement", "prêt", "crédit", "banque"], answer: "Romain travaille avec deux courtiers partenaires de confiance. Mise en relation possible dès le premier rendez-vous, gratuite et sans engagement." },
  { keywords: ["copropriété", "copro", "syndic"], answer: "Copropriété de standing bien gérée, sans procédure en cours. Les procès-verbaux des 3 dernières AG sont disponibles à la consultation." },
];

export type Secteur = {
  slug: string;
  nom: string;
  intro: string;
  prixM2Maison: number;
  prixM2Appart: number;
  delaiVente: number;
  atouts: string[];
  quartiers: string[];
  image?: string;
};

export const secteurs: Secteur[] = [
  {
    slug: "saint-didier-au-mont-dor",
    nom: "Saint-Didier-au-Mont-d'Or",
    intro: "Commune résidentielle par excellence du Mont d'Or, Saint-Didier conjugue qualité de vie, écoles de référence et accès rapide à Lyon. Un marché tendu, où l'offre de maisons familiales reste rare et très recherchée.",
    prixM2Maison: 6800,
    prixM2Appart: 5400,
    delaiVente: 58,
    atouts: ["Écoles cotées", "Cadre de vie", "Proximité Lyon", "Commerces de bouche"],
    quartiers: ["Centre village", "Les Carrières", "Plat de l'Air", "Le Tourillon"],
    image: "/photos/secteurs/saint-didier-1.jpg",
  },
  {
    slug: "ecully",
    nom: "Écully",
    intro: "Aux portes de Lyon, Écully séduit par ses résidences de standing, ses grandes écoles et son parc de l'Hippodrome. Un marché porté par une demande familiale solide.",
    prixM2Maison: 5900,
    prixM2Appart: 4850,
    delaiVente: 62,
    atouts: ["EM Lyon / Centrale", "Tramway à l'étude", "Parc du Vallon", "Résidences de standing"],
    quartiers: ["Le Centre", "Pérollier", "Valvert", "Le Coulouvrier"],
    image: "/photos/secteurs/ecully-1.jpg",
  },
  {
    slug: "dardilly",
    nom: "Dardilly",
    intro: "Entre nature et métropole, Dardilly offre un compromis recherché : grands terrains, quartiers pavillonnaires calmes et accès direct à l'A6.",
    prixM2Maison: 5200,
    prixM2Appart: 4300,
    delaiVente: 68,
    atouts: ["Grands terrains", "Accès A6", "Écoles publiques réputées", "Parcours golfique"],
    quartiers: ["Le Paillet", "La Beffe", "Porte de Lyon", "Les Noyeraies"],
    image: "/photos/secteurs/dardilly-1.jpg",
  },
  {
    slug: "limonest",
    nom: "Limonest",
    intro: "Village de caractère niché sur les hauteurs, Limonest conserve un patrimoine bâti en pierres dorées remarquable, recherché par une clientèle familiale et internationale.",
    prixM2Maison: 5600,
    prixM2Appart: 4500,
    delaiVente: 71,
    atouts: ["Pierres dorées", "Mont Verdun", "Écoles internationales", "Cadre préservé"],
    quartiers: ["Le Bourg", "Les Grillons", "Sans Souci"],
    image: "/photos/secteurs/limonest-1.jpg",
  },
  {
    slug: "champagne-au-mont-dor",
    nom: "Champagne-au-Mont-d'Or",
    intro: "Commune à taille humaine, Champagne attire pour son centre village animé et sa proximité immédiate de Lyon (métro à venir).",
    prixM2Maison: 5800,
    prixM2Appart: 4600,
    delaiVente: 54,
    atouts: ["Proche Lyon", "Centre village", "Marché hebdomadaire", "Connexion TCL"],
    quartiers: ["Centre", "Les Bruyères", "Le Rocher"],
    image: "/photos/secteurs/champagne-1.jpg",
  },
  {
    slug: "saint-cyr-au-mont-dor",
    nom: "Saint-Cyr-au-Mont-d'Or",
    intro: "Surplombant la Saône, Saint-Cyr est l'une des adresses les plus prestigieuses du Mont d'Or. Propriétés d'exception et biens confidentiels y dominent.",
    prixM2Maison: 7200,
    prixM2Appart: 5800,
    delaiVente: 74,
    atouts: ["Vue Saône", "Propriétés d'exception", "Écoles privées", "Cachet patrimonial"],
    quartiers: ["Le Bourg", "Les Verrières", "Combe Blanche"],
    image: "/photos/secteurs/saint-cyr-1.jpg",
  },
  {
    slug: "saint-just-saint-rambert",
    nom: "Saint-Just-Saint-Rambert",
    intro: "Au cœur de la Plaine du Forez, Saint-Just-Saint-Rambert est un marché dynamique, accessible, idéal pour primo-accédants et investisseurs.",
    prixM2Maison: 2800,
    prixM2Appart: 2400,
    delaiVente: 78,
    atouts: ["Budget maîtrisé", "Cadre Loire", "15 min Saint-Étienne", "Investissement locatif"],
    quartiers: ["Centre Saint-Just", "Saint-Rambert", "Les Bords de Loire"],
    image: "/photos/secteurs/saint-just-1.jpg",
  },
];

export const formatPrix = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
