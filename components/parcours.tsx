import { GraduationCap, Rocket } from "lucide-react";
import type { ReactNode } from "react";

import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
  href?: string;
  image?: string;
  icon?: ReactNode;
};

function Thumb({ item, size = "md" }: { item: TimelineItem; size?: "md" | "lg" }) {
  const box =
    size === "lg"
      ? "size-12 md:size-14"
      : "size-12";

  const inner = (
    <span
      className={`relative block ${box} shrink-0 overflow-hidden rounded-md border border-border bg-[color-mix(in_srgb,var(--fg)_6%,transparent)]`}
    >
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center text-muted">
          {item.icon}
        </span>
      )}
    </span>
  );

  if (!item.href) return inner;

  const external = /^https?:/.test(item.href);
  return (
    <a
      href={item.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${item.title} — ${item.description}`}
      className="hover-thumb inline-flex rounded-md ring-[3px] ring-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {inner}
    </a>
  );
}

function Copy({ item, center }: { item: TimelineItem; center?: boolean }) {
  return (
    <div className={`event-copy min-w-0 ${center ? "flex flex-col items-center text-center" : ""}`}>
      <p className="event-copy-title">{item.title}</p>
      <p className="event-copy-desc mt-1.5 text-pretty">{item.description}</p>
    </div>
  );
}

export function Parcours({ lang }: { lang: Lang }) {
  const items: TimelineItem[] = [
    {
      date: tx(lang, "2022 – 2025", "2022 – 2025"),
      title: tx(lang, "Baccalauréat général", "French Baccalaureate"),
      description: tx(
        lang,
        "Spécialités Maths & NSI, option Maths expertes — Lycée Blaise Pascal, Châteauroux.",
        "Maths & Computer Science majors, advanced-maths option — Lycée Blaise Pascal, Châteauroux.",
      ),
      icon: <GraduationCap className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
    },
    {
      date: "2025",
      title: tx(lang, "Nuit de l'Info", "Nuit de l'Info"),
      description: tx(
        lang,
        "Village Numérique Résistant, imaginé et livré en une nuit.",
        "Village Numérique Résistant, imagined and shipped in one night.",
      ),
      image: "/shots/web/village.png",
      href: "https://github.com/Sneyko/village-numerique-resistant",
    },
    {
      date: tx(lang, "2025 – aujourd'hui", "2025 – now"),
      title: "BUT Informatique",
      description: tx(
        lang,
        "IUT de Toulouse, parcours AGED — administration et exploitation des données.",
        "IUT Toulouse, AGED track — data administration and processing.",
      ),
      image: "/shots/web/but.png",
      href: "https://www.iut-tlse3.fr/",
    },
    {
      date: "2026",
      title: tx(lang, "Projets personnels", "Personal projects"),
      description: tx(
        lang,
        "Aven (iOS) et FreeScreen (macOS), conçus et développés de A à Z.",
        "Aven (iOS) and FreeScreen (macOS), designed and built end to end.",
      ),
      icon: <Rocket className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />,
      href: "#projets",
    },
  ];

  const columns = { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` };
  const lineInset = `${50 / items.length}%`;

  return (
    <section id="parcours" className="mb-14 w-full scroll-mt-24">
      <h2 className="section-heading mb-3">{tx(lang, "Parcours", "Journey")}</h2>

      {/* Desktop — horizontal timeline */}
      <div className="hidden md:block">
        <div className="grid w-full items-end gap-x-5" style={columns}>
          {items.map((item) => (
            <time
              key={`date-${item.title}`}
              className="event-date flex min-h-[2.5rem] w-full items-end justify-center px-1 text-center leading-tight text-balance"
            >
              {item.date}
            </time>
          ))}
        </div>

        <div className="relative my-3.5 flex min-h-[3.25rem] w-full items-center">
          <div
            className="absolute top-1/2 h-px -translate-y-1/2 bg-border"
            style={{ left: lineInset, right: lineInset }}
            aria-hidden="true"
          />
          <div className="relative z-10 grid w-full gap-x-5" style={columns}>
            {items.map((item) => (
              <div key={`thumb-${item.title}`} className="flex justify-center">
                <Thumb item={item} size="lg" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full gap-x-5 gap-y-3" style={columns}>
          {items.map((item) => (
            <div key={`copy-${item.title}`} className="flex w-full min-w-0 flex-col items-center text-center">
              <Copy item={item} center />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <div className="md:hidden">
        <ul className="m-0 flex list-none flex-col p-0">
          {items.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === items.length - 1;
            return (
              <li key={item.title} className="flex gap-4 pb-8 last:pb-1">
                <div className="relative flex w-11 shrink-0 flex-col items-center">
                  <div
                    className={
                      isFirst
                        ? "mb-2 h-2 shrink-0"
                        : "mb-2 min-h-5 w-px shrink-0 bg-border"
                    }
                    aria-hidden="true"
                  />
                  <Thumb item={item} />
                  <div
                    className={
                      isLast
                        ? "mt-2 h-2 shrink-0"
                        : "mt-2 min-h-[2.5rem] w-px flex-1 bg-border"
                    }
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <time className="event-date block leading-none">{item.date}</time>
                  <div className="mt-2">
                    <Copy item={item} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-3 text-sm text-muted">
        {tx(lang, "Retrouvez le détail sur", "More details on")}{" "}
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-accent">
          GitHub
        </a>
        .
      </p>
    </section>
  );
}
