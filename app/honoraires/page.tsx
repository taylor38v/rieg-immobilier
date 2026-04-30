export const metadata = { title: "Honoraires — Romain Rieg Immobilier" };

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-xs uppercase tracking-[0.3em] text-gold">Transparence</div>
      <h1 className="font-serif text-5xl mt-3">Honoraires de transaction</h1>
      <p className="text-muted mt-6 leading-relaxed">
        Mes honoraires sont toujours exprimés TTC et ne sont dus qu'à la signature de l'acte authentique. Ils incluent l'intégralité des prestations de commercialisation (photo, visite virtuelle, diffusion, accompagnement juridique).
      </p>
      <div className="mt-12 border border-ink/10">
        <Row tranche="Jusqu'à 100 000 €" pct="6%" mini="4 500 € minimum" />
        <Row tranche="100 001 € à 300 000 €" pct="5%" />
        <Row tranche="300 001 € à 600 000 €" pct="4%" />
        <Row tranche="600 001 € à 1 000 000 €" pct="3,5%" />
        <Row tranche="Au-delà de 1 000 000 €" pct="3%" />
      </div>
      <p className="text-xs text-muted mt-8">Barème indicatif TTC, applicable à compter du 01/01/2026 sauf convention particulière. Honoraires généralement à la charge du vendeur, sauf mention contraire stipulée au mandat.</p>
    </div>
  );
}

function Row({ tranche, pct, mini }: { tranche: string; pct: string; mini?: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5 border-b border-ink/10 last:border-0 items-baseline">
      <div className="md:col-span-1">{tranche}</div>
      <div className="font-serif text-2xl text-navy">{pct}</div>
      <div className="text-sm text-muted">{mini}</div>
    </div>
  );
}
