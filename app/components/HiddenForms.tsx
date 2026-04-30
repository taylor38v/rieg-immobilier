export default function HiddenForms() {
  return (
    <div hidden>
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="nom" /><input name="email" /><input name="telephone" />
        <select name="projet"><option /></select>
        <textarea name="message" />
      </form>
      <form name="contact-smart" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="intent" /><input name="typeBien" /><input name="ville" /><input name="surface" />
        <input name="budget" /><input name="financement" /><input name="delai" />
        <input name="exclusif" /><input name="experience" /><input name="motivation" />
        <input name="message" /><input name="rappelQuand" />
        <input name="prenom" /><input name="nom" /><input name="email" /><input name="tel" />
        <input name="_resume" />
      </form>
      <form name="estimation" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="type" /><input name="ville" /><input name="adresse" />
        <input name="surface" /><input name="pieces" />
        <input name="etat" /><input name="delai" />
        <input name="nom" /><input name="email" /><input name="telephone" />
      </form>
      <form name="vendabilite" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="type" /><input name="secteur" /><input name="surface" /><input name="etat" /><input name="dpe" /><input name="prix" />
        <input name="email" />
      </form>
      <form name="newsletter" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="email" />
      </form>
      <form name="newsletter-footer" data-netlify="true" netlify-honeypot="bot-field">
        <input name="bot-field" />
        <input name="email" />
      </form>
    </div>
  );
}
