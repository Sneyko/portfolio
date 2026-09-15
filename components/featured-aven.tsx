import { PhoneMockupCard } from "@/components/mockups/phone-mockup-card";
import { Chips } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { aven } from "@/lib/projects";

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
          <div className="flex items-center justify-center gap-6">
            <PhoneMockupCard
              variant="titanium"
              className="hidden w-[160px] md:block md:w-[172px]"
            >
              <img
                src="/shots/aven/home.png"
                alt={tx(lang, "Aven — tableau de bord", "Aven — dashboard")}
                className="h-full w-full object-cover outline outline-1 outline-black/10 dark:outline-white/10"
              />
            </PhoneMockupCard>
            <PhoneMockupCard
              variant="titanium"
              className="w-[212px] md:w-[238px]"
            >
              <img
                src="/shots/aven/session.png"
                alt={tx(lang, "Aven — séance en cours", "Aven — active workout")}
                className="h-full w-full object-cover outline outline-1 outline-black/10 dark:outline-white/10"
              />
            </PhoneMockupCard>
            <PhoneMockupCard
              variant="titanium"
              className="hidden w-[160px] md:block md:w-[172px]"
            >
              <img
                src="/shots/aven/journal.png"
                alt={tx(lang, "Aven — journal et progression", "Aven — journal and progress")}
                className="h-full w-full object-cover outline outline-1 outline-black/10 dark:outline-white/10"
              />
            </PhoneMockupCard>
          </div>
        </div>
      </div>
    </article>
  );
}
