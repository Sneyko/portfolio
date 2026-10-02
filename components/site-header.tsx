import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { brand } from "@/lib/brand";
import { tx, type Lang } from "@/lib/i18n";

function LanguageSwitch({ lang }: { lang: Lang }) {
  const active = "px-0.5 text-fg";
  const idle = "px-0.5 text-muted-soft transition-colors hover:text-fg";

  return (
    <nav aria-label="Language" className="flex items-center gap-1 font-mono text-xs">
      {lang === "fr" ? (
        <>
          <span aria-current="true" className={active}>
            FR
          </span>
          <span aria-hidden="true" className="text-muted-soft">
            /
          </span>
          <Link href="/en" className={idle}>
            EN
          </Link>
        </>
      ) : (
        <>
          <Link href="/" className={idle}>
            FR
          </Link>
          <span aria-hidden="true" className="text-muted-soft">
            /
          </span>
          <span aria-current="true" className={active}>
            EN
          </span>
        </>
      )}
    </nav>
  );
}

export function SiteHeader({ lang }: { lang: Lang }) {
  return (
    <header className="mb-5.5 flex items-center gap-3">
      <span
        aria-hidden="true"
        className="grid size-32 shrink-0 place-items-center rounded-full border border-border bg-[color-mix(in_srgb,var(--fg)_6%,transparent)]"
      >
        <span className="font-display text-4xl font-semibold tracking-tight text-fg-soft">
          {brand.initials}
        </span>
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <div className="flex items-center justify-between gap-3">
          <h1 className="site-header-title">{brand.name}</h1>
          <div className="flex items-center gap-2">
            <LanguageSwitch lang={lang} />
            <ThemeToggle label={tx(lang, "Changer de thème", "Toggle theme")} />
          </div>
        </div>
        <p className="site-header-greeting">{brand.greeting[lang]}</p>
      </div>
    </header>
  );
}
