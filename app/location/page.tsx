import type { Metadata } from "next";
import Link from "next/link";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import { secteurs, formatPrix } from "../lib/data";

export const metadata: Metadata = {
  title: "Location & gestion locative",
  description: "Mise en location et gestion locative sécurisées sur le Mont d'Or, l'Ouest lyonnais et la Plaine du Forez. Locataires sélectionnés, revenus sécurisés, zéro vacance grâce au réseau iad.",
};

const pourquoi = [
  ["Expertise locale", "Je connais le marché locatif de chaque commune pour proposer un loyer au juste prix et attirer des locataires sérieux."],
  ["Sécurité & sélection rigoureuse", "Vérification de la solvabilité et du profil de chaque locataire avant signature."],
  ["Zéro vacance locative", "Grâce à la force de frappe d'iad, je trouve votre futur locataire avant même le départ du précédent."],
  ["Gain de temps", "Je prends en charge toutes les démarches administratives, de la rédaction du bail à l'état des lieux."],
  ["Visibilité maximale", "Diffusion sur tous les portails principaux et auprès du réseau iad (+15 000 conseillers)."],
  ["Outils premium", "Mise en valeur professionnelle avec photos UltraHD pour que votre annonce sorte du lot."],
];

const services = [
  { titre: "Recherche de locataires qualifiés", desc: "Annonce optimisée pour attirer des profils sérieux. Accès aux candidats du réseau iad." },
  { titre: "Rédaction & suivi administratif", desc: "Baux conformes à la législation. Gestion des documents, dépôt de garantie, états des lieux." },
  { titre: "Gestion complète ou partielle", desc: "Possibilité de gérer de A à Z ou partiellement. Option loyers impayés disponible." },
  { titre: "Mise en valeur & visibilité", desc: "Photos professionnelles. Publication sur +100 portails et réseau iad." },
];

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/champagne.mp4" overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Location · Gestion locative</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Louez votre bien en toute sérénité.</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            Vous souhaitez mettre en location votre maison ou appartement rapidement et sans stress ? Je suis Romain Rieg, mandataire immobilier du réseau iad France, et je mets mon expertise locale au service des propriétaires pour sécuriser vos revenus et trouver le locataire idéal.
          </p>
          <p className="text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed">
            Originaire de la Loire et résident des Monts d'Or, je combine connaissance du territoire et outils marketing premium pour sélectionner des locataires solvables, rédiger vos baux et gérer toute la partie administrative, et optimiser la rentabilité de votre bien.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft">Étude personnalisée gratuite</Link>
            <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20je%20souhaite%20mettre%20mon%20bien%20en%20location." target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">💬 WhatsApp</a>
          </div>
          <div className="mt-4 text-xs text-ivory/60">Confidentiel · sans engagement</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi me confier votre bien</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Six piliers qui sécurisent vos revenus.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {pourquoi.map(([t, d]) => (
            <div key={t} className="p-6 bg-white border border-ink/10">
              <div className="font-serif text-xl text-navy">{t}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes services pour la location</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre piliers, zéro corvée.</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {services.map((s) => (
              <div key={s.titre} className="p-7 border border-ink/10 bg-white">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes secteurs</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Les communes où je gère vos locations.</h2>
        <p className="text-muted mt-4 max-w-2xl">Cliquez sur une commune pour découvrir le marché local — démographie, écoles, prix au m², quartiers détaillés.</p>
        <div className="mt-10">
          <CityMap height={560} includeLimitrophes={true} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {secteurs.map((s) => (
            <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-white hover:bg-navy hover:text-ivory transition border border-ink/10 hover:border-navy">
              <div className="font-serif text-lg text-navy group-hover:text-ivory">{s.nom}</div>
              <div className="text-xs text-muted group-hover:text-ivory/70 mt-1">Loyer indicatif {Math.round(s.prixM2Appart * 0.0042)} €/m²</div>
            </Link>
          ))}
        </div>
      </section>

      <RomainCard
        titre="Vos revenus locatifs, sécurisés."
        message="Je sélectionne rigoureusement chaque locataire (solvabilité, profil), je rédige les baux conformes, et je m'occupe de tout l'administratif. Vous touchez votre loyer, je gère le reste."
      />

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Pour les locataires aussi</div>
            <h2 className="font-serif text-3xl mt-3">Vous cherchez à louer ?</h2>
            <p className="text-ivory/70 mt-4">Inscrivez-vous à mes alertes biens à louer — vous serez notifié dès qu'un bien correspondant à vos critères est disponible.</p>
            <Link href="/contact" className="inline-block mt-6 px-6 py-3 bg-gold text-navy hover:bg-gold-soft text-sm">Recevoir les alertes</Link>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Une question rapide ?</div>
            <h2 className="font-serif text-3xl mt-3">Je réponds directement.</h2>
            <p className="text-ivory/70 mt-4">Sans intermédiaire, sans standard. Téléphone ou WhatsApp, vous choisissez.</p>
            <div className="flex gap-3 mt-6">
              <a href="tel:+33679571473" className="px-5 py-3 border border-ivory/30 hover:bg-ivory/10 text-sm">06 79 57 14 73</a>
              <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
