import type { ReactNode } from "react";

import {
  BlueprintCover,
  KotlinCover,
  TerminalCover,
  WebCover,
} from "@/components/covers";
import { FeaturedAven } from "@/components/featured-aven";
import { Chips, SectionHeader, TextLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import { tx, type Lang } from "@/lib/i18n";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({
  project,
  lang,
  cover,
  className,
}: {
  project: Project;
  lang: Lang;
  cover: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-divider-light bg-white transition-colors duration-300 hover:border-slate-300 dark:border-divider-dark dark:bg-slate-900 dark:hover:border-slate-600",
        className,
      )}
    >
      <div className="border-b border-divider-light p-3 md:p-4 dark:border-divider-dark">
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.012] motion-reduce:transition-none">
          {cover}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[17px] font-bold tracking-tight text-slate-700 md:text-[18px] dark:text-slate-200">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-[11.5px] text-slate-400">
            {project.year}
          </span>
        </div>
        <p className="mt-1 font-mono text-[11px] text-slate-400">
          {project.category[lang]}
        </p>
        <p className="mt-3.5 text-[14px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
          {project.summary[lang]}
        </p>
        {project.role ? (
          <p className="mt-2.5 font-mono text-[11px] text-slate-400">
            {project.role[lang]}
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-6">
          <Chips items={project.tech} />
          <div className="flex items-center gap-4">
            {project.links?.github ? (
              <TextLink href={project.links.github}>GitHub</TextLink>
            ) : null}
            {project.links?.live ? (
              <TextLink href={project.links.live}>
                {tx(lang, "Voir le site", "Visit site")}
              </TextLink>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection({ lang }: { lang: Lang }) {
  const bySlug = (slug: string): Project => {
    const project = projects.find((item) => item.slug === slug);
    if (!project) throw new Error(`Unknown project: ${slug}`);
    return project;
  };

  return (
    <section id="projets" className="mb-12 lg:mb-24">
      <div className="content-wrapper">
      <SectionHeader
        title={tx(lang, "Projets", "Projects")}
        aside={tx(lang, "9 projets — 2025 · 2026", "9 projects — 2025 · 2026")}
      />
      <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
        {tx(
          lang,
          "Une app iOS, un webdocumentaire, des sites et des outils — réalisés en cours de BUT ou en dehors. Les dépôts publics sont sur GitHub.",
          "One iOS app, a web documentary, websites and tools — built during my degree or on my own. Public repositories are on GitHub.",
        )}
      </p>

      <FeaturedAven lang={lang} />

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <ProjectCard
          className="md:col-span-2"
          project={bySlug("signal-perdu")}
          lang={lang}
          cover={
            <WebCover
              url="signal-perdu.vercel.app"
              src="/shots/web/signal-perdu.png"
              alt={tx(
                lang,
                "Page d'accueil du webdocumentaire Signal perdu",
                "Signal perdu web documentary home page",
              )}
              aspect="aspect-[16/9] md:aspect-[21/9]"
            />
          }
        />

        <ProjectCard
          project={bySlug("village-numerique-resistant")}
          lang={lang}
          cover={
            <WebCover
              url="goatesque.me"
              src="/shots/web/village.png"
              alt={tx(
                lang,
                "Page d'accueil du Village Numérique Résistant",
                "Village Numérique Résistant home page",
              )}
            />
          }
        />

        <ProjectCard
          project={bySlug("concours-webdocumentaires")}
          lang={lang}
          cover={
            <WebCover
              url="concours-webdocumentaires"
              src="/shots/web/concours.png"
              alt={tx(
                lang,
                "Landing page du concours de webdocumentaires",
                "Web-documentary competition landing page",
              )}
            />
          }
        />

        <ProjectCard
          project={bySlug("congres-sif-2026")}
          lang={lang}
          cover={
            <WebCover
              url="congres-sif-2026"
              src="/shots/web/sif.png"
              alt={tx(
                lang,
                "Page d'accueil du congrès SIF 2026",
                "SIF 2026 congress home page",
              )}
            />
          }
        />

        <ProjectCard
          project={bySlug("site-but-informatique")}
          lang={lang}
          cover={
            <WebCover
              url="site-but-informatique"
              src="/shots/web/but.png"
              alt={tx(
                lang,
                "Page d'accueil du site du BUT Informatique",
                "BUT Informatique website home page",
              )}
            />
          }
        />

        <ProjectCard
          className="md:col-span-2"
          project={bySlug("fromagerie")}
          lang={lang}
          cover={<BlueprintCover className="min-h-[240px] md:min-h-[260px]" />}
        />

        <ProjectCard
          project={bySlug("analyse-trames-gps")}
          lang={lang}
          cover={<TerminalCover />}
        />

        <ProjectCard
          project={bySlug("analyse-de-textes")}
          lang={lang}
          cover={<KotlinCover />}
        />
      </div>
      </div>
    </section>
  );
}
