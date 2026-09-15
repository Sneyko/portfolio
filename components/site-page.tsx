import { About } from "@/components/about";
import { ContactFooter } from "@/components/contact-footer";
import { FeaturedCards } from "@/components/featured-cards";
import { Hero } from "@/components/hero";
import { Principles } from "@/components/principles";
import { ProjectsSection } from "@/components/projects-section";
import { Quote } from "@/components/quote";
import { SiteHeader } from "@/components/site-header";
import type { Lang } from "@/lib/i18n";

export function SitePage({ lang }: { lang: Lang }) {
  return (
    <>
      <SiteHeader lang={lang} />
      <main>
        <Hero lang={lang} />
        <FeaturedCards lang={lang} />
        <div className="-mt-12 mb-12 md:mt-0 md:mb-24">
          <Quote lang={lang} />
        </div>
        <Principles lang={lang} />
        <ProjectsSection lang={lang} />
        <About lang={lang} />
      </main>
      <ContactFooter lang={lang} />
    </>
  );
}
