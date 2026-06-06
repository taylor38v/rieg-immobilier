import type { Metadata } from "next";
import SmartContactForm from "../components/SmartContactForm";
import { site } from "../lib/_generated/site";

const c = site.contact;

export const metadata: Metadata = {
  title: c.meta_title,
  description: c.meta_description,
};

export default function Page() {
  return (
    <>
      <section className="hero-grad text-ivory py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{c.hero.surtitre}</div>
          <h1 className="font-serif text-4xl md:text-6xl mt-3 leading-[1.05] max-w-4xl">{c.hero.titre}</h1>
          <p className="text-ivory/80 text-lg mt-6 max-w-2xl leading-relaxed">{c.hero.intro}</p>
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-ivory/70">
            {c.hero.garanties.map((g) => <span key={g}>✓ {g}</span>)}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          <SmartContactForm />

          <aside className="space-y-6">
            <div className="rounded-xl bg-white border border-ink/10 p-6">
              <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{c.sidebar.surtitre}</div>
              <h2 className="font-serif text-2xl mt-2">{c.sidebar.titre}</h2>

              <div className="mt-6 space-y-3">
                <a href={`tel:${c.sidebar.telephone_lien}`} className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group rounded-xl">
                  <div className="w-12 h-12 grid place-items-center bg-gold text-navy font-serif text-xl rounded-full shrink-0">☎</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted">Téléphone</div>
                    <div className="font-serif text-lg text-navy group-hover:text-gold transition">{c.sidebar.telephone}</div>
                  </div>
                </a>

                <a href={`sms:+33679571473?body=Bonjour%20Romain%2C%20`} className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group rounded-xl">
                  <div className="w-12 h-12 grid place-items-center bg-navy text-gold font-serif text-xl rounded-full shrink-0">💬</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted">SMS direct</div>
                    <div className="font-serif text-lg text-navy group-hover:text-gold transition">Envoyer un SMS</div>
                  </div>
                </a>

                <a href="https://wa.me/33679571473?text=Bonjour%20Romain%2C%20" target="_blank" rel="noopener" className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group rounded-xl">
                  <div className="w-12 h-12 grid place-items-center bg-[#25D366] text-white rounded-full shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted">WhatsApp</div>
                    <div className="font-serif text-lg text-navy group-hover:text-gold transition">Démarrer un chat</div>
                  </div>
                </a>

                <a href={`mailto:${c.sidebar.email}`} className="flex items-center gap-4 p-3 hover:bg-ivory-deep transition group rounded-xl">
                  <div className="w-12 h-12 grid place-items-center bg-ivory-deep text-navy font-serif text-xl rounded-full shrink-0">✉</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted">Email</div>
                    <div className="font-serif text-lg text-navy group-hover:text-gold transition break-all">{c.sidebar.email}</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-ink/10 text-sm text-muted">
                <div><strong className="text-navy">{c.sidebar.horaires_titre}</strong> · {c.sidebar.horaires_detail}</div>
                <div className="text-xs mt-1">{c.sidebar.horaires_note}</div>
              </div>
            </div>

            <div className="rounded-xl bg-navy text-ivory p-6">
              <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{c.engagement.surtitre}</div>
              <div className="mt-4 space-y-3 text-sm">
                {c.engagement.items.map((it) => (
                  <div key={it} className="flex gap-3"><span className="text-gold">✓</span><span>{it}</span></div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-ivory-deep p-6 text-sm text-muted leading-relaxed">
              <strong className="text-navy">Pourquoi ce formulaire détaillé ?</strong><br />
              {c.footer_form_note}
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-ivory-deep py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
            <div>
              <div className="text-base md:text-lg uppercase tracking-[0.25em] text-gold font-medium">{c.calendrier.surtitre}</div>
              <h2 className="font-serif text-4xl md:text-5xl text-navy mt-3 leading-tight">{c.calendrier.titre}</h2>
              <p className="text-muted mt-4 leading-relaxed">{c.calendrier.intro}</p>
              <ul className="mt-6 space-y-2 text-sm text-ink/85">
                {c.calendrier.puces.map((p) => (
                  <li key={p} className="flex gap-2"><span className="text-gold">✓</span>{p}</li>
                ))}
              </ul>
              <a href={c.calendrier.cal_url} target="_blank" rel="noopener" className="inline-block mt-6 px-6 py-3 bg-navy text-ivory hover:bg-gold hover:text-navy text-sm transition rounded-full">
                {c.calendrier.cta_label}
              </a>
            </div>
            <div className="rounded-xl bg-white border border-ink/10 overflow-hidden" style={{ minHeight: 660 }}>
              <iframe
                src={`${c.calendrier.cal_url}?embed=true&theme=light&hideEventTypeDetails=false`}
                title="Réserver un rendez-vous avec Romain Rieg"
                width="100%"
                height="660"
                frameBorder={0}
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
