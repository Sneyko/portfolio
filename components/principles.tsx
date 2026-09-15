"use client";

import { Calendar } from "lucide-react";
import { useState } from "react";

import { SectionContent, SectionTitle } from "@/components/section-title";
import { cn } from "@/lib/cn";
import { tx, type Lang } from "@/lib/i18n";
import { aven } from "@/lib/projects";

function SectionButton({
  index,
  title,
  description,
  active,
  onClick,
}: {
  index: number;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex min-h-11 flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left transition-colors duration-150 dark:bg-slate-900",
        active
          ? "border-accent-400 dark:border-accent-400"
          : "border-divider-light dark:border-divider-dark",
      )}
    >
      <span
        className={cn(
          "hidden w-24 shrink-0 justify-center text-center text-7xl font-black xl:flex",
          active
            ? "text-accent-600 dark:text-accent-400"
            : "text-slate-400 dark:text-slate-600",
        )}
      >
        {index}
      </span>
      <span className="flex-1">
        <span
          className={cn(
            "block font-bold",
            active
              ? "text-accent-600 dark:text-accent-400"
              : "text-slate-700 dark:text-slate-200",
          )}
        >
          {title}
        </span>
        <span className="mt-1 block text-sm text-pretty text-slate-600 dark:text-slate-400">
          {description}
        </span>
      </span>
    </button>
  );
}

function AvenPreview({ lang }: { lang: Lang }) {
  return (
    <div className="w-full rounded-xl border border-divider-light bg-white p-6 lg:w-96 dark:border-divider-dark dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <img
          src="/shots/aven/icon.png"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full outline outline-1 outline-black/10 dark:outline-white/10"
        />
        <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-800 dark:bg-red-500/20 dark:text-red-300">
          iOS
        </span>
      </div>
      <p className="mb-1 text-lg font-bold text-slate-700 dark:text-slate-300">
        Aven
      </p>
      <p className="mb-4 text-sm text-pretty text-slate-600 dark:text-slate-400">
        {aven.summary[lang]}
      </p>
      <div className="mb-6 flex gap-2 text-xs font-bold">
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
          Swift
        </span>
        <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300">
          SwiftUI
        </span>
      </div>
      <p className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400">
        <Calendar className="-mt-px h-4 w-4 text-slate-400" strokeWidth={2} aria-hidden="true" />
        {aven.year} · {aven.category[lang]}
      </p>
    </div>
  );
}

export function Principles({ lang }: { lang: Lang }) {
  const items = [
    {
      title: tx(lang, "Séances guidées", "Guided workouts"),
      description: aven.features[0][lang],
    },
    {
      title: tx(lang, "Rangs & records", "Ranks & records"),
      description: aven.features[1][lang],
    },
    {
      title: tx(lang, "Catalogue", "Catalogue"),
      description: aven.features[2][lang],
    },
    {
      title: tx(lang, "Live Activity", "Live Activity"),
      description: aven.features[3][lang],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="mb-12 lg:mb-24">
      <header className="mb-8">
        <SectionTitle
          caption="Aven"
          title={tx(
            lang,
            "Une app iOS de musculation, dessinée et développée de A à Z.",
            "A weight-training iOS app, designed and built end to end.",
          )}
          description={aven.description[lang]}
        />
      </header>
      <SectionContent>
        <div className="flex lg:gap-12">
          <div className="-mt-8 hidden flex-1 flex-col gap-3 lg:flex">
            {items.map((item, index) => (
              <SectionButton
                key={item.title}
                index={index + 1}
                title={item.title}
                description={item.description}
                active={active === index}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <AvenPreview lang={lang} />
          </div>
        </div>
      </SectionContent>
    </section>
  );
}
