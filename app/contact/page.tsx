import type { Metadata } from "next";
import SmartContactForm from "../components/SmartContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Démarrez votre projet en 30 secondes — qualification intelligente, réponse personnelle de Romain Rieg sous 24 h.",
};

export default function Page() {
  return (
    <>
      <section className="hero-grad text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Contact</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">Dites-moi tout en 30 secondes.</h1>
          <p className="text-ivory/80 text-lg mt-6 max-w-2xl leading-relaxed">
            Quelques clics pour qualifier votre besoin — je reviens vers vous avec une réponse précise, jamais générique.
          </p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-ivory/70">
            <span>✓ Réponse personnelle sous 24 h</span>
            <span>✓ Aucune sollicitation commerciale</span>
            <span>✓ Données 100% confidentielles</span>
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Le plus rapide</div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3 leading-tight">Réservez un créneau en ligne.</h2>
              <p className="text-muted mt-4 leading-relaxed">
                30 minutes en visio ou par téléphone — pour qualifier votre projet, répondre à vos questions et voir si on peut travailler ensemble.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink/85">
                <li className="flex gap-2"><span className="text-gold">✓</span>Pas d'inscription, pas de spam</li>
                <li className="flex gap-2"><span className="text-gold">✓</span>Annulation / report en un clic</li>
                <li className="flex gap-2"><span className="text-gold">✓</span>Rappel automatique avant le rendez-vous</li>
              </ul>
              <a href="https://cal.com/romain-rieg-ckdm4p/30min" target="_blank" rel="noopener" className="inline-block mt-6 px-6 py-3 bg-navy text-ivory hover:bg-gold hover:text-navy text-sm transition rounded-full">
                Ouvrir le calendrier ↗
              </a>
            </div>
            <div className="bg-white border border-ink/10 overflow-hidden" style={{ minHeight: 660 }}>
              <iframe
                src="https://cal.com/romain-rieg-ckdm4p/30min?embed=true&theme=light&hideEventTypeDetails=false"
                title="Réserver un rendez-vous avec Romain Rieg"
                width="100%"
                height="660"
                frameBorder={0}
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <SmartContactForm />

          <aside className="space-y-6">
            <div className="bg-white border border-ink/10 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Vous préférez direct ?</div>
              <h2 className="font-serif text-2xl mt-2">Trois canaux, vous choisissez.</h2>

              <div className="mt-6 space-y-5">
                <a href="tel:+33679571473" className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group">
                  <div className="w-12 h-12 grid place-items-center bg-gold text-navy font-serif text-xl">☎</div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted">Téléphone</div>
                    <div className="font-serif text-xl text-navy group-hover:text-gold transition">06 79 57 14 73</div>
                  </div>
                </a>

                <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group">
                  <div className="w-12 h-12 grid place-items-center bg-[#25D366] text-white font-serif text-xl">💬</div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted">WhatsApp</div>
                    <div className="font-serif text-xl text-navy group-hover:text-gold transition">Démarrer un chat</div>
                  </div>
                </a>

                <a href="https://cal.com/romain-rieg-ckdm4p/30min" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group">
                  <div className="w-12 h-12 grid place-items-center bg-navy text-ivory font-serif text-xl">📅</div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted">Calendrier Cal.com</div>
                    <div className="font-serif text-xl text-navy group-hover:text-gold transition">Réserver 30 minutes</div>
                  </div>
                </a>

                <a href="mailto:romain.rieg@iadfrance.fr" className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group">
                  <div className="w-12 h-12 grid place-items-center bg-ivory-deep text-navy font-serif text-xl">✉</div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted">Email</div>
                    <div className="font-serif text-base text-navy group-hover:text-gold transition break-all">romain.rieg@iadfrance.fr</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-ink/10 text-sm text-muted">
                <div><strong className="text-navy">Du lundi au samedi</strong> · 8h30 — 20h</div>
                <div className="text-xs mt-1">Rendez-vous en soirée possibles sur demande.</div>
              </div>
            </div>

            <div className="bg-navy text-ivory p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">L'engagement</div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3"><span className="text-gold">✓</span><span>Réponse personnelle de Romain (jamais d'assistant)</span></div>
                <div className="flex gap-3"><span className="text-gold">✓</span><span>Sous 24 h en semaine, 4 h si urgent</span></div>
                <div className="flex gap-3"><span className="text-gold">✓</span><span>Aucun ajout à une liste de prospection automatique</span></div>
                <div className="flex gap-3"><span className="text-gold">✓</span><span>Données strictement confidentielles, jamais revendues</span></div>
              </div>
            </div>

            <div className="bg-ivory-deep p-6 text-sm text-muted leading-relaxed">
              <strong className="text-navy">Pourquoi ce formulaire détaillé ?</strong><br />
              Pour gagner du temps — le vôtre comme le mien. En 30 secondes, je sais déjà ce qui va vous être utile et je peux préparer une réponse vraiment ciblée. C'est plus efficace qu'un formulaire générique « nom / email / message ».
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
