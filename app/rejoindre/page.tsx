import Link from "next/link";
import type { Metadata } from "next";
import HeroBackground from "../components/HeroBackground";

export const metadata: Metadata = {
  title: "Rejoindre mon équipe iad",
  description: "Devenez conseiller immobilier iad au sein de l'équipe de Romain Rieg. Formation, accompagnement, rémunération jusqu'à 87,8% — sans apport.",
};

const piliers = [
  {
    titre: "Une rémunération sans limites",
    desc: "Jusqu'à 85% de commission sur votre production personnelle. Diversifiez vos revenus avec la gestion locative, la prescription ou en créant votre équipe.",
  },
  {
    titre: "Formation gratuite en continu",
    desc: "23 ateliers en présentiel animés par plus de 600 formateurs et 40 h de formation vidéo (conforme loi ALUR). Pour apprendre ou vous perfectionner.",
  },
  {
    titre: "Un accompagnement à chaque étape",
    desc: "Votre parrain, votre gestionnaire administratif dédié et les équipes du siège iad sont à vos côtés pour vous accompagner vers la réussite.",
  },
  {
    titre: "Des outils métier puissants",
    desc: "Prospection, estimation, photos, visite virtuelle, prise de mandats, signature électronique. Gagnez en expertise et en temps avec les outils exclusifs iad.",
  },
  {
    titre: "Entreprenez sans apport",
    desc: "Contrairement aux franchises classiques, bâtissez votre fonds de commerce, cessible et valorisable, sans aucun apport ni financement.",
  },
  {
    titre: "Fixez vos propres objectifs",
    desc: "Vous concentrer sur la vente, vous spécialiser, devenir formateur, manager ou développer votre organisation à l'international… c'est vous le patron.",
  },
];

const profils = [
  ["Vous avez une expérience commerciale", "Bancaire, automobile, B2B, retail, conseil… Votre culture du résultat sera votre meilleur atout sur le terrain."],
  ["Vous êtes en reconversion", "Quitter un statut salarié pour entreprendre, c'est exactement ce que j'ai fait. Je vous explique comment sécuriser la transition."],
  ["Vous êtes déjà conseiller immobilier", "Mauvaise rémunération, manque de liberté, outils dépassés ? Comparons concrètement votre situation actuelle avec ce que je vous propose."],
  ["Vous démarrez votre vie pro", "Apprendre un métier en autonomie sous mentorat — un cadre exigeant mais formateur, idéal pour qui veut entreprendre tôt."],
];

