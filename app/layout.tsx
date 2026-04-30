import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import HiddenForms from "./components/HiddenForms";
import RevealOnScroll from "./components/RevealOnScroll";

const sans = Montserrat({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rieg-immobilier-preview.netlify.app"),
  title: {
    default: "Romain Rieg — Conseiller immobilier Lyon Ouest & Mont d'Or",
    template: "%s | Romain Rieg Immobilier",
  },
  description: "Estimation, vente, acquisition et gestion locative sur le Mont d'Or, l'Ouest lyonnais et la Plaine du Forez. Accompagnement sur-mesure par Romain Rieg, conseiller iad.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rieg-immobilier-preview.netlify.app",
    siteName: "Romain Rieg Immobilier",
    title: "Romain Rieg — Conseiller immobilier Lyon Ouest & Mont d'Or",
    description: "Estimation, vente, acquisition et gestion locative sur le Mont d'Or et l'Ouest lyonnais.",
    images: [{ url: "/photos/Ville-de-saint-didier-au-mont-d-or_1920.jpg", width: 1920, height: 1280 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://rieg-immobilier-preview.netlify.app" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsApp />
        <HiddenForms />
        <RevealOnScroll />
        <Script defer data-domain="rieg-immobilier-preview.netlify.app" src="https://plausible.io/js/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
