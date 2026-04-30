import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Erreur 404</div>
        <div className="font-serif text-[10rem] leading-none text-navy mt-6">404</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-4 text-navy">Cette adresse n'existe pas… ou plus.</h1>
        <p className="text-muted mt-6 max-w-xl mx-auto leading-relaxed">
          Comme un bien retiré du marché, certaines pages disparaissent. Mais rien n'est perdu : tout commence (ou recommence) par l'accueil.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/" className="px-7 py-4 bg-navy text-ivory hover:bg-navy-soft">Retour à l'accueil</Link>
          <a href="https://www.iadfrance.fr/conseiller-immobilier/romain.rieg" target="_blank" rel="noopener" className="px-7 py-4 border border-navy text-navy hover:bg-navy hover:text-ivory transition">Voir mes biens iad ↗</a>
        </div>
      </div>
    </div>
  );
}
