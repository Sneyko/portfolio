"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import {
  BlueprintCover,
  FreeScreenCover,
  KotlinCover,
  TerminalCover,
  WebCover,
} from "@/components/covers";
import { ProjectCardPreview } from "@/components/project-card-preview";
import { tx, type Lang } from "@/lib/i18n";
import { aven, type Project } from "@/lib/projects";

const avenScreens = [
  { src: "/shots/aven/routines.png", fr: "Aven — routines d'entraînement", en: "Aven — workout routines" },
  { src: "/shots/aven/session.png", fr: "Aven — séance guidée en cours", en: "Aven — guided workout in progress" },
  { src: "/shots/aven/exercise.png", fr: "Aven — fiche d'un exercice", en: "Aven — exercise detail" },
  { src: "/shots/aven/progression.png", fr: "Aven — progression et rangs musculaires", en: "Aven — progress and muscle ranks" },
  { src: "/shots/aven/stats.png", fr: "Aven — statistiques d'entraînement", en: "Aven — training statistics" },
  { src: "/shots/aven/stats-week.png", fr: "Aven — séances et volume de la semaine", en: "Aven — weekly sessions and volume" },
  { src: "/shots/aven/calendar.png", fr: "Aven — calendrier de régularité", en: "Aven — consistency calendar" },
  { src: "/shots/aven/ranks.png", fr: "Aven — classements", en: "Aven — leaderboards" },
  { src: "/shots/aven/achievements.png", fr: "Aven — succès débloqués", en: "Aven — unlocked achievements" },
] as const;

const webShots: Record<string, { url: string; src: string; fr: string; en: string }> = {
  "signal-perdu": {
    url: "signal-perdu.vercel.app",
    src: "/shots/web/signal-perdu.png",
    fr: "Page d'accueil du webdocumentaire Signal perdu",
    en: "Signal perdu web documentary home page",
  },
  "village-numerique-resistant": {
    url: "goatesque.me",
    src: "/shots/web/village.png",
    fr: "Page d'accueil du Village Numérique Résistant",
    en: "Village Numérique Résistant home page",
  },
  "concours-webdocumentaires": {
    url: "concours-webdocumentaires",
    src: "/shots/web/concours.png",
    fr: "Landing page du concours de webdocumentaires",
    en: "Web-documentary competition landing page",
  },
  "congres-sif-2026": {
    url: "congres-sif-2026",
    src: "/shots/web/sif.png",
    fr: "Page d'accueil du congrès SIF 2026",
    en: "SIF 2026 congress home page",
  },
  "site-but-informatique": {
    url: "site-but-informatique",
    src: "/shots/web/but.png",
    fr: "Page d'accueil du site du BUT Informatique",
    en: "BUT Informatique website home page",
  },
};

function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectPreview({ slug, lang }: { slug: string; lang: Lang }) {
  if (slug === "aven") {
    return (
      <div
        tabIndex={0}
        aria-label={tx(lang, "Écrans d'Aven", "Aven screens")}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin]"
      >
        {avenScreens.map((screen) => (
          <Image
            key={screen.src}
            src={screen.src}
            alt={lang === "fr" ? screen.fr : screen.en}
            width={473}
            height={1024}
            loading="lazy"
            className="h-72 w-auto shrink-0 snap-start rounded-md border border-border sm:h-80"
          />
        ))}
      </div>
    );
  }

  const web = webShots[slug];
  if (web) {
    return <WebCover url={web.url} src={web.src} alt={lang === "fr" ? web.fr : web.en} />;
  }

  if (slug === "free-screen") return <FreeScreenCover lang={lang} />;
  if (slug === "fromagerie") return <BlueprintCover />;
  if (slug === "analyse-trames-gps") return <TerminalCover />;
  if (slug === "analyse-de-textes") return <KotlinCover />;
  return null;
}

