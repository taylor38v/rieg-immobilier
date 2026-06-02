import type { Metadata } from "next";
import Link from "next/link";
import HeroBackground from "../components/HeroBackground";
import CityMap from "../components/CityMap";
import ContactButtons from "../components/ContactButtons";
import ContactCTA from "../components/ContactCTA";
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
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.hero.surtitre}</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05] max-w-4xl">{v.hero.titre}</h1>
          <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-3xl leading-relaxed">{v.hero.intro}</p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href={v.hero.cta_primary_href} className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft rounded-full">{v.hero.cta_primary_label}</Link>
            <ContactButtons smsBody="Bonjour Romain, je souhaite vendre mon bien. " mailSubject="Vente d'un bien" />
          </div>
          <div className="mt-4 text-xs text-ivory/60">{v.hero.mention}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.pourquoi_moi.surtitre}</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-3">{v.pourquoi_moi.titre}</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {v.pourquoi_moi.items.map((it) => (
            <div key={it.titre} className="shine-hover rounded-xl p-7 bg-white border border-ink/10">
              <div className="font-serif text-2xl text-navy">{it.titre}</div>
              <p className="text-muted mt-3 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.comparatif.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{v.comparatif.titre}</h2>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {/* Colonne "Avec Romain" - mise en valeur */}
            <div className="relative rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold p-8 shadow-2xl">
              <div className="absolute -top-3 left-8 px-4 py-1 bg-gold text-navy text-xs uppercase tracking-widest font-bold rounded-full">
                Mon accompagnement
              </div>
              <div className="font-serif text-2xl md:text-3xl text-gold mt-4">{v.comparatif.label_avec}</div>
              <ul className="mt-6 space-y-4">
                {v.comparatif.items.map((row, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 grid place-items-center bg-gold text-navy rounded-full text-sm font-bold">✓</span>
                    <span className="text-ivory leading-relaxed">{row.avec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne "Sans accompagnement" - en retrait */}
            <div className="rounded-xl bg-navy-soft/50 border border-ivory/10 p-8">
              <div className="font-serif text-2xl md:text-3xl text-ivory/60 mt-4">{v.comparatif.label_sans}</div>
              <ul className="mt-6 space-y-4">
                {v.comparatif.items.map((row, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="shrink-0 w-6 h-6 grid place-items-center bg-rose-500/20 text-rose-300 rounded-full text-sm font-bold">×</span>
                    <span className="text-ivory/60 leading-relaxed">{row.sans}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-ivory/60 text-sm mt-8 italic">
            La différence n'est pas dans le prix payé. Elle est dans ce que vous gagnez en sérénité, en temps, et en sécurité juridique.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.etapes.surtitre}</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-3">{v.etapes.titre}</h2>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {v.etapes.items.map((e) => (
            <div key={e.num} className="rounded-xl shine-hover bg-white border border-ink/10 p-7 grid grid-cols-[auto_1fr] gap-6">
              <div className="font-serif text-5xl text-gold leading-none">{e.num}</div>
              <div>
                <div className="font-serif text-2xl text-navy">{e.titre}</div>
                <div className="text-muted mt-3 leading-relaxed">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.secteurs_section.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{v.secteurs_section.titre}</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">{v.secteurs_section.intro}</p>
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
                    <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold">
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
                    <Link key={s.slug} href={`/secteurs/${s.slug}`} className="group p-4 bg-navy-soft hover:bg-gold hover:text-navy transition border border-ivory/10 hover:border-gold">
                      <div className="font-serif text-lg">{s.nom}</div>
                      <div className="text-xs text-ivory/60 group-hover:text-navy/70 mt-1">{formatPrix(s.prixM2Maison)}/m²</div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-deep py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{v.zones_section.surtitre}</div>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{v.zones_section.titre}</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {v.zones_section.zones.map((z) => (
              <Link key={z.slug} href={`/vendre/${z.slug}`} className="group bg-white border border-ink/10 hover:border-navy rounded-2xl overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={z.image} alt={z.titre} className="no-round w-full h-full object-cover group-hover:scale-105 transition duration-700" />
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

      <ContactCTA
        variant="navy"
        titre={v.cta_final.titre}
        intro={v.cta_final.intro}
        smsBody="Bonjour Romain, je souhaite vendre mon bien. "
        mailSubject="Vente d'un bien"
      />
    </>
  );
}
