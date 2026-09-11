import { About } from "@/components/about";
import { ContactFooter } from "@/components/contact-footer";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import type { Lang } from "@/lib/i18n";

export function SitePage({ lang }: { lang: Lang }) {
  return (
    <>
      <SiteHeader lang={lang} />
      <main className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
        <Hero lang={lang} />
        <ProjectsSection lang={lang} />
        <About lang={lang} />
      </main>
      <ContactFooter lang={lang} />
    </>
  );
}
