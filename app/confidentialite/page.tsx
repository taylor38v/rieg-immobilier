import { marked } from "marked";
import { site } from "../lib/_generated/site";

const c = site.confidentialite;

export const metadata = { title: c.meta_title };

export default async function Page() {
  const html = await marked.parse(c.body);
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl">{c.titre}</h1>
      <p className="text-muted mt-4 text-sm">Dernière mise à jour : {c.date_maj}</p>
      <div className="mt-10 prose-article" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
