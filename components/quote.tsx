import { tx, type Lang } from "@/lib/i18n";

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg
        viewBox="0 0 20 20"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
          <path d="M7.27273 16.3833H0L5.30713 4H10.0737L7.27273 16.3833ZM17.199 16.3833H9.92629L15.2334 4H20L17.199 16.3833Z" />
    </svg>
  );
}

export function Quote({ lang }: { lang: Lang }) {
  return (
    <div className="content-wrapper">
      <div className="flex items-center justify-center py-8">
        <blockquote className="flex gap-2 pt-2 text-3xl text-slate-500 md:text-4xl lg:pt-0 lg:text-5xl dark:text-slate-400">
          <QuoteMark className="-mt-1 h-10 text-slate-300 md:-mt-3 md:h-16 lg:h-24 dark:text-slate-800" />
          <span className="flex flex-col">
            <span className="leading-[1.15]">
              <em>{tx(lang, "Lisible", "Clear")}</em>{" "}
            </span>
            <span className="flex items-center gap-2 leading-[1.15] lg:gap-4">
              <span
                className="mt-1 h-0.5 w-8 rounded-full bg-slate-400 lg:h-1 lg:w-24 dark:bg-slate-600"
                aria-hidden="true"
              />
              <span>
                <strong className="font-extrabold text-slate-600 dark:text-slate-300">
                  {tx(lang, "à l'écran", "on screen")}
                </strong>{" "}
                {tx(lang, "et", "and")}{" "}
                <strong className="font-extrabold text-slate-600 dark:text-slate-300">
                  {tx(lang, "dans le code", "in the code")}
                </strong>
              </span>
              <span
                className="mt-1 h-0.5 w-6 rounded-full bg-slate-400 lg:h-1 lg:w-14 dark:bg-slate-600"
                aria-hidden="true"
              />
            </span>
            <span className="leading-[1.15]">
              {tx(lang, "c'est un", "is a")}{" "}
              <strong className="relative font-extrabold text-slate-600 dark:text-slate-300">
                <span
                  className="absolute top-1 right-0 -left-0.5 -z-10 rounded-md bg-slate-100 px-1 lg:top-2 lg:-right-0.5 lg:-left-1.5 dark:bg-slate-800"
                  aria-hidden="true"
                />
                {tx(lang, "réflexe.", "must.")}
              </strong>
            </span>
          </span>
        </blockquote>
      </div>
    </div>
  );
}
