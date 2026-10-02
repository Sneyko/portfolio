import { ProjectCard } from "@/components/project-card";
import { tx, type Lang } from "@/lib/i18n";
import { aven, projects } from "@/lib/projects";
import type { Variant } from "@/lib/brand";

export function Projects({
  lang,
  variant = "tom",
}: {
  lang: Lang;
  variant?: Variant;
}) {
  const items = [aven, ...projects];

  const title =
    variant === "evro"
      ? tx(lang, "Ce que je construis", "What I build")
      : tx(lang, "Projets", "Projects");

  const description =
    variant === "evro"
      ? tx(
          lang,
          "Une sélection de ce sur quoi je travaille : apps iOS et macOS, web, et quelques projets d'école. Ouvrez une carte pour les détails.",
          "A selection of what I'm working on: iOS and macOS apps, web, and a few school projects. Open a card for the details.",
        )
      : tx(
          lang,
          "Une app iOS, une app macOS, un webdocumentaire, des sites et des outils — réalisés en cours de BUT ou en dehors. Ouvrez une carte pour les détails, les dépôts publics sont sur GitHub.",
          "One iOS app, a macOS app, a web documentary, websites and tools — built during my degree or on my own. Open a card for the details; public repositories are on GitHub.",
        );

  return (
    <section id="projets" className="mb-14 w-full scroll-mt-24">
      <h2 className="section-heading mb-3">{title}</h2>
      <p className="text-sm leading-relaxed text-pretty text-fg-soft">{description}</p>

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
