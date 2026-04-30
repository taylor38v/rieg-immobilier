export type QA = { keywords: string[]; answer: string };

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
  terrain?: number;
  dpe: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  ges: "A" | "B" | "C" | "D" | "E" | "F" | "G";
  description: string[];
  atouts: string[];
  image: string;
  gallery: string[];
  taxeFonciere?: number;
  charges?: number;
  qa?: QA[];
};

const qaCommun = (bien: { ville: string; taxe: number; chauffage: string; travaux: string; ecoles: string }): QA[] => [
  { keywords: ["chaudière", "chauffage", "pompe à chaleur", "pac"], answer: bien.chauffage },
  { keywords: ["taxe foncière", "taxe", "fonciere", "impôt"], answer: `La taxe foncière s'élève à environ ${bien.taxe.toLocaleString("fr-FR")} € par an (avis 2025).` },
  { keywords: ["travaux", "rénovation", "renovation", "neuf"], answer: bien.travaux },
  { keywords: ["école", "ecole", "scolaire", "collège", "lycée"], answer: bien.ecoles },
  { keywords: ["dpe", "diagnostic", "performance énergétique", "energie"], answer: "Le DPE complet (datant de moins de 6 mois) est disponible sur simple demande, ainsi que l'ensemble des diagnostics obligatoires (amiante, plomb, électricité, gaz, ERP)." },
  { keywords: ["voisinage", "voisin", "quartier", "calme", "bruit"], answer: `Quartier résidentiel calme à ${bien.ville}, voisinage majoritairement composé de propriétaires occupants. Aucune nuisance signalée par les vendeurs.` },
  { keywords: ["visite", "rdv", "rendez-vous", "voir"], answer: "Les visites se font sur rendez-vous qualifié, du lundi au samedi entre 9h et 19h. Romain vous accompagne personnellement, comptez environ 45 minutes." },
  { keywords: ["négocier", "negocier", "négociation", "prix"], answer: "Le prix affiché correspond à l'estimation argumentée du bien. Toute offre est étudiée — Romain reviendra vers vous sous 24h avec la position des vendeurs." },
  { keywords: ["disponible", "disponibilité", "libre", "occupé"], answer: "Le bien est libre à la vente sous 3 mois après signature de l'acte authentique." },
  { keywords: ["financement", "prêt", "crédit", "banque"], answer: "Romain travaille avec deux courtiers partenaires de confiance. Mise en relation possible dès le premier rendez-vous, gratuite et sans engagement." },
  { keywords: ["copropriété", "copro", "syndic"], answer: "Copropriété de standing bien gérée, sans procédure en cours. Les procès-verbaux des 3 dernières AG sont disponibles à la consultation." },
];

