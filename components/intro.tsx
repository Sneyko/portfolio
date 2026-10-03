import { LinkedinIcon } from "@/components/linkedin-icon";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Intro({ lang }: { lang: Lang }) {
  const interests = tx(
    lang,
    "interfaces, iOS, web, IA, musculation",
    "interfaces, iOS, web, AI, weight training",
  );

  return (
    <div className="mb-14 text-fg-soft">
      <div className="home-bio">
        <p>
          {tx(
            lang,
            "Salut, moi c'est Tom. Je conçois et développe des applications iOS, macOS et web — pour rendre des choses simples vraiment agréables à utiliser.",
            "Hi, I'm Tom. I design and build iOS, macOS and web apps — to make simple things genuinely pleasant to use.",
          )}
        </p>
        <p>
          {tx(
            lang,
            "J'aime dessiner l'interface, écrire le code et soigner les détails qui font tenir un produit : lisibilité, cohérence, accessibilité.",
            "I like sketching the interface, writing the code and tending to the details that hold a product together: readability, consistency, accessibility.",
          )}
        </p>
        <p>
          {tx(
            lang,
            "En deuxième année de BUT Informatique à l'IUT de Toulouse, je cherche un stage pour mettre tout ça à l'épreuve.",
            "A second-year Computer Science student at IUT Toulouse, I'm looking for an internship to put all of it to the test.",
          )}
        </p>
      </div>

      <p className="mt-3 text-muted">
        <span className="text-fg-soft">
          {tx(lang, "Centres d'intérêt", "Interests")}
        </span>
        : <span className="text-fg">{interests}</span>
      </p>

      <p className="mt-8">
        {tx(lang, "Envie d'échanger ? Écrivez-moi sur", "Want to talk? Say hi on")}{" "}
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent inline-flex items-center gap-1"
        >
          <LinkedinIcon size={14} />
          LinkedIn
        </a>{" "}
        {tx(lang, "ou par", "or send me an")}{" "}
        <a href={`mailto:${site.email}`} className="link-accent">
          e-mail
        </a>
        .
      </p>
    </div>
  );
}
