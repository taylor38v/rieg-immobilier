import Link from "next/link";
import { marked } from "marked";
import CityMap from "./components/CityMap";
import HeroBackground from "./components/HeroBackground";
import { site } from "./lib/_generated/site";

const inline = (s: string) => marked.parseInline(s) as string;

export default function Home() {
  const h = site.home;

  return (
    <>
      <section className="relative text-ivory overflow-hidden bg-navy">
        <HeroBackground video={h.hero.video} overlay={0.7} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="fade-up">
            <span className="chip bg-gold/20 text-gold-soft border border-gold/40">{h.hero.chip}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-medium mt-6 leading-[1.05] whitespace-pre-line">{h.hero.titre}</h1>
            <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">{h.hero.intro}</p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href={h.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy font-semibold hover:bg-gold-soft rounded-full transition">{h.hero.cta_primary_label}</Link>
              <Link href={h.hero.cta_secondary_href} className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10 transition rounded-full">{h.hero.cta_secondary_label}</Link>
            </div>
            <div className="mt-6 text-xs text-ivory/60">{h.hero.mention}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
              {h.hero.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-gold whitespace-nowrap">{s.valeur}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-widest text-ivory/70 mt-2 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-up">
            <CityMap height={520} showLegend={true} includeLimitrophes={true} />
          </div>
        </div>
      </section>

      <section className="bg-navy-soft text-ivory py-12 border-y border-gold/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{h.biens_iad.surtitre}</div>
            <h2 className="font-serif text-2xl md:text-3xl mt-2">{h.biens_iad.titre}</h2>
            <p className="text-ivory/70 text-sm mt-2">{h.biens_iad.desc}</p>
          </div>
          <a href={h.biens_iad.cta_url} target="_blank" rel="noopener" className="px-6 py-4 bg-gold text-navy hover:bg-gold-soft rounded-full text-center whitespace-nowrap">{h.biens_iad.cta_label}</a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{h.qui_suis_je.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 leading-tight whitespace-pre-line">{h.qui_suis_je.titre}</h2>
          {h.qui_suis_je.paragraphes.map((p, i) => (
            <p key={i} className="text-ink/85 mt-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(p) }} />
          ))}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href={h.qui_suis_je.cta_primary_href} className="px-8 py-4 bg-gold text-navy font-semibold rounded-full hover:bg-gold-soft text-base transition shadow-md hover:shadow-lg">{h.qui_suis_je.cta_primary_label}</Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl overflow-hidden aspect-[4/5]">
            <img src={h.qui_suis_je.photo} alt={h.qui_suis_je.photo_alt} className="no-round w-full h-full object-cover" />
          </div>
          <div className="rounded-xl bg-gold text-navy p-6 shadow-2xl absolute -bottom-6 -left-6 lg:-left-10 max-w-[80%] z-10">
            <div className="font-serif text-2xl md:text-3xl leading-tight">"{h.qui_suis_je.citation}"</div>
            <div className="text-xs uppercase tracking-widest mt-3 font-semibold">{h.qui_suis_je.citation_auteur}</div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{h.services.surtitre}</div>
              <h2 className="font-serif text-3xl md:text-4xl mt-3">{h.services.titre}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {h.services.items.map((s, i) => {
              const icons = [
                <svg key="s1" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6l9 4 9-4-9-4-9 4z"/><path d="M3 12l9 4 9-4"/><path d="M3 18l9 4 9-4"/></svg>,
                <svg key="s2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                <svg key="s3" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
                <svg key="s4" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
              ];
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative rounded-2xl p-7 border border-ivory/15 bg-navy-soft/40 hover:border-gold hover:bg-gold/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/40 transition-all duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/10 grid place-items-center text-gold group-hover:from-gold group-hover:to-gold-soft group-hover:text-navy transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                      {icons[i]}
                    </div>
                    <div className="text-xs text-gold/60 mt-4 font-semibold uppercase tracking-[0.3em]">Service {String(i + 1).padStart(2, "0")}</div>
                    <div className="font-serif text-xl mt-2 group-hover:text-gold transition leading-tight">{s.titre}</div>
                    <p className="text-sm text-ivory/70 mt-3 leading-relaxed">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 mt-5 text-xs text-gold font-semibold uppercase tracking-widest">
                      Découvrir
                      <span className="inline-block transition-transform group-hover:translate-x-2 duration-500">→</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{h.secteurs.surtitre}</div>
            <h2 className="font-serif text-3xl md:text-4xl mt-3">{h.secteurs.titre}</h2>
            <p className="text-muted mt-4 max-w-2xl leading-relaxed">{h.secteurs.intro}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {h.secteurs.zones.map((z) => (
            <Link key={z.slug} href={`/vendre/${z.slug}`} className="group bg-white border border-ink/10 hover:border-navy rounded-2xl overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden relative rounded-t-2xl">
                <img src={z.image} alt={z.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-3 left-3 chip bg-gold text-navy">{z.badge}</div>
              </div>
              <div className="p-6">
                <div className="font-serif text-2xl text-navy group-hover:text-gold transition">{z.titre}</div>
                <p className="text-sm text-muted mt-2">{z.desc}</p>
                <span className="inline-block mt-4 text-xs text-navy link-underline">Découvrir la zone →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{h.instagram.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{h.instagram.titre}</h2>
          <p className="text-muted mt-3 max-w-3xl no-justify">{h.instagram.intro}</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {h.instagram.videos.map((v) => (
              <a key={v.titre} href={v.url || h.instagram.lien} target="_blank" rel="noopener" className="group relative aspect-[9/16] overflow-hidden bg-navy rounded-2xl">
                <img src={v.thumb} alt={v.titre} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-16 h-16 grid place-items-center bg-gold text-navy rounded-full text-2xl group-hover:scale-110 transition">▶</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory bg-gradient-to-t from-navy/90 to-transparent">
                  <div className="text-[10px] uppercase tracking-widest text-gold">Reel · {v.duree}</div>
                  <div className="font-serif text-xl mt-1">{v.titre}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={h.instagram.lien} target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-navy text-ivory rounded-full hover:bg-gold hover:text-navy text-sm transition rounded-full">{h.instagram.cta_label}</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-white border-2 border-gold/30 shadow-xl shadow-gold/20">
            <svg width="150" height="48" viewBox="0 0 100 32" className="no-round">
              <text x="0" y="22" fontSize="20" fontWeight="600" fill="#4285F4">G</text>
              <text x="14" y="22" fontSize="20" fontWeight="600" fill="#EA4335">o</text>
              <text x="27" y="22" fontSize="20" fontWeight="600" fill="#FBBC05">o</text>
              <text x="40" y="22" fontSize="20" fontWeight="600" fill="#4285F4">g</text>
              <text x="53" y="22" fontSize="20" fontWeight="600" fill="#34A853">l</text>
              <text x="60" y="22" fontSize="20" fontWeight="600" fill="#EA4335">e</text>
            </svg>
            <span className="text-3xl text-gold">★★★★★</span>
            <span className="font-serif text-3xl font-bold text-navy">{h.avis.note_chiffre}</span>
          </div>
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium mt-6">{h.avis.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{h.avis.titre}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {h.avis.items.map((a) => (
            <div key={a.nom} className="shine-hover rounded-xl p-8 bg-white border border-ink/10 hover:border-gold transition">
              <div className="text-gold text-xl">★★★★★</div>
              <p className="mt-5 leading-relaxed text-ink/80">"{a.texte}"</p>
              <div className="mt-6 pt-6 border-t border-ink/10">
                <div className="font-medium">{a.nom}</div>
                <div className="text-xs text-muted">{a.contexte}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={h.avis.cta_url} target="_blank" rel="noopener" className="text-sm text-navy link-underline">{h.avis.cta_label}</a>
        </div>
      </section>

    </>
  );
}
