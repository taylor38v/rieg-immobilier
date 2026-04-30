import Link from "next/link";
import { zones } from "../lib/territoire";

const IAD_MINISITE = "https://www.iadfrance.fr/conseiller-immobilier/romain.rieg";

const SOCIALS = [
  { label: "IG", href: "https://www.instagram.com/romainrieg.immo/" },
  { label: "in", href: "https://www.linkedin.com/in/romain-rieg-17107/" },
  { label: "Fb", href: "https://www.facebook.com/profile.php?id=61588451302644" },
  { label: "Tk", href: "https://www.tiktok.com/@romainrieg.immo" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory mt-24">
      <div className="bg-navy-soft border-b border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="shrink-0">
            <div className="w-32 h-32 lg:w-40 lg:h-40 overflow-hidden rounded-full border-4 border-gold/40 mx-auto lg:mx-0">
              <img src="/photos/romain-pro.jpg" alt="Romain Rieg" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Romain Rieg</div>
            <p className="font-serif text-2xl md:text-3xl text-ivory mt-3 leading-snug max-w-3xl">
              "Passionné d'immobilier et originaire de la Loire, je suis aujourd'hui ancré au cœur des Monts d'Or. Mon objectif : allier la puissance technologique du réseau iad à un accompagnement humain, transparent et ultra-réactif. Que ce soit pour un avis de valeur en 24-48 h ou une stratégie de vente, je mets mon énergie au service de votre projet."
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-6">
              <a href="tel:+33679571473" className="px-5 py-2.5 bg-gold text-navy text-sm hover:bg-gold-soft rounded-full">06 79 57 14 73</a>
              <a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="px-5 py-2.5 bg-[#25D366] text-white text-sm hover:bg-[#20bd5a] rounded-full">💬 WhatsApp</a>
              <Link href="/contact" className="px-5 py-2.5 border border-ivory/30 text-ivory text-sm hover:bg-ivory/10 rounded-full">Contactez-moi →</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">Le site</div>
          <ul className="space-y-2.5 text-sm text-ivory/85">
            <li><Link href="/rejoindre" className="hover:text-gold">Rejoindre mon équipe</Link></li>
            <li><Link href="/avis-de-valeur" className="hover:text-gold">Avis de valeur</Link></li>
            <li><Link href="/vendre" className="hover:text-gold">Vendre</Link></li>
            <li><Link href="/acheter" className="hover:text-gold">Acheter / Investir</Link></li>
            <li><Link href="/location" className="hover:text-gold">Location</Link></li>
            <li><Link href="/outils" className="hover:text-gold">Outils</Link></li>
            <li><Link href="/actualites" className="hover:text-gold">Actualités</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">Mes secteurs</div>
          <ul className="space-y-2.5 text-sm text-ivory/85">
            {[
              { slug: "saint-didier-au-mont-dor", nom: "Saint-Didier-au-Mont-d'Or" },
              { slug: "saint-cyr-au-mont-dor", nom: "Saint-Cyr-au-Mont-d'Or" },
              { slug: "ecully", nom: "Écully" },
              { slug: "dardilly", nom: "Dardilly" },
              { slug: "limonest", nom: "Limonest" },
              { slug: "champagne-au-mont-dor", nom: "Champagne-au-Mont-d'Or" },
              { slug: "saint-just-saint-rambert", nom: "Saint-Just-Saint-Rambert" },
            ].map((s) => (
              <li key={s.slug}><Link href={`/secteurs/${s.slug}`} className="hover:text-gold">{s.nom}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-gold mb-4">Me joindre</div>
          <ul className="space-y-2.5 text-sm text-ivory/85">
            <li><a href="tel:+33679571473" className="hover:text-gold">06 79 57 14 73</a></li>
            <li><a href="https://wa.me/33679571473" target="_blank" rel="noopener" className="hover:text-gold">WhatsApp</a></li>
            <li><a href="mailto:romain.rieg@iadfrance.fr" className="hover:text-gold">romain.rieg@iadfrance.fr</a></li>
            <li><a href={IAD_MINISITE} target="_blank" rel="noopener" className="hover:text-gold">Mes biens iad ↗</a></li>
            <li>Saint-Didier-au-Mont-d'Or (69370)</li>
          </ul>
          <div className="flex gap-2 mt-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener" className="w-9 h-9 grid place-items-center border border-ivory/20 hover:border-gold hover:text-gold rounded-full text-xs">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 bg-navy-soft">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Mes secteurs d'intervention</div>
          <h3 className="font-serif text-2xl text-ivory">Là où j'interviens.</h3>
          <p className="text-ivory/60 text-sm mt-2 max-w-3xl">Je couvre les zones ci-dessous ainsi que leurs communes limitrophes — sans m'y limiter strictement.</p>

          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {zones.map((z) => (
              <div key={z.slug}>
                <Link href={`/vendre/${z.slug}`} className="text-xs uppercase tracking-widest text-gold mb-3 flex items-center gap-2 hover:text-ivory transition">
                  <span className="w-6 h-px bg-gold" /> {z.nom}
                </Link>
                <div className="text-ivory/85 text-sm font-medium mb-3 mt-3">
                  {z.principales.map((c, i) => (
                    <span key={c}>
                      {i > 0 && " · "}
                      {c}
                    </span>
                  ))}
                </div>
                {z.slug !== "saint-didier" && z.limitrophes.length > 0 && (
                  <div className="text-ivory/55 text-xs leading-relaxed">
                    <span className="text-gold/70">Limitrophes : </span>
                    {z.limitrophes.join(" · ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 bg-navy">
        <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-6 items-center">
          <form name="newsletter-footer" method="POST" data-netlify="true" action="/merci/" className="flex gap-2 max-w-md">
            <input type="hidden" name="form-name" value="newsletter-footer" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email pour les actualités"
              className="flex-1 px-4 py-3 bg-navy-soft border border-ivory/20 text-ivory text-sm outline-none focus:border-gold rounded-full"
            />
            <button type="submit" className="px-6 py-3 bg-gold text-navy text-sm font-medium hover:bg-gold-soft rounded-full">
              S'abonner
            </button>
          </form>
          <div className="text-xs text-ivory/55 leading-relaxed md:text-right">
            Pas de spam — uniquement les nouvelles actualités du marché du Mont d'Or et mes derniers contenus.
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 bg-navy-soft">
        <div className="max-w-7xl mx-auto px-6 py-6 text-[11px] text-ivory/60 leading-relaxed">
          EI Romain Rieg — Agent commercial de la SAS I@D France, immatriculé au RSAC de Lyon sous le n° <span className="text-ivory/85">101 157 410</span>, titulaire de la carte de démarchage immobilier pour le compte de la société I@D France SAS — SAS au capital de 2 640 523 €, siège social 2 ter boulevard de la Libération, 93200 Saint-Denis, RCS Bobigny 503 740 428. Carte professionnelle CPI 9301 2016 000 014 488 (CCI Seine-Saint-Denis).
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} Romain Rieg — Tous droits réservés</div>
          <div className="flex gap-5 mt-2 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-gold">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gold">Confidentialité</Link>
            <Link href="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
