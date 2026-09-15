import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function SectionHeader({
  title,
  aside,
  className,
}: {
  title: string;
  aside?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      <h2 className="text-3xl font-black tracking-tight text-balance text-slate-700 lg:text-4xl dark:text-slate-200">
        {title}
      </h2>
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" aria-hidden="true" />
      {aside ? (
        <p className="hidden shrink-0 font-mono text-[12px] text-slate-400 md:block">
          {aside}
        </p>
      ) : null}
    </div>
  );
}

export function Chips({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-slate-200 px-2.5 py-[3px] font-mono text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const isExternal = /^https?:/.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "button button--big",
        variant === "primary" ? "button--solid" : "button--ghost px-2",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const isExternal = /^https?:/.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "group/link inline-flex items-center gap-1 text-[13px] font-bold text-accent-600 transition-colors duration-150 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        size={14}
        strokeWidth={2}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/link:-translate-y-px group-hover/link:translate-x-px"
      />
    </a>
  );
}
