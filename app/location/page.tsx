import type { Metadata } from "next";
import Link from "next/link";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import { secteurs, formatPrix } from "../lib/data";
import { site } from "../lib/_generated/site";

const l = site.location;

export const metadata: Metadata = {
  title: l.meta_title,
  description: l.meta_description,
};

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={l.hero.video} overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.hero.surtitre}</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">{l.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{l.hero.intro1}</p>
          <p className="text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed">{l.hero.intro2}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={l.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft">{l.hero.cta_primary_label}</Link>
            <a href={l.hero.cta_secondary_url} target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">{l.hero.cta_secondary_label}</a>
          </div>
          <div className="mt-4 text-xs text-ivory/60">{l.hero.mention}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.pourquoi.surtitre}</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">{l.pourquoi.titre}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {l.pourquoi.items.map((it) => (
            <div key={it.titre} className="p-6 bg-white border border-ink/10">
              <div className="font-serif text-xl text-navy">{it.titre}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.services.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{l.services.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {l.services.items.map((s) => (
              <div key={s.titre} className="p-7 border border-ink/10 bg-white">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.secteurs_section.surtitre}</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">{l.secteurs_section.titre}</h2>
        <p className="text-muted mt-4 max-w-2xl">{l.secteurs_section.intro}</p>
        <div className="mt-10">
          <CityMap height={560} includeLimitrophes={true} />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {secteurs.map((s) => (
            <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-white hover:bg-navy hover:text-ivory transition border border-ink/10 hover:border-navy">
              <div className="font-serif text-lg text-navy group-hover:text-ivory">{s.nom}</div>
              <div className="text-xs text-muted group-hover:text-ivory/70 mt-1">Loyer indicatif {Math.round(s.prixM2Appart * 0.0042)} €/m²</div>
            </Link>
          ))}
        </div>
      </section>

      <RomainCard titre={l.romain_card.titre} message={l.romain_card.message} />

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.cta_final.locataires_surtitre}</div>
            <h2 className="font-serif text-3xl mt-3">{l.cta_final.locataires_titre}</h2>
            <p className="text-ivory/70 mt-4">{l.cta_final.locataires_desc}</p>
            <Link href={l.cta_final.locataires_cta_href} className="inline-block mt-6 px-6 py-3 bg-gold text-navy hover:bg-gold-soft text-sm">{l.cta_final.locataires_cta_label}</Link>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">{l.cta_final.question_surtitre}</div>
            <h2 className="font-serif text-3xl mt-3">{l.cta_final.question_titre}</h2>
            <p className="text-ivory/70 mt-4">{l.cta_final.question_desc}</p>
            <div className="flex gap-3 mt-6">
              <a href="tel:+33679571473" className="px-5 py-3 border border-ivory/30 hover:bg-ivory/10 text-sm">06 79 57 14 73</a>
              <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
