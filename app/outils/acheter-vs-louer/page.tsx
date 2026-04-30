"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { formatPrix } from "../../lib/data";

export default function Page() {
  const [prix, setPrix] = useState(450000);
  const [loyer, setLoyer] = useState(1450);
  const [apport, setApport] = useState(60000);
  const [taux, setTaux] = useState(3.6);
  const [duree, setDuree] = useState(20);
  const [horizon, setHorizon] = useState(10);
  const [evolBien, setEvolBien] = useState(2.5);
  const [evolLoyer, setEvolLoyer] = useState(2);
  const [rendementPlacement, setRendementPlacement] = useState(4);

  const r = useMemo(() => {
    const fraisNotaire = prix * 0.075;
    const totalInvest = prix + fraisNotaire;
    const emprunt = totalInvest - apport;
    const m = taux / 100 / 12;
    const n = duree * 12;
    const mensualite = emprunt > 0 ? emprunt * m / (1 - Math.pow(1 + m, -n)) : 0;
    const tfAnnuel = prix * 0.0035;
    const chargesProprio = prix * 0.005;

    let achatNet = -apport;
    let resteDu = emprunt;
    let valeurBien = prix;
    const achatTrace = [{ y: 0, v: -apport }];

    for (let y = 1; y <= horizon; y++) {
      let interetsAnnee = 0;
      let capitalAnnee = 0;
      for (let i = 0; i < 12; i++) {
        const interet = resteDu * m;
        const capital = Math.min(resteDu, mensualite - interet);
        interetsAnnee += interet;
        capitalAnnee += capital;
        resteDu -= capital;
      }
      valeurBien *= 1 + evolBien / 100;
      achatNet -= interetsAnnee + tfAnnuel + chargesProprio;
      achatTrace.push({ y, v: valeurBien - resteDu - apport - (achatTrace[0].v < 0 ? 0 : 0) + (achatNet + apport) });
    }
    const patrimoineAchat = valeurBien - resteDu;
    const coutAchat = (apport + (mensualite * 12 + tfAnnuel + chargesProprio) * horizon) - patrimoineAchat;

    let loyerCumul = 0;
    let loyerCourant = loyer;
    for (let y = 1; y <= horizon; y++) {
      loyerCumul += loyerCourant * 12;
      loyerCourant *= 1 + evolLoyer / 100;
    }
    const placementApport = apport * Math.pow(1 + rendementPlacement / 100, horizon);
    const economiesMensuelles = Math.max(0, mensualite + (tfAnnuel + chargesProprio) / 12 - loyer);
    const placementMensuel = economiesMensuelles > 0
      ? Array.from({ length: horizon * 12 }).reduce((acc: number) => (acc + economiesMensuelles) * (1 + rendementPlacement / 100 / 12), 0)
      : 0;
    const patrimoineLocataire = placementApport + placementMensuel;
    const coutLocataire = loyerCumul - (patrimoineLocataire - apport);

    const seuil = (() => {
      let v = prix;
      let d = emprunt;
      let cAchat = apport;
      let lCum = 0;
      let lCour = loyer;
      let placement = apport;
      for (let y = 1; y <= 30; y++) {
        for (let i = 0; i < 12; i++) {
          const ii = d * m;
          const cap = Math.min(d, mensualite - ii);
          d -= cap;
        }
        v *= 1 + evolBien / 100;
        cAchat += mensualite * 12 + tfAnnuel + chargesProprio;
        const patAchat = v - d;
        lCum += lCour * 12;
        placement = (placement + Math.max(0, mensualite * 12 + tfAnnuel + chargesProprio - lCour * 12)) * (1 + rendementPlacement / 100);
        lCour *= 1 + evolLoyer / 100;
        if (patAchat - cAchat > placement - lCum) return y;
      }
      return null;
    })();

    return { mensualite, patrimoineAchat, patrimoineLocataire, coutAchat, coutLocataire, seuil, fraisNotaire };
  }, [prix, loyer, apport, taux, duree, horizon, evolBien, evolLoyer, rendementPlacement]);

  const winner = r.patrimoineAchat - r.coutAchat > r.patrimoineLocataire - r.coutLocataire ? "achat" : "location";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <Link href="/outils" className="text-sm text-muted hover:text-navy">← Tous les outils</Link>
      <div className="text-xs uppercase tracking-[0.3em] text-gold mt-8">Outil 08</div>
      <h1 className="font-serif text-5xl md:text-6xl mt-3">Acheter ou louer ?</h1>
      <p className="text-muted mt-4 max-w-2xl">Comparaison financière complète sur votre durée d'occupation. Intègre frais de notaire, intérêts, taxe foncière, charges, valorisation et placement alternatif de l'apport.</p>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 mt-12">
        <div className="space-y-4">
          <Slider label="Prix du bien" value={prix} onChange={setPrix} min={100000} max={2000000} step={5000} unit="€" />
          <Slider label="Loyer mensuel équivalent" value={loyer} onChange={setLoyer} min={300} max={6000} step={25} unit="€" />
          <Slider label="Apport disponible" value={apport} onChange={setApport} min={0} max={500000} step={2000} unit="€" />
          <Slider label="Taux du prêt" value={taux} onChange={setTaux} min={1} max={6} step={0.05} unit="%" />
          <Slider label="Durée du prêt" value={duree} onChange={setDuree} min={10} max={25} step={1} unit="ans" />
          <div className="border-t border-ink/10 pt-4 mt-4 space-y-4">
            <Slider label="Durée d'occupation envisagée" value={horizon} onChange={setHorizon} min={1} max={25} step={1} unit="ans" />
            <Slider label="Évolution annuelle du bien" value={evolBien} onChange={setEvolBien} min={-2} max={6} step={0.1} unit="%" />
            <Slider label="Évolution annuelle des loyers" value={evolLoyer} onChange={setEvolLoyer} min={0} max={5} step={0.1} unit="%" />
            <Slider label="Rendement placement (assurance-vie, ETF...)" value={rendementPlacement} onChange={setRendementPlacement} min={0} max={8} step={0.1} unit="%" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-navy text-ivory p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Verdict à {horizon} ans</div>
            <div className="font-serif text-4xl mt-3">
              {winner === "achat" ? <span className="text-gold">L'achat est financièrement plus avantageux</span> : <span className="text-gold">La location est financièrement plus avantageuse</span>}
            </div>
            <div className="text-ivory/70 text-sm mt-3">
              {r.seuil ? <>Le point de bascule (où l'achat devient gagnant) se situe à <span className="text-gold font-medium">{r.seuil} ans</span> d'occupation.</> : "Sur les 30 prochaines années, la location reste financièrement préférable dans cette configuration."}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className={`p-6 ${winner === "achat" ? "bg-gold/10 border border-gold" : "bg-white border border-ink/10"}`}>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Scénario achat</div>
              <div className="mt-4 space-y-3 text-sm">
                <Row l="Patrimoine net constitué" v={formatPrix(r.patrimoineAchat)} highlight />
                <Row l="Mensualité de prêt" v={`${formatPrix(r.mensualite)} /mois`} />
                <Row l="Frais de notaire payés" v={formatPrix(r.fraisNotaire)} />
                <Row l="Coût net (frais − patrimoine)" v={formatPrix(r.coutAchat)} red />
              </div>
            </div>
            <div className={`p-6 ${winner === "location" ? "bg-gold/10 border border-gold" : "bg-white border border-ink/10"}`}>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Scénario location + placement</div>
              <div className="mt-4 space-y-3 text-sm">
                <Row l="Capital placé constitué" v={formatPrix(r.patrimoineLocataire)} highlight />
                <Row l="Loyer initial" v={`${loyer} € /mois`} />
                <Row l="Apport placé à {rendementPlacement}%" v={formatPrix(apport)} />
                <Row l="Coût net (loyers − placement)" v={formatPrix(r.coutLocataire)} red />
              </div>
            </div>
          </div>

          <div className="bg-ivory-deep p-5 text-sm leading-relaxed">
            <strong className="text-navy">À retenir :</strong> ce comparatif est purement financier. La propriété apporte aussi de la sécurité, la possibilité de transmettre, la liberté de transformer. La location offre flexibilité géographique et zéro travaux. Romain est à votre disposition pour mettre ces chiffres en perspective avec votre projet de vie.
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({ label, value, onChange, min, max, step, unit }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; step: number; unit: string }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5"><span className="text-xs text-muted">{label}</span><span className="font-serif text-sm text-navy">{value.toLocaleString("fr-FR")} {unit}</span></div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-gold" />
    </div>
  );
}
function Row({ l, v, highlight, red }: { l: string; v: string; highlight?: boolean; red?: boolean }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-muted text-xs">{l}</span>
      <span className={`font-serif ${highlight ? "text-2xl text-gold" : red ? "text-base text-navy/70" : "text-base text-navy"}`}>{v}</span>
    </div>
  );
}
