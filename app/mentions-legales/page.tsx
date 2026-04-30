export const metadata = { title: "Mentions légales" };

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl">Mentions légales</h1>

      <div className="mt-10 space-y-8 text-ink/85 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl text-navy">Éditeur du site</h2>
          <p className="mt-3">
            <strong>EI Romain Rieg</strong>, agent commercial de la SAS I@D France, immatriculé au RSAC de Lyon sous le n° <strong>101 157 410</strong>, titulaire de la carte de démarchage immobilier pour le compte de la société I@D France SAS.
          </p>
          <p className="mt-3">
            Adresse : Saint-Didier-au-Mont-d'Or (69370)<br />
            Téléphone : 06 79 57 14 73<br />
            Email : romain.rieg@iadfrance.fr
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">SAS I@D France</h2>
          <p className="mt-3">
            SAS au capital de 2 640 523 € — siège social : 2 ter boulevard de la Libération, 93200 Saint-Denis — RCS Bobigny 503 740 428.<br />
            Carte professionnelle CPI 9301 2016 000 014 488 délivrée par la CCI Seine-Saint-Denis.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Hébergement du site</h2>
          <p className="mt-3">
            Netlify, Inc. — 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA. <a href="https://www.netlify.com" target="_blank" rel="noopener" className="text-navy link-underline">www.netlify.com</a>
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Sources & informations chiffrées</h2>
          <p className="mt-3">
            Les chiffres mentionnés concernant iad France (50 776 ventes en 2024, 18 000 conseillers, jusqu'à 85% de rémunération) sont issus des communications officielles iad France 2024-2025. Le classement « n°1 de la transaction en 2024 » est établi par comparaison des chiffres déclarés par les principaux réseaux immobiliers nationaux en 2024.
          </p>
          <p className="mt-3">
            Les prix au m², délais de vente et données de marché présentés sur ce site sont indicatifs, issus de l'analyse des transactions DVF (Demandes de Valeurs Foncières publiées par la DGFiP) et de l'expérience terrain de l'éditeur. Ils ne constituent pas une estimation engageante.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Liens utiles</h2>
          <ul className="mt-3 space-y-2 ml-6 list-disc">
            <li><a href="https://www.iadfrance.fr/conseiller-immobilier/romain.rieg" target="_blank" rel="noopener" className="text-navy link-underline">Mon mini-site iad officiel</a> (annonces, présentation, outil d'estimation iad)</li>
            <li><a href="https://www.join-iad.fr" target="_blank" rel="noopener" className="text-navy link-underline">join-iad.fr</a> — informations officielles sur le métier de conseiller iad</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des contenus (textes, images, graphismes, logo iad) est protégé par le droit d'auteur. Toute reproduction, même partielle, sans autorisation préalable est interdite. Le logo iad est la propriété de la SAS I@D France.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy">Crédits photos</h2>
          <p className="mt-3">
            Photos de Romain Rieg et des secteurs : © Romain Rieg, tous droits réservés. Photos illustratives complémentaires : banques d'images libres de droits.
          </p>
        </section>
      </div>
    </div>
  );
}
