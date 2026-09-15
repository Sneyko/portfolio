import { GithubIcon } from "@/components/github-icon";
import { HeroPortrait } from "@/components/hero-portrait";
import { TechStack } from "@/components/tech-stack";
import { ButtonLink } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero({ lang }: { lang: Lang }) {
  return (
    <header
      id="page-header"
      className="background-grid background-grid--fade-out pt-36 pb-20 lg:pt-52 lg:pb-28"
    >
      <div className="content-wrapper">
        <div className="relative">
          <div className="relative z-10 max-w-2xl">
            <p className="enter-x enter-x-1 mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400">
              {tx(lang, "salut !", "hi!")}{" "}
              <span className="inline-block origin-bottom-right" aria-hidden="true">
                👋
              </span>
            </p>

            <h1 className="enter-x enter-x-2 mb-4 block text-[2.5rem] leading-none font-extrabold text-slate-700 md:mb-6 md:text-7xl dark:text-slate-300">
              {tx(lang, "Je suis", "I'm")}{" "}
              <strong className="text-accent-600 dark:text-accent-500">Tom</strong>{" "}
              Testu,
            </h1>

            <p className="enter-x enter-x-3 max-w-[36rem] text-base text-pretty text-slate-600 md:text-xl dark:text-slate-400">
              {tx(lang, "un", "a")}{" "}
              <strong className="font-bold text-slate-700 lowercase dark:text-slate-300">
                {tx(
                  lang,
                  "étudiant en informatique",
                  "computer science student",
                )}
              </strong>{" "}
              {tx(
                lang,
                "qui conçoit des applications iOS, des sites web et des outils — avec un vrai soin pour l'interface.",
                "who builds iOS apps, websites and tools — and cares about polished UI.",
              )}
            </p>
          </div>

          <div className="enter-x enter-x-4 mt-6 flex flex-wrap items-center gap-2 md:mt-8">
            <ButtonLink href="#contact">
              {tx(lang, "Me contacter", "Get in Touch")}
            </ButtonLink>
            <ButtonLink href={site.github} variant="ghost">
              <GithubIcon size={20} />
              GitHub
            </ButtonLink>
            <p className="button button--ghost button--big pointer-events-none gap-2.5 px-2.5 text-accent-500 dark:text-accent-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute top-[-4px] left-[-4px] inline-flex h-4 w-4 animate-ping rounded-full bg-accent-600 opacity-75 dark:bg-accent-300" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500 dark:bg-accent-400" />
              </span>
              {tx(lang, "Ouvert au stage", "Open for internships")}
            </p>
          </div>

          <div className="enter-x enter-x-5 mt-20 lg:mt-36">
            <TechStack lang={lang} />
          </div>

          <HeroPortrait lang={lang} />
        </div>
      </div>
    </header>
  );
}
