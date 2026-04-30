"use client";
import { useState, useEffect } from "react";

export default function WhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Ouvrir la fiche contact"
        className="fixed bottom-6 left-6 z-[60] w-16 h-16 grid place-items-center bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-2xl transition-all hover:scale-110"
        style={{ boxShadow: "0 10px 30px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.7)", animation: "wapulse 2.4s infinite" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-navy/60 backdrop-blur-sm"
          />
          <div className="fixed bottom-6 left-6 right-6 sm:right-auto sm:bottom-24 z-[71] sm:max-w-[380px] bg-ivory border-2 border-gold shadow-2xl overflow-hidden">
            <div className="relative bg-navy text-ivory px-6 pt-6 pb-5">
              <button onClick={() => setOpen(false)} aria-label="Fermer" className="absolute top-3 right-4 text-ivory/70 hover:text-gold text-2xl leading-none">×</button>
              <div className="flex items-center gap-4">
                <img src="/photos/romain-pro.jpg" alt="Romain Rieg" className="w-20 h-20 rounded-full object-cover border-2 border-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" /> En ligne
                  </div>
                  <div className="font-serif text-2xl text-ivory mt-1">Romain Rieg</div>
                  <div className="text-xs text-ivory/70">Conseiller immobilier iad</div>
                </div>
              </div>
            </div>

            <div className="px-6 py-5">
              <p className="text-sm text-ink/85 leading-relaxed italic">
                "Passionné d'immobilier et originaire de la Loire, je suis aujourd'hui ancré au cœur des Monts d'Or. Mon objectif : un accompagnement humain, transparent et ultra-réactif."
              </p>

              <div className="mt-5 space-y-2">
                <a
                  href="https://wa.me/33679571473?text=Bonjour%20Romain%20!"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between gap-3 px-4 py-3.5 bg-[#25D366] text-white hover:bg-[#20bd5a] transition rounded"
                >
                  <span className="flex items-center gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
                    <span className="font-medium text-sm">Démarrer la conversation</span>
                  </span>
                  <span className="text-white/80">→</span>
                </a>

                <a
                  href="tel:+33679571473"
                  className="flex items-center justify-between gap-3 px-4 py-3.5 bg-navy text-ivory hover:bg-gold hover:text-navy transition rounded"
                >
                  <span className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span className="font-medium text-sm">06 79 57 14 73</span>
                  </span>
                  <span className="opacity-70">→</span>
                </a>

                <a
                  href="/contact"
                  className="flex items-center justify-between gap-3 px-4 py-3.5 border border-navy text-navy hover:bg-navy hover:text-ivory transition rounded"
                >
                  <span className="flex items-center gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    <span className="font-medium text-sm">Contactez-moi (formulaire)</span>
                  </span>
                  <span className="opacity-70">→</span>
                </a>
              </div>

              <div className="mt-5 pt-5 border-t border-ink/10 text-[11px] text-muted text-center">
                Réponse moyenne : <span className="text-navy font-medium">8 minutes</span> · Disponible 7j/7
              </div>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes wapulse {
          0% { box-shadow: 0 10px 30px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.55); }
          70% { box-shadow: 0 10px 30px rgba(37,211,102,.4), 0 0 0 22px rgba(37,211,102,0); }
          100% { box-shadow: 0 10px 30px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </>
  );
}
