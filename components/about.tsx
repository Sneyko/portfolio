import { SectionHeader } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";

export function About({ lang }: { lang: Lang }) {
  const skillGroups = [
    {
      label: tx(lang, "Langages", "Languages"),
      items: ["Java", "Kotlin", "C", "SQL", "HTML/CSS", "JavaScript"],
    },
    { label: "iOS", items: ["Swift", "SwiftUI"] },
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
    <section id="a-propos" className="mt-24 md:mt-32">
      <SectionHeader title={tx(lang, "À propos", "About")} />

      <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="max-w-[62ch] text-[15.5px] leading-[1.8] text-ink/75">
            {tx(
              lang,
              "Je suis en deuxième année de BUT Informatique à l'IUT de Toulouse, parcours AGED (Administration, Gestion et Exploitation des Données). J'aime construire des choses complètes — une app iOS en Swift, un site, un outil — en passant par la conception, l'interface et les détails qui rendent un produit agréable à utiliser.",
              "I'm a second-year Computer Science student at IUT Toulouse (BUT Informatique, AGED track — data management). I like building complete things — an iOS app in Swift, a website, a tool — from design to the details that make a product pleasant to use.",
            )}
          </p>
          <p className="mt-4 max-w-[62ch] text-[15.5px] leading-[1.8] text-ink/75">
            {tx(
              lang,
              "En dehors des cours, je développe mes propres applications iOS et j'explore les outils d'IA pour assister le développement : Cursor, Claude Code, MCP, agents. La plupart des projets présentés ici sont nés comme ça.",
              "Outside of class, I build my own iOS apps and explore AI tools for software development: Cursor, Claude Code, MCP, agents. Most of the projects above were born that way.",
            )}
          </p>
        </div>

        <div className="md:col-span-5">
          <h3 className="font-mono text-[12px] text-ink/45">
            {tx(lang, "Formation", "Education")}
          </h3>
          <ul className="mt-4 space-y-5">
            <li className="border-l-2 border-accent/70 pl-4">
              <p className="text-[14px] font-medium">
                BUT Informatique — IUT de Toulouse
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/60">
                {tx(
                  lang,
                  "Parcours AGED (Administration, Gestion et Exploitation des Données)",
                  "AGED track (data management)",
                )}
                <br />
                2025 — {tx(lang, "en cours", "present")}
              </p>
            </li>
            <li className="border-l-2 border-line pl-4">
              <p className="text-[14px] font-medium">
                {tx(lang, "Baccalauréat général", "French Baccalaureate")} —{" "}
                {tx(
                  lang,
                  "Lycée Blaise Pascal, Châteauroux",
                  "Blaise Pascal high school, Châteauroux",
                )}
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-ink/60">
                {tx(
                  lang,
                  "Spécialités Mathématiques et NSI, option Maths expertes",
                  "Maths & Computer Science majors, advanced-maths option",
                )}
                <br />
                2022 — 2025
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-[12px] text-ink/45">
          {tx(lang, "Compétences", "Skills")}
        </h3>
        <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[13px] font-medium text-ink/80">{group.label}</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-2.5 py-[3px] font-mono text-[11px] text-ink/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