export function ProjectCard({ project, lang }: { project: Project; lang: Lang }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const isAven = project.slug === "aven";
  const description = isAven ? aven.description[lang] : project.summary[lang];

  useEffect(
    () => () => {
      if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  function finishClose() {
    if (closeTimerRef.current !== null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    dialogRef.current?.close();
  }

  function openDialog() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    delete dialog.dataset.closing;
    dialog.showModal();
    dialog.focus();
    setHasOpened(true);
    setOpen(true);
  }

  function closeDialog() {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.dataset.closing === "true") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }
    dialog.dataset.closing = "true";
    closeTimerRef.current = setTimeout(finishClose, 200);
  }

  const label = tx(lang, `Voir ${project.title}`, `View ${project.title}`);

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={label}
        className="project-card group/card"
      >
        <span className="project-card__preview block aspect-[16/10]">
          <ProjectCardPreview slug={project.slug} lang={lang} />
        </span>
        <span className="pointer-events-none absolute top-3 right-3 z-10 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-border bg-bg/90 text-fg opacity-0 backdrop-blur-sm transition duration-200 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>

        <span className="flex flex-1 flex-col p-3.5">
          <span className="flex items-baseline justify-between gap-3">
            <span className="font-display text-[15px] font-semibold tracking-tight text-fg">
              {project.title}
            </span>
            <span className="shrink-0 font-mono text-[11px] text-muted-soft">
              {project.year}
            </span>
          </span>
          <span className="mt-1 line-clamp-2 text-[13px] leading-snug text-pretty text-fg-soft">
            {project.summary[lang]}
          </span>
          <span className="mt-3 block truncate font-mono text-[11px] text-muted">
            {project.tech.slice(0, 3).join(" · ")}
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        tabIndex={-1}
        className="project-dialog"
        onClose={(event) => setOpen(event.currentTarget.open)}
        onTransitionEnd={(event) => {
          if (
            event.target === event.currentTarget &&
            event.propertyName === "opacity" &&
            event.currentTarget.dataset.closing === "true"
          ) {
            finishClose();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          closeDialog();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        <div className="flex max-h-[inherit] flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
            <div className="min-w-0">
              <h2
                id={titleId}
                className="font-display text-base font-semibold tracking-tight text-fg"
              >
                {project.title}
              </h2>
              <p className="mt-0.5 font-mono text-[11px] text-muted">
                {project.category[lang]} · {project.year}
              </p>
            </div>
            <button
              type="button"
              onClick={closeDialog}
              aria-label={tx(lang, "Fermer", "Close")}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border text-muted transition-colors hover:border-muted-soft hover:text-fg"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="min-h-0 overflow-y-auto overscroll-y-contain px-5 py-5">
            {hasOpened ? <ProjectPreview slug={project.slug} lang={lang} /> : null}

            <p className="mt-5 text-sm leading-relaxed text-pretty text-fg-soft">
              {description}
            </p>

            {isAven ? (
              <ul className="mt-4 space-y-2">
                {aven.features.map((feature) => (
                  <li
                    key={feature.fr}
                    className="flex gap-3 text-sm leading-relaxed text-pretty text-fg-soft"
                  >
                    <span
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {feature[lang]}
                  </li>
                ))}
              </ul>
            ) : null}

            {project.role ? (
              <p className="mt-3 font-mono text-[11px] text-muted">{project.role[lang]}</p>
            ) : null}

            <div className="mt-5">
              <TechChips items={project.tech} />
            </div>

            {project.links?.live || project.links?.github ? (
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1 text-[13px]"
                  >
                    {tx(lang, "Voir le site", "Visit site")}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-accent inline-flex items-center gap-1 text-[13px]"
                  >
                    GitHub
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            ) : (
              <p className="mt-6 font-mono text-[11px] text-muted">
                {tx(
                  lang,
                  "Projet personnel — pas encore publié.",
                  "Personal project — not released yet.",
                )}
              </p>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
