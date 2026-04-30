"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { secteurs, formatPrix } from "../../lib/data";

export default function Page() {
  const [revenu, setRevenu] = useState(5500);
  const [apport, setApport] = useState(80000);
  const [duree, setDuree] = useState(25);
  const [taux, setTaux] = useState(3.5);
  const [type, setType] = useState<"maison" | "appartement">("maison");

  const result = useMemo(() => {
    const mensualiteMax = revenu * 0.35;
    const r = taux / 100 / 12;
    const n = duree * 12;
    const capacite = mensualiteMax * (1 - Math.pow(1 + r, -n)) / r;
    const budgetTotal = capacite + apport;
    const fraisNotaire = budgetTotal * 0.075;
    const budgetBien = budgetTotal - fraisNotaire;

    const communes = secteurs.map((s) => {
      const prixM2 = type === "maison" ? s.prixM2Maison : s.prixM2Appart;
      const surface = budgetBien / prixM2;
      return { ...s, surface, prixM2, accessible: surface >= 60 };
    }).sort((a, b) => b.surface - a.surface);

    return { mensualite: mensualiteMax, capacite, budgetTotal, budgetBien, fraisNotaire, communes };
  }, [revenu, apport, duree, taux, type]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <Link href="/outils" className="text-sm text-muted hover:text-navy">← Tous les outils</Link>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mt-8">Outil 01</div>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">Combien puis-je acheter ?</h1>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 mt-12">
        <div className="space-y-8">
          <Slider label="Revenus nets mensuels du foyer" value={revenu} onChange={setRevenu} min={2000} max={20000} step={100} unit="€/mois" />
          <Slider label="Apport personnel" value={apport} onChange={setApport} min={0} max={500000} step={5000} unit="€" />
          <Slider label="Durée du prêt" value={duree} onChange={setDuree} min={10} max={30} step={1} unit="ans" />
          <Slider label="Taux d'intérêt (hors assurance)" value={taux} onChange={setTaux} min={1} max={6} step={0.05} unit="%" />
          <div>
            <div className="text-xs uppercase tracking-widest text-muted mb-3">Type de bien recherché</div>
            <div className="grid grid-cols-2 gap-2">
              {(["maison", "appartement"] as const).map((t) => (
                <button key={t} onClick={() => setType(t)} className={`p-4 border capitalize ${type===t?"bg-navy text-ivory border-navy":"border-ink/15 hover:border-navy"}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-navy text-ivory p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Votre budget total</div>
            <div className="font-serif text-6xl text-gold mt-2">{formatPrix(result.budgetTotal)}</div>
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-ivory/10 text-sm">
              <div><div className="text-ivory/50 text-xs uppercase tracking-widest">Capacité d'emprunt</div><div className="font-serif text-2xl mt-1">{formatPrix(result.capacite)}</div></div>
              <div><div className="text-ivory/50 text-xs uppercase tracking-widest">Apport</div><div className="font-serif text-2xl mt-1">{formatPrix(apport)}</div></div>
              <div><div className="text-ivory/50 text-xs uppercase tracking-widest">Mensualité max</div><div className="font-serif text-2xl mt-1">{formatPrix(result.mensualite)}</div></div>
              <div><div className="text-ivory/50 text-xs uppercase tracking-widest">Frais de notaire (~7,5%)</div><div className="font-serif text-2xl mt-1">{formatPrix(result.fraisNotaire)}</div></div>
            </div>
          </div>

          <div className="bg-white border border-ink/10 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Ce que cela représente</div>
            <h3 className="font-serif text-2xl mt-2">Surface accessible par commune</h3>
            <div className="mt-6 space-y-3">
              {result.communes.map((c) => {
                const pct = Math.min(100, (c.surface / 250) * 100);
                return (
                  <div key={c.slug}>
                    <div className="flex justify-between text-sm">
                      <span className="text-navy">{c.nom}</span>
                      <span className={c.accessible ? "font-medium" : "text-muted"}>{Math.round(c.surface)} m²</span>
                    </div>
                    <div className="h-1.5 bg-ink/5 mt-1 relative overflow-hidden">
                      <div className="absolute inset-y-0 left-0 bg-gold transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-muted mt-6 leading-relaxed">
              Calcul indicatif sur la base d'un taux d'endettement à 35%, frais de notaire 7,5%, prix moyens de marché. Soumis à l'accord d'un établissement bancaire.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-ivory-deep p-10 mt-16 text-center">
        <h3 className="font-serif text-3xl">Affinons ensemble votre projet</h3>
        <p className="text-muted mt-3">Je vous mets en relation avec un courtier partenaire pour optimiser votre plan de financement.</p>
        <Link href="/contact" className="inline-block mt-6 px-7 py-4 bg-navy text-ivory hover:bg-navy-soft">Échanger avec Romain</Link>
      </div>
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step, unit }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; unit: string }) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
        <span className="font-serif text-2xl text-navy">{value.toLocaleString("fr-FR")} <span className="text-sm text-muted">{unit}</span></span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-gold" />
      <div className="flex justify-between text-[10px] text-muted mt-1">
        <span>{min.toLocaleString("fr-FR")}</span>
        <span>{max.toLocaleString("fr-FR")}</span>
      </div>
    </div>
  );
}
