import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos — Romain Rieg, conseiller immobilier",
  description: "Conseiller immobilier iad sur le Mont d'Or et l'Ouest lyonnais. Une approche sur-mesure, locale et rigoureuse.",
};

export default function Page() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">À propos</div>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-[1.05]">Un conseiller,<br />pas un vendeur.</h1>
          <p className="text-muted mt-8 leading-relaxed">
            J'ai grandi sur les coteaux du Mont d'Or. Ce territoire, je le connais rue après rue. Après un parcours de commerce et plusieurs années dans le conseil, j'ai rejoint le réseau iad pour exercer le métier comme je l'entends : prendre le temps, écouter, transmettre l'information, ne vendre que ce que je défends.
          </p>
          <p className="text-muted mt-4 leading-relaxed">
            Chez moi, un mandat, c'est d'abord une rencontre. Je ne signe que si je suis convaincu d'apporter de la valeur — et si la confiance est mutuelle.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            <Stat v="2019" l="Début immobilier" />
            <Stat v="120+" l="Transactions" />
            <Stat v="98%" l="Prix net / estimation" />
          </div>
        </div>
        <div className="aspect-[4/5]">
          <img src="/photos/romain-pro.jpg" alt="Romain Rieg" className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes engagements</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Ce à quoi vous avez droit.</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {[
              ["Un mandat exclusif, jamais imposé", "Je vous présente les options. À vous de choisir, en connaissance de cause."],
              ["Une estimation argumentée", "Pas de prix de complaisance. Des comparables récents, une méthode, un argumentaire."],
              ["Un reporting bi-mensuel", "Visites, retours, statistiques d'annonces : vous savez où en est votre dossier."],
              ["Une disponibilité réelle", "Pas de standard, pas d'assistant. Vous m'appelez, je réponds."],
              ["La confidentialité", "Adresse, photos, documents : rien ne sort sans votre accord explicite."],
              ["Une rémunération au résultat", "Mes honoraires ne sont dus qu'à la signature de l'acte authentique."],
            ].map(([t, d]) => (
              <div key={t} className="p-6 bg-white border border-ink/5">
                <div className="font-serif text-2xl text-navy">{t}</div>
                <div className="text-muted text-sm mt-3 leading-relaxed">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-6xl">On se rencontre ?</h2>
          <Link href="/contact" className="inline-block mt-8 px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Prendre rendez-vous</Link>
        </div>
      </section>
    </>
  );
}

function Stat({ v, l }: { v: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-navy">{v}</div>
      <div className="text-xs uppercase tracking-widest text-muted mt-1">{l}</div>
    </div>
  );
}
