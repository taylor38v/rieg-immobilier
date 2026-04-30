import type { Metadata } from "next";
import Link from "next/link";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import { secteurs, formatPrix } from "../lib/data";

export const metadata: Metadata = {
  title: "Acheter / Investir",
  description: "Trouvez votre futur chez-vous sur le Mont d'Or, l'Ouest lyonnais ou la Plaine du Forez. Accès off-market au réseau iad, accompagnement complet de la recherche à la signature.",
};

const services = [
  {
    titre: "Chasse immobilière personnalisée",
    desc: "Gagnez du temps : visitez uniquement les biens vraiment pertinents pour votre projet. Vous accédez aussi bien aux biens publics qu'au portefeuille exclusif iad.",
  },
  {
    titre: "Achat dans l'ancien ou le neuf",
    desc: "Analyse et comparaison des biens, conseils sur la valorisation et l'optimisation. Je vous oriente vers ce qui vous convient vraiment.",
  },
  {
    titre: "Accompagnement jusqu'à la signature",
    desc: "Visites guidées et conseils personnalisés. Négociation pour obtenir le meilleur prix. Suivi administratif complet jusqu'au notaire.",
  },
  {
    titre: "Accès à 100% des biens disponibles",
    desc: "Partage complet au sein du réseau iad. Ouverture au partage de commission entre conseillers — vous accédez à plus de biens, pas moins.",
  },
];

const piliers = [
  { titre: "Expertise locale", desc: "Je connais parfaitement le marché immobilier de Saint-Didier-au-Mont-d'Or, l'Ouest lyonnais et la Plaine du Forez. Notamment chaque quartier, le prix au m² et les opportunités cachées." },
  { titre: "Accès off-market & réseau iad", desc: "Un accès en avant-première à tous les biens diffusés dans le réseau iad, premier réseau en France." },
  { titre: "Accompagnement sur-mesure", desc: "Je vous guide de la recherche à la signature, avec un suivi administratif complet." },
  { titre: "Investissement sécurisé", desc: "Conseils sur le neuf, l'ancien et la rentabilité locative pour que votre projet soit pérenne." },
];

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/limonest.mp4" overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Acheter · Investir</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Trouvez votre futur chez-vous.</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            Vous rêvez de trouver votre maison ou appartement idéal, mais vous en avez assez de voir les biens qui vous plaisent passer sous le nez ? Marre de courir après des annonces déjà vendues ?
          </p>
          <p className="text-gold text-lg md:text-xl mt-4 max-w-3xl leading-relaxed">
            <strong>Avec moi, accédez aux opportunités avant tout le monde</strong> — y compris celles qui ne sont jamais publiées sur les portails classiques.
          </p>
          <p className="text-ivory/80 text-lg mt-6 max-w-3xl leading-relaxed">
            Je suis Romain Rieg, conseiller immobilier du réseau iad France et résident de Saint-Didier-au-Mont-d'Or. Je connais chaque quartier et l'évolution réelle des prix au m². Mon objectif : vous faire gagner du temps, sécuriser votre achat et vous permettre de trouver votre futur chez-vous <strong className="text-gold">sans stress ni mauvaise surprise</strong>.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Démarrer ma recherche</Link>
            <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20je%20cherche%20un%20bien." target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi acheter ou investir avec moi</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre piliers concrets.</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {piliers.map((p) => (
            <div key={p.titre} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{p.titre}</div>
              <p className="text-muted mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes services pour l'achat & l'investissement</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">De la recherche à la remise des clés.</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {services.map((s) => (
              <div key={s.titre} className="p-7 bg-white border border-ink/10">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes secteurs</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Trois zones que je connais par cœur.</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">Survolez une commune sur la carte pour voir les infos clés, cliquez pour ouvrir sa fiche détaillée.</p>
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

      <RomainCard
        titre="Trouver le bon bien, c'est mon métier."
        message="Avant chaque visite, je qualifie financièrement les biens et je vous évite les déplacements inutiles. Je travaille pour vous — pas pour le vendeur. Mes honoraires sont à la charge du vendeur, jamais de l'acquéreur."
      />

      <section className="bg-navy text-ivory py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl">Dites-moi ce que vous cherchez.</h2>
          <p className="text-ivory/70 mt-4">Un café, 30 minutes, et on dresse ensemble votre cahier des charges.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Démarrer ma recherche</Link>
            <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
