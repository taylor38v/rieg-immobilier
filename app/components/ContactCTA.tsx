import Link from "next/link";

type Props = {
  titre?: string;
  intro?: string;
  label?: string;
  href?: string;
};

export default function ContactCTA({
  titre = "Une question, un projet ?",
  intro = "Romain répond personnellement sous 24 h. Aucune sollicitation commerciale, aucune liste de prospection.",
  label = "Contactez-moi",
  href = "/contact",
}: Props) {
  return (
    <div className="rounded-xl bg-ivory-deep p-10 mt-16 text-center">
      <h3 className="font-serif text-3xl text-navy">{titre}</h3>
      <p className="text-muted mt-3 max-w-2xl mx-auto">{intro}</p>
      <Link
        href={href}
        className="inline-block mt-6 px-7 py-4 bg-navy text-ivory hover:bg-gold hover:text-navy rounded-full transition"
      >
        {label}
      </Link>
    </div>
  );
}
