import { Mail } from "lucide-react";

import { GithubIcon } from "@/components/github-icon";
import { ButtonLink } from "@/components/ui";
import { tx, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function ContactFooter({ lang }: { lang: Lang }) {
  return (
    <footer id="contact" className="mt-24 border-t border-line md:mt-32">
      <div className="mx-auto w-full max-w-[1100px] px-5 py-16 md:px-8 md:py-20">
        <h2 className="max-w-[24ch] text-[26px] font-medium tracking-[-0.02em] text-balance md:text-[32px]">
          {tx(
            lang,
            "Un stage à pourvoir, un projet, une question ?",
            "An internship opening, a project, a question?",
          )}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink/65">
          {tx(
            lang,
            "Le plus simple est de m'écrire directement — je réponds vite.",
            "The simplest way is to write me directly — I answer quickly.",
          )}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink href={`mailto:${site.email}`}>
            <Mail size={16} strokeWidth={1.8} aria-hidden="true" />
            {site.email}
          </ButtonLink>
          <ButtonLink href={site.github} variant="ghost">
            <GithubIcon size={16} />
            GitHub
          </ButtonLink>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11.5px] text-ink/45 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Tom Testu —{" "}
            {tx(
              lang,
              "conçu et développé avec Next.js et Tailwind CSS",
              "designed and built with Next.js and Tailwind CSS",
            )}
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
