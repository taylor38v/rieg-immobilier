import type { Metadata } from "next";
import { site } from "../lib/_generated/site";

const av = site["avis-de-valeur"];

export const metadata: Metadata = {
  title: av.meta_title,
  description: av.meta_description,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
