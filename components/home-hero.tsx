import { LiquidCursorGradient } from "@/components/rewamp/liquid-cursor-gradient";
import { tx, type Lang } from "@/lib/i18n";

export function HomeHero({ lang }: { lang: Lang }) {
  return (
    <LiquidCursorGradient className="md:min-h-[min(52rem,92svh)]">
      <div className="flex min-h-svh flex-col items-center justify-center px-6 pt-32 pb-28 text-center md:min-h-[min(52rem,92svh)] md:pt-36 md:pb-32">
        <p className="mb-5 text-sm font-medium tracking-wide text-white/75 sm:text-base">
          Tom Testu · Toulouse
        </p>
        <h1 className="max-w-4xl text-4xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance text-white sm:text-6xl md:text-7xl">
          {tx(lang, "Je crée des apps", "I build apps")}
          <br />
          {tx(lang, "pour le quotidien.", "for everyday life.")}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-white/80 sm:text-lg">
          {tx(
            lang,
            "Étudiant en BUT Informatique à Toulouse, je conçois et développe des applications iOS, macOS et web. Je recherche un stage en informatique.",
            "I'm a Computer Science student in Toulouse, designing and building iOS, macOS and web apps. I'm looking for a software development internship.",
          )}
        </p>
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-5">
          <a href="#projets-selectionnes" className="button button--solid">
            {tx(lang, "Voir mes projets", "View my projects")}
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-base font-medium text-white underline-offset-4 transition-colors duration-150 hover:text-white/80 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {tx(lang, "Me contacter", "Get in touch")}
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent to-paper" />
    </LiquidCursorGradient>
  );
}
