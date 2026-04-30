import Link from "next/link";
import type { Metadata } from "next";
import { secteurs, formatPrix } from "../lib/data";

export const metadata: Metadata = {
  title: "Secteurs d'intervention — Romain Rieg Immobilier",
  description: "Marché immobilier local et prix au m² pour chaque commune du Mont d'Or, Ouest lyonnais et Plaine du Forez.",
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Marché local</div>
        <h1 className="font-serif text-5xl md:text-6xl mt-3">Nos secteurs</h1>
        <p className="text-muted mt-6 leading-relaxed">
          Sept communes, sept dynamiques de marché. Découvrez pour chaque secteur les prix au m², les délais de vente et les atouts à valoriser pour votre projet.
        </p>
      </div>

      <div className="mt-16 space-y-4">
        {secteurs.map((s) => (
          <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group block border-t border-ink/10 py-8 hover:border-navy">
            <div className="grid md:grid-cols-6 gap-6 items-center">
              {s.image && (
                <div className="md:col-span-1 aspect-[4/3] overflow-hidden bg-ivory-deep">
                  <img src={s.image} alt={s.nom} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
              )}
              <div className="md:col-span-2">
                <div className="font-serif text-3xl text-navy group-hover:text-gold transition">{s.nom}</div>
                <div className="text-sm text-muted mt-2">{s.quartiers.slice(0, 3).join(" · ")}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted">Prix/m² maison</div>
                <div className="font-serif text-xl mt-1">{formatPrix(s.prixM2Maison)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted">Prix/m² appart.</div>
                <div className="font-serif text-xl mt-1">{formatPrix(s.prixM2Appart)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted">Délai moyen</div>
                <div className="font-serif text-xl mt-1">{s.delaiVente} j</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
