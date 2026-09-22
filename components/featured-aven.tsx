import { Chips } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { aven } from "@/lib/projects";

const screens = [
  {
    src: "/shots/aven/routines.png",
    alt: {
      fr: "Aven — routines d'entraînement",
      en: "Aven — workout routines",
    },
  },
  {
    src: "/shots/aven/session.png",
    alt: {
      fr: "Aven — séance guidée en cours",
      en: "Aven — guided workout in progress",
    },
  },
  {
    src: "/shots/aven/exercise.png",
    alt: {
      fr: "Aven — fiche d'un exercice",
      en: "Aven — exercise detail",
    },
  },
  {
    src: "/shots/aven/progression.png",
    alt: {
      fr: "Aven — progression et rangs musculaires",
      en: "Aven — progress and muscle ranks",
    },
  },
  {
    src: "/shots/aven/stats.png",
    alt: {
      fr: "Aven — statistiques d'entraînement",
      en: "Aven — training statistics",
    },
  },
  {
    src: "/shots/aven/stats-week.png",
    alt: {
      fr: "Aven — séances et volume de la semaine",
      en: "Aven — weekly sessions and volume",
    },
  },
  {
    src: "/shots/aven/calendar.png",
    alt: {
      fr: "Aven — calendrier de régularité",
      en: "Aven — consistency calendar",
    },
  },
  {
    src: "/shots/aven/ranks.png",
    alt: {
      fr: "Aven — classements",
      en: "Aven — leaderboards",
    },
  },
  {
    src: "/shots/aven/achievements.png",
    alt: {
      fr: "Aven — succès débloqués",
      en: "Aven — unlocked achievements",
    },
  },
] as const;

export function FeaturedAven({ lang }: { lang: Lang }) {
  return (
    <article className="mt-8 rounded-2xl border border-divider-light bg-white p-6 md:mt-10 md:p-10 dark:border-divider-dark dark:bg-slate-900">
      <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3.5">
            <img
              src="/shots/aven/icon.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-[11px] outline outline-1 outline-black/10 dark:outline-white/10"
            />
            <div>
              <h3 className="text-[26px] font-black tracking-tight text-slate-700 md:text-[30px] dark:text-slate-200">
                Aven
              </h3>
              <p className="mt-0.5 font-mono text-[11.5px] text-slate-400">
                {aven.category[lang]} · {aven.year}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
            {aven.description[lang]}
          </p>

          <ul className="mt-5 space-y-2.5">
            {aven.features.map((feature) => (
              <li
                key={feature.fr}
                className="flex gap-3 text-[13.5px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400"
              >
                <span
                  className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent-600"
                  aria-hidden="true"
                />
                {feature[lang]}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Chips items={aven.tech} />
          </div>

          <p className="mt-6 font-mono text-[11.5px] text-slate-400">
            {tx(
              lang,
              "Projet personnel — pas encore publié sur l'App Store.",
              "Personal project — not released on the App Store yet.",
            )}
          </p>
        </div>

        <div className="md:col-span-7">
          <div
            tabIndex={0}
            aria-label={tx(lang, "Écrans d'Aven", "Aven screens")}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
          >
            {screens.map((screen) => (
              <img
                key={screen.src}
                src={screen.src}
                alt={screen.alt[lang]}
                width={473}
                height={1024}
                className="h-[340px] w-auto shrink-0 snap-start rounded-xl sm:h-[420px] md:h-[460px]"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
