import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import RomainCard from "../components/RomainCard";
import { secteurs, formatPrix } from "../lib/data";
import { site } from "../lib/_generated/site";

const a = site.acheter;
const inline = (s: string) => marked.parseInline(s) as string;

export const metadata: Metadata = {
  title: a.meta_title,
  description: a.meta_description,
};

export default function Page() {
  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={a.hero.video} overlay={0.65} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.hero.surtitre}</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">{a.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{a.hero.intro}</p>
          <p className="text-gold text-lg md:text-xl mt-4 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(a.hero.argument_gold) }} />
          <p className="text-ivory/80 text-lg mt-6 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(a.hero.presentation) }} />
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={a.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">{a.hero.cta_primary_label}</Link>
            <a href={a.hero.cta_secondary_url} target="_blank" rel="noopener" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">{a.hero.cta_secondary_label}</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.piliers.surtitre}</div>
        <h2 className="font-serif text-5xl md:text-6xl mt-3">{a.piliers.titre}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {a.piliers.items.map((p) => (
            <div key={p.titre} className="p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{p.titre}</div>
              <p className="text-muted mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.services.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{a.services.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {a.services.items.map((s) => (
              <div key={s.titre} className="p-7 bg-white border border-ink/10">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.secteurs_section.surtitre}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{a.secteurs_section.titre}</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">{a.secteurs_section.intro}</p>
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

      <RomainCard titre={a.romain_card.titre} message={a.romain_card.message} />

      <section className="bg-navy text-ivory py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-5xl md:text-6xl">{a.cta_final.titre}</h2>
          <p className="text-ivory/70 mt-4">{a.cta_final.intro}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href={a.cta_final.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">{a.cta_final.cta_primary_label}</Link>
            <a href={a.cta_final.cta_whatsapp_url} target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">{a.cta_final.cta_whatsapp_label}</a>
          </div>
        </div>
      </section>
    </>
  );
}
