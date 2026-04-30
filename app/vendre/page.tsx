import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import CityMap from "../components/CityMap";
import { secteurs, formatPrix } from "../lib/data";
import { site } from "../lib/_generated/site";

const v = site.vendre;

export const metadata: Metadata = {
  title: v.meta_title,
  description: v.meta_description,
};

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={v.hero.video} overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.hero.surtitre}</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">{v.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{v.hero.intro}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={v.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">{v.hero.cta_primary_label}</Link>
            <a href={v.hero.cta_secondary_url} target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">{v.hero.cta_secondary_label}</a>
          </div>
          <div className="mt-4 text-xs text-ivory/60">{v.hero.mention}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.pourquoi_moi.surtitre}</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">{v.pourquoi_moi.titre}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {v.pourquoi_moi.items.map((it) => (
            <div key={it.titre} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{it.titre}</div>
              <p className="text-muted mt-3 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.comparatif.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{v.comparatif.titre}</h2>
          <div className="mt-12 border border-ivory/15">
            <div className="grid grid-cols-2 bg-navy-soft text-sm font-medium uppercase tracking-widest">
              <div className="p-5 border-r border-ivory/15 text-gold">{v.comparatif.label_avec}</div>
              <div className="p-5 text-ivory/60">{v.comparatif.label_sans}</div>
            </div>
            {v.comparatif.items.map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-ivory/10">
                <div className="p-5 border-r border-ivory/15 flex gap-3 items-start">
                  <span className="text-gold">✓</span>
                  <span>{row.avec}</span>
                </div>
                <div className="p-5 text-ivory/60 flex gap-3 items-start">
                  <span className="text-rose-300">×</span>
                  <span>{row.sans}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.etapes.surtitre}</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">{v.etapes.titre}</h2>
        <div className="mt-16 space-y-10">
          {v.etapes.items.map((e) => (
            <div key={e.num} className="grid grid-cols-[auto_1fr] gap-8 md:gap-12 border-t border-ink/10 pt-10">
              <div className="font-serif text-5xl text-gold leading-none">{e.num}</div>
              <div>
                <div className="font-serif text-2xl text-navy">{e.titre}</div>
                <div className="text-muted mt-3 leading-relaxed">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RomainCard titre={v.romain_card.titre} message={v.romain_card.message} />

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.secteurs_section.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{v.secteurs_section.titre}</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">{v.secteurs_section.intro}</p>
          <div className="mt-10">
            <CityMap height={560} includeLimitrophes={true} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
            {secteurs.map((s) => (
              <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold">
                <div className="font-serif text-lg">{s.nom}</div>
                <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">{formatPrix(s.prixM2Maison)}/m²</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.zones_section.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{v.zones_section.titre}</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {v.zones_section.zones.map((z) => (
              <Link key={z.slug} href={`/vendre/${z.slug}`} className="group bg-white border border-ink/10 hover:border-navy">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={z.image} alt={z.titre} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-6">
                  <div className="font-serif text-xl text-navy group-hover:text-gold transition">{z.titre}</div>
                  <p className="text-sm text-muted mt-2">{z.desc}</p>
                  <span className="inline-block mt-4 text-xs text-navy link-underline">Vendre dans cette zone →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-6xl">{v.cta_final.titre}</h2>
          <p className="text-ivory/70 mt-4">{v.cta_final.intro}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href={v.cta_final.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">{v.cta_final.cta_primary_label}</Link>
            <a href={v.cta_final.cta_whatsapp_url} target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">{v.cta_final.cta_whatsapp_label}</a>
          </div>
        </div>
      </section>
    </>
  );
}
