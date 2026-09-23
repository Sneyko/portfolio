"use client";

import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export type FolderTabCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  tagsCount?: string;
  tagsLabel?: string;
  shotsCount?: string;
  preview?: ReactNode;
  onOpen?: () => void;
  open?: boolean;
  actionLabel?: string;
  className?: string;
};

export default function FolderTabCard({
  title,
  subtitle,
  description,
  tagsCount,
  tagsLabel,
  shotsCount,
  preview,
  onOpen,
  open = false,
  actionLabel,
  className = "",
}: FolderTabCardProps) {
  return (
    <div className="flex h-full w-full items-center justify-center p-1">
      <div
        className={`project-folder-card relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px] border border-black/8 bg-white p-2 shadow-[0_20px_45px_-12px_rgba(134,7,7,0.18)] sm:rounded-[32px] sm:p-2.5 dark:border-white/10 dark:bg-[#140a0a] dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.65)] ${className}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[24px] sm:rounded-[26px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            {preview ?? (
              <>
                <div className="project-folder-art absolute -inset-[8%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent dark:from-black/50" />
              </>
            )}
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end">
            <div className="relative h-[62%] w-full">
              <svg
                viewBox="0 0 380 240"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full drop-shadow-[0_-10px_20px_rgba(0,0,0,0.16)]"
                aria-hidden="true"
              >
                <path
                  d="M 0 28
                     A 28 28 0 0 1 28 0
                     L 248 0
                     A 22 22 0 0 1 270 22
                     A 22 22 0 0 0 292 44
                     L 352 44
                     A 28 28 0 0 1 380 72
                     L 380 212
                     A 28 28 0 0 1 352 240
                     L 28 240
                     A 28 28 0 0 1 0 212
                     Z"
                  className="fill-white stroke-black/6 dark:fill-[#14131A] dark:stroke-white/10"
                  strokeWidth="1"
                />
              </svg>

              <div
                className="relative z-20 flex h-full w-full flex-col justify-between p-4 sm:p-5"
              >
                <div className="max-w-[62%] pt-0.5">
                  <h3
                    className="line-clamp-2 leading-tight font-bold tracking-tight text-neutral-900 dark:text-white text-[15px] sm:text-[17px]"
                  >
                    {title}
                  </h3>
                  {subtitle ? (
                    <p
                      className="mt-0.5 line-clamp-2 leading-tight font-medium text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-[11px]"
                    >
                      {subtitle}
                    </p>
                  ) : null}
                </div>

                {description ? (
                  <p
                    className="line-clamp-3 text-pretty leading-snug text-neutral-600 dark:text-neutral-400 text-[12px] sm:text-[13px]"
                  >
                    {description}
                  </p>
                ) : null}

                <div className="flex items-end justify-between gap-3 pb-0.5">
                  <div className="flex items-baseline gap-1.5">
                    {tagsCount ? (
                      <span
                        className="leading-none font-black tracking-tight text-neutral-900 dark:text-white text-xl sm:text-2xl"
                      >
                        {tagsCount}
                      </span>
                    ) : null}
                    {tagsLabel ? (
                      <span
                        className="font-semibold text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-[11px]"
                      >
                        {tagsLabel}
                      </span>
                    ) : null}
                  </div>

                  {shotsCount ? (
                    <p
                      className="max-w-[46%] text-right leading-tight font-medium text-neutral-500 dark:text-neutral-400 text-[10px] sm:text-[11px]"
                    >
                      {shotsCount}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        {onOpen ? (
          <button
            type="button"
            onClick={onOpen}
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-label={actionLabel ?? title}
            className="project-folder-trigger absolute inset-0 z-20 cursor-pointer touch-manipulation rounded-[inherit]"
          >
            <span className="project-folder-arrow absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/90 text-neutral-800 shadow-sm sm:top-6 sm:right-6 dark:border-white/30 dark:bg-[#341717] dark:text-white">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        ) : null}
      </div>
    </div>
  );
}
