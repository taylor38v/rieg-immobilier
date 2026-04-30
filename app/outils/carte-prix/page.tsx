"use client";
import { useState } from "react";
import Link from "next/link";
import { secteurs, formatPrix } from "../../lib/data";
import { secteursDetails } from "../../lib/secteursDetails";

const positions: Record<string, { x: number; y: number }> = {
  "saint-cyr-au-mont-dor":    { x: 240, y: 180 },
  "saint-didier-au-mont-dor": { x: 310, y: 230 },
  "champagne-au-mont-dor":    { x: 380, y: 290 },
  "limonest":                 { x: 200, y: 110 },
  "dardilly":                 { x: 130, y: 200 },
  "ecully":                   { x: 320, y: 350 },
  "saint-just-saint-rambert": { x: 480, y: 410 },
};

export default function Page() {
  const [type, setType] = useState<"maison" | "appartement">("maison");
  const [annee, setAnnee] = useState(2025);
  const [hover, setHover] = useState<string | null>(null);

  const data = secteurs.map((s) => {
    const det = secteursDetails[s.slug];
    const evol = det?.evolution_prix.find((e) => e.annee === annee);
    const ratio = type === "maison" ? 1 : (s.prixM2Appart / s.prixM2Maison);
    const prix = evol ? Math.round(evol.prixM2 * ratio) : (type === "maison" ? s.prixM2Maison : s.prixM2Appart);
    return { ...s, prix, pos: positions[s.slug] };
  });
  const max = Math.max(...data.map((d) => d.prix));
  const min = Math.min(...data.map((d) => d.prix));
  const colorFor = (p: number) => {
    const t = (p - min) / (max - min || 1);
    const r = Math.round(201 + (10 - 201) * t * 0.3);
    const g = Math.round(162 + (30 - 162) * t * 0.3);
    const b = Math.round(95 + (60 - 95) * t * 0.3);
    return `rgb(${201}, ${162}, ${95})`;
  };
  const sizeFor = (p: number) => 14 + ((p - min) / (max - min || 1)) * 22;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <Link href="/outils" className="text-sm text-muted hover:text-navy">← Tous les outils</Link>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mt-8">Outil</div>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">Carte des prix immobiliers</h1>
      <p className="text-muted mt-4 max-w-2xl">Visualisation interactive du prix moyen au m² par commune, sur le Mont d'Or, l'Ouest lyonnais et la Plaine du Forez. Données issues des transactions DVF et de l'analyse de marché.</p>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 mt-12">
        <div className="bg-navy text-ivory p-6">
          <div className="flex flex-wrap gap-3 mb-4 justify-between items-center">
            <div className="grid grid-cols-2 gap-1 bg-navy-soft p-1">
              {(["maison", "appartement"] as const).map((t) => (
                <button key={t} onClick={() => setType(t)} className={`px-4 py-2 text-sm capitalize transition ${type === t ? "bg-gold text-navy" : "text-ivory/70 hover:text-ivory"}`}>{t}</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-ivory/60">Année</span>
              <select value={annee} onChange={(e) => setAnnee(Number(e.target.value))} className="bg-navy-soft border border-ivory/20 text-ivory px-3 py-2 text-sm outline-none">
                {[2020, 2021, 2022, 2023, 2024, 2025].map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <svg viewBox="0 0 600 460" className="w-full h-auto">
            <defs>
              <linearGradient id="ridgeP" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c9a25f" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#c9a25f" stopOpacity="0.02" />
              </linearGradient>
              <radialGradient id="dotGlowP">
                <stop offset="0%" stopColor="#c9a25f" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#c9a25f" stopOpacity="0" />
              </radialGradient>
            </defs>

            <path d="M 540 60 C 510 140, 530 220, 500 290 C 480 350, 510 410, 490 460" fill="none" stroke="#c9a25f" strokeWidth="2" strokeOpacity="0.35" strokeDasharray="4 6" />
            <text x="500" y="50" fill="#c9a25f" fontSize="11" opacity="0.6" fontStyle="italic">Saône →</text>

            <path d="M 60 250 Q 130 130, 200 90 T 360 130 T 460 200 T 540 270" fill="url(#ridgeP)" stroke="#c9a25f" strokeWidth="1.2" strokeOpacity="0.5" />
            <path d="M 80 320 Q 160 230, 230 200 T 380 230 T 470 310" fill="url(#ridgeP)" stroke="#c9a25f" strokeWidth="1" strokeOpacity="0.4" />

            <circle cx="500" cy="380" r="3" fill="#c9a25f" opacity="0.5" />
            <text x="510" y="384" fill="#c9a25f" fontSize="11" opacity="0.6" fontStyle="italic">Lyon</text>

            {data.map((p) => {
              if (!p.pos) return null;
              const isH = hover === p.slug;
              const r = sizeFor(p.prix);
              return (
                <g key={p.slug} onMouseEnter={() => setHover(p.slug)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
                  <circle cx={p.pos.x} cy={p.pos.y} r={r * 1.5} fill="url(#dotGlowP)" opacity={isH ? 1 : 0.35} />
                  <circle cx={p.pos.x} cy={p.pos.y} r={r} fill={colorFor(p.prix)} stroke="#061b2c" strokeWidth="2" opacity={isH ? 1 : 0.85} />
                  <text x={p.pos.x} y={p.pos.y + 4} textAnchor="middle" fill="#061b2c" fontSize="11" fontWeight="700">{(p.prix / 1000).toFixed(1)}k</text>
                  <text x={p.pos.x} y={p.pos.y - r - 8} textAnchor="middle" fill="#faf6ef" fontSize="11" fontWeight="500" style={{ letterSpacing: "0.05em" }}>{p.nom.split("-")[0].toUpperCase()}</text>
                </g>
              );
            })}

            <text x="60" y="430" fill="#c9a25f" fontSize="10" style={{ letterSpacing: "0.3em" }} opacity="0.7">PRIX MOYEN AU M² · {type.toUpperCase()} · {annee}</text>
            <text x="60" y="448" fill="#faf6ef" fontSize="9" opacity="0.4" fontStyle="italic">Cercle plus grand = prix plus élevé · Cliquez sur la liste pour ouvrir la fiche commune</text>
          </svg>
        </div>

        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Classement {annee}</div>
          {data.sort((a, b) => b.prix - a.prix).map((p, i) => (
            <Link
              key={p.slug}
              href={`/secteurs/${p.slug}`}
              onMouseEnter={() => setHover(p.slug)}
              onMouseLeave={() => setHover(null)}
              className={`block p-4 border transition ${hover === p.slug ? "border-gold bg-gold/5" : "border-ink/10 bg-white hover:border-navy"}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-gold">{i + 1}.</span>
                  <span className="font-serif text-lg text-navy">{p.nom}</span>
                </div>
                <span className="font-serif text-xl text-navy">{formatPrix(p.prix)}</span>
              </div>
            </Link>
          ))}
          <p className="text-[11px] text-muted leading-relaxed mt-4">
            <strong>Méthodologie :</strong> moyennes calculées sur la base des transactions DVF (Demandes de Valeurs Foncières) et de l'analyse comparative locale réalisée par Romain. Données indicatives — chaque bien doit être évalué individuellement.
          </p>
        </div>
      </div>

      <div className="bg-ivory-deep p-8 mt-12 text-center">
        <h3 className="font-serif text-3xl text-navy">Et votre bien, à quel prix ?</h3>
        <p className="text-muted mt-3">Une moyenne de marché ne suffit pas. Demandez un avis de valeur argumenté pour votre bien spécifique.</p>
        <Link href="/avis-de-valeur" className="inline-block mt-6 px-7 py-4 bg-navy text-ivory hover:bg-gold hover:text-navy transition">Demander mon avis de valeur</Link>
      </div>
    </div>
  );
}
