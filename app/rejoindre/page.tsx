import Link from "next/link";
import type { Metadata } from "next";
import { marked } from "marked";
import HeroBackground from "../components/HeroBackground";
import ContactButtons from "../components/ContactButtons";
import ContactCTA from "../components/ContactCTA";
import { site } from "../lib/_generated/site";

const r = site.rejoindre;
const inline = (s: string) => marked.parseInline(s) as string;

export const metadata: Metadata = {
  title: r.meta_title,
  description: r.meta_description,
};

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={r.hero.video} overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{r.hero.surtitre}</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.0] max-w-5xl">{r.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(r.hero.intro) }} />
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={r.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft rounded-full">{r.hero.cta_primary_label}</Link>
            <ContactButtons smsBody="Bonjour Romain, je souhaite en savoir plus sur le métier de conseiller iad. " mailSubject="Rejoindre votre équipe iad" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-16 max-w-4xl">
            {r.hero.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl text-gold">{s.valeur}</div>
                <div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{r.piliers.surtitre}</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-3">{r.piliers.titre}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {r.piliers.items.map((p, i) => (
            <div key={p.titre} className="group relative p-8 bg-white border-2 border-ink/5 hover:border-gold transition overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-500" />
              <div className="font-serif text-5xl text-gold/30 leading-none">0{i + 1}</div>
              <div className="font-serif text-2xl text-navy mt-4 font-semibold">{p.titre}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted mt-8 italic">{r.piliers.source}</p>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{r.profils.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{r.profils.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {r.profils.items.map((p) => (
              <div key={p.titre} className="shine-hover rounded-xl p-6 bg-white border border-ink/5 flex gap-5">
                <span className="font-serif text-3xl text-gold leading-none">→</span>
                <div>
                  <div className="font-serif text-xl text-navy">{p.titre}</div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start relative">
        <div className="relative z-10">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{r.qui_suis_je.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{r.qui_suis_je.titre}</h2>
          <div className="mt-8 space-y-4 text-ink/85 leading-relaxed">
            {r.qui_suis_je.paragraphes.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: inline(p) }} />
            ))}
          </div>
        </div>
        <div className="relative">
          <img src={r.qui_suis_je.photo} alt={r.qui_suis_je.photo_alt} className="w-full aspect-[4/5] object-cover rounded-lg" />
          <div className="bg-gold text-navy p-6 mt-6 lg:mt-0 lg:absolute lg:-bottom-8 lg:left-8 lg:right-8 lg:max-w-[420px] shadow-xl">
            <div className="font-serif text-xl lg:text-2xl leading-snug">"{r.qui_suis_je.citation}"</div>
            <div className="text-xs uppercase tracking-widest mt-3 font-semibold">{r.qui_suis_je.citation_auteur}</div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{r.parcours.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{r.parcours.titre}</h2>
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {r.parcours.etapes.map((e) => (
              <div key={e.num} className="rounded-xl shine-hover bg-navy-soft border border-ivory/10 p-6 grid grid-cols-[auto_1fr] gap-5">
                <div className="font-serif text-5xl text-gold leading-none">{e.num}</div>
                <div>
                  <div className="font-serif text-2xl">{e.titre}</div>
                  <div className="text-ivory/70 mt-3 leading-relaxed">{e.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        variant="navy"
        titre={r.cta_final.titre}
        intro={r.cta_final.intro}
        smsBody="Bonjour Romain, je souhaite en savoir plus sur le métier de conseiller iad. "
        mailSubject="Rejoindre votre équipe iad"
      />
    </>
  );
}
