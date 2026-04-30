import Link from "next/link";
import CityMap from "./components/CityMap";
import HeroBackground from "./components/HeroBackground";

const IAD_MINISITE = "https://www.iadfrance.fr/conseiller-immobilier/romain.rieg";

export default function Home() {
  return (
    <>
      <section className="relative text-ivory overflow-hidden bg-navy">
        <HeroBackground video="/videos/secteurs/saint-cyr.mp4" overlay={0.7} />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="fade-up">
            <span className="chip bg-gold/20 text-gold-soft border border-gold/40">Saint-Didier · Ouest lyonnais · Plaine du Forez</span>
            <h1 className="font-serif text-5xl md:text-7xl font-medium mt-6 leading-[1.05]">
              Votre conseiller immobilier du réseau iad.
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              Vous souhaitez vendre, acheter ou louer un bien à Saint-Didier-au-Mont-d'Or, dans l'Ouest lyonnais ou dans la Plaine du Forez ? Je vous accompagne dans toutes les étapes de votre projet immobilier avec réactivité, expertise locale et suivi personnalisé.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link href="/avis-de-valeur" className="px-7 py-4 bg-gold text-navy font-medium hover:bg-gold-soft transition">Avis de valeur gratuit · 24-48 h</Link>
              <Link href="/rejoindre" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10 transition">Rejoindre mon équipe</Link>
            </div>
            <div className="mt-6 text-xs text-ivory/60">Zéro engagement · 100% confidentiel</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12">
              {[
                ["50 776", "Ventes iad 2024"],
                ["+18 000", "Conseillers iad"],
                ["24-48 h", "Délai d'avis de valeur"],
                ["7", "Communes principales"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-serif text-3xl text-gold">{v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-ivory/60 mt-2">{l}</div>
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
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes biens à la vente</div>
            <h2 className="font-serif text-2xl md:text-3xl mt-2">Retrouvez l'ensemble de mes mandats sur mon mini-site iad officiel.</h2>
            <p className="text-ivory/70 text-sm mt-2">Annonces actualisées en temps réel, fiches complètes, prise de RDV en ligne.</p>
          </div>
          <a href={IAD_MINISITE} target="_blank" rel="noopener" className="px-6 py-4 bg-gold text-navy hover:bg-gold-soft text-center whitespace-nowrap">Voir mes biens iad ↗</a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Qui suis-je</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">Passionné d'immobilier, ancré dans les Monts d'Or.</h2>
          <p className="text-ink/85 mt-6 leading-relaxed">
            Je m'appelle Romain Rieg, j'ai 28 ans et je suis passionné par l'immobilier. Après une reconversion professionnelle, j'ai choisi de devenir conseiller immobilier indépendant afin d'accompagner mes clients à ma manière : avec <strong className="text-navy">transparence, engagement et conseils personnalisés</strong>.
          </p>
          <p className="text-ink/85 mt-4 leading-relaxed">
            Membre du réseau iad France, j'utilise les outils technologiques les plus performants, couplés à une stratégie digitale moderne (réseaux sociaux, vidéos) pour assurer la meilleure diffusion de votre bien.
          </p>
          <p className="text-ink/85 mt-4 leading-relaxed italic">
            Originaire de la Loire (j'y ai vécu 20 ans), je suis aujourd'hui ancré au cœur des Monts d'Or. Mon objectif : allier la puissance technologique du réseau iad à un accompagnement humain, transparent et ultra-réactif.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="px-6 py-3 bg-navy text-ivory hover:bg-gold hover:text-navy text-sm transition">Me rencontrer</Link>
            <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-6 py-3 border border-navy text-navy hover:bg-navy hover:text-ivory text-sm transition">💬 WhatsApp</a>
          </div>
        </div>
        <div className="relative aspect-[4/5]">
          <img src="/photos/IMG_6487_SnapseedCopy-1536x2048.jpg" alt="Romain Rieg, conseiller iad" className="w-full h-full object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-6 max-w-[280px]">
            <div className="font-serif text-2xl">"Mon énergie au service de votre projet."</div>
            <div className="text-xs uppercase tracking-widest mt-3">Romain Rieg · Conseiller immobilier iad</div>
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes services sur-mesure</div>
              <h2 className="font-serif text-5xl md:text-6xl mt-3">Quatre métiers, une exigence.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { titre: "Avis de valeur · 24-48 h", desc: "Recevez un avis de valeur fiable et personnalisé, sans engagement.", href: "/avis-de-valeur" },
              { titre: "Vente immobilière", desc: "Je vous accompagne de A à Z pour vendre votre maison ou appartement.", href: "/vendre" },
              { titre: "Achat / Investissement", desc: "Pour votre résidence principale, investissement locatif ou achat dans le neuf.", href: "/acheter" },
              { titre: "Location & gestion locative", desc: "Simplifiez la mise en location de votre bien, locataires sélectionnés.", href: "/location" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group p-6 border border-ivory/15 hover:border-gold hover:bg-ivory/5 transition">
                <div className="font-serif text-xl">{s.titre}</div>
                <p className="text-sm text-ivory/70 mt-3 leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-4 text-xs text-gold link-underline">Découvrir →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Mes secteurs d'intervention</div>
            <h2 className="font-serif text-5xl md:text-6xl mt-3">Une présence locale, un suivi personnalisé.</h2>
            <p className="text-muted mt-4 max-w-2xl leading-relaxed">
              Chaque commune bénéficie d'un suivi personnalisé, avec une stratégie adaptée à son marché et un avis de valeur fiable sous 24-48 h.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { slug: "ouest-lyonnais", titre: "Ouest lyonnais", desc: "Mon cœur d'activité. Écully · Dardilly · Limonest · Champagne · Saint-Cyr + toutes les communes limitrophes.", badge: "Cœur d'activité", image: "/photos/IMG_7282.jpeg" },
            { slug: "saint-didier", titre: "Saint-Didier-au-Mont-d'Or", desc: "Ma commune de résidence — présence quotidienne sur le terrain et expertise fine.", badge: "Mon village", image: "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg" },
            { slug: "plaine-du-forez", titre: "Plaine du Forez", desc: "Saint-Just-Saint-Rambert prioritaire (j'y ai vécu 20 ans) + Andrézieux-Bouthéon et limitrophes.", badge: "Mes secteurs d'enfance", image: "/photos/IMG_7295.jpeg" },
          ].map((z) => (
            <Link key={z.slug} href={`/vendre/${z.slug}`} className="group bg-white border border-ink/10 hover:border-navy">
              <div className="aspect-[16/10] overflow-hidden relative">
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
          <div className="text-xs uppercase tracking-[0.3em] text-gold">À voir</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Mes coulisses sur Instagram.</h2>
          <p className="text-muted mt-3 max-w-2xl">Visites, conseils, anecdotes du métier — pour suivre mon quotidien de conseiller immobilier sur le Mont d'Or.</p>
          <div className="grid md:grid-cols-3 gap-4 mt-10">
            {[
              { titre: "Visite d'une bastide à Limonest", duree: "1:20", thumb: "/photos/IMG_6971.jpeg" },
              { titre: "Le marché du Mont d'Or T1 2026", duree: "0:45", thumb: "/photos/IMG_7295.jpeg" },
              { titre: "Pourquoi j'ai choisi iad", duree: "1:55", thumb: "/photos/romain-pro.jpg" },
            ].map((v) => (
              <a key={v.titre} href="https://instagram.com/romain.rieg.immobilier" target="_blank" rel="noopener" className="group relative aspect-[9/16] overflow-hidden bg-navy">
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
            <a href="https://instagram.com/romain.rieg.immobilier" target="_blank" rel="noopener" className="inline-block px-6 py-3 bg-navy text-ivory hover:bg-gold hover:text-navy text-sm transition">Voir tous mes contenus Instagram →</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3">
            <svg width="100" height="32" viewBox="0 0 100 32"><text x="0" y="22" fontSize="20" fontWeight="600" fill="#4285F4">G</text><text x="14" y="22" fontSize="20" fontWeight="600" fill="#EA4335">o</text><text x="27" y="22" fontSize="20" fontWeight="600" fill="#FBBC05">o</text><text x="40" y="22" fontSize="20" fontWeight="600" fill="#4285F4">g</text><text x="53" y="22" fontSize="20" fontWeight="600" fill="#34A853">l</text><text x="60" y="22" fontSize="20" fontWeight="600" fill="#EA4335">e</text></svg>
            <span className="text-2xl text-gold">★★★★★</span>
            <span className="font-serif text-2xl text-navy">4,9/5</span>
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mt-4">Avis Google · clients accompagnés</div>
          <h2 className="font-serif text-5xl md:text-6xl mt-3">Des transactions racontées par celles et ceux qui les ont vécues.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Famille A. — Saint-Didier", "Vendeurs · Maison familiale 180 m²", "On a accepté de signer un mandat exclusif après avoir vu trois autres agences. Romain a été le seul à venir avec un dossier comparatif chiffré et à nous expliquer où se positionner. Compromis signé 5 semaines plus tard, au prix demandé."],
            ["Caroline D. — Écully", "Acquéreuse · Appartement standing", "Je cherchais depuis 14 mois sans trouver. Romain m'a appelée pour un bien off-market avant publication. Visite le samedi, offre le lundi, signature 3 mois après. Je n'aurais jamais eu accès à ce bien autrement."],
            ["M. & Mme B. — Dardilly", "Vendeurs · Villa avec piscine", "Notre crainte : vendre la maison familiale après 28 ans. Romain a pris le temps, sans jamais nous brusquer. C'est un métier de sensibilité autant que de chiffres."],
          ].map(([n, r, t]) => (
            <div key={n} className="p-8 bg-white border border-ink/10">
              <div className="text-gold text-xl">★★★★★</div>
              <p className="mt-5 leading-relaxed text-ink/80">"{t}"</p>
              <div className="mt-6 pt-6 border-t border-ink/10">
                <div className="font-medium">{n}</div>
                <div className="text-xs text-muted">{r}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://www.google.com/search?sa=X&sca_esv=f27198b4d2287e35&hl=fr-FR&q=Romain+RIEG+Immobilier+iad+France+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDY3M7M0MjI0NbA0MrA0Mzcy3sDI-IpRLSg_NzEzTyHI09VdwTM3Nz8pMycztUghMzFFwa0oMS85VcGxLLN4ESuRCgG1w3wYbAAAAA&rldimm=1376692215092096723&tbm=lcl#lkt=LocalPoiReviews" target="_blank" rel="noopener" className="text-sm text-navy link-underline">Lire tous les avis Google →</a>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="font-serif text-5xl md:text-6xl">Parlons de votre projet.</h2>
          <p className="text-ivory/70 mt-6 max-w-2xl mx-auto">Vendre, acheter, louer, ou rejoindre l'équipe iad : un seul interlocuteur, à votre rythme.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link href="/contact" className="px-7 py-4 bg-gold text-navy hover:bg-gold-soft">Contactez-moi</Link>
            <a href="tel:+33679571473" className="px-7 py-4 border border-ivory/30 hover:bg-ivory/10">06 79 57 14 73</a>
          </div>
        </div>
      </section>
    </>
  );
}
