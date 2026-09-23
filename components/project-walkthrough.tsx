"use client";

import { useId, useState, type ReactNode } from "react";

type WalkthroughStep = {
  title: string;
  description: string;
  preview: ReactNode;
};

export function ProjectWalkthrough({
  name,
  label,
  steps,
  className = "",
}: {
  name: string;
  label: string;
  steps: WalkthroughStep[];
  className?: string;
}) {
  const [selected, setSelected] = useState(0);
  const panelId = useId();
  const step = steps[selected];

  return (
    <div data-project-demo={name} className={`min-w-0 rounded-[24px] p-4 sm:p-6 ${className}`}>
      <p className="mb-5 text-center font-mono text-[11px] text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <figure id={panelId} aria-label={`${name} — ${step.title}`}>
        <div className="flex h-[350px] items-center justify-center sm:h-[380px]">
          {step.preview}
        </div>
        <figcaption className="mx-auto mt-5 min-h-[4.5em] max-w-sm text-center text-[13px] leading-relaxed text-pretty text-slate-600 sm:min-h-[3em] dark:text-slate-300" aria-live="polite" aria-atomic="true">
          {step.description}
        </figcaption>
      </figure>
      <div role="group" aria-label={name} className="mt-4 grid grid-cols-3 gap-1 rounded-2xl border border-black/5 bg-white/75 p-1 dark:border-white/10 dark:bg-slate-950/40">
        {steps.map((item, index) => (
          <button
            key={item.title}
            type="button"
            aria-pressed={selected === index}
            aria-controls={panelId}
            onClick={() => setSelected(index)}
            className={`flex min-h-12 cursor-pointer flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[11px] font-semibold transition-colors duration-150 sm:flex-row sm:gap-2 sm:text-xs ${
              selected === index
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-white/10"
            }`}
          >
            <span className="font-mono text-[10px] opacity-60" aria-hidden="true">0{index + 1}</span>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
