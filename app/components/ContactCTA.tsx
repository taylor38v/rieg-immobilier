import ContactButtons from "./ContactButtons";

type Props = {
  titre?: string;
  intro?: string;
  /** Sujet pré-rempli pour le bouton Mail */
  mailSubject?: string;
  /** Body pré-rempli pour le bouton SMS */
  smsBody?: string;
  /** Variant de fond : "ivory" (clair) ou "navy" (sombre) */
  variant?: "ivory" | "navy";
};

export default function ContactCTA({
  titre = "Une question, un projet ?",
  intro = "Romain répond personnellement sous 24 h. Aucune sollicitation commerciale, aucune liste de prospection.",
  mailSubject,
  smsBody,
  variant = "ivory",
}: Props) {
  // "ivory" = sand : un beige distinct de ivory-deep pour bien marquer le changement de section
  const bg = variant === "navy" ? "bg-navy text-ivory" : "bg-sand text-ink";
  const titreColor = variant === "navy" ? "text-ivory" : "text-navy";
  const introColor = variant === "navy" ? "text-ivory/70" : "text-muted";

  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className={`font-serif text-3xl ${titreColor}`}>{titre}</h3>
        <p className={`${introColor} mt-3 max-w-2xl mx-auto`}>{intro}</p>
        <div className="mt-6 flex justify-center">
          <ContactButtons
            withContact
            align="center"
            variant={variant === "navy" ? "primary" : "light"}
            mailSubject={mailSubject}
            smsBody={smsBody}
          />
        </div>
      </div>
    </section>
  );
}