const etapes = [
  ["01", "Échange découverte", "30 minutes en visio ou autour d'un café. Je vous présente concrètement le quotidien, la rémunération réelle, ce qui marche et ce qui est dur."],
  ["02", "Validation des prérequis", "Vérification du statut, des éventuels droits Pôle Emploi, mise en relation avec mon gestionnaire administratif iad."],
  ["03", "Formation initiale", "Formation certifiante de 4 semaines (présentiel + e-learning), prise en charge à 100%."],
  ["04", "Lancement accompagné", "Premiers mandats, premières prospections, premiers compromis — avec mon soutien quotidien sur les 3 premiers mois."],
  ["05", "Autonomie & développement", "Vous devenez maître de votre activité. Si l'envie vous vient, vous pourrez à votre tour recruter et créer votre équipe."],
];

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/ecully.mp4" overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <img src="/photos/IAD_LOGO_FINAL-removebg-preview.png" alt="iad Prestige" className="h-14 w-auto mb-6 brightness-0 invert" />
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Rejoindre mon équipe</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Rejoignez le n°1 de la transaction immobilière.</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            iad, c'est <strong className="text-gold">50 776 ventes en 2024</strong> et <strong className="text-gold">18 000 conseillers</strong> en France et à l'international. Au sein de mon équipe sur le Mont d'Or, je forme et accompagne celles et ceux qui veulent en faire leur métier.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft">Échanger 30 minutes</Link>
            <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20m%C3%A9tier%20de%20conseiller%20iad." target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">💬 WhatsApp</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 max-w-4xl">
            {[
              ["50 776", "Ventes iad en 2024"],
              ["18 000", "Conseillers iad"],
              ["Jusqu'à 85%", "De rémunération"],
              ["0€", "D'apport requis"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-serif text-3xl text-gold">{v}</div>
                <div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi iad</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Six piliers, une promesse simple : votre réussite.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {piliers.map((p, i) => (
            <div key={p.titre} className="group relative p-8 bg-white border-2 border-ink/5 hover:border-gold transition overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
              <div className="font-serif text-5xl text-gold/30 leading-none">0{i + 1}</div>
              <div className="font-serif text-2xl text-navy mt-4 font-semibold">{p.titre}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-8 italic">
          Source : iad France 2024. n°1 de la transaction en 2024 avec 50 776 ventes réalisées par iad France en comparaison des chiffres déclarés par les principaux réseaux immobiliers nationaux en 2024.
        </p>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Pour qui ?</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Vous vous reconnaissez ?</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {profils.map(([t, d]) => (
              <div key={t} className="p-6 bg-white border border-ink/5 flex gap-5">
                <span className="font-serif text-3xl text-gold leading-none">→</span>
                <div>
                  <div className="font-serif text-xl text-navy">{t}</div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start relative">
        <div className="relative z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Qui suis-je</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Vous ne rejoignez pas un réseau. Vous rejoignez une équipe.</h2>
          <div className="mt-8 space-y-4 text-ink/85 leading-relaxed">
            <p>Je m'appelle Romain Rieg, j'ai 28 ans et je suis passionné par l'immobilier. Après une reconversion professionnelle, j'ai choisi de devenir conseiller immobilier indépendant pour accompagner mes clients avec <strong className="text-navy">transparence, engagement et conseils personnalisés</strong>.</p>
            <p>Membre du réseau iad France, j'utilise les outils technologiques les plus performants couplés à une stratégie digitale moderne pour assurer la meilleure diffusion des biens.</p>
            <p>Depuis le début de ma carrière professionnelle, j'accompagne des femmes et des hommes à <strong className="text-navy">performer et à monter en compétences</strong> sur différentes thématiques. Mon objectif : apporter une vision claire, une structure solide et un accompagnement le plus humain possible via le réseau iad — en transmettant la passion et les clés du métier de l'immobilier.</p>
          </div>
        </div>
        <div className="relative">
          <img src="/photos/IMG_6487_SnapseedCopy-1536x2048.jpg" alt="Romain Rieg" className="w-full aspect-[4/5] object-cover rounded-lg" />
          <div className="bg-gold text-navy p-6 mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:left-8 lg:right-8 lg:max-w-[420px] shadow-xl">
            <div className="font-serif text-xl lg:text-2xl leading-snug">"Le métier ne s'apprend pas dans les livres. Il s'apprend en visite, dossier après dossier."</div>
            <div className="text-xs uppercase tracking-widest mt-3 font-semibold">Romain Rieg · Mentor iad</div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Le parcours</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">De l'envie au premier mandat — cinq étapes claires.</h2>
          <div className="mt-16 space-y-10">
            {etapes.map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 border-t border-ivory/10 pt-10">
                <div className="font-serif text-5xl text-gold">{n}</div>
                <div>
                  <div className="font-serif text-2xl">{t}</div>
                  <div className="text-ivory/70 mt-3 leading-relaxed">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold text-center">Offre actuelle</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3 text-center">Offre Starter +</h2>
        <div className="mt-12 p-10 bg-gold/5 border border-gold">
          <div className="font-serif text-3xl text-navy">99 € HT / mois</div>
          <p className="text-muted mt-3">Pendant 6 mois, renouvelable une fois (12 mois maximum), pour démarrer votre activité avec un palier de cotisation accessible.</p>
          <p className="text-xs text-muted mt-6">Offre avec obligation d'achat valable du 25 mars 2025 au 30 juin 2026 — selon conditions Starter +.</p>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl">Prêt(e) à en parler ?</h2>
          <p className="text-ivory/70 mt-4">30 minutes en visio ou autour d'un café. Aucun engagement, aucune pression — juste une conversation honnête.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Demander un échange</Link>
            <a href="tel:+33679571473" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">06 79 57 14 73</a>
          </div>
        </div>
      </section>
    </>
  );
}
