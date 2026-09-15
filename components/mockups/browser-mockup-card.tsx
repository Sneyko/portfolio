/**
 * Browser window frame — adapted from Opensource UI (MIT license).
 * https://opensourceui.in/components/browser
 */
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type BrowserMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    url?: string;
    contentClassName?: string;
    children: ReactNode;
  }
>;

export function BrowserMockupCard({
  className,
  contentClassName,
  url = "tomtestu.me",
  children,
  ...props
}: BrowserMockupCardProps) {
  return (
    <div
      data-slot="browser-mockup-card"
      className={cn(
        "w-full overflow-hidden rounded-[10px] border border-slate-200 bg-white dark:border-slate-700",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#e0857a]" />
          <span className="h-2 w-2 rounded-full bg-[#e6c07a]" />
          <span className="h-2 w-2 rounded-full bg-[#8fbf94]" />
        </div>
        <div className="flex h-5 min-w-0 flex-1 items-center rounded-md border border-slate-200 bg-white px-2 dark:border-slate-600 dark:bg-slate-900">
          <span className="truncate font-mono text-[10px] text-slate-400">{url}</span>
        </div>
      </div>

      <div className={cn("relative w-full overflow-hidden", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
