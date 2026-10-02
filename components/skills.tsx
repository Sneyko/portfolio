import { tx, type Lang } from "@/lib/i18n";

export function Skills({ lang }: { lang: Lang }) {
  const groups = [
    {
      label: tx(lang, "Langages", "Languages"),
      items: ["Java", "Kotlin", "C", "SQL", "HTML/CSS", "JavaScript"],
    },
    { label: "iOS · macOS", items: ["Swift", "SwiftUI", "AppKit"] },
    {
      label: tx(lang, "Outils", "Tools"),
      items: ["Git", "GitHub", "Linux", "UML", "Maven", "Gradle"],
    },
    {
      label: tx(lang, "IA & développement", "AI & development"),
      items: ["Cursor", "Claude Code", "MCP", "Agents"],
    },
  ];

  return (
    <section id="competences" className="mb-14 w-full scroll-mt-24">
      <h2 className="section-heading mb-3">{tx(lang, "Compétences", "Skills")}</h2>
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label}>
            <dt className="work-headline text-[15px]">{group.label}</dt>
            <dd className="event-copy-desc mt-1">{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
