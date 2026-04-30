import Link from "next/link";
import { site } from "../lib/_generated/site";

const m = site.merci;

export const metadata = { title: m.meta_title };

export default function Page() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-gold">{m.surtitre}</div>
        <h1 className="font-serif text-5xl md:text-6xl mt-4">{m.titre}</h1>
        <p className="text-muted mt-6 leading-relaxed">{m.intro}</p>
        <Link href={m.cta_href} className="inline-block mt-10 px-7 py-4 bg-navy text-ivory">{m.cta_label}</Link>
      </div>
    </div>
  );
}
