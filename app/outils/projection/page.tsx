"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { secteurs, formatPrix } from "../../lib/data";

const tendances: Record<string, { evol5ans: number; volatilite: number; demande: string }> = {
  "saint-cyr-au-mont-dor":    { evol5ans: 3.8, volatilite: 1.2, demande: "Très forte" },
  "saint-didier-au-mont-dor": { evol5ans: 3.5, volatilite: 1.0, demande: "Très forte" },
  "ecully":                   { evol5ans: 2.9, volatilite: 1.5, demande: "Forte" },
  "champagne-au-mont-dor":    { evol5ans: 4.2, volatilite: 1.8, demande: "Très forte (effet métro)" },
  "limonest":                 { evol5ans: 3.1, volatilite: 1.3, demande: "Forte" },
  "dardilly":                 { evol5ans: 2.4, volatilite: 1.4, demande: "Stable" },
  "saint-just-saint-rambert": { evol5ans: 2.0, volatilite: 1.6, demande: "Stable" },
};

export default function Page() {
  const [valeur, setValeur] = useState(750000);
  const [commune, setCommune] = useState("saint-didier-au-mont-dor");
  const [horizon, setHorizon] = useState(5);

  const data = useMemo(() => {
    const t = tendances[commune];
    const taux = t.evol5ans / 100;
    const annees = Array.from({ length: horizon + 1 }, (_, i) => i);
    const optimiste = annees.map((y) => valeur * Math.pow(1 + taux + t.volatilite / 100, y));
    const central = annees.map((y) => valeur * Math.pow(1 + taux, y));
    const prudent = annees.map((y) => valeur * Math.pow(1 + taux - t.volatilite / 100, y));
    return { annees, optimiste, central, prudent, t, plusValueCentrale: central[horizon] - valeur };
  }, [valeur, commune, horizon]);

  const max = Math.max(...data.optimiste);
  const min = Math.min(...data.prudent);
  const range = max - min;

  const sect = secteurs.find((s) => s.slug === commune)!;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <Link href="/outils" className="text-sm text-muted hover:text-navy">← Tous les outils</Link>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mt-8">Outil — projection indicative</div>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">Combien vaudra mon bien dans {horizon} ans ?</h1>
      <div className="mt-6 p-4 bg-gold/10 border-l-2 border-gold">
        <p className="text-sm text-ink/85 leading-relaxed">
          ⚠️ <strong>Outil indicatif uniquement.</strong> Cette projection se base sur les tendances passées et ne préjuge pas de l'évolution future du marché. Les conditions économiques, réglementaires (loi Climat, fiscalité) et locales peuvent significativement modifier ces projections. Pour une analyse fiable, demandez à Romain une étude personnalisée intégrant les spécificités de votre bien.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mt-12">
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted mb-2">Commune</div>
            <select value={commune} onChange={(e) => setCommune(e.target.value)} className="w-full p-4 bg-white border border-ink/15 font-serif text-xl text-navy outline-none">
              {secteurs.map((s) => <option key={s.slug} value={s.slug}>{s.nom}</option>)}
            </select>
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-muted">Valeur actuelle</span>
              <span className="font-serif text-2xl text-navy">{formatPrix(valeur)}</span>
            </div>
            <input type="range" min={150000} max={3000000} step={10000} value={valeur} onChange={(e) => setValeur(Number(e.target.value))} className="w-full accent-gold" />
          </div>
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-xs uppercase tracking-widest text-muted">Horizon</span>
              <span className="font-serif text-2xl text-navy">{horizon} ans</span>
            </div>
            <input type="range" min={1} max={10} value={horizon} onChange={(e) => setHorizon(Number(e.target.value))} className="w-full accent-gold" />
          </div>

          <div className="p-6 bg-ivory-deep">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Marché de {sect.nom}</div>
            <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
              <div><div className="text-muted text-xs">Évolution annuelle</div><div className="font-serif text-2xl text-navy mt-1">+{data.t.evol5ans}%</div></div>
              <div><div className="text-muted text-xs">Demande</div><div className="font-serif text-base text-navy mt-1">{data.t.demande}</div></div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-navy text-ivory p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Projection scénario central</div>
            <div className="flex items-baseline gap-4 mt-2">
              <div className="font-serif text-5xl text-gold">{formatPrix(data.central[horizon])}</div>
              <div className="text-ivory/60 text-sm">soit <span className="text-gold">+{formatPrix(data.plusValueCentrale)}</span> de plus-value</div>
            </div>
            <div className="text-xs text-ivory/50 mt-2">Soit +{((data.plusValueCentrale / valeur) * 100).toFixed(1)}% sur {horizon} ans</div>
          </div>

          <div className="bg-white border border-ink/10 p-6 mt-4">
            <svg viewBox="0 0 600 280" className="w-full h-auto">
              <defs>
                <linearGradient id="centralGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a25f" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c9a25f" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 0.25, 0.5, 0.75, 1].map((p) => (
                <line key={p} x1="60" y1={20 + p * 220} x2="580" y2={20 + p * 220} stroke="#1a1a1a" strokeOpacity="0.05" />
              ))}
              {[0.25, 0.5, 0.75, 1].map((p) => (
                <text key={p} x="55" y={24 + p * 220} fontSize="9" fill="#6b6355" textAnchor="end">
                  {formatPrix(max - p * range)}
                </text>
              ))}
              {data.annees.map((y) => (
                <text key={y} x={60 + (y / horizon) * 520} y="270" fontSize="9" fill="#6b6355" textAnchor="middle">+{y}a</text>
              ))}

              <path
                d={data.optimiste.map((v, i) => `${i === 0 ? "M" : "L"} ${60 + (i / horizon) * 520} ${20 + ((max - v) / range) * 220}`).join(" ") +
                   " " + data.prudent.map((v, i) => `L ${60 + ((horizon - i) / horizon) * 520} ${20 + ((max - data.prudent[horizon - i]) / range) * 220}`).join(" ") + " Z"}
                fill="url(#centralGrad)"
              />
              <polyline fill="none" stroke="#c9a25f" strokeWidth="0.5" strokeDasharray="2 3"
                points={data.optimiste.map((v, i) => `${60 + (i / horizon) * 520},${20 + ((max - v) / range) * 220}`).join(" ")} />
              <polyline fill="none" stroke="#c9a25f" strokeWidth="2.5"
                points={data.central.map((v, i) => `${60 + (i / horizon) * 520},${20 + ((max - v) / range) * 220}`).join(" ")} />
              <polyline fill="none" stroke="#c9a25f" strokeWidth="0.5" strokeDasharray="2 3"
                points={data.prudent.map((v, i) => `${60 + (i / horizon) * 520},${20 + ((max - v) / range) * 220}`).join(" ")} />
              {data.central.map((v, i) => (
                <circle key={i} cx={60 + (i / horizon) * 520} cy={20 + ((max - v) / range) * 220} r="3" fill="#0c1e2e" stroke="#c9a25f" strokeWidth="1.5" />
              ))}
            </svg>
            <div className="flex gap-6 text-xs text-muted mt-2 justify-center">
              <span><span className="inline-block w-4 h-0.5 bg-gold align-middle mr-1" /> Scénario central</span>
              <span><span className="inline-block w-4 border-t border-dashed border-gold align-middle mr-1" /> Optimiste / prudent</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <Card label="Prudent" v={data.prudent[horizon]} />
            <Card label="Central" v={data.central[horizon]} highlight />
            <Card label="Optimiste" v={data.optimiste[horizon]} />
          </div>

          <p className="text-xs text-muted mt-4 leading-relaxed">
            Projection indicative basée sur l'historique DVF (Demandes de Valeurs Foncières) du secteur, l'évolution démographique locale et les projets d'aménagement connus. Ne constitue pas un engagement de valorisation.
          </p>
        </div>
      </div>
    </div>
  );
}

function Card({ label, v, highlight }: { label: string; v: number; highlight?: boolean }) {
  return (
    <div className={`p-4 border ${highlight ? "border-gold bg-gold/5" : "border-ink/10 bg-white"}`}>
      <div className="text-[10px] uppercase tracking-widest text-muted">{label}</div>
      <div className={`font-serif text-xl mt-1 ${highlight ? "text-gold" : "text-navy"}`}>{formatPrix(v)}</div>
    </div>
  );
}
