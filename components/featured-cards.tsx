import { Code2, Heart, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { tx, type Lang } from "@/lib/i18n";

function FeaturedCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <article className="relative z-10 flex-1 rounded-2xl border border-divider-light bg-white dark:border-divider-dark dark:bg-slate-900">
      <div
        className="absolute inset-x-0 inset-y-8 z-[-1] border-t border-divider-light dark:border-divider-dark"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-8 inset-y-0 z-[-1] border-l border-divider-light dark:border-divider-dark"
        aria-hidden="true"
      />
      <div className="-mt-0.5">
        <div className="mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="-m-2">{icon}</div>
          <p className="truncate py-2 pr-4 text-sm font-bold text-slate-700 dark:text-slate-300">
            {title}
          </p>
        </div>
      </div>
      <p className="p-4 pl-12 text-sm text-pretty text-slate-600 dark:text-slate-400">
        {desc}
      </p>
    </article>
  );
}

export function FeaturedCards({ lang }: { lang: Lang }) {
  return (
    <div className="mb-16 hidden lg:mb-24 lg:block">
      <div className="content-wrapper">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <FeaturedCard
            icon={
              <div className="rounded-full bg-amber-300 p-3.5 dark:bg-amber-900">
                <Sparkles className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
              </div>
            }
            title={tx(lang, "Interfaces claires", "Clean & Intuitive")}
            desc={tx(
              lang,
              "Garder l'interface nette, moderne, sans sacrifier l'expérience.",
              "Keep the UI clean with a modern touch without compromising UX.",
            )}
          />
          <FeaturedCard
            icon={
              <div className="rounded-full bg-pink-300 p-3.5 dark:bg-pink-900">
                <Heart className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
              </div>
            }
            title={tx(lang, "Œil pour le détail", "Detail Oriented")}
            desc={tx(
              lang,
              "Accessibilité, cohérence de l'interface, et une expérience plus agréable.",
              "Awareness to ease of access, UI consistency, and improved UX.",
            )}
          />
          <FeaturedCard
            icon={
              <div className="rounded-full bg-sky-300 p-3.5 dark:bg-sky-900">
                <Code2 className="h-5 w-5 text-white" strokeWidth={2} aria-hidden="true" />
              </div>
            }
            title={tx(lang, "Code lisible", "Pretty & Optimized")}
            desc={tx(
              lang,
              "Écrire du code clair, tout en le gardant aussi efficace que possible.",
              "Writing clean code is a top priority while keeping it as optimized as possible.",
            )}
          />
        </div>
      </div>
    </div>
  );
}
