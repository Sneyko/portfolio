import { GithubIcon } from "@/components/github-icon";
import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { ButtonLink } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function Hero({ lang }: { lang: Lang }) {
  return (
    <section className="grid grid-cols-1 items-center gap-14 pt-14 md:grid-cols-12 md:gap-8 md:pt-20">
      <div className="md:col-span-7">
        <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 font-mono text-[11.5px] text-ink/65">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1a9950]" aria-hidden="true" />
          {tx(
            lang,
            "En recherche d'un stage informatique",
            "Looking for a software internship",
          )}
        </p>

        <h1 className="rise rise-1 mt-7 text-[clamp(2.9rem,8vw,4.9rem)] leading-[0.98] font-medium tracking-[-0.035em]">
          Tom Testu
        </h1>

        <p className="rise rise-2 mt-6 max-w-[54ch] text-[16.5px] leading-relaxed text-ink/70">
          {tx(
            lang,
            "Étudiant en 2e année de BUT Informatique à l'IUT de Toulouse. Je conçois des applications iOS, des sites web et des outils — et j'aime les interfaces soignées.",
            "Second-year Computer Science student at IUT Toulouse. I build iOS apps, websites and tools — and I care about polished interfaces.",
          )}
        </p>

        <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#projets">
            {tx(lang, "Voir les projets", "See the work")}
          </ButtonLink>
          <ButtonLink href={site.github} variant="ghost">
            <GithubIcon size={16} />
            GitHub
          </ButtonLink>
        </div>
      </div>

      <div className="rise rise-2 flex justify-center md:col-span-5 md:justify-end">
        <PhoneMockupCard variant="titanium" className="w-[248px] md:w-[272px]">
          <img
            src="/shots/aven/rank.png"
            alt={tx(lang, "Aven — écran de rang global", "Aven — global rank screen")}
            className="h-full w-full object-cover"
          />
        </PhoneMockupCard>
      </div>
    </section>
  );
}
