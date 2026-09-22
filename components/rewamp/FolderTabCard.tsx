"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type FolderTabCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  tagsCount?: string;
  tagsLabel?: string;
  shotsCount?: string;
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
  onOpen,
  open = false,
  actionLabel,
  className = "",
}: FolderTabCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { margin: "160px", amount: 0.2 });
  const reduce = useReducedMotion();
  const moving = inView && !reduce;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const applyWidth = (w: number) => setIsCompact(w < 220);
    applyWidth(el.getBoundingClientRect().width);
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) applyWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 45;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 45;
    setMousePos({ x, y });
  };

  return (
    <div className="flex h-full w-full items-center justify-center p-1">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className={`relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[28px] border p-2 shadow-[0_20px_45px_-12px_rgba(134,7,7,0.18)] transition-colors duration-300 sm:rounded-[32px] sm:p-2.5 dark:border-white/10 dark:bg-[#140a0a] dark:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.65)] border-black/8 bg-white ${className}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[24px] sm:rounded-[26px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#F8EEEE] dark:bg-[#140606]" />

            <motion.div
              animate={
                moving
                  ? { rotate: [0, 360], x: mousePos.x, y: mousePos.y }
                  : { rotate: 0, x: 0, y: 0 }
              }
              transition={
                moving
                  ? {
                      rotate: { duration: 22, repeat: Infinity, ease: "linear" },
                      x: { type: "spring", stiffness: 120, damping: 18 },
                      y: { type: "spring", stiffness: 120, damping: 18 },
                    }
                  : { duration: 0.4 }
              }
              className="pointer-events-none absolute -top-[35%] -left-[35%] h-[170%] w-[170%]"
            >
              <Blob
                className="top-[20%] left-[15%] h-[68%] w-[68%] blur-[22px] bg-[radial-gradient(circle,#e07070_0%,#860707_42%,#4a0404_78%,transparent_100%)] dark:bg-[radial-gradient(circle,#c44848_0%,#860707_40%,#2a0202_78%,transparent_100%)]"
                animate={
                  moving
                    ? {
                        x: [-55, 50, -35, -55],
                        y: [-35, 45, -50, -35],
                        scale: [1, 1.35, 0.88, 1],
                      }
                    : undefined
                }
                duration={5.5}
              />
              <Blob
                className="top-[24%] left-[22%] h-[58%] w-[58%] blur-[16px] bg-[radial-gradient(circle,#ffffff_0%,#ffd0d0_32%,#f0a8a8_70%,transparent_92%)] dark:bg-[radial-gradient(circle,#ffffff_0%,#f0a8a8_28%,#860707_68%,transparent_90%)]"
                animate={
                  moving
                    ? {
                        x: [45, -50, 35, 45],
                        y: [35, -40, 50, 35],
                        scale: [0.9, 1.45, 0.92, 0.9],
                      }
                    : undefined
                }
                duration={4.8}
              />
              <Blob
                className="top-[16%] right-[12%] h-[55%] w-[55%] blur-[22px] opacity-85 bg-[radial-gradient(circle,#f0a8a8_0%,#e07070_40%,#f8eeee_75%,transparent_95%)] dark:bg-[radial-gradient(circle,#c44848_0%,#860707_35%,#4a0404_65%,transparent_90%)]"
                animate={
                  moving
                    ? {
                        x: [40, -35, 45, 40],
                        y: [-45, 40, -25, -45],
                        scale: [0.85, 1.3, 0.9, 0.85],
                      }
                    : undefined
                }
                duration={6.8}
              />
              <Blob
                className="top-[8%] left-[8%] h-[52%] w-[52%] blur-[20px] opacity-80 bg-[radial-gradient(circle,#f0a8a8_0%,#f8eeee_50%,transparent_80%)] dark:bg-[radial-gradient(circle,#e07070_0%,#860707_45%,transparent_80%)]"
                animate={
                  moving
                    ? {
                        x: [-45, 40, -25, -45],
                        y: [35, -40, 30, 35],
                        scale: [0.88, 1.32, 0.85, 0.88],
                      }
                    : undefined
                }
                duration={5.8}
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/25 via-transparent to-transparent dark:from-black/50" />
          </div>

          {onOpen ? (
            <div className="absolute top-3 right-3 z-20 sm:top-3.5 sm:right-3.5">
              <motion.button
                type="button"
                onClick={onOpen}
                aria-expanded={open}
                aria-haspopup="dialog"
                aria-label={actionLabel ?? title}
                whileHover={reduce ? undefined : { scale: 1.1, rotate: 6 }}
                whileTap={reduce ? undefined : { scale: 0.94 }}
                className={`flex cursor-pointer items-center justify-center rounded-full border shadow-sm backdrop-blur-xl transition-colors duration-200 ${
                  isCompact ? "h-8 w-8" : "h-9 w-9 sm:h-10 sm:w-10"
                } border-black/8 bg-white/75 text-neutral-800 hover:bg-white dark:border-white/30 dark:bg-white/25 dark:text-white dark:hover:bg-white/35`}
              >
                <ArrowUpRight
                  className={isCompact ? "h-3.5 w-3.5" : "h-4 w-4"}
                  aria-hidden="true"
                />
              </motion.button>
            </div>
          ) : null}

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
                className={`pointer-events-auto relative z-20 flex h-full w-full flex-col justify-between ${
                  isCompact ? "p-3" : "p-4 sm:p-5"
                }`}
              >
                <div className="max-w-[62%] pt-0.5">
                  <h3
                    className={`line-clamp-2 leading-tight font-bold tracking-tight text-neutral-900 dark:text-white ${
                      isCompact ? "text-[13px]" : "text-[15px] sm:text-[17px]"
                    }`}
                  >
                    {title}
                  </h3>
                  {subtitle ? (
                    <p
                      className={`mt-0.5 line-clamp-2 leading-tight font-medium text-neutral-500 dark:text-neutral-400 ${
                        isCompact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
                      }`}
                    >
                      {subtitle}
                    </p>
                  ) : null}
                </div>

                {description ? (
                  <p
                    className={`line-clamp-3 text-pretty leading-snug text-neutral-600 dark:text-neutral-400 ${
                      isCompact ? "text-[11px]" : "text-[12px] sm:text-[13px]"
                    }`}
                  >
                    {description}
                  </p>
                ) : null}

                <div className="flex items-end justify-between gap-3 pb-0.5">
                  <div className="flex items-baseline gap-1.5">
                    {tagsCount ? (
                      <span
                        className={`leading-none font-black tracking-tight text-neutral-900 dark:text-white ${
                          isCompact ? "text-lg" : "text-xl sm:text-2xl"
                        }`}
                      >
                        {tagsCount}
                      </span>
                    ) : null}
                    {tagsLabel ? (
                      <span
                        className={`font-semibold text-neutral-500 dark:text-neutral-400 ${
                          isCompact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
                        }`}
                      >
                        {tagsLabel}
                      </span>
                    ) : null}
                  </div>

                  {shotsCount ? (
                    <p
                      className={`max-w-[46%] text-right leading-tight font-medium text-neutral-500 dark:text-neutral-400 ${
                        isCompact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
                      }`}
                    >
                      {shotsCount}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blob({
  className,
  animate,
  duration,
}: {
  className: string;
  animate?: { x: number[]; y: number[]; scale: number[] };
  duration: number;
}) {
  return (
    <motion.div
      animate={animate}
      transition={
        animate
          ? { duration, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.4 }
      }
      className={`absolute ${className}`}
    />
  );
}
