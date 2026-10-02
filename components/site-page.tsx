import { EvroPage } from "@/components/evro-page";
import { TomPage } from "@/components/tom-page";
import { SITE_VARIANT } from "@/lib/brand";
import type { Lang } from "@/lib/i18n";

export function SitePage({ lang }: { lang: Lang }) {
  return SITE_VARIANT === "evro" ? <EvroPage lang={lang} /> : <TomPage lang={lang} />;
}
