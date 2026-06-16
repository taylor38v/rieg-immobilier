"use client";
import { useState, useMemo } from "react";
import { formatPrix } from "../lib/data";

type Props = {
  evolutionPrix: { annee: number; prixM2: number }[];
  prixM2Maison: number;
  prixM2Appart: number;
};

export default function MarketEvolution({ evolutionPrix, prixM2Maison, prixM2Appart }: Props) {
  const [type, setType] = useState<"maison" | "appartement">("maison");

  // Ratio appart vs maison (basé sur les valeurs actuelles)
  const ratio = type === "maison" ? 1 : prixM2Appart / prixM2Maison;

  const series = useMemo(() => {
    return evolutionPrix.map((e) => ({ annee: e.annee, prixM2: Math.round(e.prixM2 * ratio) }));
  }, [evolutionPrix, ratio]);

  const evolMin = series.length ? Math.min(...series.map((e) => e.prixM2)) : 0;
  const evolMax = series.length ? Math.max(...series.map((e) => e.prixM2)) : 0;
  const evolRange = evolMax - evolMin || 1;
  const evolPct = evolMin > 0 ? ((evolMax - evolMin) / evolMin) * 100 : 0;

  return (
    <div className="rounded-xl bg-navy-soft p-4 sm:p-8 mt-10">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="text-xs uppercase tracking-widest text-gold">Prix au m² · {type}</div>
        <div className="inline-flex bg-navy p-1 rounded-full border border-ivory/15">
          {(["maison", "appartement"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-5 py-2 text-sm capitalize rounded-full transition ${
                type === t ? "bg-gold text-navy" : "text-ivory/70 hover:text-ivory"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* viewBox resserré (560×320) pour que les labels restent lisibles sur mobile */}
      <svg viewBox="0 0 560 320" className="w-full h-auto">
        {[0, 0.25, 0.5, 0.75, 1].map((p) => (
          <line key={p} x1="50" y1={24 + p * 220} x2="548" y2={24 + p * 220} stroke="#ffffff" strokeOpacity="0.08" />
        ))}
        {[0.25, 0.5, 0.75, 1].map((p) => (
          <text key={p} x="44" y={28 + p * 220} fontSize="15" fill="#c9a25f" textAnchor="end" opacity="0.7">
            {formatPrix(evolMax - p * evolRange).replace(" €", "")}
          </text>
        ))}
        <polyline
          fill="none"
          stroke="#c9a25f"
          strokeWidth="3"
          points={series.map((e, i) => `${56 + (i / (series.length - 1)) * 492},${24 + ((evolMax - e.prixM2) / evolRange) * 220}`).join(" ")}
        />
        {series.map((e, i) => (
          <g key={i}>
            <circle
              cx={56 + (i / (series.length - 1)) * 492}
              cy={24 + ((evolMax - e.prixM2) / evolRange) * 220}
              r="6"
              fill="#c9a25f"
              stroke="#061b2c"
              strokeWidth="2"
            />
            <text x={56 + (i / (series.length - 1)) * 492} y="312" fontSize="17" fill="#faf6ef" textAnchor="middle" opacity="0.7">
              {e.annee}
            </text>
            <text
              x={56 + (i / (series.length - 1)) * 492}
              y={10 + ((evolMax - e.prixM2) / evolRange) * 220}
              fontSize="19"
              fill="#c9a25f"
              textAnchor="middle"
              fontWeight="700"
            >
              {(e.prixM2 / 1000).toFixed(1)}k
            </text>
          </g>
        ))}
      </svg>
      <div className="text-sm text-ivory/70 mt-4 text-center">
        Évolution sur 5 ans : <span className="text-gold font-medium">+{evolPct.toFixed(1)}%</span>
      </div>
    </div>
  );
}
