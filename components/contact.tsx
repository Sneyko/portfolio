import { Mail } from "lucide-react";

import { ContactCopyButton } from "@/components/contact-copy-button";
import { GithubIcon } from "@/components/github-icon";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const buttonClass =
  "inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3.5 text-sm font-semibold text-fg transition-colors hover:border-muted-soft hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]";

export function Contact({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="mb-14 w-full scroll-mt-24">
      <h2 className="section-heading mb-3">Contact</h2>
      <p className="text-sm leading-relaxed text-pretty text-fg-soft">
        {tx(
          lang,
          "Je cherche un stage en développement logiciel pour 2026. Une question, une idée, une opportunité ? Écrivez-moi à",
          "I'm looking for a software development internship in 2026. A question, an idea, an opportunity? Email me at",
        )}{" "}
        <a href={`mailto:${site.email}`} className="link-accent">
          {site.email}
        </a>
        .
      </p>

      <div className="work-meta mt-3 flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="min-w-0 text-left">
          {tx(lang, "Recherche de stage", "Looking for an internship")}
        </span>
        <span className="date-label shrink-0 text-right">2026</span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2.5">
        <a href={`mailto:${site.email}`} className={buttonClass}>
          <Mail size={16} aria-hidden="true" />
          {tx(lang, "Envoyer un e-mail", "Send an email")}
        </a>
        <ContactCopyButton email={site.email} lang={lang} />
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>
    </section>
  );
}
