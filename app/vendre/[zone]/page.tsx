import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { secteurs, formatPrix } from "../../lib/data";
import CityMap from "../../components/CityMap";
import HeroBackground from "../../components/HeroBackground";
import { findZone } from "../../lib/territoire";

type Zone = {
  titre: string;
  h1: string;
  intro: string[];
  image: string;
  communes: string[];
  mapSlugs?: string[];
  communesLabel: string;
  args: { titre: string; desc: string }[];
};

const zones: Record<string, Zone> = {
  "saint-didier": {
    mapSlugs: ["saint-didier-au-mont-dor"],
    titre: "Vendre à Saint-Didier-au-Mont-d'Or",
    h1: "Vendez votre bien au meilleur prix à Saint-Didier-au-Mont-d'Or.",
    intro: [
      "Vendre votre maison ou appartement peut sembler compliqué… mais avec un accompagnement clair et personnalisé, tout devient simple.",
      "Je suis Romain Rieg, conseiller immobilier indépendant du réseau iad France, et j'habite Saint-Didier-au-Mont-d'Or. Je vous accompagne à chaque étape pour vendre rapidement et au meilleur prix.",
    ],
    image: "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg",
    communes: ["saint-didier-au-mont-dor"],
    communesLabel: "Saint-Didier-au-Mont-d'Or",
    args: [
      { titre: "Expertise locale fine", desc: "Je connais parfaitement le marché immobilier de Saint-Didier-au-Mont-d'Or. Votre bien sera évalué avec précision grâce aux ventes récentes et aux tendances du quartier." },
      { titre: "Accompagnement personnalisé", desc: "Succession, divorce, projet de vie : chaque situation est unique. Je vous guide pas à pas et prends en charge toutes les démarches administratives." },
      { titre: "Mise en valeur premium", desc: "Reportage photo UltraHD, drone si nécessaire, pour déclencher le coup de cœur dès la première annonce." },
    ],
  },
  "ouest-lyonnais": {
    mapSlugs: ["ecully", "dardilly", "limonest", "champagne-au-mont-dor", "saint-cyr-au-mont-dor"],
    titre: "Vendre dans l'Ouest lyonnais",
    h1: "Réussissez votre projet immobilier dans l'Ouest lyonnais.",
    intro: [
      "Vous souhaitez réussir votre projet immobilier dans l'Ouest lyonnais ?",
      "Je suis Romain Rieg, conseiller immobilier indépendant du réseau iad France, et je mets mon expertise locale et mon accompagnement personnalisé à votre service pour vendre rapidement au meilleur prix, acheter ou investir en toute sécurité, ou gérer la location de vos biens.",
    ],
    image: "/photos/IMG_7282.jpeg",
    communes: ["ecully", "dardilly", "limonest", "champagne-au-mont-dor", "saint-cyr-au-mont-dor"],
    communesLabel: "Dardilly · Écully · Limonest · Champagne-au-Mont-d'Or · Saint-Cyr-au-Mont-d'Or — et leurs limitrophes",
    args: [
      { titre: "Expertise locale approfondie", desc: "Chaque commune est analysée pour tirer le meilleur prix de votre bien." },
      { titre: "Visibilité maximale", desc: "Visibilité maximale auprès des acheteurs et investisseurs qualifiés (+15 000 conseillers iad). Outils performants du réseau iad France." },
      { titre: "Discrétion & filtrage", desc: "Pour vos biens de prestige dans les Monts d'Or, je garantis confidentialité absolue et contrôle rigoureux des acquéreurs." },
    ],
  },
  "plaine-du-forez": {
    mapSlugs: ["saint-just-saint-rambert", "andrezieux-boutheon"],
    titre: "Vendre dans la Plaine du Forez",
    h1: "Réussissez votre projet immobilier dans la Plaine du Forez.",
    intro: [
      "Vous souhaitez vendre, acheter ou louer un bien à Saint-Just-Saint-Rambert, Andrézieux-Bouthéon ou alentours ?",
      "Je suis Romain Rieg, conseiller immobilier indépendant du réseau iad France. Originaire de la Loire, j'y ai vécu 20 ans : je combine ma connaissance intime du territoire avec des outils marketing de pointe pour vendre rapidement au meilleur prix, acheter ou investir en toute sécurité, ou gérer la location de vos biens.",
    ],
    image: "/photos/IMG_7295.jpeg",
    communes: ["saint-just-saint-rambert"],
    communesLabel: "Saint-Just-Saint-Rambert · Andrézieux-Bouthéon — et leurs limitrophes",
    args: [
      { titre: "L'enfant du pays", desc: "20 ans de vie dans la Loire pour une expertise terrain sans faille." },
      { titre: "Réactivité", desc: "Avis de valeur sous 24-48 h, suivi régulier, disponibilité." },
      { titre: "Force de frappe iad", desc: "Votre bien visible partout, auprès de tout le réseau (+15 000 conseillers)." },
    ],
  },
};

