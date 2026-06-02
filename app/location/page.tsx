import type { Metadata } from "next";
import Link from "next/link";
import CityMap from "../components/CityMap";
import HeroBackground from "../components/HeroBackground";
import ContactButtons from "../components/ContactButtons";
import ContactCTA from "../components/ContactCTA";
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
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.hero.surtitre}</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05] max-w-4xl">{l.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{l.hero.intro1}</p>
          <p className="text-ivory/80 text-base mt-4 max-w-3xl leading-relaxed">{l.hero.intro2}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={l.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft rounded-full">{l.hero.cta_primary_label}</Link>
            <ContactButtons smsBody="Bonjour Romain, je souhaite mettre mon bien en location. " mailSubject="Mise en location d'un bien" />
          </div>
          <div className="mt-4 text-xs text-ivory/60">{l.hero.mention}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.pourquoi.surtitre}</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-3">{l.pourquoi.titre}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {l.pourquoi.items.map((it) => (
            <div key={it.titre} className="shine-hover rounded-xl p-6 bg-white border border-ink/10">
              <div className="font-serif text-xl text-navy">{it.titre}</div>
              <p className="text-sm text-muted mt-3 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory-deep py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.services.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{l.services.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {l.services.items.map((s) => (
              <div key={s.titre} className="shine-hover p-7 border border-ink/10 bg-white">
                <div className="font-serif text-2xl text-navy">{s.titre}</div>
                <p className="text-muted mt-3 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.secteurs_section.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{l.secteurs_section.titre}</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">{l.secteurs_section.intro}</p>
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
                      <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">Loyer indicatif {Math.round(s.prixM2Appart * 0.0042)} €/m²</div>
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
                      <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">Loyer indicatif {Math.round(s.prixM2Appart * 0.0042)} €/m²</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.cta_final.locataires_surtitre}</div>
            <h2 className="font-serif text-3xl mt-3">{l.cta_final.locataires_titre}</h2>
            <p className="text-ivory/70 mt-4">{l.cta_final.locataires_desc}</p>
            <Link href={l.cta_final.locataires_cta_href} className="inline-block mt-6 px-6 py-3 bg-gold text-navy hover:bg-gold-soft rounded-full text-sm">{l.cta_final.locataires_cta_label}</Link>
          </div>
          <div>
            <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{l.cta_final.question_surtitre}</div>
            <h2 className="font-serif text-3xl mt-3">{l.cta_final.question_titre}</h2>
            <p className="text-ivory/70 mt-4">{l.cta_final.question_desc}</p>
            <div className="mt-6">
              <ContactButtons withTel smsBody="Bonjour Romain, " mailSubject="Demande Location" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA
        variant="ivory"
        titre="Une question sur votre projet locatif ?"
        intro="Romain répond personnellement sous 24 h - gestion, mise en location, recherche de locataire."
        smsBody="Bonjour Romain, j'ai une question sur la location. "
        mailSubject="Question location"
      />
    </>
  );
}