export const biens: Bien[] = [
  {
    slug: "maison-architecte-saint-didier",
    type: "Maison d'architecte",
    statut: "Vente",
    titre: "Demeure contemporaine · vue panoramique",
    ville: "Saint-Didier-au-Mont-d'Or",
    prix: 1485000,
    surface: 245,
    pieces: 7,
    chambres: 4,
    terrain: 1200,
    dpe: "B",
    ges: "A",
    image: "/photos/IMG_7295.jpeg",
    gallery: [
      "/photos/IMG_7295.jpeg",
      "/photos/IMG_7134.jpeg",
      "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg",
      "/photos/IMG_7070.jpeg",
    ],
    description: [
      "Au cœur d'un écrin verdoyant de 1 200 m², cette demeure d'architecte signée en 2019 offre une vue dégagée sur les monts du Lyonnais et les contreforts du Beaujolais.",
      "Vastes volumes, matériaux nobles (pierre de Bourgogne, chêne massif, béton ciré) et baies vitrées panoramiques structurent des espaces de vie fluides et lumineux ouverts sur la piscine et la terrasse.",
      "Proximité immédiate des établissements scolaires de référence et accès rapide au centre de Lyon par le tunnel de Caluire.",
    ],
    atouts: ["Piscine chauffée", "Garage double", "Domotique KNX", "Pompe à chaleur", "Cave à vin", "Studio indépendant"],
    taxeFonciere: 3850,
    qa: qaCommun({
      ville: "Saint-Didier-au-Mont-d'Or",
      taxe: 3850,
      chauffage: "Pompe à chaleur air-eau Daikin Altherma installée en 2019 (neuve avec la maison), couplée à un plancher chauffant rafraîchissant. Consommation moyenne : 2 100 €/an pour 245 m².",
      travaux: "Aucun travaux à prévoir — la maison a été livrée en 2019 par un architecte local. Toiture, isolation, électricité, plomberie : tout est aux normes RT2012. La piscine a été refaite en 2023 (liner + local technique).",
      ecoles: "Groupe scolaire des Cèdres (maternelle + élémentaire publique) à 600 m. Collège Jean Rostand à Saint-Didier (réputé). Lycée international à Écully à 8 min en voiture. Plusieurs écoles privées de référence dans un rayon de 10 min (Saint-Marc Ouest, Externat Sainte-Marie).",
    }),
  },
  {
    slug: "appartement-standing-ecully",
    type: "Appartement",
    statut: "Vente",
    titre: "Dernier étage · terrasse 40m²",
    ville: "Écully",
    prix: 685000,
    surface: 128,
    pieces: 4,
    chambres: 3,
    dpe: "C",
    ges: "B",
    image: "/photos/IMG_6843.jpeg",
    gallery: [
      "/photos/IMG_6843.jpeg",
      "/photos/IMG_6926.jpeg",
    ],
    description: [
      "Au sommet d'une résidence de standing récente, cet appartement d'exception profite d'une double exposition sud-ouest et d'une terrasse de 40 m² sans vis-à-vis.",
      "Prestations haut de gamme : parquet chêne, cuisine sur-mesure équipée Siemens, salle de bains avec douche italienne et baignoire îlot.",
      "Résidence sécurisée avec gardien, deux places de parking et cave incluses.",
    ],
    atouts: ["Terrasse 40m²", "Climatisation", "2 parkings", "Ascenseur", "Gardien", "Résidence de 2020"],
    taxeFonciere: 1980,
    charges: 280,
    qa: qaCommun({
      ville: "Écully",
      taxe: 1980,
      chauffage: "Chauffage collectif gaz à condensation (chaudière 2020), individualisé via compteurs. Climatisation réversible Mitsubishi posée en 2021 dans toutes les pièces principales.",
      travaux: "Appartement neuf livré en 2020, jamais habité plus de 4 ans. Aucun travaux à prévoir. La résidence est sous garantie décennale jusqu'en 2030.",
      ecoles: "École privée Saint-Joseph à 400 m, collège public Laurent Mourguet, lycée du Parc (Lyon 6) à 12 min. EM Lyon et Centrale Lyon à proximité immédiate.",
    }),
  },
  {
    slug: "villa-piscine-dardilly",
    type: "Villa familiale",
    statut: "Vente",
    titre: "Villa familiale · jardin arboré",
    ville: "Dardilly",
    prix: 920000,
    surface: 190,
    pieces: 6,
    chambres: 4,
    terrain: 850,
    dpe: "C",
    ges: "C",
    image: "/photos/IMG_7134.jpeg",
    gallery: [
      "/photos/IMG_7134.jpeg",
    ],
    description: [
      "Villa familiale des années 90 entièrement rénovée en 2022, implantée sur un terrain arboré de 850 m² avec piscine.",
      "Distribution idéale : grand séjour cathédrale, cuisine ouverte, suite parentale en rez-de-jardin, trois chambres à l'étage.",
    ],
    atouts: ["Piscine", "Jardin clos", "Garage", "Proche écoles", "Quartier calme"],
    taxeFonciere: 2640,
    qa: qaCommun({
      ville: "Dardilly",
      taxe: 2640,
      chauffage: "Chaudière gaz Viessmann posée en 2022, plancher chauffant au RDC, radiateurs à l'étage. Consommation 2024 : 1 850 €/an.",
      travaux: "Rénovation complète en 2022 : isolation extérieure, double vitrage neuf, cuisine sur-mesure, salles de bain refaites. Piscine entretenue, liner changé en 2023.",
      ecoles: "École publique du Paillet à 5 min à pied. Collège Jean Rostand (Saint-Didier) ou Vincent d'Indy (Lyon 7) selon la carte scolaire. Bus scolaire au coin de la rue.",
    }),
  },
  {
    slug: "propriete-pierres-dorees-limonest",
    type: "Propriété",
    statut: "Off-market",
    titre: "Bastide en pierres dorées",
    ville: "Limonest",
    prix: 1850000,
    surface: 310,
    pieces: 9,
    chambres: 5,
    terrain: 3400,
    dpe: "D",
    ges: "D",
    image: "/photos/IMG_6971.jpeg",
    gallery: [
      "/photos/IMG_6971.jpeg",
      "/photos/IMG_7282.jpeg",
    ],
    description: [
      "Exceptionnelle bastide en pierres dorées du XVIIIᵉ siècle, patiemment restaurée dans le respect des codes de l'architecture rhodanienne.",
      "Parc paysager de 3 400 m² avec bassin, orangerie et dépendances. Bien confidentiel présenté sur rendez-vous qualifié uniquement.",
    ],
    atouts: ["Bien confidentiel", "Parc 3400m²", "Dépendances", "Orangerie", "Cachet d'origine"],
    taxeFonciere: 6200,
    qa: qaCommun({
      ville: "Limonest",
      taxe: 6200,
      chauffage: "Chaudière fioul à condensation 2018 + insert bois dans le grand séjour. Étude de conversion à la pompe à chaleur réalisée en 2024 (devis disponible : ~32 000 €).",
      travaux: "Toiture et façades restaurées en 2017 par les Compagnons du Devoir. Menuiseries d'origine restaurées et doublées intérieurement. Pas de travaux structurels à prévoir, seul le chauffage gagnerait à être modernisé.",
      ecoles: "Écoles publiques de Limonest (maternelle/primaire) à 1,2 km. Internationale de Lyon Ouest à 10 min. Lycée Saint-Just possible via les transports.",
    }),
  },
  {
    slug: "loft-industriel-saint-just",
    type: "Loft",
    statut: "Vente",
    titre: "Loft industriel rénové",
    ville: "Saint-Just-Saint-Rambert",
    prix: 395000,
    surface: 145,
    pieces: 4,
    chambres: 2,
    dpe: "C",
    ges: "B",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80",
    ],
    description: [
      "Ancienne fabrique métamorphosée en loft avec hauteurs sous plafond de 4,2 m, verrières d'atelier et mezzanine cuisine.",
      "Au cœur de la plaine du Forez, à 35 min de Lyon et 15 min de Saint-Étienne.",
    ],
    atouts: ["Hauteur sous plafond", "Verrières", "Terrasse tropezienne", "Parking privatif"],
    taxeFonciere: 1450,
    qa: qaCommun({
      ville: "Saint-Just-Saint-Rambert",
      taxe: 1450,
      chauffage: "Pompe à chaleur air-air + plancher chauffant électrique au RDC. Consommation maîtrisée grâce à l'isolation soignée de la rénovation 2021.",
      travaux: "Réhabilitation complète d'une ancienne fabrique en 2021 par un architecte stéphanois. Tout est neuf : structure, isolation, électricité, plomberie. Garantie décennale en cours.",
      ecoles: "Écoles publiques et privées dans le centre-ville (5 min). Lycées à Saint-Étienne (15 min) et Andrézieux. École internationale possible via Lyon (35 min).",
    }),
  },
  {
    slug: "maison-champagne-mont-dor",
    type: "Maison",
    statut: "Vendu",
    titre: "Maison de village rénovée",
    ville: "Champagne-au-Mont-d'Or",
    prix: 720000,
    surface: 165,
    pieces: 5,
    chambres: 3,
    terrain: 320,
    dpe: "C",
    ges: "B",
    image: "/photos/IMG_4551.jpeg",
    gallery: ["/photos/IMG_4551.jpeg"],
    description: ["Bien vendu en 32 jours — estimation initiale respectée, 3 offres reçues au prix."],
    atouts: ["Vendu en 32 jours", "3 offres", "Au prix"],
  },
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
