import { Contact } from "@/components/contact";
import { Intro } from "@/components/intro";
import { PageShell } from "@/components/page-shell";
import { Parcours } from "@/components/parcours";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import type { Lang } from "@/lib/i18n";

export function TomPage({ lang }: { lang: Lang }) {
  return (
    <PageShell lang={lang}>
      <SiteHeader lang={lang} />
      <Intro lang={lang} />
      <Projects lang={lang} variant="tom" />
      <Parcours lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
    </PageShell>
  );
}
