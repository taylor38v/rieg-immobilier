import type { Metadata } from "next";
import { site } from "../../lib/_generated/site";

const t = (site as any)["outils-pages"]["capacite-achat"];

export const metadata: Metadata = {
  title: t.meta_title,
  description: t.meta_description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
