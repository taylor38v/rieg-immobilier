export const metadata = { title: "Politique de confidentialité & cookies" };

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl">Politique de confidentialité & cookies</h1>
      <p className="text-muted mt-4 text-sm">Dernière mise à jour : 2026</p>

      <div className="mt-10 space-y-8 text-ink/85 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-navy">Responsable de traitement</h2>
          <p className="mt-3">Romain Rieg, agent commercial indépendant du réseau iad France, joignable à <a href="mailto:romain.rieg@iadfrance.fr" className="text-navy link-underline">romain.rieg@iadfrance.fr</a> ou au 06 79 57 14 73.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Données collectées</h2>
          <p className="mt-3">Les seules données personnelles collectées sont celles que vous fournissez volontairement via les formulaires du site (contact, estimation, newsletter) : nom, prénom, email, téléphone, données qualifiant votre projet immobilier.</p>
          <p className="mt-3">Aucune donnée n'est collectée à votre insu. Aucun cookie tiers de tracking publicitaire n'est utilisé. La mesure d'audience est assurée par Plausible Analytics, un service respectueux du RGPD qui ne dépose pas de cookies et n'identifie pas les visiteurs.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Finalité du traitement</h2>
          <p className="mt-3">Vos données sont utilisées exclusivement pour :</p>
          <ul className="mt-3 space-y-2 ml-6 list-disc">
            <li>Vous recontacter au sujet de votre demande</li>
            <li>Vous adresser, si vous y avez consenti, la newsletter mensuelle « Le Carnet du Mont d'Or »</li>
            <li>Tenir à jour les obligations légales liées à votre transaction immobilière, le cas échéant</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Conservation</h2>
          <p className="mt-3">Vos données sont conservées 3 ans maximum après le dernier contact actif, puis supprimées. Les données liées à une transaction immobilière effective sont conservées 10 ans conformément aux obligations légales.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Vos droits</h2>
          <p className="mt-3">Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité sur vos données. Pour exercer ces droits : <a href="mailto:romain.rieg@iadfrance.fr" className="text-navy link-underline">romain.rieg@iadfrance.fr</a>.</p>
          <p className="mt-3">Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener" className="text-navy link-underline">www.cnil.fr</a>.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Cookies</h2>
          <p className="mt-3">Le site utilise uniquement des cookies fonctionnels strictement nécessaires (mémorisation de vos préférences, consentement). Aucun cookie publicitaire ou de profilage n'est déposé.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Sécurité</h2>
          <p className="mt-3">Le site est hébergé par Netlify (HTTPS obligatoire). Les formulaires sont protégés par un système anti-spam (honeypot). Vos données ne sont jamais stockées sur un serveur public et ne quittent jamais l'environnement professionnel de Romain Rieg.</p>
        </section>
      </div>
    </div>
  );
}
