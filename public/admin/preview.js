// Preview WYSIWYG pour Decap CMS - reproduit le rendu exact du site dans l'éditeur.
// Chargé après decap-cms.js. Utilise React.createElement (pas de JSX dans le browser).

(function () {
  const h = window.h || window.React.createElement;

  const safe = (v, fallback = "") => (v == null ? fallback : v);
  const safeArr = (v) => (Array.isArray(v) ? v : []);

  // Substitue les chemins d'image : si l'image vient d'un upload, getAsset la résout.
  const img = (src, getAsset) => {
    if (!src) return "";
    // Toujours essayer getAsset d'abord - Decap résout les chemins relatifs ET absolus
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

  // ============== Sections génériques réutilisables ==============

  function GenericHero(d, getAsset, opts) {
    opts = opts || {};
    const videoUrl = d.video ? img(d.video, getAsset) : null;
    return h("section", { style: { position: "relative", color: "var(--ivory)", overflow: "hidden", background: "var(--navy)", padding: "8rem 0" } },
      videoUrl ? h("video", { src: videoUrl, autoPlay: true, muted: true, loop: true, playsInline: true, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 } }) : null,
      h("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,27,44,0.6), rgba(6,27,44,0.85))", zIndex: 1 } }),
      h("div", { className: "max-w-7xl px-6", style: { position: "relative", zIndex: 2 } },
        d.surtitre ? h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)) : null,
        h("h1", { className: "font-serif text-5xl md:text-7xl mt-3 leading-[1.05]", style: { maxWidth: "60rem" } }, opts.titre ? opts.titre : safe(d.titre)),
        opts.children
      )
    );
  }

  function CardsGrid(items, opts) {
    opts = opts || {};
    const cols = opts.cols || 2;
    return h("div", { className: `grid md:grid-cols-${cols} gap-6 mt-12` },
      ...safeArr(items).map((it, i) =>
        h("div", { key: i, style: { padding: "1.75rem", background: opts.darkBg ? "transparent" : "white", border: opts.darkBg ? "1px solid rgba(250,246,239,0.15)" : "1px solid rgba(0,0,0,0.1)" } },
          h("div", { className: "font-serif text-2xl", style: { color: opts.darkBg ? "var(--ivory)" : "var(--navy)" } }, safe(it.titre)),
          h("p", { className: opts.darkBg ? "text-sm text-ivory/70 mt-3 leading-relaxed" : "text-muted mt-3 leading-relaxed", style: opts.darkBg ? {} : { color: "var(--muted)" } }, safe(it.desc)),
        )
      )
    );
  }

  function SectionWrap(surtitre, titre, children, opts) {
    opts = opts || {};
    const bg = opts.bg || "transparent";
    const color = opts.color;
    return h("section", { style: { background: bg, color: color, padding: "6rem 0" } },
      h("div", { className: "max-w-7xl px-6" },
        surtitre ? h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(surtitre)) : null,
        titre ? h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(titre)) : null,
        opts.intro ? h("p", { className: opts.color ? "text-ivory/70 mt-4 max-w-2xl leading-relaxed" : "text-muted mt-4 max-w-2xl leading-relaxed" }, safe(opts.intro)) : null,
        children
      )
    );
  }

  function CtaSimple(d, opts) {
    opts = opts || {};
    return h("section", { style: { background: opts.bg || "var(--navy)", color: "var(--ivory)", padding: "5rem 0" } },
      h("div", { className: "max-w-4xl px-6", style: { textAlign: "center" } },
        h("h2", { className: "font-serif text-5xl md:text-6xl" }, safe(d.titre)),
        d.intro ? h("p", { className: "text-ivory/70 mt-4 max-w-2xl mx-auto" }, safe(d.intro)) : null,
        h("div", { className: "flex flex-wrap justify-center gap-4 mt-8" },
          d.cta_label || d.cta_primary_label ? h("a", { className: "btn-primary" }, safe(d.cta_primary_label || d.cta_label)) : null,
          d.cta_secondary_label || d.cta_whatsapp_label ? h("a", { className: "btn-secondary" }, safe(d.cta_secondary_label || d.cta_whatsapp_label)) : null,
        )
      )
    );
  }

  function RomainCardSection(d, getAsset) {
    return h("section", { style: { background: "var(--ivory-deep)", padding: "5rem 0" } },
      h("div", { className: "max-w-5xl px-6" },
        h("div", { style: { background: "var(--navy)", color: "var(--ivory)", padding: "2.5rem", borderLeft: "4px solid var(--gold)" } },
          h("div", { className: "font-serif text-3xl text-gold" }, safe(d.titre)),
          h("p", { className: "text-ivory/85 mt-4 leading-relaxed" }, safe(d.message)),
        )
      )
    );
  }

  // ============== Previews par page ==============

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

  const AProposPreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    const hero = d.hero || {};
    return h("div", { className: "preview-root" },
      h("section", { className: "max-w-7xl px-6 py-24", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" } },
        h("div", null,
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(hero.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-6xl mt-3 leading-[1.05]" }, safe(hero.titre_l1), h("br"), safe(hero.titre_l2)),
          ...safeArr(hero.paragraphes).map((p, i) =>
            h("p", { key: i, className: "text-muted mt-8 leading-relaxed" }, safe(p))
          ),
          h("div", { className: "mt-10", style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" } },
            ...safeArr(hero.stats).map((s, i) =>
              h("div", { key: i },
                h("div", { className: "font-serif text-3xl text-navy" }, safe(s.valeur)),
                h("div", { className: "text-xs uppercase tracking-widest text-muted mt-1" }, safe(s.label)),
              )
            )
          )
        ),
        h("div", { style: { aspectRatio: "4/5" } },
          safeImg(hero.photo, getAsset, safe(hero.photo_alt), { className: "w-full h-full object-cover" })
        )
      ),
      d.engagements ? SectionWrap(d.engagements.surtitre, d.engagements.titre, CardsGrid(d.engagements.items, { cols: 2 }), { bg: "var(--ivory-deep)" }) : null,
      d.cta_final ? CtaSimple({ titre: d.cta_final.titre, cta_label: d.cta_final.cta_label, cta_primary_label: d.cta_final.cta_label }) : null,
    );
  };

  const ContactPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    const hero = d.hero || {};
    const cal = d.calendrier || {};
    return h("div", { className: "preview-root" },
      h("section", { style: { background: "var(--navy)", color: "var(--ivory)", padding: "5rem 0" } },
        h("div", { className: "max-w-7xl px-6" },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(hero.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-7xl mt-3 leading-[1.05]" }, safe(hero.titre)),
          h("p", { className: "text-ivory/80 text-lg mt-6 max-w-2xl leading-relaxed" }, safe(hero.intro)),
          h("div", { className: "flex flex-wrap gap-6 mt-8 text-sm text-ivory/70" },
            ...safeArr(hero.garanties).map((g, i) => h("span", { key: i }, "✓ " + safe(g)))
          )
        )
      ),
      h("section", { style: { background: "var(--ivory-deep)", padding: "4rem 0" } },
        h("div", { className: "max-w-7xl px-6" },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(cal.surtitre)),
          h("h2", { className: "font-serif text-4xl md:text-5xl text-navy mt-3 leading-tight" }, safe(cal.titre)),
          h("p", { className: "text-muted mt-4 leading-relaxed max-w-2xl" }, safe(cal.intro)),
          h("ul", { style: { listStyle: "none", padding: 0, marginTop: "1.5rem" } },
            ...safeArr(cal.puces).map((p, i) =>
              h("li", { key: i, style: { display: "flex", gap: ".5rem", marginTop: ".5rem", fontSize: ".875rem" } },
                h("span", { className: "text-gold" }, "✓"), safe(p)
              )
            )
          ),
          h("div", { style: { marginTop: "1.5rem", display: "inline-block", padding: "0.75rem 1.5rem", background: "var(--navy)", color: "var(--ivory)", borderRadius: "9999px", fontSize: ".875rem" } }, safe(cal.cta_label))
        )
      )
    );
  };

  const HonorairesPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("div", { className: "max-w-3xl px-6 py-24", style: { margin: "0 auto" } },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("h1", { className: "font-serif text-5xl mt-3" }, safe(d.titre)),
        h("p", { className: "text-muted mt-6 leading-relaxed" }, safe(d.intro)),
        h("div", { style: { marginTop: "3rem", border: "1px solid rgba(0,0,0,0.1)" } },
          ...safeArr(d.tranches).map((t, i) =>
            h("div", { key: i, style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", padding: "1.25rem", borderBottom: "1px solid rgba(0,0,0,0.1)", alignItems: "baseline" } },
              h("div", null, safe(t.tranche)),
              h("div", { className: "font-serif text-2xl text-navy" }, safe(t.pct)),
              h("div", { className: "text-sm text-muted" }, safe(t.mini)),
            )
          )
        ),
        h("p", { className: "text-xs text-muted mt-8" }, safe(d.mention_bas_de_page))
      )
    );
  };

  const VendrePreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      d.hero ? GenericHero(d.hero, getAsset, {
        children: [
          h("p", { key: "intro", className: "text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed" }, safe(d.hero.intro)),
          h("div", { key: "ctas", className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.hero.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.hero.cta_secondary_label)),
          ),
          d.hero.mention ? h("div", { key: "mention", className: "mt-4 text-xs text-ivory/60" }, safe(d.hero.mention)) : null,
        ]
      }) : null,
      d.pourquoi_moi ? SectionWrap(d.pourquoi_moi.surtitre, d.pourquoi_moi.titre, CardsGrid(d.pourquoi_moi.items, { cols: 2 })) : null,
      d.comparatif ? SectionWrap(d.comparatif.surtitre, d.comparatif.titre, h("div", { style: { marginTop: "3rem", border: "1px solid rgba(250,246,239,0.15)" } },
        h("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", background: "var(--navy-soft)", textTransform: "uppercase", fontSize: ".875rem", fontWeight: 500, letterSpacing: ".1em" } },
          h("div", { style: { padding: "1.25rem", borderRight: "1px solid rgba(250,246,239,0.15)", color: "var(--gold)" } }, safe(d.comparatif.label_avec)),
          h("div", { style: { padding: "1.25rem", color: "rgba(250,246,239,0.6)" } }, safe(d.comparatif.label_sans)),
        ),
        ...safeArr(d.comparatif.items).map((row, i) =>
          h("div", { key: i, style: { display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(250,246,239,0.1)" } },
            h("div", { style: { padding: "1.25rem", borderRight: "1px solid rgba(250,246,239,0.15)", display: "flex", gap: ".75rem" } }, h("span", { className: "text-gold" }, "✓"), h("span", null, safe(row.avec))),
            h("div", { style: { padding: "1.25rem", color: "rgba(250,246,239,0.6)", display: "flex", gap: ".75rem" } }, h("span", { style: { color: "#fda4af" } }, "×"), h("span", null, safe(row.sans))),
          )
        )
      ), { bg: "var(--navy)", color: "var(--ivory)" }) : null,
      d.etapes ? SectionWrap(d.etapes.surtitre, d.etapes.titre, h("div", { style: { marginTop: "4rem" } },
        ...safeArr(d.etapes.items).map((e, i) =>
          h("div", { key: i, style: { display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: "2.5rem", marginTop: i ? "2.5rem" : 0 } },
            h("div", { className: "font-serif text-5xl text-gold leading-none" }, safe(e.num)),
            h("div", null,
              h("div", { className: "font-serif text-2xl text-navy" }, safe(e.titre)),
              h("div", { className: "text-muted mt-3 leading-relaxed" }, safe(e.desc)),
            )
          )
        )
      )) : null,
      d.romain_card ? RomainCardSection(d.romain_card) : null,
      d.cta_final ? CtaSimple({ titre: d.cta_final.titre, intro: d.cta_final.intro, cta_primary_label: d.cta_final.cta_primary_label, cta_whatsapp_label: d.cta_final.cta_whatsapp_label }) : null,
    );
  };

  const AcheterPreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      d.hero ? GenericHero(d.hero, getAsset, {
        children: [
          h("p", { key: "i1", className: "text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed" }, safe(d.hero.intro)),
          h("p", { key: "i2", className: "text-gold text-lg md:text-xl mt-4 max-w-3xl leading-relaxed", dangerouslySetInnerHTML: { __html: inlineMd(safe(d.hero.argument_gold)) } }),
          h("p", { key: "i3", className: "text-ivory/80 text-lg mt-6 max-w-3xl leading-relaxed", dangerouslySetInnerHTML: { __html: inlineMd(safe(d.hero.presentation)) } }),
          h("div", { key: "ctas", className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.hero.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.hero.cta_secondary_label)),
          ),
        ]
      }) : null,
      d.piliers ? SectionWrap(d.piliers.surtitre, d.piliers.titre, CardsGrid(d.piliers.items, { cols: 2 })) : null,
      d.services ? SectionWrap(d.services.surtitre, d.services.titre, CardsGrid(d.services.items, { cols: 2 }), { bg: "var(--ivory-deep)" }) : null,
      d.romain_card ? RomainCardSection(d.romain_card) : null,
      d.cta_final ? CtaSimple({ titre: d.cta_final.titre, intro: d.cta_final.intro, cta_primary_label: d.cta_final.cta_primary_label, cta_whatsapp_label: d.cta_final.cta_whatsapp_label }) : null,
    );
  };

  const LocationPreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      d.hero ? GenericHero(d.hero, getAsset, {
        children: [
          h("p", { key: "i1", className: "text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed" }, safe(d.hero.intro1)),
          h("p", { key: "i2", className: "text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed" }, safe(d.hero.intro2)),
          h("div", { key: "ctas", className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.hero.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.hero.cta_secondary_label)),
          ),
          d.hero.mention ? h("div", { key: "m", className: "mt-4 text-xs text-ivory/60" }, safe(d.hero.mention)) : null,
        ]
      }) : null,
      d.pourquoi ? SectionWrap(d.pourquoi.surtitre, d.pourquoi.titre, CardsGrid(d.pourquoi.items, { cols: 3 })) : null,
      d.services ? SectionWrap(d.services.surtitre, d.services.titre, CardsGrid(d.services.items, { cols: 2 }), { bg: "var(--ivory-deep)" }) : null,
      d.romain_card ? RomainCardSection(d.romain_card) : null,
    );
  };

  const AvisDeValeurPreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      d.hero ? GenericHero(d.hero, getAsset, {
        children: [
          h("p", { key: "i1", className: "text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed" }, safe(d.hero.intro1)),
          h("p", { key: "i2", className: "text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed" }, safe(d.hero.intro2)),
          h("div", { key: "ctas", className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.hero.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.hero.cta_secondary_label)),
          ),
          d.hero.mention ? h("div", { key: "m", className: "mt-4 text-xs text-ivory/60" }, safe(d.hero.mention)) : null,
        ]
      }) : null,
      d.forces ? SectionWrap(d.forces.surtitre, d.forces.titre, CardsGrid(d.forces.items, { cols: 3 })) : null,
      d.etapes ? SectionWrap(d.etapes.surtitre, d.etapes.titre, h("div", { style: { marginTop: "3rem" } },
        ...safeArr(d.etapes.items).map((e, i) =>
          h("div", { key: i, style: { display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", borderTop: "1px solid rgba(250,246,239,0.1)", paddingTop: "2rem", marginTop: i ? "2rem" : 0 } },
            h("div", { className: "font-serif text-4xl text-gold leading-none" }, safe(e.num)),
            h("div", null,
              h("div", { className: "font-serif text-xl" }, safe(e.titre)),
              h("div", { className: "text-ivory/70 mt-2 leading-relaxed text-sm" }, safe(e.desc)),
            )
          )
        )
      ), { bg: "var(--navy)", color: "var(--ivory)" }) : null,
      d.romain_card ? RomainCardSection(d.romain_card) : null,
      d.cta_final ? CtaSimple({ titre: d.cta_final.titre, intro: d.cta_final.intro, cta_label: d.cta_final.cta_label }, { bg: "var(--ivory-deep)" }) : null,
    );
  };

  const RejoindrePreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      d.hero ? h("section", { style: { position: "relative", color: "var(--ivory)", overflow: "hidden", background: "var(--navy)", padding: "8rem 0" } },
        d.hero.video ? h("video", { src: img(d.hero.video, getAsset), autoPlay: true, muted: true, loop: true, playsInline: true, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 } }) : null,
        h("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,27,44,0.6), rgba(6,27,44,0.85))", zIndex: 1 } }),
        h("div", { className: "max-w-7xl px-6", style: { position: "relative", zIndex: 2 } },
          d.hero.logo_iad ? h("img", { src: img(d.hero.logo_iad, getAsset), alt: safe(d.hero.logo_alt), style: { height: "3.5rem", filter: "brightness(0) invert(1)", marginBottom: "1.5rem" } }) : null,
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.hero.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-7xl mt-3 leading-[1.05]", style: { maxWidth: "60rem" } }, safe(d.hero.titre)),
          h("p", { className: "text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed", dangerouslySetInnerHTML: { __html: inlineMd(safe(d.hero.intro)) } }),
          h("div", { className: "flex flex-wrap gap-4 mt-10" },
            h("a", { className: "btn-primary" }, safe(d.hero.cta_primary_label)),
            h("a", { className: "btn-secondary" }, safe(d.hero.cta_whatsapp_label)),
          ),
          h("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12", style: { maxWidth: "64rem" } },
            ...safeArr(d.hero.stats).map((s, i) =>
              h("div", { key: i },
                h("div", { className: "font-serif text-3xl text-gold" }, safe(s.valeur)),
                h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, safe(s.label)),
              )
            )
          )
        )
      ) : null,
      d.piliers ? SectionWrap(d.piliers.surtitre, d.piliers.titre, h("div", null,
        h("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" },
          ...safeArr(d.piliers.items).map((p, i) =>
            h("div", { key: i, style: { padding: "2rem", background: "white", border: "2px solid rgba(0,0,0,0.05)", position: "relative" } },
              h("div", { className: "font-serif text-5xl leading-none", style: { color: "rgba(201,162,95,0.3)" } }, "0" + (i + 1)),
              h("div", { className: "font-serif text-2xl text-navy mt-4 font-semibold" }, safe(p.titre)),
              h("p", { className: "text-sm text-muted mt-3 leading-relaxed" }, safe(p.desc)),
            )
          )
        ),
        d.piliers.source ? h("p", { className: "text-xs text-muted mt-8 italic" }, safe(d.piliers.source)) : null,
      )) : null,
      d.profils ? SectionWrap(d.profils.surtitre, d.profils.titre, h("div", { className: "grid md:grid-cols-2 gap-6 mt-12" },
        ...safeArr(d.profils.items).map((p, i) =>
          h("div", { key: i, style: { padding: "1.5rem", background: "white", border: "1px solid rgba(0,0,0,0.05)", display: "flex", gap: "1.25rem" } },
            h("span", { className: "font-serif text-3xl text-gold leading-none" }, "→"),
            h("div", null,
              h("div", { className: "font-serif text-xl text-navy" }, safe(p.titre)),
              h("p", { className: "text-sm text-muted mt-2 leading-relaxed" }, safe(p.desc)),
            )
          )
        )
      ), { bg: "var(--ivory-deep)" }) : null,
      d.qui_suis_je ? h("section", { className: "max-w-7xl px-6 py-24", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", position: "relative" } },
        h("div", null,
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.qui_suis_je.surtitre)),
          h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.qui_suis_je.titre)),
          h("div", { className: "mt-8", style: { display: "flex", flexDirection: "column", gap: "1rem" } },
            ...safeArr(d.qui_suis_je.paragraphes).map((p, i) =>
              h("p", { key: i, className: "text-ink/85 leading-relaxed", dangerouslySetInnerHTML: { __html: inlineMd(safe(p)) } })
            )
          )
        ),
        h("div", { style: { position: "relative" } },
          safeImg(d.qui_suis_je.photo, getAsset, safe(d.qui_suis_je.photo_alt), { style: { width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: ".5rem" } }),
          h("div", { style: { background: "var(--gold)", color: "var(--navy)", padding: "1.5rem", marginTop: "1.5rem" } },
            h("div", { className: "font-serif text-xl leading-snug" }, '"' + safe(d.qui_suis_je.citation) + '"'),
            h("div", { className: "text-xs uppercase tracking-widest mt-3 font-semibold" }, safe(d.qui_suis_je.citation_auteur)),
          )
        )
      ) : null,
      d.parcours ? SectionWrap(d.parcours.surtitre, d.parcours.titre, h("div", { style: { marginTop: "4rem" } },
        ...safeArr(d.parcours.etapes).map((e, i) =>
          h("div", { key: i, style: { display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", borderTop: "1px solid rgba(250,246,239,0.1)", paddingTop: "2.5rem", marginTop: i ? "2.5rem" : 0 } },
            h("div", { className: "font-serif text-5xl text-gold" }, safe(e.num)),
            h("div", null,
              h("div", { className: "font-serif text-2xl" }, safe(e.titre)),
              h("div", { className: "text-ivory/70 mt-3 leading-relaxed" }, safe(e.desc)),
            )
          )
        )
      ), { bg: "var(--navy)", color: "var(--ivory)" }) : null,
      d.offre ? h("section", { className: "max-w-5xl px-6 py-24", style: { margin: "0 auto" } },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold text-center" }, safe(d.offre.surtitre)),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3 text-center" }, safe(d.offre.titre)),
        h("div", { style: { marginTop: "3rem", padding: "2.5rem", background: "rgba(201,162,95,0.05)", border: "1px solid var(--gold)" } },
          h("div", { className: "font-serif text-3xl text-navy" }, safe(d.offre.prix)),
          h("p", { className: "text-muted mt-3" }, safe(d.offre.desc)),
          h("p", { className: "text-xs text-muted mt-6" }, safe(d.offre.mention)),
        )
      ) : null,
      d.cta_final ? CtaSimple(d.cta_final) : null,
    );
  };

  const OutilsLandingPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("div", { className: "max-w-7xl px-6 py-24" },
        h("div", { style: { maxWidth: "48rem" } },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
          h("p", { className: "text-muted mt-6 leading-relaxed" }, safe(d.intro)),
          h("p", { className: "text-xs text-muted mt-4 italic" }, safe(d.disclaimer)),
        ),
        h("div", { style: { background: "var(--navy)", color: "var(--ivory)", padding: "2.5rem", marginTop: "5rem", textAlign: "center" } },
          h("h3", { className: "font-serif text-3xl" }, safe(d.cta_titre)),
          h("p", { className: "text-ivory/70 mt-3" }, safe(d.cta_intro)),
          h("a", { className: "btn-primary", style: { marginTop: "1.5rem" } }, safe(d.cta_label)),
        )
      )
    );
  };

  const SecteursLandingPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("div", { className: "max-w-7xl px-6 py-24" },
        h("div", { style: { maxWidth: "48rem" } },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.titre)),
          h("p", { className: "text-muted mt-6 leading-relaxed" }, safe(d.intro)),
        ),
        h("p", { className: "text-muted mt-12 italic", style: { fontSize: ".875rem" } }, "[Aperçu] La liste des 7 communes avec prix au m² et délai de vente apparaîtra ici sur le site.")
      )
    );
  };

  const MerciPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root", style: { minHeight: "60vh", display: "grid", placeItems: "center" } },
      h("div", { className: "max-w-2xl px-6 py-24", style: { textAlign: "center" } },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("h1", { className: "font-serif text-5xl md:text-6xl mt-4" }, safe(d.titre)),
        h("p", { className: "text-muted mt-6 leading-relaxed" }, safe(d.intro)),
        h("a", { className: "btn-primary", style: { marginTop: "2.5rem", background: "var(--navy)", color: "var(--ivory)" } }, safe(d.cta_label)),
      )
    );
  };

  const NotFoundPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root", style: { minHeight: "70vh", display: "flex", alignItems: "center" } },
      h("div", { className: "max-w-3xl px-6 py-24", style: { textAlign: "center", margin: "0 auto" } },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
        h("div", { className: "font-serif text-navy", style: { fontSize: "10rem", lineHeight: 1, marginTop: "1.5rem" } }, safe(d.code)),
        h("h1", { className: "font-serif text-4xl md:text-5xl mt-4 text-navy" }, safe(d.titre)),
        h("p", { className: "text-muted mt-6 leading-relaxed", style: { maxWidth: "36rem", margin: "1.5rem auto 0" } }, safe(d.intro)),
        h("div", { className: "flex flex-wrap justify-center gap-4 mt-10" },
          h("a", { className: "btn-primary", style: { background: "var(--navy)", color: "var(--ivory)" } }, safe(d.cta_primary_label)),
          h("a", { style: { padding: "1rem 1.75rem", border: "1px solid var(--navy)", color: "var(--navy)" } }, safe(d.cta_secondary_label)),
        )
      )
    );
  };

  const ZonePreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("section", { style: { position: "relative", color: "var(--ivory)", overflow: "hidden", background: "var(--navy)", padding: "8rem 0" } },
        d.video ? h("video", { src: img(d.video, getAsset), autoPlay: true, muted: true, loop: true, playsInline: true, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 } }) : null,
        h("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,27,44,0.6), rgba(6,27,44,0.85))", zIndex: 1 } }),
        h("div", { className: "max-w-7xl px-6", style: { position: "relative", zIndex: 2 } },
          h("a", { className: "text-ivory/60 text-sm" }, "← Vendre"),
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold mt-6" }, "Mon secteur d'intervention"),
          h("h1", { className: "font-serif text-4xl md:text-6xl mt-3 leading-[1.1]", style: { maxWidth: "60rem" } }, safe(d.h1)),
          h("div", { className: "text-ivory/80 text-lg mt-8 max-w-3xl leading-relaxed", style: { display: "flex", flexDirection: "column", gap: ".75rem" } },
            ...safeArr(d.intro).map((p, i) => h("p", { key: i }, safe(p)))
          ),
          h("div", { className: "text-xs uppercase tracking-widest text-gold mt-8" }, safe(d.communes_label)),
        )
      ),
      h("section", { className: "max-w-6xl px-6 py-24" },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, "Pourquoi me confier votre bien"),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, "Trois atouts qui font la différence."),
        h("div", { className: "grid md:grid-cols-3 gap-6 mt-12" },
          ...safeArr(d.atouts).map((a, i) =>
            h("div", { key: i, style: { padding: "1.75rem", background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
              h("div", { className: "font-serif text-4xl text-gold" }, "0" + (i + 1)),
              h("div", { className: "font-serif text-xl text-navy mt-3" }, safe(a.titre)),
              h("p", { className: "text-sm text-muted mt-3 leading-relaxed" }, safe(a.desc)),
            )
          )
        )
      )
    );
  };

  const SecteurDetailPreview = ({ entry, getAsset }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("section", { style: { background: "var(--navy)", color: "var(--ivory)", padding: "5rem 0" } },
        h("div", { className: "max-w-7xl px-6" },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.cp), " · ", safe(d.intercommunalite)),
          h("h1", { className: "font-serif text-5xl md:text-6xl mt-3" }, safe(d.nom, "(Nom de la commune)")),
          h("div", { className: "grid grid-cols-4 gap-6 mt-10", style: { maxWidth: "48rem" } },
            h("div", null, h("div", { className: "font-serif text-3xl text-gold" }, String(safe(d.population, 0)).toLocaleString ? Number(safe(d.population, 0)).toLocaleString("fr-FR") : safe(d.population)), h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, "Habitants")),
            h("div", null, h("div", { className: "font-serif text-3xl text-gold" }, safe(d.superficie) + " km²"), h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, "Superficie")),
            h("div", null, h("div", { className: "font-serif text-3xl text-gold" }, safe(d.altitude)), h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, "Altitude")),
            h("div", null, h("div", { className: "font-serif text-3xl text-gold" }, safe(d.cp)), h("div", { className: "text-[10px] uppercase tracking-widest text-ivory/60 mt-2" }, "Code postal")),
          )
        )
      ),
      d.ce_qui_differencie ? h("section", { className: "max-w-7xl px-6 py-20" },
        h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, "Ce qui différencie"),
        h("h2", { className: "font-serif text-5xl md:text-6xl mt-3" }, "Pourquoi cette commune attire."),
        h("div", { className: "grid md:grid-cols-2 gap-4 mt-10" },
          ...safeArr(d.ce_qui_differencie).map((c, i) =>
            h("div", { key: i, style: { display: "flex", gap: "1rem", padding: "1.25rem", background: "var(--ivory-deep)" } },
              h("span", { className: "font-serif text-3xl text-gold leading-none" }, String(i + 1).padStart(2, "0")),
              h("p", { className: "text-ink/85 leading-relaxed" }, safe(c)),
            )
          )
        )
      ) : null,
      d.quartiers ? SectionWrap("Les quartiers", "Une lecture quartier par quartier.", h("div", { className: "grid md:grid-cols-2 gap-6 mt-10" },
        ...safeArr(d.quartiers).map((q, i) =>
          h("div", { key: i, style: { padding: "1.75rem", background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
            h("div", { className: "font-serif text-2xl text-navy" }, safe(q.nom)),
            q.prix_indicatif ? h("div", { className: "text-xs text-gold mt-2 uppercase tracking-widest" }, safe(q.prix_indicatif)) : null,
            h("p", { className: "text-muted mt-4 leading-relaxed" }, safe(q.description)),
          )
        )
      )) : null,
      d.ecoles ? SectionWrap("Écoles & enseignement", "Le réseau scolaire local.", h("div", { className: "grid md:grid-cols-3 gap-3 mt-10" },
        ...safeArr(d.ecoles).map((e, i) =>
          h("div", { key: i, style: { padding: "1.25rem", background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
            h("div", { className: "text-[10px] uppercase tracking-widest text-gold" }, safe(e.type)),
            h("div", { className: "font-serif text-lg text-navy mt-1 font-semibold" }, safe(e.nom)),
            e.precision ? h("p", { className: "text-xs text-muted mt-2" }, safe(e.precision)) : null,
          )
        )
      ), { bg: "var(--ivory-deep)" }) : null,
      d.restaurants ? SectionWrap("Tables & adresses", "Où l'on mange bien.", h("div", { className: "grid md:grid-cols-4 gap-3 mt-10" },
        ...safeArr(d.restaurants).map((r, i) =>
          h("div", { key: i, style: { padding: "1.25rem", background: "white", border: "1px solid rgba(0,0,0,0.1)" } },
            h("div", { className: "text-[10px] uppercase tracking-widest text-gold" }, safe(r.gamme)),
            h("div", { className: "font-serif text-lg text-navy mt-1 font-semibold" }, safe(r.nom)),
            h("p", { className: "text-xs text-muted mt-2" }, safe(r.cuisine)),
          )
        )
      )) : null,
      d.associations ? SectionWrap("Vie associative", "Le tissu local.", h("div", { className: "grid md:grid-cols-2 gap-3 mt-10" },
        ...safeArr(d.associations).map((a, i) =>
          h("div", { key: i, style: { display: "flex", gap: "1rem", padding: "1rem", background: "white" } },
            h("span", { className: "font-serif text-2xl text-gold leading-none" }, "·"),
            h("div", null,
              h("div", { className: "font-medium text-navy" }, safe(a.nom)),
              h("div", { className: "text-xs text-muted mt-1" }, safe(a.activite)),
            )
          )
        )
      ), { bg: "var(--ivory-deep)" }) : null,
      d.galerie && d.galerie.length ? SectionWrap("En images", "Vue d'ensemble.", h("div", { className: "grid md:grid-cols-3 gap-3 mt-10" },
        ...safeArr(d.galerie).slice(0, 6).map((src, i) =>
          h("div", { key: i, style: { overflow: "hidden", aspectRatio: "4/3", background: "var(--ivory-deep)" } },
            safeImg(src, getAsset, "", { style: { width: "100%", height: "100%", objectFit: "cover" } })
          )
        )
      )) : null,
    );
  };

  const ActualitesLandingPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    return h("div", { className: "preview-root" },
      h("div", { className: "max-w-7xl px-6 py-24" },
        h("div", { style: { maxWidth: "48rem" } },
          h("div", { className: "text-xs uppercase tracking-[0.3em] text-gold" }, safe(d.surtitre)),
          h("h1", { className: "font-serif text-5xl md:text-7xl mt-3 leading-[1.05]" }, safe(d.titre)),
          h("p", { className: "text-muted mt-6 leading-relaxed text-lg" }, safe(d.intro)),
        )
      )
    );
  };

  const MarkdownPreview = ({ entry }) => {
    const d = entry && entry.get ? entry.get("data").toJS() : {};
    // Parse minimaliste : on transforme le markdown en HTML basique
    const md = String(d.body || "");
    const html = md
      .split(/\n\n+/)
      .map((block) => {
        block = block.trim();
        if (!block) return "";
        if (block.startsWith("## ")) return "<h2>" + block.slice(3) + "</h2>";
        if (block.startsWith("# ")) return "<h1>" + block.slice(2) + "</h1>";
        if (block.startsWith("- ")) {
          const items = block.split(/\n/).filter((l) => l.startsWith("- ")).map((l) => "<li>" + inlineMd(l.slice(2)) + "</li>").join("");
          return "<ul>" + items + "</ul>";
        }
        return "<p>" + inlineMd(block) + "</p>";
      })
      .join("");
    return h("div", { className: "preview-root" },
      h("div", { className: "max-w-3xl px-6 py-24", style: { margin: "0 auto" } },
        h("h1", { className: "font-serif text-5xl" }, safe(d.titre)),
        d.date_maj ? h("p", { className: "text-muted mt-4 text-sm" }, "Dernière mise à jour : " + safe(d.date_maj)) : null,
        h("div", { className: "mt-10 prose-article", dangerouslySetInnerHTML: { __html: html } })
      )
    );
  };

  // ============== Enregistrement ==============

  function register() {
    if (!window.CMS) return setTimeout(register, 100);
    window.CMS.registerPreviewStyle("/admin/preview.css");
    window.CMS.registerPreviewTemplate("home", HomePreview);
    window.CMS.registerPreviewTemplate("a-propos", AProposPreview);
    window.CMS.registerPreviewTemplate("contact", ContactPreview);
    window.CMS.registerPreviewTemplate("honoraires", HonorairesPreview);
    window.CMS.registerPreviewTemplate("vendre", VendrePreview);
    window.CMS.registerPreviewTemplate("acheter", AcheterPreview);
    window.CMS.registerPreviewTemplate("location", LocationPreview);
    window.CMS.registerPreviewTemplate("avis-de-valeur", AvisDeValeurPreview);
    window.CMS.registerPreviewTemplate("rejoindre", RejoindrePreview);
    window.CMS.registerPreviewTemplate("outils-landing", OutilsLandingPreview);
    window.CMS.registerPreviewTemplate("secteurs-landing", SecteursLandingPreview);
    window.CMS.registerPreviewTemplate("merci", MerciPreview);
    window.CMS.registerPreviewTemplate("not-found", NotFoundPreview);
    window.CMS.registerPreviewTemplate("mentions-legales", MarkdownPreview);
    window.CMS.registerPreviewTemplate("confidentialite", MarkdownPreview);
    window.CMS.registerPreviewTemplate("actualites-landing", ActualitesLandingPreview);
    // Folder collections : enregistre par nom de collection
    window.CMS.registerPreviewTemplate("zones", ZonePreview);
    window.CMS.registerPreviewTemplate("secteurs-detail", SecteurDetailPreview);
    console.log("[Decap preview] All page previews registered (18 pages + 7 secteurs + 3 zones)");
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    register();
  } else {
    document.addEventListener("DOMContentLoaded", register);
  }
})();
