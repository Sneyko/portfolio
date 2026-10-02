import { Mail } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

const linkClass =
  "inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3.5 text-sm font-semibold text-fg transition-colors hover:border-muted-soft hover:bg-[color-mix(in_srgb,var(--fg)_4%,transparent)]";

export function EvroIntro({ lang }: { lang: Lang }) {
  return (
    <div className="mb-14 text-fg-soft">
      <div className="home-bio">
        <p>
          {tx(
            lang,
            "Evro AI, c'est le nom sous lequel je construis et je partage ce que je fais : des applications iOS, macOS et web.",
            "Evro AI is the name I build and share under: iOS, macOS and web apps.",
          )}
        </p>
        <p>
          {tx(
            lang,
            "J'aime les interfaces nettes, le code lisible et les détails qui font qu'un produit tient debout.",
            "I like clean interfaces, readable code, and the details that make a product hold together.",
          )}
        </p>
        <p>
          {tx(
            lang,
            "Je construis en public — les projets, les galères et les progrès.",
            "I build in public — the projects, the struggles and the progress.",
          )}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <a href={site.x} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <XIcon />
          {tx(lang, "Suivre sur X", "Follow on X")}
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <GithubIcon size={16} />
          GitHub
        </a>
        <a href={`mailto:${site.email}`} className={linkClass}>
          <Mail size={16} aria-hidden="true" />
          {tx(lang, "E-mail", "Email")}
        </a>
      </div>
    </div>
  );
}
