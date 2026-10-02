import { EvroIntro } from "@/components/evro-intro";
import { PageShell } from "@/components/page-shell";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";
import type { Lang } from "@/lib/i18n";

export function EvroPage({ lang }: { lang: Lang }) {
  return (
    <PageShell lang={lang}>
      <SiteHeader lang={lang} />
      <EvroIntro lang={lang} />
      <Projects lang={lang} variant="evro" />
    </PageShell>
  );
}
