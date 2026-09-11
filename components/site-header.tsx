import Link from "next/link";

import { GithubIcon } from "@/components/github-icon";

import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteHeader({ lang }: { lang: Lang }) {
  const nav = [
    { href: "#projets", label: tx(lang, "Projets", "Projects") },
    { href: "#a-propos", label: tx(lang, "À propos", "About") },
    { href: "#contact", label: tx(lang, "Contact", "Contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-14 w-full max-w-[1100px] items-center justify-between px-5 md:h-16 md:px-8">
        <Link
          href={lang === "fr" ? "/" : "/en"}
          className="flex items-center gap-1.5 text-[15px] font-medium tracking-[-0.01em]"
        >
          Tom Testu
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        </Link>

        <nav className="flex items-center gap-5 md:gap-7">
          <div className="hidden items-center gap-6 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] text-ink/65 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

          <div className="flex items-center gap-1.5 font-mono text-[12px]">
            {lang === "fr" ? (
              <>
                <span aria-current="true" className="text-ink">
                  FR
                </span>
                <span className="text-ink/25" aria-hidden="true">
                  /
                </span>
                <Link href="/en" className="text-ink/45 transition-colors hover:text-ink">
                  EN
                </Link>
              </>
            ) : (
              <>
                <Link href="/" className="text-ink/45 transition-colors hover:text-ink">
                  FR
                </Link>
                <span className="text-ink/25" aria-hidden="true">
                  /
                </span>
                <span aria-current="true" className="text-ink">
                  EN
                </span>
              </>
            )}
          </div>

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink/60 transition-colors hover:text-ink"
          >
            <GithubIcon size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
