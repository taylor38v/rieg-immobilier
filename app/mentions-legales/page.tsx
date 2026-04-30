import { marked } from "marked";
import { site } from "../lib/_generated/site";

const m = site["mentions-legales"];

export const metadata = { title: m.meta_title };

export default async function Page() {
  const html = await marked.parse(m.body);
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="font-serif text-5xl">{m.titre}</h1>
      <div className="mt-10 prose-article" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
