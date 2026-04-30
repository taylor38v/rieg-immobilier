"use client";
import { useState } from "react";
import Link from "next/link";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";

const types = ["Maison", "Appartement", "Villa", "Terrain", "Immeuble", "Local commercial"];
const etats = ["Neuf", "Rénové récemment", "Bon état", "À rafraîchir", "Travaux importants"];
const delais = ["Dès que possible", "Dans 3 mois", "Dans 6 mois", "Dans un an", "Je me renseigne"];

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  if (showForm) return <Wizard />;

  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/dardilly.mp4" overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Avis de valeur · 24-48 h</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Connaissez la valeur réelle de votre bien.</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">
            Vous souhaitez connaître la valeur réelle de votre maison ou appartement à Saint-Didier-au-Mont-d'Or, dans l'Ouest lyonnais ou dans la Loire ?
          </p>
          <p className="text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed">
            Je suis Romain Rieg, conseiller immobilier du réseau iad France. Avec mon expérience locale et mes outils performants, je vous propose un avis de valeur rapide, précis et gratuit en 24-48 h. Originaire de la Loire (j'y ai vécu 20 ans) et basé à Saint-Didier-au-Mont-d'Or, je combine expertise terrain et force du réseau iad (+15 000 conseillers).
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <button onClick={() => setShowForm(true)} className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft">Demander mon avis de valeur</button>
            <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20je%20souhaite%20un%20avis%20de%20valeur%20de%20mon%20bien." target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">💬 WhatsApp</a>
          </div>
          <div className="mt-4 text-xs text-ivory/60">Zéro engagement · 100% confidentiel</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Pourquoi faire estimer avec moi</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">Trois forces concrètes.</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            ["Expertise locale & comparatif précis", "Je connais parfaitement les marchés de Saint-Didier-au-Mont-d'Or, des Monts d'Or et de la Plaine du Forez. Chaque estimation s'appuie sur les ventes récentes dans votre quartier, les tendances actuelles du marché local ainsi que les caractéristiques uniques de votre logement."],
            ["Outils premium & mise en valeur", "Mise en valeur premium avec photos UltraHD et prises de vue par drone si nécessaire. Analyse comparative détaillée présentée dans un dossier élégant, en version PDF ou papier, personnalisé avec mon logo — bien plus qu'un simple chiffre."],
            ["Accompagnement complet & réactivité", "Filtrage des acquéreurs pour éviter les visites inutiles et conseils sur le prix optimal pour vendre rapidement et au meilleur prix. Votre bien bénéficie d'une visibilité étendue auprès de milliers de professionnels et acheteurs qualifiés (+15 000 conseillers iad)."],
          ].map(([t, d]) => (
            <div key={t} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{t}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Comment ça se déroule</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre étapes en 24-48 h.</h2>
          <div className="mt-12 space-y-8">
            {[
              ["01", "Contact & collecte d'informations", "Via le formulaire ou un contact direct par téléphone/email. Collecte des informations nécessaires pour une estimation précise (projet de vie, famille, etc.)."],
              ["02", "Visite sur place", "Avis de valeur réalisé directement chez vous pour évaluer le bien et ses atouts. Mise en valeur premium : photos UltraHD, drone si nécessaire, description détaillée."],
              ["03", "Rapport de valeur détaillé", "Rapport complet incluant prix estimé, fourchette de marché et conseils personnalisés. Visuel du dossier élégant pour montrer le sérieux et le professionnalisme du service format iad. Disponible sous 24-48 h."],
              ["04", "Accompagnement pour la suite", "Conseils pour préparer la mise en vente, si vous souhaitez vendre. Stratégie personnalisée selon votre projet."],
            ].map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 border-t border-ivory/10 pt-8">
                <div className="font-serif text-4xl text-gold leading-none">{n}</div>
                <div>
                  <div className="font-serif text-xl">{t}</div>
                  <div className="text-ivory/70 mt-2 leading-relaxed text-sm">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RomainCard
        titre="Un avis de valeur honnête, basé sur de vrais comparables."
        message="Je ne survalorise pas pour signer un mandat. Je vous donne le prix juste, argumenté avec les ventes récentes de votre quartier. Si on doit revoir à la baisse, je vous le dis."
      />

      <section className="bg-ivory-deep py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl text-navy">Démarrer mon avis de valeur</h2>
          <p className="text-muted mt-4">Six questions rapides — réponse sous 24-48 h, sans engagement.</p>
          <button onClick={() => setShowForm(true)} className="inline-block mt-8 px-8 py-4 bg-navy text-ivory hover:bg-gold hover:text-navy transition">
            Démarrer le questionnaire
          </button>
        </div>
      </section>
    </>
  );
}

function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ type: "", ville: "", adresse: "", surface: "", pieces: "", etat: "", delai: "", nom: "", email: "", tel: "" });
  const set = (k: string, v: string) => setData({ ...data, [k]: v });

  const submit = async () => {
    try {
      const body = new URLSearchParams({ "form-name": "avis-de-valeur", ...data, telephone: data.tel });
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
    } catch {}
    setStep(6);
  };

  const steps = [
    { title: "Quel type de bien ?", sub: "Étape 1 / 6",
      body: (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {types.map((t) => (
            <button key={t} onClick={() => { set("type", t); setStep(1); }} className={`p-6 border text-left transition ${data.type===t?"border-navy bg-navy text-ivory":"border-ink/15 hover:border-navy"}`}>
              <div className="font-serif text-xl">{t}</div>
            </button>
          ))}
        </div>
      )},
    { title: "Où se situe votre bien ?", sub: "Étape 2 / 6",
      body: (
        <div className="space-y-4">
          <Field label="Ville" value={data.ville} onChange={(v) => set("ville", v)} placeholder="Saint-Didier-au-Mont-d'Or" />
          <Field label="Adresse (confidentielle)" value={data.adresse} onChange={(v) => set("adresse", v)} placeholder="12 rue de la République" />
        </div>
      )},
    { title: "Caractéristiques du bien", sub: "Étape 3 / 6",
      body: (
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Surface (m²)" type="number" value={data.surface} onChange={(v) => set("surface", v)} placeholder="150" />
          <Field label="Nombre de pièces" type="number" value={data.pieces} onChange={(v) => set("pieces", v)} placeholder="5" />
        </div>
      )},
    { title: "Quel est l'état du bien ?", sub: "Étape 4 / 6",
      body: (
        <div className="space-y-3">
          {etats.map((e) => (
            <button key={e} onClick={() => { set("etat", e); setStep(4); }} className={`w-full p-4 border text-left transition ${data.etat===e?"border-navy bg-navy text-ivory":"border-ink/15 hover:border-navy"}`}>{e}</button>
          ))}
        </div>
      )},
    { title: "À quelle échéance souhaitez-vous vendre ?", sub: "Étape 5 / 6",
      body: (
        <div className="space-y-3">
          {delais.map((d) => (
            <button key={d} onClick={() => { set("delai", d); setStep(5); }} className={`w-full p-4 border text-left transition ${data.delai===d?"border-navy bg-navy text-ivory":"border-ink/15 hover:border-navy"}`}>{d}</button>
          ))}
        </div>
      )},
    { title: "Où recevoir votre avis de valeur ?", sub: "Étape 6 / 6",
      body: (
        <div className="space-y-4">
          <Field label="Nom & prénom" value={data.nom} onChange={(v) => set("nom", v)} />
          <Field label="Email" type="email" value={data.email} onChange={(v) => set("email", v)} />
          <Field label="Téléphone" type="tel" value={data.tel} onChange={(v) => set("tel", v)} />
          <p className="text-xs text-muted">Vos données restent strictement confidentielles. Je suis le seul destinataire de votre demande.</p>
        </div>
      )},
  ];

  if (step === 6) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Demande reçue</div>
        <h1 className="font-serif text-5xl mt-4">Merci {data.nom || ""} 🌿</h1>
        <p className="text-muted mt-6 leading-relaxed">
          Je reviens vers vous sous 24-48 h avec un avis de valeur argumenté. Si vous le souhaitez, nous pourrons convenir d'une visite pour affiner la valeur de votre bien.
        </p>
        <Link href="/" className="inline-block mt-10 px-7 py-4 bg-navy text-ivory">Retour à l'accueil</Link>
      </div>
    );
  }

  const current = steps[step];
  const canContinue =
    (step === 0 && data.type) ||
    (step === 1 && data.ville) ||
    (step === 2 && data.surface && data.pieces) ||
    (step === 3 && data.etat) ||
    (step === 4 && data.delai) ||
    (step === 5 && data.nom && data.email && data.tel);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <div className="flex gap-1 mt-4 mb-12">
        {steps.map((_, i) => (
          <div key={i} className={`h-1 flex-1 ${i<=step?"bg-gold":"bg-ink/10"}`} />
        ))}
      </div>
      <div className="text-xs uppercase tracking-[0.3em] text-gold">{current.sub}</div>
      <h2 className="font-serif text-4xl md:text-5xl mt-3">{current.title}</h2>
      <div className="mt-10">{current.body}</div>
      <div className="flex justify-between mt-10">
        <button onClick={() => setStep(Math.max(0, step - 1))} className={`text-sm text-muted hover:text-navy ${step===0?"invisible":""}`}>← Précédent</button>
        {step !== 0 && step !== 3 && step !== 4 && (
          <button onClick={() => canContinue && (step === 5 ? submit() : setStep(step + 1))} disabled={!canContinue} className={`px-7 py-3 ${canContinue?"bg-navy text-ivory hover:bg-gold hover:text-navy":"bg-ink/10 text-muted cursor-not-allowed"}`}>
            {step === 5 ? "Recevoir mon avis de valeur" : "Continuer"}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-2 w-full px-4 py-3 bg-white border border-ink/15 focus:border-navy outline-none" />
    </label>
  );
}
