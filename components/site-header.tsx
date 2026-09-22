"use client";

import Link from "next/link";

import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { useOnScroll } from "@/hooks/use-on-scroll";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function SiteHeader({ lang }: { lang: Lang }) {
  const scrolled = useOnScroll(0);
  const home = lang === "fr" ? "/" : "/en";

  const nav = [
    { href: "#projets", label: tx(lang, "Projets", "Projects") },
    { href: "#a-propos", label: tx(lang, "À propos", "About") },
    { href: "#competences", label: tx(lang, "Compétences", "Skills") },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[1000]">
      <div
        className={
          scrolled
            ? "fixed inset-x-0 top-0 h-16 border-b border-divider-light bg-white/70 backdrop-blur dark:border-divider-dark dark:bg-slate-900/80"
            : "fixed inset-x-0 top-0 h-16"
        }
      />
      <div className={scrolled ? "h-2 -mt-2" : "h-2"} />
      <div className="content-wrapper-max">
        <div className="relative z-50 flex h-16 items-center justify-between px-2 text-sm md:px-4">
          <nav className="flex md:gap-2">
            <Link
              href={home}
              aria-label="Home"
              className="flex h-9 items-center gap-2 rounded-xl px-2"
            >
              <Logo active />
            </Link>
            <ul className="flex items-center md:gap-1">
              {nav.map((item, index) => (
                <li
                  key={item.href}
                  className={index > 0 && index < 3 ? "hidden md:block" : undefined}
                >
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center">
            <li className="hidden sm:block">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition-colors duration-150 hover:bg-slate-300/50 dark:text-slate-200 dark:hover:bg-slate-800/50"
              >
                <GithubIcon size={18} />
              </a>
            </li>
            <li className="hidden sm:block">
              <div className="mx-2 h-3 w-px bg-slate-200 dark:bg-slate-700" />
            </li>
            <li>
              <div className="flex h-9 items-center gap-1 rounded-xl px-1.5 font-mono text-[12px] font-semibold">
                {lang === "fr" ? (
                  <>
                    <span aria-current="true" className="px-1 text-slate-900 dark:text-slate-100">
                      FR
                    </span>
                    <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                      /
                    </span>
                    <Link
                      href="/en"
                      className="px-1 text-slate-400 transition-colors duration-150 hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      EN
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/"
                      className="px-1 text-slate-400 transition-colors duration-150 hover:text-slate-700 dark:hover:text-slate-200"
                    >
                      FR
                    </Link>
                    <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">
                      /
                    </span>
                    <span aria-current="true" className="px-1 text-slate-900 dark:text-slate-100">
                      EN
                    </span>
                  </>
                )}
              </div>
            </li>
            <li className="mr-2">
              <ThemeToggle
                label={tx(lang, "Changer de thème", "Toggle theme")}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
