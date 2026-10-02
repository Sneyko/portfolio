"use client";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/cn";

export function ThemeToggle({
  className,
  label = "Toggle theme",
}: {
  className?: string;
  label?: string;
}) {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const freeze = document.createElement("style");
    freeze.append("*{-webkit-transition:none!important;transition:none!important}");
    document.head.append(freeze);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    void window.getComputedStyle(root).opacity;
    freeze.remove();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex items-center justify-center rounded-sm border border-border p-1.5 text-muted",
        "transition-colors duration-200 hover:border-muted-soft hover:text-fg",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className,
      )}
      aria-label={label}
    >
      <Sun size={14} strokeWidth={1.5} className="hidden dark:block" aria-hidden="true" />
      <Moon size={14} strokeWidth={1.5} className="dark:hidden" aria-hidden="true" />
    </button>
  );
}
