import { SectionTitle } from "@/components/section-title";
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
    <>
      <section id="a-propos" className="mb-12 lg:mb-24">
        <SectionTitle
          caption={tx(lang, "À propos", "About")}
          title={tx(
            lang,
            "Étudiant en BUT Informatique à Toulouse.",
            "Computer Science student in Toulouse.",
          )}
          description={tx(
            lang,
            "Deuxième année à l'IUT de Toulouse, parcours AGED. J'aime construire des choses complètes — une app iOS, un site, un outil — de la conception jusqu'aux détails d'usage.",
            "Second year at IUT Toulouse (AGED track). I like building complete things — an iOS app, a website, a tool — from design to the details that make it pleasant to use.",
          )}
        />
        <div className="content-wrapper mt-10">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400">
            {tx(lang, "Formation", "Education")}
          </h3>
          <ul className="mt-4 max-w-xl space-y-5">
            <li className="border-l-2 border-accent-600 pl-4">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                BUT Informatique — IUT de Toulouse
              </p>
              <p className="mt-1 text-sm text-pretty text-slate-600 dark:text-slate-400">
                {tx(
                  lang,
                  "Parcours AGED (Administration, Gestion et Exploitation des Données)",
                  "AGED track (data management)",
                )}
                <br />
                2025 — {tx(lang, "en cours", "present")}
              </p>
            </li>
            <li className="border-l-2 border-slate-200 pl-4 dark:border-slate-700">
              <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                {tx(lang, "Baccalauréat général", "French Baccalaureate")} —{" "}
                {tx(
                  lang,
                  "Lycée Blaise Pascal, Châteauroux",
                  "Blaise Pascal high school, Châteauroux",
                )}
              </p>
              <p className="mt-1 text-sm text-pretty text-slate-600 dark:text-slate-400">
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
      </section>

      <section id="competences" className="mb-12 lg:mb-24">
        <SectionTitle
          caption={tx(lang, "Compétences", "Skills")}
          title={tx(
            lang,
            "Un socle solide, élargi par la pratique.",
            "A solid core, expanded by building.",
          )}
          description={tx(
            lang,
            "Cours, projets universitaires et apps perso — surtout iOS, le web, et les outils d'IA pour le développement.",
            "Coursework, university projects and personal apps — mostly iOS, the web, and AI tools for software development.",
          )}
        />
        <div className="content-wrapper mt-10">
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  {group.label}
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 px-2.5 py-[3px] font-mono text-[11px] text-slate-500 dark:border-slate-700 dark:text-slate-400"
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
    </>
  );
}
