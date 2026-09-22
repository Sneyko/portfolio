import { ProjectFolder } from "@/components/project-folder";
import { SectionHeader } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { aven, projects } from "@/lib/projects";

export function ProjectsSection({ lang }: { lang: Lang }) {
  const items = [aven, ...projects];

  return (
    <section id="projets" className="mb-12 scroll-mt-28 lg:mb-24">
      <div className="content-wrapper">
        <SectionHeader
          title={tx(lang, "Projets", "Projects")}
          aside={tx(lang, "10 projets — 2025 · 2026", "10 projects — 2025 · 2026")}
        />
        <p className="mt-4 max-w-[64ch] text-[15px] leading-relaxed text-pretty text-slate-600 dark:text-slate-400">
          {tx(
            lang,
            "Une app iOS, une app macOS, un webdocumentaire, des sites et des outils — réalisés en cours de BUT ou en dehors. Les dépôts publics sont sur GitHub.",
            "One iOS app, a macOS app, a web documentary, websites and tools — built during my degree or on my own. Public repositories are on GitHub.",
          )}
        </p>

        <ul className="mt-8 grid list-none grid-cols-1 justify-items-center gap-2 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((project) => (
            <li key={project.slug} className="w-full">
              <ProjectFolder project={project} lang={lang} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
