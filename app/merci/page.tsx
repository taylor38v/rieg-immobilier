import Link from "next/link";
export const metadata = { title: "Merci — Romain Rieg" };

export default function Page() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">Message reçu</div>
        <h1 className="font-serif text-5xl md:text-6xl mt-4">Merci 🌿</h1>
        <p className="text-muted mt-6 leading-relaxed">
          Romain vous répond personnellement, en général sous 24 h. Si votre demande est urgente, n'hésitez pas à appeler le 06 79 57 14 73 ou à passer par WhatsApp.
        </p>
        <Link href="/" className="inline-block mt-10 px-7 py-4 bg-navy text-ivory">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
