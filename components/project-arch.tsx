import ArchCardCarousel from "@/components/rewamp/ArchCardCarousel";
import { tx, type Lang } from "@/lib/i18n";

const shots = [
  {
    src: "/shots/aven/routines.png",
    fr: "Aven — routines d'entraînement",
    en: "Aven — workout routines",
  },
  {
    src: "/shots/aven/session.png",
    fr: "Aven — séance guidée en cours",
    en: "Aven — guided workout in progress",
  },
  {
    src: "/shots/aven/exercise.png",
    fr: "Aven — fiche d'un exercice",
    en: "Aven — exercise detail",
  },
  {
    src: "/shots/aven/progression.png",
    fr: "Aven — progression et rangs musculaires",
    en: "Aven — progress and muscle ranks",
  },
  {
    src: "/shots/aven/stats.png",
    fr: "Aven — statistiques d'entraînement",
    en: "Aven — training statistics",
  },
  {
    src: "/shots/aven/stats-week.png",
    fr: "Aven — séances et volume de la semaine",
    en: "Aven — weekly sessions and volume",
  },
  {
    src: "/shots/aven/calendar.png",
    fr: "Aven — calendrier de régularité",
    en: "Aven — consistency calendar",
  },
  {
    src: "/shots/aven/ranks.png",
    fr: "Aven — classements",
    en: "Aven — leaderboards",
  },
  {
    src: "/shots/aven/achievements.png",
    fr: "Aven — succès débloqués",
    en: "Aven — unlocked achievements",
  },
  {
    src: "/shots/web/signal-perdu.png",
    fr: "Signal perdu — webdocumentaire",
    en: "Signal perdu — web documentary",
  },
  {
    src: "/shots/web/village.png",
    fr: "Village Numérique Résistant",
    en: "Village Numérique Résistant",
  },
  {
    src: "/shots/web/concours.png",
    fr: "Concours de webdocumentaires",
    en: "Web documentary competition",
  },
  {
    src: "/shots/web/sif.png",
    fr: "Congrès SIF 2026",
    en: "SIF 2026 congress",
  },
  {
    src: "/shots/web/but.png",
    fr: "Site du BUT Informatique",
    en: "Computer Science degree website",
  },
] as const;

export function ProjectArch({ lang }: { lang: Lang }) {
  return (
    <section className="bg-paper pt-4 pb-16">
      <ArchCardCarousel
        images={shots.map((shot) => shot.src)}
        alts={shots.map((shot) => tx(lang, shot.fr, shot.en))}
        ariaLabel={tx(lang, "Images des projets", "Project images")}
        cardWidth={176}
        cardHeight={248}
        radius={860}
      />
    </section>
  );
}
