import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import CityMap from "../components/CityMap";
import { secteurs, formatPrix } from "../lib/data";

export const metadata: Metadata = {
  title: "Vendre votre bien",
  description: "Vendez votre bien au meilleur prix sur le Mont d'Or, l'Ouest lyonnais et la Plaine du Forez. Avis de valeur fiable sous 24-48 h, accompagnement complet jusqu'à la signature notaire.",
};

const pourquoiMoi = [
  ["Expertise locale", "Je connais parfaitement le marché immobilier de mon territoire. Votre bien sera évalué avec précision grâce aux ventes récentes et aux tendances du quartier."],
  ["Accompagnement personnalisé", "Succession, divorce, projet de vie… Chaque situation est unique. Je vous guide pas à pas et prends en charge toutes les démarches administratives pour que vous puissiez vendre en toute sérénité."],
  ["Stratégie de diffusion optimale", "Mise en valeur premium : reportage photo UltraHD, drone si nécessaire, pour déclencher le coup de cœur dès la première annonce. Votre bien est publié sur les principaux portails immobiliers et bénéficie d'une visibilité maximale grâce au réseau iad (+15 000 conseillers)."],
  ["Filtrage des acquéreurs", "Je filtre les dossiers et vérifie la solvabilité des acheteurs avant chaque visite pour vous faire gagner du temps."],
  ["Réactivité et transparence", "Avis de valeur complet sous 24-48 h et suivi régulier pour vendre rapidement et efficacement."],
];

const comparatif = [
  ["Prix de vente optimisé", "Avis de valeur approximatif non professionnel"],
  ["Dossier administratif clé en main", "Gestion des diagnostics compliquée"],
  ["Visibilité sur +100 portails et réseau iad", "Diffusion limitée"],
  ["Acheteurs qualifiés et solvables", "Pas de filtrage"],
  ["Suivi complet jusqu'à la signature", "Paperasse juridique stressante"],
];

const etapes = [
  ["01", "Premier contact & collecte d'infos", "Formulaire ou contact direct par téléphone/email. Collecte des informations sur votre bien et votre projet."],
  ["02", "Visite & avis de valeur précis", "Avis de valeur fiable basé sur les ventes récentes, les caractéristiques spécifiques du bien et les tendances du marché local."],
  ["03", "Mise en vente optimale", "Publication sur les portails principaux. Diffusion auprès du réseau iad (+15 000 conseillers). Mise en valeur premium avec photos UltraHD, drone si nécessaire, et description attractive."],
  ["04", "Suivi & accompagnement jusqu'à la signature", "Gestion des visites, filtrage des acquéreurs, négociation pour obtenir le meilleur prix, suivi administratif jusqu'au notaire."],
];

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/saint-didier.mp4" overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Vendre</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Vendez votre bien au meilleur prix.</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            Vendre votre maison ou appartement peut sembler compliqué… mais avec un accompagnement clair et personnalisé, tout devient simple. Je vous accompagne à chaque étape pour vendre rapidement et au meilleur prix.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Avis de valeur · 24-48 h</Link>
            <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20je%20souhaite%20vendre%20mon%20bien." target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">💬 WhatsApp</a>
          </div>
          <div className="mt-4 text-xs text-ivory/60">Zéro engagement · 100% confidentiel</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi vendre avec moi</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Cinq raisons concrètes.</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {pourquoiMoi.map(([t, d]) => (
            <div key={t} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{t}</div>
              <p className="text-muted mt-3 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Vendre seul vs vendre avec moi</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Le comparatif honnête.</h2>
          <div className="mt-12 border border-ivory/15">
            <div className="grid grid-cols-2 bg-navy-soft text-sm font-medium uppercase tracking-widest">
              <div className="p-5 border-r border-ivory/15 text-gold">Avec moi</div>
              <div className="p-5 text-ivory/60">Tout seul</div>
            </div>
            {comparatif.map(([avec, sans], i) => (
              <div key={i} className="grid grid-cols-2 border-t border-ivory/10">
                <div className="p-5 border-r border-ivory/15 flex gap-3 items-start">
                  <span className="text-gold">✓</span>
                  <span>{avec}</span>
                </div>
                <div className="p-5 text-ivory/60 flex gap-3 items-start">
                  <span className="text-rose-300">×</span>
                  <span>{sans}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Le processus simplifié</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre étapes claires.</h2>
        <div className="mt-16 space-y-10">
          {etapes.map(([n, t, d]) => (
            <div key={n} className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 border-t border-ink/10 pt-10">
              <div className="font-serif text-5xl text-gold leading-none">{n}</div>
              <div>
                <div className="font-serif text-2xl text-navy">{t}</div>
                <div className="text-muted mt-3 leading-relaxed">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RomainCard
        titre="Vendre votre bien, c'est une décision importante."
        message="Je m'engage personnellement sur chaque mandat — étude de marché chiffrée, mise en valeur premium, suivi régulier jusqu'à la signature notariale. Le tout avec discrétion et sans pression."
      />

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes secteurs d'intervention</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Là où je vends pour vous.</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">Survolez une commune pour voir les infos clés · cliquez pour ouvrir la fiche.</p>
          <div className="mt-10">
            <CityMap height={560} includeLimitrophes={true} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {secteurs.map((s) => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold">
                <div className="font-serif text-lg">{s.nom}</div>
                <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">{formatPrix(s.prixM2Maison)}/m²</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes 3 zones</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Trois zones, une seule exigence.</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { slug: "saint-didier", titre: "Saint-Didier-au-Mont-d'Or", desc: "Ma commune de résidence. Marché tendu, expertise pointue.", image: "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg" },
              { slug: "ouest-lyonnais", titre: "Ouest lyonnais", desc: "Dardilly · Écully · Limonest · Champagne · Saint-Cyr et limitrophes.", image: "/photos/IMG_7282.jpeg" },
              { slug: "plaine-du-forez", titre: "Plaine du Forez", desc: "Saint-Just-Saint-Rambert · Andrézieux-Bouthéon — j'y ai vécu 20 ans.", image: "/photos/IMG_7295.jpeg" },
            ].map((z) => (
              <Link key={z.slug} href={`/vendre/${z.slug}`} className="group bg-white border border-ink/10 hover:border-navy">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={z.image} alt={z.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl text-navy group-hover:text-gold transition">{z.titre}</div>
                  <p className="text-sm text-muted mt-2">{z.desc}</p>
                  <span className="inline-block mt-4 text-xs text-navy link-underline">Vendre dans cette zone →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-6xl">Prêt(e) à connaître la valeur de votre bien ?</h2>
          <p className="text-ivory/70 mt-4">Avis de valeur gratuit sous 24-48 h, sans engagement.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Demander mon avis de valeur</Link>
            <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
