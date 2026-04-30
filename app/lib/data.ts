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
