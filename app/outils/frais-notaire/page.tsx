"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { formatPrix } from "../../lib/data";

export default function Page() {
  const [prix, setPrix] = useState(750000);
  const [neuf, setNeuf] = useState(false);
  const [dept, setDept] = useState<"69" | "42">("69");
  const [meublesPrix, setMeublesPrix] = useState(0);

  const r = useMemo(() => {
    const base = prix - meublesPrix;
    const droitsDept = neuf ? 0.00715 : (dept === "69" ? 0.04500 : 0.04500);
    const droitsCommune = neuf ? 0 : 0.012;
    const fraisAssiette = neuf ? 0 : 0.00107;
    const droits = base * (droitsDept + droitsCommune + fraisAssiette);

    const tranches = [
      { jusqua: 6500, taux: 0.03945 },
      { jusqua: 17000, taux: 0.01627 },
      { jusqua: 60000, taux: 0.01085 },
      { jusqua: Infinity, taux: 0.00799 },
    ];
    let emoluments = 0;
    let prevSeuil = 0;
    for (const t of tranches) {
      if (base <= prevSeuil) break;
      const tranche = Math.min(base, t.jusqua) - prevSeuil;
      emoluments += tranche * t.taux;
      prevSeuil = t.jusqua;
    }
    emoluments *= neuf ? 1 : 1;
    const tva = emoluments * 0.2;

    const debours = 1400;
    const contribution = base * 0.0008;

    const total = droits + emoluments + tva + debours + contribution;
    const totalNeuf = neuf ? total + base * 0.20 : null;

    return {
      droits, emoluments, tva, debours, contribution, total,
      totalNeuf,
      pourcentage: (total / prix) * 100,
      parts: [
        { label: "Droits d'enregistrement", value: droits, color: "#0c1e2e" },
        { label: "Émoluments du notaire", value: emoluments + tva, color: "#c9a25f" },
        { label: "Débours & formalités", value: debours, color: "#17324a" },
        { label: "Contribution sécurité immobilière", value: contribution, color: "#e6d2a8" },
      ],
    };
  }, [prix, neuf, dept, meublesPrix]);

  const totalParts = r.parts.reduce((acc, p) => acc + p.value, 0);
  let cumul = 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <Link href="/outils" className="text-sm text-muted hover:text-navy">← Tous les outils</Link>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mt-8">Outil 06</div>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">Frais de notaire</h1>
      <p className="text-muted mt-4 max-w-2xl">Calcul détaillé pour le Rhône (69) et la Loire (42), neuf ou ancien, avec déduction du mobilier. Méthodologie 2026 conforme aux barèmes officiels.</p>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mt-12">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2"><span className="text-xs uppercase tracking-widest text-muted">Prix d'achat</span><span className="font-serif text-2xl text-navy">{formatPrix(prix)}</span></div>
            <input type="range" min={50000} max={3000000} step={5000} value={prix} onChange={(e) => setPrix(Number(e.target.value))} className="w-full accent-gold" />
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted mb-2">Type de bien</div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setNeuf(false)} className={`p-4 border ${!neuf?"bg-navy text-ivory border-navy":"bg-white border-ink/15"}`}>Ancien</button>
              <button onClick={() => setNeuf(true)} className={`p-4 border ${neuf?"bg-navy text-ivory border-navy":"bg-white border-ink/15"}`}>Neuf / VEFA</button>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-muted mb-2">Département</div>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setDept("69")} className={`p-4 border ${dept==="69"?"bg-navy text-ivory border-navy":"bg-white border-ink/15"}`}>69 · Rhône</button>
              <button onClick={() => setDept("42")} className={`p-4 border ${dept==="42"?"bg-navy text-ivory border-navy":"bg-white border-ink/15"}`}>42 · Loire</button>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2"><span className="text-xs uppercase tracking-widest text-muted">Valeur mobilier (déductible)</span><span className="font-serif text-lg text-navy">{formatPrix(meublesPrix)}</span></div>
            <input type="range" min={0} max={Math.min(prix * 0.05, 50000)} step={500} value={meublesPrix} onChange={(e) => setMeublesPrix(Number(e.target.value))} className="w-full accent-gold" />
            <div className="text-[11px] text-muted mt-1">Cuisine équipée, électroménager, mobilier intégré : déductibles si listés à l'acte (max ~5% du prix).</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-navy text-ivory p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Total frais de notaire</div>
            <div className="font-serif text-6xl text-gold mt-2">{formatPrix(r.total)}</div>
            <div className="text-ivory/60 mt-2">soit <span className="text-ivory">{r.pourcentage.toFixed(2)}%</span> du prix d'achat</div>
            {r.totalNeuf && (
              <div className="mt-4 pt-4 border-t border-ivory/10 text-sm">
                <span className="text-ivory/50">Avec TVA 20% incluse au prix : </span>
                <span className="text-gold font-serif text-lg">{formatPrix(r.totalNeuf)}</span>
              </div>
            )}
          </div>

          <div className="bg-white border border-ink/10 p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Répartition</div>
            <div className="grid md:grid-cols-[180px_1fr] gap-6 mt-6 items-center">
              <svg viewBox="0 0 100 100" className="w-40 h-40 mx-auto">
                {r.parts.map((p, i) => {
                  const pct = p.value / totalParts;
                  const start = cumul * 360;
                  const end = (cumul + pct) * 360;
                  cumul += pct;
                  const sa = (start - 90) * Math.PI / 180;
                  const ea = (end - 90) * Math.PI / 180;
                  const large = end - start > 180 ? 1 : 0;
                  const x1 = 50 + 45 * Math.cos(sa), y1 = 50 + 45 * Math.sin(sa);
                  const x2 = 50 + 45 * Math.cos(ea), y2 = 50 + 45 * Math.sin(ea);
                  return <path key={i} d={`M50,50 L${x1},${y1} A45,45 0 ${large} 1 ${x2},${y2} Z`} fill={p.color} />;
                })}
                <circle cx="50" cy="50" r="22" fill="#faf6ef" />
                <text x="50" y="50" textAnchor="middle" fontSize="9" fill="#0c1e2e" fontWeight="600">{r.pourcentage.toFixed(1)}%</text>
                <text x="50" y="60" textAnchor="middle" fontSize="6" fill="#6b6355">du prix</text>
              </svg>
              <div className="space-y-2">
                {r.parts.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 text-sm">
                    <span className="w-3 h-3" style={{ background: p.color }} />
                    <span className="flex-1 text-muted">{p.label}</span>
                    <span className="font-serif text-navy">{formatPrix(p.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <details className="bg-ivory-deep p-5 text-sm">
            <summary className="cursor-pointer font-medium text-navy">Méthodologie de calcul</summary>
            <div className="mt-4 space-y-2 text-muted leading-relaxed">
              <p><strong>Droits d'enregistrement :</strong> {neuf ? "0,715% (TPF réduite, neuf)" : `5,80% en moyenne (${dept === "69" ? "Rhône" : "Loire"} : 4,5% département + 1,2% commune + 1,07% frais d'assiette)`}</p>
              <p><strong>Émoluments du notaire :</strong> barème dégressif officiel (3,945% / 1,627% / 1,085% / 0,799% par tranches de 6 500 / 17 000 / 60 000 € puis au-delà), TVA 20% incluse.</p>
              <p><strong>Débours :</strong> ~1 400 € (extrait cadastral, état hypothécaire, copies authentiques).</p>
              <p><strong>Contribution de sécurité immobilière :</strong> 0,08% du prix.</p>
              <p>Le mobilier listé à l'acte est déduit de l'assiette des droits, mais reste soumis aux émoluments du notaire (faible impact).</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
