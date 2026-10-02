import type { ReactNode } from "react";

import { brand } from "@/lib/brand";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function PageShell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        {tx(lang, "Aller au contenu", "Skip to content")}
      </a>

      <div className="mx-auto flex w-full max-w-prose flex-1 flex-col px-6 pt-8 pb-16 md:px-8 md:pt-20 md:pb-32">
        <main id="main-content" className="flex-1">
          {children}
        </main>

        <footer className="mt-8 border-t border-border pt-5 font-mono text-[11px] text-muted-soft">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>
              © {new Date().getFullYear()} {brand.name} — {site.location}
            </p>
            <p>{tx(lang, "Fait avec Next.js", "Built with Next.js")}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
