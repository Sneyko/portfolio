import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { Parcours } from "@/components/parcours";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SitePage({ lang }: { lang: Lang }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        {tx(lang, "Aller au contenu", "Skip to content")}
      </a>

      <div className="mx-auto flex w-full max-w-prose flex-1 flex-col px-6 pt-8 pb-16 md:px-8 md:pt-20 md:pb-32">
        <main id="main-content" className="flex-1">
          <SiteHeader lang={lang} />
          <Intro lang={lang} />
          <Projects lang={lang} />
          <Parcours lang={lang} />
          <Skills lang={lang} />
          <Contact lang={lang} />
        </main>

        <footer className="mt-8 border-t border-border pt-5 font-mono text-[11px] text-muted-soft">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} Tom Testu — {site.location}</p>
            <p>{lang === "fr" ? "Fait avec Next.js" : "Built with Next.js"}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
