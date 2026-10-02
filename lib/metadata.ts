import type { Metadata } from "next";

import { brand } from "@/lib/brand";
import type { Lang } from "@/lib/i18n";

export function buildMetadata(lang: Lang): Metadata {
  const description = brand.meta.description[lang];
  const isFr = lang === "fr";

  return {
    metadataBase: new URL(brand.url),
    title: { default: brand.meta.title, template: `%s — ${brand.name}` },
    description,
    alternates: {
      canonical: isFr ? "/" : "/en",
      languages: { fr: "/", en: "/en" },
    },
    openGraph: {
      type: "website",
      locale: isFr ? "fr_FR" : "en_US",
      url: isFr ? brand.url : `${brand.url}/en`,
      siteName: brand.name,
      title: brand.meta.title,
      description,
      images: [brand.meta.ogImage],
    },
  };
}
