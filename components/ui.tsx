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
      <h2 className="text-[24px] font-medium tracking-[-0.02em] md:text-[28px]">
        {title}
      </h2>
      <div className="h-px flex-1 bg-line" aria-hidden="true" />
      {aside ? (
        <p className="hidden shrink-0 font-mono text-[12px] text-ink/45 md:block">
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
          className="rounded-full border border-line px-2.5 py-[3px] font-mono text-[11px] text-ink/60"
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
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-[#2c2a26]"
      : "border border-line text-ink hover:border-ink/35 hover:bg-ink/[0.035]";
  const isExternal = /^https?:/.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-full px-[18px] text-[13.5px] font-medium transition-all duration-200 active:scale-[0.97] md:h-10",
        styles,
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
        "group/link inline-flex items-center gap-1 text-[13px] font-medium text-ink/65 transition-colors hover:text-ink",
        className,
      )}
    >
      {children}
      <ArrowUpRight
        size={14}
        strokeWidth={1.8}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/link:-translate-y-[1px] group-hover/link:translate-x-[1px]"
      />
    </a>
  );
}
