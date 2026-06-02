import type { Metadata } from "next";
import Link from "next/link";
import { marked } from "marked";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import ContactButtons from "../components/ContactButtons";
import ContactCTA from "../components/ContactCTA";
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
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{a.hero.surtitre}</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05] max-w-4xl">{a.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{a.hero.intro}</p>
          <p className="text-gold text-lg md:text-xl mt-4 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(a.hero.argument_gold) }} />
          <p className="text-ivory/80 text-lg mt-6 max-w-3xl leading-relaxed" dangerouslySetInnerHTML={{ __html: inline(a.hero.presentation) }} />
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={a.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft rounded-full">{a.hero.cta_primary_label}</Link>
            <ContactButtons smsBody="Bonjour Romain, je cherche un bien. " mailSubject="Recherche d'un bien" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{a.piliers.surtitre}</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-3">{a.piliers.titre}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {a.piliers.items.map((p) => (
            <div key={p.titre} className="shine-hover rounded-xl p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{p.titre}</div>
              <p className="text-muted mt-3 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{a.services.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{a.services.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {a.services.items.map((s) => (
              <div key={s.titre} className="shine-hover rounded-xl p-7 bg-white border border-ink/10">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{a.secteurs_section.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{a.secteurs_section.titre}</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">{a.secteurs_section.intro}</p>
          <div className="mt-10">
            <CityMap height={560} includeLimitrophes={true} />
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <div className="text-base font-semibold uppercase tracking-[0.25em] text-gold mb-4">Ouest Lyonnais</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {secteurs
                  .filter((s) => !["saint-just-saint-rambert", "andrezieux-boutheon"].includes(s.slug))
                  .map((s) => (
                    <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold rounded-xl">
                      <div className="font-serif text-lg">{s.nom}</div>
                      <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">{formatPrix(s.prixM2Maison)}/m²</div>
                    </Link>
                  ))}
              </div>
            </div>
            <div>
              <div className="text-base font-semibold uppercase tracking-[0.25em] text-gold mb-4">Plaine du Forez</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {secteurs
                  .filter((s) => ["saint-just-saint-rambert", "andrezieux-boutheon"].includes(s.slug))
                  .map((s) => (
                    <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold rounded-xl">
                      <div className="font-serif text-lg">{s.nom}</div>
                      <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">{formatPrix(s.prixM2Maison)}/m²</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        variant="navy"
        titre={a.cta_final.titre}
        intro={a.cta_final.intro}
        smsBody="Bonjour Romain, je cherche un bien. "
        mailSubject="Recherche d'un bien"
      />
    </>
  );
}
