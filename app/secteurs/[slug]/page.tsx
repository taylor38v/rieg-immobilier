import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { secteurs, formatPrix } from "../../lib/data";
import { secteursDetails } from "../../lib/secteursDetails";
import HeroBackground from "../../components/HeroBackground";
import CityMap from "../../components/CityMap";

const VIDEO_BG: Record<string, string> = {
  "saint-didier-au-mont-dor": "/videos/secteurs/saint-didier.mp4",
  "saint-cyr-au-mont-dor": "/videos/secteurs/saint-cyr.mp4",
  "ecully": "/videos/secteurs/ecully.mp4",
  "dardilly": "/videos/secteurs/dardilly.mp4",
  "limonest": "/videos/secteurs/limonest.mp4",
  "champagne-au-mont-dor": "/videos/secteurs/champagne.mp4",
  "saint-just-saint-rambert": "/videos/secteurs/saint-just.mp4",
};

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/secteurs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const s = secteurs.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `Conseiller iad à ${s.nom}`,
    description: `Avis de valeur, vente, acquisition et location à ${s.nom}. Connaissance fine du marché, des quartiers et du tissu local par Romain Rieg.`,
  };
}

export default async function Page(props: PageProps<"/secteurs/[slug]">) {
  const { slug } = await props.params;
  const s = secteurs.find((x) => x.slug === slug);
  const d = secteursDetails[slug];
  if (!s) notFound();

  const evolution = d?.evolutionPrix || [];
  const evolMin = evolution.length ? Math.min(...evolution.map((e) => e.prixM2)) : 0;
  const evolMax = evolution.length ? Math.max(...evolution.map((e) => e.prixM2)) : 0;
  const evolPct = evolMin > 0 ? ((evolMax - evolMin) / evolMin) * 100 : 0;

  return (
    <>
      <section className="relative text-ivory py-32 overflow-hidden bg-navy">
        <HeroBackground video={VIDEO_BG[slug]} images={d?.galerie || (s.image ? [s.image] : [])} overlay={0.6} />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link href="/" className="text-ivory/60 text-sm">← Accueil</Link>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mt-6">{d?.cp ?? "Mon territoire"}{d?.intercommunalite ? ` · ${d.intercommunalite}` : ""}</div>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05] max-w-4xl">{s.nom}</h1>
          <p className="text-ivory/80 text-lg mt-8 max-w-3xl leading-relaxed">{s.intro}</p>

          {d && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-12 max-w-3xl">
              <div><div className="font-serif text-3xl text-gold">{d.population.toLocaleString("fr-FR")}</div><div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">Habitants</div></div>
              <div><div className="font-serif text-3xl text-gold">{d.superficie} km²</div><div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">Superficie</div></div>
              <div><div className="font-serif text-3xl text-gold">{formatPrix(s.prixM2Maison)}</div><div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">Prix m² maison</div></div>
              <div><div className="font-serif text-3xl text-gold">{s.delaiVente} j</div><div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">Délai moyen</div></div>
            </div>
          )}
        </div>
      </section>

      {d?.ceQuiDifferencie && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Ce qui différencie {s.nom}</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Pourquoi cette commune attire.</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {d.ceQuiDifferencie.map((c, i) => (
              <div key={i} className="flex gap-4 p-5 bg-ivory-deep">
                <span className="font-serif text-3xl text-gold leading-none">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-ink/85 leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {d?.evolutionPrix && d.evolutionPrix.length > 0 && (
        <section className="bg-navy text-ivory py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Évolution du marché</div>
            <h2 className="font-serif text-5xl md:text-6xl mt-3">Prix moyen au m² depuis 2020.</h2>
            <div className="bg-navy-soft p-8 mt-10">
              <svg viewBox="0 0 800 280" className="w-full h-auto">
                {[0, 0.25, 0.5, 0.75, 1].map((p) => <line key={p} x1="60" y1={20 + p * 200} x2="780" y2={20 + p * 200} stroke="#ffffff" strokeOpacity="0.08" />)}
                {[0.25, 0.5, 0.75, 1].map((p) => (
                  <text key={p} x="55" y={24 + p * 200} fontSize="10" fill="#c9a25f" textAnchor="end" opacity="0.7">
                    {formatPrix(evolMax - p * (evolMax - evolMin)).replace(" €", "")}
                  </text>
                ))}
                <polyline fill="none" stroke="#c9a25f" strokeWidth="2.5"
                  points={d.evolutionPrix.map((e, i) => `${60 + (i / (d.evolutionPrix.length - 1)) * 720},${20 + ((evolMax - e.prixM2) / (evolMax - evolMin)) * 200}`).join(" ")} />
                {d.evolutionPrix.map((e, i) => (
                  <g key={i}>
                    <circle cx={60 + (i / (d.evolutionPrix.length - 1)) * 720} cy={20 + ((evolMax - e.prixM2) / (evolMax - evolMin)) * 200} r="5" fill="#c9a25f" stroke="#061b2c" strokeWidth="2" />
                    <text x={60 + (i / (d.evolutionPrix.length - 1)) * 720} y="270" fontSize="11" fill="#faf6ef" textAnchor="middle" opacity="0.6">{e.annee}</text>
                    <text x={60 + (i / (d.evolutionPrix.length - 1)) * 720} y={10 + ((evolMax - e.prixM2) / (evolMax - evolMin)) * 200} fontSize="11" fill="#c9a25f" textAnchor="middle" fontWeight="600">{(e.prixM2 / 1000).toFixed(1)}k</text>
                  </g>
                ))}
              </svg>
              <div className="text-sm text-ivory/70 mt-4 text-center">
                Évolution sur 5 ans : <span className="text-gold font-medium">+{evolPct.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {d?.quartiers && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Les quartiers</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Une lecture quartier par quartier.</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {d.quartiers.map((q) => (
              <div key={q.nom} className="p-7 bg-white border border-ink/10">
                <div className="font-serif text-2xl text-navy">{q.nom}</div>
                {q.prixIndicatif && <div className="text-xs text-gold mt-2 uppercase tracking-widest">{q.prixIndicatif}</div>}
                <p className="text-muted mt-4 leading-relaxed">{q.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {d?.ecoles && (
        <section className="bg-ivory-deep py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Écoles & enseignement</div>
            <h2 className="font-serif text-5xl md:text-6xl mt-3">Le réseau scolaire local.</h2>
            <p className="text-muted mt-3 max-w-2xl text-sm">Cliquez sur une école pour voir sa localisation Google Maps.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
              {d.ecoles.map((e) => (
                <a
                  key={e.nom}
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.nom + " " + s.nom)}`}
                  target="_blank"
                  rel="noopener"
                  className="group p-5 bg-white border border-ink/10 hover:border-gold transition block"
                >
                  <div className="text-[10px] uppercase tracking-widest text-gold">{e.type}</div>
                  <div className="font-serif text-lg text-navy mt-1 font-semibold group-hover:text-gold transition">{e.nom}</div>
                  {e.precision && <p className="text-xs text-muted mt-2">{e.precision}</p>}
                  <div className="text-[10px] text-gold mt-2 opacity-0 group-hover:opacity-100 transition">📍 Google Maps →</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Localisation</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{s.nom} sur la carte.</h2>
          <p className="text-ivory/70 mt-4 max-w-2xl">Ma zone d'intervention, en un coup d'œil. Cliquez sur une commune voisine pour explorer son marché.</p>
          <div className="mt-10">
            <CityMap height={520} includeLimitrophes={true} />
          </div>
        </div>
      </section>

      {d?.restaurants && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Tables & adresses</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Où l'on mange bien à {s.nom}.</h2>
          <p className="text-muted mt-3 max-w-2xl text-sm">Cliquez sur une adresse pour l'ouvrir dans Google Maps.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {d.restaurants.map((r) => (
              <a
                key={r.nom}
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.nom + " " + s.nom)}`}
                target="_blank"
                rel="noopener"
                className="group p-5 bg-white border border-ink/10 hover:border-gold transition block"
              >
                <div className="text-[10px] uppercase tracking-widest text-gold">{r.gamme}</div>
                <div className="font-serif text-lg text-navy mt-1 font-semibold group-hover:text-gold transition">{r.nom}</div>
                <p className="text-xs text-muted mt-2">{r.cuisine}</p>
                <div className="text-[10px] text-gold mt-3 opacity-0 group-hover:opacity-100 transition">📍 Ouvrir sur Google Maps →</div>
              </a>
            ))}
          </div>
        </section>
      )}

      {d?.associations && (
        <section className="bg-ivory-deep py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Vie associative</div>
            <h2 className="font-serif text-5xl md:text-6xl mt-3">Le tissu local qui fait vivre la commune.</h2>
            <div className="grid md:grid-cols-2 gap-3 mt-10">
              {d.associations.map((a) => (
                <div key={a.nom} className="flex gap-4 p-4 bg-white">
                  <span className="font-serif text-2xl text-gold leading-none">·</span>
                  <div>
                    <div className="font-medium text-navy">{a.nom}</div>
                    <div className="text-xs text-muted mt-1">{a.activite}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {d?.galerie && d.galerie.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">En images</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">{s.nom} comme je la vois.</h2>
          <p className="text-muted mt-3 max-w-2xl">Photos prises sur le terrain au gré de mes visites et de mes rencontres dans la commune.</p>
          <div className="grid md:grid-cols-3 gap-3 mt-10">
            {d.galerie.map((src, i) => (
              <div key={i} className={`overflow-hidden bg-ivory-deep group ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"}`}>
                <img src={src} alt={`${s.nom} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
            ))}
            {[s.image, "/photos/IMG_7295.jpeg", "/photos/IMG_7282.jpeg"].filter((src) => src && !d.galerie?.includes(src)).slice(0, 3 - d.galerie.length).map((src, i) => (
              <div key={`f-${i}`} className="aspect-[4/3] overflow-hidden bg-ivory-deep group">
                <img src={src!} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="bg-ivory-deep py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Sur Instagram</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Mes vidéos sur {s.nom}.</h2>
          <p className="text-muted mt-3 max-w-2xl">Je tourne régulièrement sur place — visites, conseils, anecdotes du métier. Suivez tout sur mon compte Instagram.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              { titre: d?.videoInsta?.titre ?? `Visite à ${s.nom}`, duree: d?.videoInsta?.duree ?? "1:30", thumb: s.image ?? "/photos/IMG_7295.jpeg" },
              { titre: `${s.nom} : focus marché immobilier`, duree: "0:50", thumb: "/photos/IMG_7282.jpeg" },
              { titre: `Mes coups de cœur à ${s.nom}`, duree: "1:15", thumb: "/photos/IMG_7134.jpeg" },
            ].map((v, i) => (
              <a key={i} href="https://instagram.com/romain.rieg.immobilier" target="_blank" rel="noopener" className="group relative aspect-[9/16] overflow-hidden bg-navy">
                <img src={v.thumb} alt={v.titre} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-16 h-16 grid place-items-center bg-gold text-navy rounded-full text-2xl group-hover:scale-110 transition">▶</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory bg-gradient-to-t from-navy/90 to-transparent">
                  <div className="text-[10px] uppercase tracking-widest text-gold">Reel · {v.duree}</div>
                  <div className="font-serif text-lg mt-1 leading-tight">{v.titre}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://instagram.com/romain.rieg.immobilier" target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-navy text-ivory hover:bg-gold hover:text-navy text-sm transition">Voir tous mes contenus Instagram →</a>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl md:text-6xl">Un projet immobilier à {s.nom} ?</h2>
          <p className="text-ivory/70 mt-4">Avis de valeur gratuit sous 24-48 h, confidentiel, sans engagement.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Demander un avis de valeur</Link>
            <Link href="/contact" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">Me contacter</Link>
            <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-7 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
