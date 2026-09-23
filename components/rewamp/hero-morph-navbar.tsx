"use client";

import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { LayoutTemplate, Mail, Menu, Sparkles, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { GithubIcon } from "@/components/github-icon";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

const linkClass =
  "text-[13px] font-medium text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white";

export function HeroMorphNavbar({ lang }: { lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [narrow, setNarrow] = useState(false);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  const [dark, setDark] = useState(false);
  const home = lang === "fr" ? "/" : "/en";

  const links = [
    {
      href: "#projets",
      label: tx(lang, "Projets", "Projects"),
      icon: LayoutTemplate,
    },
    { href: "#a-propos", label: tx(lang, "À propos", "About"), icon: User },
    {
      href: "#competences",
      label: tx(lang, "Compétences", "Skills"),
      icon: Sparkles,
    },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    let wasScrolled = false;
    const onScroll = () => {
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled === wasScrolled) return;

      wasScrolled = nextScrolled;
      setScrolled(nextScrolled);
      if (nextScrolled) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      setNarrow(query.matches);
      if (!query.matches) setOpen(false);
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[1000] flex justify-center px-3 pt-3 sm:px-5">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.8 }}
        className={`pointer-events-auto relative flex w-full items-center justify-between ${
          scrolled
            ? dark
              ? "h-12 max-w-[500px] rounded-full border border-white/12 bg-[#181622]/90 px-3 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "h-12 max-w-[500px] rounded-full border border-black/10 bg-white/90 px-3 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            : dark
              ? "h-16 max-w-[1400px] rounded-2xl border border-white/10 bg-[#181622] px-4 shadow-lg sm:px-6"
              : "h-16 max-w-[1400px] rounded-2xl border border-black/10 bg-white px-4 shadow-md sm:px-6"
        }`}
        style={{ borderRadius: scrolled ? 9999 : 20 }}
      >
        <Link href={home} aria-label="Home" className="shrink-0">
          <Logo active compact={scrolled} />
        </Link>

        <div className={scrolled || !narrow ? "flex items-center gap-1 sm:gap-5" : "hidden"}>
          {links.map((link) => {
            const active = hash === link.href;
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                aria-current={active ? "true" : undefined}
                className={`relative flex items-center justify-center ${
                  scrolled
                    ? `h-8 w-8 rounded-full ${
                        active
                          ? "bg-black/10 text-neutral-950 dark:bg-white/20 dark:text-white"
                          : "text-neutral-500 hover:bg-black/5 dark:text-neutral-400 dark:hover:bg-white/10"
                      }`
                    : `${linkClass} px-1 py-1 ${active ? "font-semibold text-neutral-950 dark:text-white" : ""}`
                }`}
              >
                {scrolled ? (
                  <Icon size={16} strokeWidth={active ? 2.4 : 2} aria-hidden="true" />
                ) : (
                  <>
                    <span>{link.label}</span>
                    {active ? (
                      <motion.span
                        layoutId="hero-nav-active"
                        className="absolute right-1 -bottom-1 left-1 h-0.5 rounded-full bg-accent-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </>
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-1">
          {!scrolled && !narrow ? (
            <div className="hidden items-center lg:flex">
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/10"
              >
                <GithubIcon size={18} />
              </a>
              <div className="flex h-9 items-center gap-1 px-1 font-mono text-[12px] font-semibold">
                {lang === "fr" ? (
                  <>
                    <span className="px-1 text-neutral-950 dark:text-white">FR</span>
                    <span className="text-neutral-300 dark:text-neutral-600" aria-hidden="true">
                      /
                    </span>
                    <Link href="/en" className="px-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                      EN
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/" className="px-1 text-neutral-400 hover:text-neutral-800 dark:hover:text-white">
                      FR
                    </Link>
                    <span className="text-neutral-300 dark:text-neutral-600" aria-hidden="true">
                      /
                    </span>
                    <span className="px-1 text-neutral-950 dark:text-white">EN</span>
                  </>
                )}
                </div>
            </div>
          ) : null}

          {!(narrow && !scrolled) ? (
            <ThemeToggle label={tx(lang, "Changer de thème", "Toggle theme")} />
          ) : null}

          {narrow && !scrolled ? (
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-700 hover:bg-black/5 dark:text-neutral-200 dark:hover:bg-white/10"
              aria-expanded={open}
              aria-label={open ? tx(lang, "Fermer le menu", "Close menu") : tx(lang, "Ouvrir le menu", "Open menu")}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          ) : (
            <a
              href="#contact"
              aria-label="Contact"
              className={`flex items-center justify-center bg-accent-600 font-semibold text-white transition-colors hover:bg-accent-700 ${
                scrolled ? "h-8 w-8 rounded-full" : "h-9 rounded-xl px-3.5 text-[13px]"
              }`}
            >
              {scrolled ? <Mail size={16} aria-hidden="true" /> : tx(lang, "Contact", "Contact")}
            </a>
          )}
        </div>

        <AnimatePresence>
          {open && narrow && !scrolled ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className={`absolute inset-x-0 top-[calc(100%+8px)] flex flex-col gap-1 rounded-2xl border p-2 shadow-lg ${
                dark ? "border-white/10 bg-[#181622]" : "border-black/10 bg-white"
              }`}
            >
              {links.map((link) => {
                const Icon = link.icon;
                const active = hash === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${
                      active
                        ? "bg-black/10 text-neutral-950 dark:bg-white/10 dark:text-white"
                        : "text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-accent-600 px-3 py-2 text-center text-sm font-semibold text-white"
              >
                {tx(lang, "Me contacter", "Get in touch")}
              </a>
              <div className="mt-1 flex items-center justify-between px-2 py-1">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-neutral-700 dark:text-neutral-200"
                >
                  <GithubIcon size={18} />
                </a>
                <div className="flex items-center gap-1 font-mono text-[12px] font-semibold">
                  <Link href="/" className={lang === "fr" ? "px-1 text-neutral-950 dark:text-white" : "px-1 text-neutral-400"}>
                    FR
                  </Link>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <Link href="/en" className={lang === "en" ? "px-1 text-neutral-950 dark:text-white" : "px-1 text-neutral-400"}>
                    EN
                  </Link>
                </div>
                <ThemeToggle label={tx(lang, "Changer de thème", "Toggle theme")} />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </header>
    </MotionConfig>
  );
}
