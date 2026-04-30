"use client";
import Link from "next/link";
import { useState } from "react";
import { settings } from "../lib/_generated/settings";

const nav = [
  { href: "/rejoindre", label: "Rejoindre l'équipe", emphase: true },
  { href: "/avis-de-valeur", label: "Avis de valeur" },
  { href: "/vendre", label: "Vendre" },
  { href: "/acheter", label: "Acheter" },
  { href: "/location", label: "Location" },
  { href: "/outils", label: "Outils" },
  { href: "/actualites", label: "Actualités" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="bg-navy text-ivory text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gold/80 text-[11px] uppercase tracking-[0.25em] font-medium">Conseiller iad</span>
            <span className="h-3 w-px bg-ivory/20" />
            <Link href="/rejoindre" className="group flex items-center gap-1.5 text-ivory/90 hover:text-gold transition">
              <span className="font-medium">Rejoindre mon équipe</span>
              <span className="text-gold transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <a href={`tel:${settings.telephone_lien}`} className="text-ivory/85 hover:text-gold transition flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {settings.telephone}
          </a>
        </div>
      </div>

      <div className="sticky top-0 z-40 bg-ivory/95 backdrop-blur border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 h-24 lg:h-28 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <img src="/photos/IAD_LOGO_FINAL-removebg-preview.png" alt="iad Prestige Immobilier" className="h-9 lg:h-11 w-auto" />
            <div className="hidden 2xl:block h-10 w-px bg-ink/15" />
            <span className="hidden 2xl:block font-serif text-2xl text-navy whitespace-nowrap">{settings.nom}</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-[14px] xl:text-[15px]">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`whitespace-nowrap link-underline ${n.emphase ? "text-navy font-semibold" : "text-ink/85 hover:text-gold"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-navy text-ivory text-sm font-medium hover:bg-gold hover:text-navy transition shrink-0 rounded-full whitespace-nowrap"
          >
            Contactez-moi
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-navy" aria-label="Menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-ink/5 bg-ivory">
            <div className="px-6 py-5 flex flex-col gap-4">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className={`py-1 text-base ${n.emphase ? "text-navy font-semibold" : "text-ink/80"}`}>{n.label}</Link>
              ))}
              <a href={`tel:${settings.telephone_lien}`} className="py-1 text-navy text-base">{settings.telephone}</a>
              <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 px-5 py-3 bg-navy text-ivory text-center text-sm rounded-full">Contactez-moi</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
