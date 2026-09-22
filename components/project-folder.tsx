"use client";

import { useId, useRef, useState, type TransitionEvent } from "react";
import { X } from "lucide-react";

import {
  BlueprintCover,
  FreeScreenCover,
  KotlinCover,
  TerminalCover,
  WebCover,
} from "@/components/covers";
import FolderTabCard from "@/components/rewamp/FolderTabCard";
import { Chips, TextLink } from "@/components/ui";
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

export function ProjectFolder({ project, lang }: { project: Project; lang: Lang }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const isAven = project.slug === "aven";
  const body = isAven ? aven.description[lang] : project.summary[lang];

  function openFolder() {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    delete dialog.dataset.closing;
    dialog.showModal();
    dialog.focus();
    setOpen(true);
  }

  function closeFolder() {
    const dialog = dialogRef.current;
    if (!dialog?.open || dialog.dataset.closing === "true") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      dialog.close();
      return;
    }
    dialog.dataset.closing = "true";
    const timeout = window.setTimeout(() => dialog.close(), 180);
    const finish = (event: TransitionEvent) => {
      if (event.target !== dialog || event.propertyName !== "opacity") return;
      window.clearTimeout(timeout);
      dialog.removeEventListener("transitionend", finish);
      dialog.close();
    };
    dialog.addEventListener("transitionend", finish);
  }

  return (
    <>
      <FolderTabCard
        title={project.title}
        subtitle={project.category[lang]}
        description={project.summary[lang]}
        tagsCount={project.year}
        shotsCount={project.tech.slice(0, 2).join(" · ")}
        onOpen={openFolder}
        open={open}
        actionLabel={tx(lang, `Ouvrir ${project.title}`, `Open ${project.title}`)}
      />

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        tabIndex={-1}
        className="folder-dialog"
        onClose={() => setOpen(false)}
        onCancel={(event) => {
          event.preventDefault();
          closeFolder();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeFolder();
        }}
      >
        <div className="flex max-h-[inherit] flex-col">
          <div className="relative h-28 shrink-0 bg-[radial-gradient(circle_at_28%_18%,#ffd0d0,#e07070_36%,#860707_74%)] dark:bg-[radial-gradient(circle_at_28%_18%,#c44848,#860707_40%,#2a0202_78%)]">
            <button
              type="button"
              onClick={closeFolder}
              aria-label={tx(lang, "Fermer", "Close")}
              className="absolute top-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/75 text-neutral-800 shadow-sm backdrop-blur-xl hover:bg-white dark:border-white/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id={titleId} className="text-[26px] font-black tracking-tight text-slate-800 dark:text-slate-100">
                {project.title}
              </h2>
              <p className="font-mono text-[12px] text-slate-400">{project.year}</p>
            </div>
            <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">
              {project.category[lang]}
            </p>

            <div className="mt-5">{renderPreview(project.slug, lang)}</div>

            <p className="mt-5 max-w-[68ch] text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-300">
              {body}
            </p>

            {isAven ? (
              <ul className="mt-4 max-w-[68ch] space-y-2">
                {aven.features.map((feature) => (
                  <li
                    key={feature.fr}
                    className="flex gap-3 text-[14px] leading-relaxed text-pretty text-slate-600 dark:text-slate-300"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent-600" aria-hidden="true" />
                    {feature[lang]}
                  </li>
                ))}
              </ul>
            ) : null}

            {project.role ? (
              <p className="mt-3 font-mono text-[12px] text-slate-400">{project.role[lang]}</p>
            ) : null}

            <Chips items={project.tech} className="mt-5" />

            {project.links?.live || project.links?.github ? (
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                {project.links.live ? (
                  <TextLink href={project.links.live}>
                    {tx(lang, "Voir le site", "Visit site")}
                  </TextLink>
                ) : null}
                {project.links.github ? (
                  <TextLink href={project.links.github}>GitHub</TextLink>
                ) : null}
              </div>
            ) : (
              <p className="mt-6 font-mono text-[12px] text-slate-400">
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

function renderPreview(slug: string, lang: Lang) {
  if (slug === "aven") {
    return (
      <div
        tabIndex={0}
        aria-label={tx(lang, "Écrans d'Aven", "Aven screens")}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1 [scrollbar-width:thin] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
      >
        {avenScreens.map((screen) => (
          <img
            key={screen.src}
            src={screen.src}
            alt={lang === "fr" ? screen.fr : screen.en}
            width={473}
            height={1024}
            className="h-72 w-auto shrink-0 snap-start rounded-xl sm:h-80"
          />
        ))}
      </div>
    );
  }

  const web = webShots[slug];
  if (web) {
    return (
      <WebCover
        url={web.url}
        src={web.src}
        alt={lang === "fr" ? web.fr : web.en}
      />
    );
  }

  if (slug === "free-screen") return <FreeScreenCover lang={lang} />;
  if (slug === "fromagerie") return <BlueprintCover />;
  if (slug === "analyse-trames-gps") return <TerminalCover />;
  if (slug === "analyse-de-textes") return <KotlinCover />;
  return null;
}
