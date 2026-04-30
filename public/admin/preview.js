// Preview WYSIWYG pour Decap CMS — reproduit le rendu exact du site dans l'éditeur.
// Chargé après decap-cms.js. Utilise React.createElement (pas de JSX dans le browser).

(function () {
  const h = window.h || window.React.createElement;

  const safe = (v, fallback = "") => (v == null ? fallback : v);
  const safeArr = (v) => (Array.isArray(v) ? v : []);

  // Substitue les chemins d'image : si l'image vient d'un upload, getAsset la résout.
  const img = (src, getAsset) => {
    if (!src) return "";
    // Toujours essayer getAsset d'abord — Decap résout les chemins relatifs ET absolus
    if (typeof getAsset === "function") {
      try {
        const asset = getAsset(src);
        if (asset) {
          const url = asset.toString();
          if (url && url !== "undefined" && url !== "null") return url;
        }
      } catch (e) { /* fallback */ }
    }
    if (src.startsWith("http") || src.startsWith("/")) return src;
    return "/" + src.replace(/^\.?\//, "");
  };

  // Retourne null si pas d'image, pour ne pas afficher de broken image
  const safeImg = (src, getAsset, alt, props) => {
    const url = img(src, getAsset);
    if (!url) return h("div", { style: { width: "100%", height: "100%", background: "rgba(0,0,0,0.05)", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: "0.75rem" } }, "📷 Image à venir");
    return h("img", Object.assign({ src: url, alt: alt || "" }, props || {}));
  };

  // Markdown inline minimal : **gras**, _italique_
  const inlineMd = (text) => {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/_(.+?)_/g, "<em>$1</em>");
  };

  // ============== Sections ==============

  function HeroSection(d, getAsset) {
    const videoUrl = d.video ? img(d.video, getAsset) : null;
    return h("section", { style: { position: "relative", color: "var(--ivory)", overflow: "hidden", background: "var(--navy)" } },
      videoUrl ? h("video", { src: videoUrl, autoPlay: true, muted: true, loop: true, playsInline: true, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 } }) : null,
      h("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,27,44,0.6), rgba(6,27,44,0.8))", zIndex: 1 } }),
      h("div", { className: "max-w-7xl px-6 py-20 md:py-28", style: { position: "relative", zIndex: 2, display: "grid", gap: "3rem" } },
        h("div", null,
          h("span", { className: "chip bg-gold/20 text-gold-soft", style: { border: "1px solid rgba(201,162,95,0.4)" } }, safe(d.chip)),
          h("h1", { className: "font-serif text-5xl md:text-7xl mt-6 leading-[1.05]" }, safe(d.titre, "(Titre principal)")),
          h("p", { className: "text-ivory/80 text-lg mt-8 max-w-2xl leading-relaxed" }, safe(d.intro)),
          h("div", { className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.cta_secondary_label)),
          ),
          h("div", { className: "mt-6 text-xs text-ivory/60" }, safe(d.mention)),
          h("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12" },
            ...safeArr(d.stats).map((s, i) =>
              h("div", { key: i },
                h("div", { className: "font-serif text-3xl text-gold" }, safe(s.valeur)),
                h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, safe(s.label)),
              )
            )
          )
        )
      )
    );
  }

  function BiensIadSection(d) {
    return h("section", { className: "bg-navy-soft text-ivory py-12 border-y" },
      h("div", { className: "max-w-7xl px-6", style: { display: "grid", gap: "1.5rem", alignItems: "center", gridTemplateColumns: "1fr auto" } },
        h("div", null,
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
          h("h2", { className: "font-serif text-2xl md:text-3xl mt-2" }, safe(d.titre)),
          h("p", { className: "text-ivory/70 text-sm mt-2" }, safe(d.desc)),
        ),
        h("a", { className: "btn-primary whitespace-nowrap" }, safe(d.cta_label)),
      )
    );
  }

  function QuiSuisJeSection(d, getAsset) {
    return h("section", { className: "max-w-7xl px-6 py-24", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" } },
      h("div", null,
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3 leading-tight" }, safe(d.titre)),
        ...safeArr(d.paragraphes).map((p, i) =>
          h("p", { key: i, className: "text-ink/85 mt-4 leading-relaxed", dangerouslySetInnerHTML: { __html: inlineMd(p) } })
        ),
        h("div", { className: "flex flex-wrap gap-4 mt-8" },
          h("a", { style: { padding: "0.75rem 1.5rem", background: "var(--navy)", color: "var(--ivory)", fontSize: "0.875rem" } }, safe(d.cta_primary_label)),
          h("a", { style: { padding: "0.75rem 1.5rem", border: "1px solid var(--navy)", color: "var(--navy)", fontSize: "0.875rem" } }, safe(d.cta_secondary_label)),
        )
      ),
      h("div", { className: "relative aspect-[4/5]" },
        safeImg(d.photo, getAsset, safe(d.photo_alt), { className: "w-full h-full object-cover" }),
        h("div", { style: { position: "absolute", bottom: "-1.5rem", left: "-1.5rem", background: "var(--gold)", color: "var(--navy)", padding: "1.5rem", maxWidth: "280px" } },
          h("div", { className: "font-serif text-2xl" }, '"' + safe(d.citation) + '"'),
          h("div", { className: "text-xs uppercase tracking-widest mt-3" }, safe(d.citation_auteur)),
        )
      )
    );
  }

  function ServicesSection(d) {
    return h("section", { className: "bg-navy text-ivory py-24" },
      h("div", { className: "max-w-7xl px-6" },
        h("div", { style: { marginBottom: "3rem" } },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
          h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
        ),
        h("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4" },
          ...safeArr(d.items).map((s, i) =>
            h("div", { key: i, style: { padding: "1.5rem", border: "1px solid rgba(250,246,239,0.15)" } },
              h("div", { className: "font-serif text-xl" }, safe(s.titre)),
              h("p", { className: "text-sm text-ivory/70 mt-3 leading-relaxed" }, safe(s.desc)),
              h("span", { className: "text-xs text-gold mt-4", style: { display: "inline-block" } }, "Découvrir →"),
            )
          )
        )
      )
    );
  }

  function SecteursSection(d, getAsset) {
    return h("section", { className: "max-w-7xl px-6 py-24" },
      h("div", { style: { marginBottom: "3.5rem" } },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
        h("p", { className: "text-muted mt-4 max-w-2xl leading-relaxed" }, safe(d.intro)),
      ),
      h("div", { className: "grid md:grid-cols-3 gap-6" },
        ...safeArr(d.zones).map((z, i) =>
          h("div", { key: i, style: { background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
            h("div", { style: { aspectRatio: "16/10", overflow: "hidden", position: "relative" } },
              safeImg(z.image, getAsset, safe(z.titre), { className: "w-full h-full object-cover" }),
              h("div", { className: "chip bg-gold text-navy", style: { position: "absolute", top: "0.75rem", left: "0.75rem" } }, safe(z.badge)),
            ),
            h("div", { style: { padding: "1.5rem" } },
              h("div", { className: "font-serif text-2xl text-navy" }, safe(z.titre)),
              h("p", { className: "text-sm text-muted mt-2" }, safe(z.desc)),
              h("span", { className: "text-xs text-navy mt-4", style: { display: "inline-block" } }, "Découvrir la zone →"),
            )
          )
        )
      )
    );
  }

  function InstagramSection(d, getAsset) {
    return h("section", { className: "bg-ivory-deep py-24" },
      h("div", { className: "max-w-7xl px-6" },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
        h("p", { className: "text-muted mt-3 max-w-2xl" }, safe(d.intro)),
        h("div", { className: "grid md:grid-cols-3 gap-4 mt-10" },
          ...safeArr(d.videos).map((v, i) =>
            h("div", { key: i, style: { position: "relative", aspectRatio: "9/16", overflow: "hidden", background: "var(--navy)" } },
              safeImg(v.thumb, getAsset, safe(v.titre), { style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 } }),
              h("div", { style: { position: "absolute", inset: 0, display: "grid", placeItems: "center" } },
                h("div", { style: { width: "4rem", height: "4rem", display: "grid", placeItems: "center", background: "var(--gold)", color: "var(--navy)", borderRadius: "9999px", fontSize: "1.5rem" } }, "▶")
              ),
              h("div", { style: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem", color: "var(--ivory)", background: "linear-gradient(to top, rgba(6,27,44,0.9), transparent)" } },
                h("div", { className: "text-[10px] uppercase tracking-widest text-gold" }, "Reel · " + safe(v.duree)),
                h("div", { className: "font-serif text-xl mt-1" }, safe(v.titre)),
              )
            )
          )
        ),
        h("div", { className: "text-center mt-10" },
          h("a", { style: { padding: "0.75rem 1.5rem", background: "var(--navy)", color: "var(--ivory)", display: "inline-block", fontSize: "0.875rem" } }, safe(d.cta_label))
        )
      )
    );
  }

  function AvisSection(d) {
    return h("section", { className: "max-w-7xl px-6 py-24" },
      h("div", { className: "text-center", style: { marginBottom: "3.5rem" } },
        h("div", { className: "flex items-center justify-center gap-3" },
          h("span", { style: { fontSize: "1.5rem", color: "#4285F4", fontWeight: 600 } }, "Google"),
          h("span", { style: { fontSize: "1.5rem", color: "var(--gold)" } }, "★★★★★"),
          h("span", { className: "font-serif text-2xl text-navy" }, safe(d.note_chiffre)),
        ),
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mt-4" }, safe(d.surtitre)),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
      ),
      h("div", { className: "grid md:grid-cols-3 gap-8" },
        ...safeArr(d.items).map((a, i) =>
          h("div", { key: i, style: { padding: "2rem", background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
            h("div", { className: "text-gold text-xl" }, "★★★★★"),
            h("p", { className: "mt-5 leading-relaxed text-ink/80" }, '"' + safe(a.texte) + '"'),
            h("div", { className: "mt-6 pt-6 border-t" },
              h("div", { className: "font-medium" }, safe(a.nom)),
              h("div", { className: "text-xs text-muted" }, safe(a.contexte)),
            )
          )
        )
      ),
      h("div", { className: "text-center mt-10" },
        h("a", { className: "text-sm text-navy", style: { textDecoration: "underline" } }, safe(d.cta_label))
      )
    );
  }

  function CtaFinalSection(d) {
    return h("section", { className: "bg-navy text-ivory" },
      h("div", { className: "max-w-5xl px-6 py-20 text-center" },
        h("h2", { className: "font-serif text-5xl md:text-6xl" }, safe(d.titre)),
        h("p", { className: "text-ivory/70 mt-6 max-w-2xl mx-auto" }, safe(d.intro)),
        h("div", { className: "flex flex-wrap justify-center gap-4 mt-10" },
          h("a", { className: "btn-primary" }, safe(d.cta_primary_label)),
          h("a", { className: "btn-secondary" }, safe(d.cta_secondary_label)),
        )
      )
    );
  }

  // ============== Templates Decap ==============

  const HomePreview = ({ entry, getAsset }) => {
    const data = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      data.hero ? HeroSection(data.hero, getAsset) : null,
      data.biens_iad ? BiensIadSection(data.biens_iad) : null,
      data.qui_suis_je ? QuiSuisJeSection(data.qui_suis_je, getAsset) : null,
      data.services ? ServicesSection(data.services) : null,
      data.secteurs ? SecteursSection(data.secteurs, getAsset) : null,
      data.instagram ? InstagramSection(data.instagram, getAsset) : null,
      data.avis ? AvisSection(data.avis) : null,
      data.cta_final ? CtaFinalSection(data.cta_final) : null,
    );
  };

  // ============== Enregistrement ==============

  function register() {
    if (!window.CMS) return setTimeout(register, 100);
    window.CMS.registerPreviewStyle("/admin/preview.css");
    window.CMS.registerPreviewTemplate("home", HomePreview);
    console.log("[Decap preview] HomePreview registered");
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    register();
  } else {
    document.addEventListener("DOMContentLoaded", register);
  }
})();
