import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function SectionTitle({
  as: Heading = "h2",
  caption,
  title,
  description,
  className,
}: {
  as?: "h2" | "h3";
  caption: string;
  title: string;
  description: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("content-wrapper", className)}>
      <p className="mb-2 block text-base font-black text-accent-600 lg:mb-4 dark:text-accent-400">
        {caption}
      </p>
      <Heading className="mb-4 text-3xl font-black text-balance text-slate-700 lg:text-4xl dark:text-slate-200">
        {title}
      </Heading>
      <p className="max-w-lg text-pretty text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export function SectionContent({ children }: { children: ReactNode }) {
  return (
    <div className="background-grid mt-8">
      <div className="content-wrapper py-10 lg:py-16">{children}</div>
    </div>
  );
}