const etapes = [
  ["01", "Premier contact & collecte d'infos", "Formulaire ou contact direct par téléphone/email. Collecte des informations sur votre bien et votre projet."],
  ["02", "Visite & avis de valeur précis", "Avis de valeur fiable basé sur les ventes récentes, les caractéristiques du bien et les tendances locales."],
  ["03", "Mise en vente optimale", "Publication sur les portails principaux. Diffusion auprès du réseau iad (+15 000 conseillers). Photos UltraHD, drone si nécessaire."],
  ["04", "Suivi jusqu'à la signature", "Visites, filtrage des acquéreurs, négociation, suivi administratif jusqu'au notaire."],
];

export function generateStaticParams() {
  return Object.keys(zones).map((z) => ({ zone: z }));
}

export async function generateMetadata(props: PageProps<"/vendre/[zone]">): Promise<Metadata> {
  const { zone } = await props.params;
  const z = zones[zone];
  if (!z) return {};
  return { title: z.titre, description: z.intro[0] };
}

export default async function Page(props: PageProps<"/vendre/[zone]">) {
  const { zone } = await props.params;
  const z = zones[zone];
  if (!z) notFound();

  const communesData = z.communes.map((slug) => secteurs.find((s) => s.slug === slug)).filter(Boolean);
  const territoire = findZone(zone);

  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={zone === "saint-didier" ? "/videos/secteurs/saint-didier.mp4" : zone === "ouest-lyonnais" ? "/videos/secteurs/limonest.mp4" : "/videos/secteurs/saint-just.mp4"} overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/vendre" className="text-ivory/60 text-sm">← Vendre</Link>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mt-6">Mon secteur d'intervention</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.1] max-w-4xl">{z.h1}</h1>
          <div className="text-ivory/80 text-lg mt-8 max-w-3xl space-y-3 leading-relaxed">
            {z.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="text-xs uppercase tracking-widest text-gold mt-8">{z.communesLabel}</div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Avis de valeur · 24-48 h</Link>
            <Link href="/contact" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">Me contacter</Link>
          </div>
          <div className="mt-4 text-xs text-ivory/60">Zéro engagement · 100% confidentiel</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi me confier votre bien</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Trois atouts qui font la différence.</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {z.args.map((a, i) => (
            <div key={i} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-4xl text-gold">0{i + 1}</div>
              <div className="font-serif text-xl text-navy mt-3">{a.titre}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Le processus</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre étapes claires.</h2>
          <div className="mt-12 space-y-8">
            {etapes.map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-t border-ivory/10 pt-8">
                <div className="font-serif text-4xl text-gold leading-none">{n}</div>
                <div>
                  <div className="font-serif text-xl">{t}</div>
                  <div className="text-ivory/70 mt-2 leading-relaxed text-sm">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {territoire && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1.2fr_2fr] gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Mon positionnement</div>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{territoire.intro}</h2>
              <p className="text-muted mt-5 leading-relaxed">{territoire.positionnement}</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Communes principales</div>
              <div className="flex flex-wrap gap-2">
                {territoire.principales.map((c) => (
                  <span key={c} className="px-4 py-2 bg-navy text-ivory text-sm font-medium">{c}</span>
                ))}
              </div>
              {territoire.limitrophes.length > 0 && (
                <>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4 mt-8">+ communes limitrophes que je couvre également</div>
                  <div className="flex flex-wrap gap-2">
                    {territoire.limitrophes.map((c) => (
                      <span key={c} className="px-3 py-1.5 bg-ivory-deep text-ink/80 text-sm border border-ink/10">{c}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-5 italic">Je ne me limite jamais strictement aux communes principales — chaque projet sur les limitrophes est étudié avec la même attention.</p>
                </>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-ivory-deep py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Les communes</div>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Survolez la carte pour explorer.</h2>
          <p className="text-muted mt-3 max-w-2xl">Cliquez sur une commune pour ouvrir sa fiche détaillée — démographie, écoles, restaurants, quartiers, prix au m².</p>
          <div className="mt-10">
            <CityMap height={520} slugs={z.mapSlugs ?? z.communes} />
          </div>

          {communesData.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {communesData.map((s) => s && (
                <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group bg-white border border-ink/10 hover:border-navy block">
                  {s.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img src={s.image} alt={s.nom} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="font-serif text-2xl text-navy group-hover:text-gold transition">{s.nom}</div>
                    <div className="grid grid-cols-3 gap-2 mt-4 text-xs">
                      <div><div className="text-muted">Maison</div><div className="font-serif text-navy">{formatPrix(s.prixM2Maison)}</div></div>
                      <div><div className="text-muted">Appart.</div><div className="font-serif text-navy">{formatPrix(s.prixM2Appart)}</div></div>
                      <div><div className="text-muted">Délai</div><div className="font-serif text-navy">{s.delaiVente} j</div></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy text-ivory py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl">Et si on commençait par un avis de valeur ?</h2>
          <p className="text-ivory/70 mt-4">Gratuit, argumenté, sous 24-48 h — sans engagement de mandat.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Demander mon avis de valeur</Link>
            <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
