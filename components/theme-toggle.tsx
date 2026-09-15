"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

export function ThemeToggle({
  className,
  label = "Toggle theme",
}: {
  className?: string;
  label?: string;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    const freeze = document.createElement("style");
    freeze.append("*{-webkit-transition:none!important;transition:none!important}");
    document.head.append(freeze);
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.getComputedStyle(root).opacity;
    freeze.remove();
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition-colors duration-150 hover:bg-slate-300/50",
        "dark:text-slate-200 dark:hover:bg-slate-800/50",
        className,
      )}
      aria-label={label}
    >
      {dark ? (
        <Sun size={18} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
