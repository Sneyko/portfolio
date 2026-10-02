import { ProjectCard } from "@/components/project-card";
import { tx, type Lang } from "@/lib/i18n";
import { aven, projects } from "@/lib/projects";

export function Projects({ lang }: { lang: Lang }) {
  const items = [aven, ...projects];

  return (
    <section id="projets" className="mb-14 w-full scroll-mt-24">
      <h2 className="section-heading mb-3">{tx(lang, "Projets", "Projects")}</h2>
      <p className="text-sm leading-relaxed text-pretty text-fg-soft">
        {tx(
          lang,
          "Une app iOS, une app macOS, un webdocumentaire, des sites et des outils — réalisés en cours de BUT ou en dehors. Ouvrez une carte pour les détails, les dépôts publics sont sur GitHub.",
          "One iOS app, a macOS app, a web documentary, websites and tools — built during my degree or on my own. Open a card for the details; public repositories are on GitHub.",
        )}
      </p>

      <ul className="mt-5 grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2">
        {items.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} lang={lang} />
          </li>
        ))}
      </ul>
    </section>
  );
}
