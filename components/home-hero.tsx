import { LiquidCursorGradient } from "@/components/rewamp/liquid-cursor-gradient";
import { tx, type Lang } from "@/lib/i18n";

export function HomeHero({ lang }: { lang: Lang }) {
  return (
    <LiquidCursorGradient>
      <div className="flex min-h-svh flex-col items-center justify-center px-6 pt-24 pb-28 text-center">
        <p className="mb-5 text-sm font-medium tracking-wide text-white/75 sm:text-base">
          {tx(
            lang,
            "Tom Testu — étudiant en informatique",
            "Tom Testu — computer science student",
          )}
        </p>
        <h1 className="max-w-4xl text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl">
          Building apps
          <br />
          powered by AI
        </h1>
        <a href="#contact" className="button button--solid mt-8">
          {tx(lang, "Me contacter", "Get in Touch")}
        </a>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent to-paper" />
    </LiquidCursorGradient>
  );
}
