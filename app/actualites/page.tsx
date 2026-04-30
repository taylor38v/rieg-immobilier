import Link from "next/link";
import type { Metadata } from "next";
import { articles } from "../lib/articles";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Décryptage du marché immobilier local, événements et actualités du Mont d'Or et de l'Ouest lyonnais.",
};

const formatDate = (d: string) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

export default function Page() {
  const [first, ...rest] = articles;
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Actualités</div>
        <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">Actualités locales & marché.</h1>
        <p className="text-muted mt-6 leading-relaxed text-lg">
          Tendances de marché, repères patrimoniaux, baromètre trimestriel sur le Mont d'Or, l'Ouest lyonnais et la Plaine du Forez.
        </p>
      </div>

      <Link href={`/actualites/${first.slug}`} className="group block mt-16 grid lg:grid-cols-2 gap-10">
        <div className="aspect-[4/3] overflow-hidden bg-ivory-deep">
          <img src={first.image} alt={first.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
            <span className="text-gold">{first.rubrique}</span>
            <span className="text-muted">·</span>
            <span className="text-muted">{formatDate(first.date)}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight text-navy group-hover:text-gold transition">{first.titre}</h2>
          <p className="text-muted mt-5 leading-relaxed">{first.chapo}</p>
          <div className="mt-6 text-sm text-navy">{first.dureeLecture} min de lecture · par {first.auteur}</div>
        </div>
      </Link>

      <div className="grid md:grid-cols-3 gap-10 mt-20 pt-16 border-t border-ink/10">
        {rest.map((a) => (
          <Link key={a.slug} href={`/actualites/${a.slug}`} className="group">
            <div className="aspect-[4/3] overflow-hidden bg-ivory-deep">
              <img src={a.image} alt={a.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="pt-5">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                <span className="text-gold">{a.rubrique}</span>
                <span className="text-muted">{formatDate(a.date)}</span>
              </div>
              <h3 className="font-serif text-2xl mt-3 text-navy group-hover:text-gold transition leading-tight">{a.titre}</h3>
              <p className="text-sm text-muted mt-3 leading-relaxed line-clamp-3">{a.chapo}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
