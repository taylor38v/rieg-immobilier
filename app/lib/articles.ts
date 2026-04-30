export type Article = {
  slug: string;
  rubrique: string;
  titre: string;
  chapo: string;
  date: string;
  dureeLecture: number;
  image: string;
  auteur: string;
  contenu: { type: "p" | "h2" | "quote" | "stat" | "list"; text?: string; items?: string[]; value?: string; label?: string }[];
};

export const articles: Article[] = [
  {
    slug: "barometre-mont-dor-t1-2026",
    rubrique: "Baromètre",
    titre: "Baromètre du Mont d'Or — T1 2026",
    chapo: "Hausse modérée des prix sur le secteur Saint-Didier / Saint-Cyr, accélération inattendue à Champagne-au-Mont-d'Or portée par l'effet métro. Décryptage trimestre par trimestre.",
    date: "2026-04-01",
    dureeLecture: 6,
    image: "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg",
    auteur: "Romain Rieg",
    contenu: [
      { type: "p", text: "Le premier trimestre 2026 confirme une tendance amorcée fin 2025 : le marché du Mont d'Or se stabilise à un niveau élevé, après deux années de respiration. Les transactions repartent, mais les acquéreurs restent disciplinés sur le prix." },
      { type: "h2", text: "Les chiffres clés du trimestre" },
      { type: "stat", value: "+2,3%", label: "Saint-Didier-au-Mont-d'Or" },
      { type: "stat", value: "+4,1%", label: "Champagne-au-Mont-d'Or (effet métro)" },
      { type: "stat", value: "−0,8%", label: "Dardilly (correction technique)" },
      { type: "p", text: "Le délai moyen de vente reste stable à 58 jours sur l'ensemble du secteur, avec une dispersion forte selon la qualité du bien : les biens qualifiés \"sans défaut\" partent en moyenne en 38 jours, tandis que les biens à rénover dépassent les 90 jours." },
      { type: "h2", text: "Ce qui change concrètement" },
      { type: "list", items: [
        "Les acquéreurs internationaux représentent 12% des transactions sur Saint-Cyr ce trimestre (vs 7% un an plus tôt).",
        "Les passoires thermiques (DPE F-G) subissent une décote de 13 à 17% — l'écart se creuse depuis l'entrée en vigueur de la loi Climat.",
        "Les biens avec extérieur (terrasse > 15 m² ou jardin) se négocient avec une prime de 8 à 12% — durable depuis 2021.",
      ]},
      { type: "quote", text: "Sur le Mont d'Or, on n'achète plus une maison, on achète une qualité de vie certifiée. C'est ce qui explique la résilience du marché." },
      { type: "h2", text: "Mon analyse pour les mois à venir" },
      { type: "p", text: "Le second semestre 2026 devrait voir l'arrivée de plusieurs grands projets immobiliers neufs sur Champagne et Écully, ce qui pourrait peser légèrement sur les prix de l'ancien sur ces deux communes. À l'inverse, le segment haut de gamme (>1,5 M€) sur Saint-Cyr et Saint-Didier reste structurellement sous-offert et continuera sa hausse." },
      { type: "p", text: "Si vous envisagez de vendre dans les 12 prochains mois, le moment est favorable. Si vous achetez, les opportunités restent à saisir en off-market — où la pression à la hausse est moindre." },
    ],
  },
  {
    slug: "portrait-architecte-julien-bonnet",
    rubrique: "Portrait",
    titre: "Julien Bonnet, l'architecte qui réveille les bastides du Mont d'Or",
    chapo: "Trente projets de restauration en dix ans. Rencontre avec celui qui réconcilie patrimoine en pierres dorées et exigences contemporaines.",
    date: "2026-03-18",
    dureeLecture: 8,
    image: "/photos/IMG_6971.jpeg",
    auteur: "Romain Rieg",
    contenu: [
      { type: "p", text: "Quand Julien Bonnet s'installe à Limonest en 2014 après dix ans à Genève, il ne s'imagine pas devenir l'une des références régionales en restauration de bâti ancien. \"Je voulais juste rentrer chez moi\", confie-t-il, attablé dans son agence aménagée dans une ancienne maison vigneronne du XVIIIᵉ." },
      { type: "h2", text: "Une signature : faire respirer la pierre" },
      { type: "p", text: "Sa marque de fabrique : ne jamais surcharger une bastide. Là où certains confrères empilent les couches de modernité, Julien Bonnet retire. \"Quand vous récupérez une maison qui a traversé deux siècles, votre premier réflexe doit être de l'écouter, pas de lui imposer votre époque.\"" },
      { type: "quote", text: "Une bonne restauration, dans dix ans, on ne sait plus ce qui est neuf et ce qui est ancien." },
      { type: "h2", text: "Le projet dont il est le plus fier" },
      { type: "p", text: "Une bastide de 1742 à Saint-Cyr-au-Mont-d'Or, achetée en ruine en 2019. Trois ans de travaux, 1,2 M€ de budget, des compagnons formés sur place pour restaurer les enduits à la chaux. Le résultat : un bien valorisé 2,8 M€ aujourd'hui." },
      { type: "h2", text: "Ses conseils aux propriétaires de bâti ancien" },
      { type: "list", items: [
        "Avant tout achat, un diagnostic structure (mur porteur, charpente, humidité) — comptez 1 500 €.",
        "Ne jamais isoler une maison en pierre par l'intérieur sans étude hygrothermique préalable.",
        "Privilégier les artisans locaux du réseau Compagnons — leur travail se voit et se garantit.",
        "Prévoir 25 à 35% de surcoût vs un budget initial sur les chantiers de plus de 200 m².",
      ]},
      { type: "p", text: "Pour Julien Bonnet, le Mont d'Or recèle encore une cinquantaine de biens d'exception en sommeil, à découvrir au gré des successions. Le réseau d'agents locaux compte plus que jamais." },
    ],
  },
  {
    slug: "loi-climat-passoires-thermiques-mont-dor",
    rubrique: "Décryptage",
    titre: "Loi Climat : ce qui change pour les propriétaires du Mont d'Or en 2026",
    chapo: "Interdiction de location, décote à la vente, obligation d'audit : le calendrier précis et les solutions concrètes pour anticiper.",
    date: "2026-02-12",
    dureeLecture: 7,
    image: "/photos/IMG_4551.jpeg",
    auteur: "Romain Rieg",
    contenu: [
      { type: "p", text: "Depuis le 1er janvier 2025, les logements classés G sont interdits à la location. En 2028, ce sera le tour des F. Et 2034 actera l'interdiction des E. Ces échéances bouleversent en profondeur le marché — y compris sur le Mont d'Or, où l'on sous-estime souvent l'enjeu." },
      { type: "h2", text: "Combien de biens concernés sur le Mont d'Or ?" },
      { type: "p", text: "D'après les données ADEME croisées avec les transactions DVF de notre secteur, environ 18% du parc immobilier des communes du Mont d'Or et de l'Ouest lyonnais est classé E, F ou G. La proportion grimpe à 27% pour le bâti antérieur à 1975, particulièrement représenté à Limonest, Saint-Cyr et Dardilly." },
      { type: "stat", value: "18%", label: "du parc local en classes E, F ou G" },
      { type: "stat", value: "−13%", label: "décote moyenne d'un bien F vs C équivalent" },
      { type: "h2", text: "Vendeur : trois stratégies possibles" },
      { type: "list", items: [
        "Vendre en l'état avec décote assumée : option pertinente si vous êtes pressé. Comptez −10 à −17% selon la classe.",
        "Réaliser un audit énergétique (obligatoire dès classe E à la vente) et chiffrer les travaux pour rassurer l'acquéreur.",
        "Engager les travaux avant mise en marché — passage en C ou B = +10 à +15% sur le prix de vente, ROI souvent positif sur 24 mois.",
      ]},
      { type: "h2", text: "Acquéreur : opportunités à saisir" },
      { type: "p", text: "Les biens F et G sont devenus, paradoxalement, les meilleures opportunités du marché pour qui peut financer les travaux. Avec MaPrimeRénov' (jusqu'à 90% pour les revenus modestes, 35-50% en moyenne) et un éco-PTZ jusqu'à 50 000 €, le coût net des travaux peut être maîtrisé. Et la plus-value à la revente, mécaniquement, augmente avec la nouvelle classe." },
      { type: "quote", text: "Les passoires thermiques d'aujourd'hui sont les actifs valorisés de demain — à condition de bien acheter." },
      { type: "p", text: "Notre outil de DPE express vous donne une estimation immédiate de votre classe et du chiffrage des travaux nécessaires. Pour un audit officiel, je travaille avec deux diagnostiqueurs partenaires sur le Mont d'Or, contactez-moi." },
    ],
  },
  {
    slug: "histoire-pierres-dorees-mont-dor",
    rubrique: "Patrimoine",
    titre: "Pierres dorées du Mont d'Or : histoire d'un calcaire devenu mythe",
    chapo: "De Saint-Cyr à Limonest, les bastides du XVIIIᵉ siècle racontent une géologie unique. Petite plongée dans la matière qui fait la valeur de notre territoire.",
    date: "2026-01-22",
    dureeLecture: 5,
    image: "/photos/IMG_7070.jpeg",
    auteur: "Romain Rieg",
    contenu: [
      { type: "p", text: "Roulez vingt minutes à l'ouest de Lyon, et vous changez littéralement de roche. Le calcaire à entroques du Bajocien (jurassique moyen, ~170 millions d'années) prend ici une teinte unique, jaune-ocre tirant sur le rose au coucher du soleil — d'où le nom poétique de \"pierres dorées\"." },
      { type: "h2", text: "Une origine maritime" },
      { type: "p", text: "Cette pierre s'est formée au fond d'une mer chaude qui recouvrait la région, par accumulation de fragments de crinoïdes (lis de mer fossiles). Sa porosité et sa teinte chaude proviennent de l'oxyde de fer qu'elle contient en faible proportion." },
      { type: "h2", text: "Une exploitation depuis le Moyen-Âge" },
      { type: "p", text: "Les carrières de Couzon-au-Mont-d'Or et Saint-Romain-au-Mont-d'Or fournissaient déjà la pierre des grands édifices lyonnais au XIIᵉ siècle. La basilique de Fourvière, la cathédrale Saint-Jean, les façades de la rue Mercière : toutes en pierre dorée du Mont d'Or." },
      { type: "h2", text: "Les bastides du XVIIIᵉ : quand la pierre devient signature" },
      { type: "p", text: "Au siècle des Lumières, la bourgeoisie lyonnaise enrichie par la soie investit le Mont d'Or pour s'y faire construire des résidences d'été. C'est l'âge d'or des bastides : architecture sobre, pierre apparente, jardins en terrasse. Limonest, Saint-Cyr et Saint-Didier conservent une cinquantaine de ces demeures classées ou inventoriées." },
      { type: "quote", text: "Acheter une bastide en pierres dorées, ce n'est pas acquérir un bien — c'est entrer dans une chaîne de transmission." },
      { type: "h2", text: "Aujourd'hui : un patrimoine à protéger et valoriser" },
      { type: "p", text: "L'extraction de la pierre est aujourd'hui réglementée. Seules trois carrières sont encore actives, ce qui rend la restauration à l'identique coûteuse mais possible. Les architectes du patrimoine réunis autour de l'association \"Pierres Dorées en Mont d'Or\" tiennent à jour un répertoire des artisans qualifiés — précieux pour tout propriétaire en projet." },
      { type: "p", text: "Si vous possédez ou envisagez d'acquérir un bien en pierres dorées, je peux vous mettre en relation avec ce réseau. C'est l'un des privilèges discrets du métier d'agent immobilier local." },
    ],
  },
];
