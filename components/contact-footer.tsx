import { Mail } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ title: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="flex-1">
      <p className="mb-2 px-2 text-sm font-bold text-slate-500 dark:text-slate-400">
        {title}
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="footer-link"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ContactFooter({ lang }: { lang: Lang }) {
  return (
    <footer
      id="contact"
      className="background-grid background-grid--fade-in mt-24 border-t border-divider-light pt-16 text-sm text-slate-900 dark:border-divider-dark dark:text-slate-200"
    >
      <div className="content-wrapper">
        <div className="py-10 font-semibold">
          <div className="flex flex-col-reverse gap-16 lg:flex-row">
            <div className="flex-1">
              <p className="mb-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                {tx(lang, "À propos", "About Me")}
              </p>
              <p className="max-w-[40ch] text-pretty text-slate-600 dark:text-slate-400">
                {tx(
                  lang,
                  "Je suis Tom, étudiant en informatique à Toulouse. J'aime les interfaces claires, le code lisible, et construire des produits complets.",
                  "I'm Tom, a computer science student in Toulouse. I like clear interfaces, readable code, and building complete products.",
                )}
              </p>
              <ul className="mt-6 flex items-center gap-1">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition-colors duration-150 hover:bg-slate-300/50 dark:text-slate-200 dark:hover:bg-slate-800/50"
                    aria-label={site.email}
                    title={site.email}
                  >
                    <Mail size={18} strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition-colors duration-150 hover:bg-slate-300/50 dark:text-slate-200 dark:hover:bg-slate-800/50"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="-mx-2 flex flex-1 flex-col gap-8 sm:flex-row sm:gap-16 lg:mx-0">
              <FooterGroup
                title={tx(lang, "Parcours", "Work")}
                links={[
                  { title: "Contact", href: `mailto:${site.email}`, external: true },
                  { title: tx(lang, "Projets", "Projects"), href: "#projets" },
                  { title: tx(lang, "À propos", "About"), href: "#a-propos" },
                  { title: tx(lang, "Compétences", "Skills"), href: "#competences" },
                ]}
              />
              <FooterGroup
                title={tx(lang, "Ce site", "This Site")}
                links={[
                  {
                    title: "GitHub",
                    href: site.github,
                    external: true,
                  },
                  {
                    title: tx(lang, "Version anglaise", "Version française"),
                    href: lang === "fr" ? "/en" : "/",
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-divider-light py-6 text-xs dark:border-divider-dark md:flex-row md:items-center">
          <p className="font-semibold">
            © {new Date().getFullYear()}, Tom Testu
          </p>
          <p className="text-slate-500 dark:text-slate-400">{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
