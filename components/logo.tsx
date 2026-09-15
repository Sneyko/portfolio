import { cn } from "@/lib/cn";

export function Logo({
  active = false,
  className,
}: {
  active?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center gap-1.5 font-extrabold leading-none", className)}>
      <span
        className={cn(
          "flex h-8 w-8 items-center justify-center rounded-xl border-2 border-accent-600 sm:h-6 sm:w-6 sm:rounded-lg",
          "dark:border-accent-500",
          active
            ? "bg-accent-600 dark:border-accent-500 dark:bg-accent-500"
            : "bg-transparent",
        )}
      >
        <span
          className={cn(
            "text-[13px] leading-none font-extrabold sm:text-[11px]",
            active ? "text-white" : "text-accent-600 dark:text-accent-400",
          )}
        >
          T
        </span>
      </span>
      <span className="-mt-1 hidden text-xl sm:block">
        <span className="text-slate-900 dark:text-slate-200">tom</span>
        <span className="text-accent-600 dark:text-accent-500">testu</span>
      </span>
    </span>
  );
}
