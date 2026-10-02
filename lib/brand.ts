import type { Lang } from "@/lib/i18n";

export type Variant = "tom" | "evro";

/**
 * Which build this is. Read at build time from `NEXT_PUBLIC_SITE_VARIANT`,
 * so the same repo can produce two independent sites:
 *   - `tom-testu` project → tom-testu.com  (CV / LinkedIn)
 *   - `evro` project      → evroai.xyz     (personal branding / Twitter)
 */
export const SITE_VARIANT: Variant =
  process.env.NEXT_PUBLIC_SITE_VARIANT === "evro" ? "evro" : "tom";

export type IconEntry = { url: string; sizes: string; type: string };

export type Brand = {
  variant: Variant;
  /** Display name (header, footer, OG). */
  name: string;
  /** Monogram shown in the header avatar when there is no image. */
  initials: string;
  /** Header avatar image, when the brand has one. */
  avatar?: string;
  /** Canonical origin used for metadata, sitemap and robots. */
  url: string;
  /** One-line subtitle under the name. */
  greeting: Record<Lang, string>;
  meta: {
    title: string;
    description: Record<Lang, string>;
    ogImage: string;
    icons: {
      icon: IconEntry[];
      apple: IconEntry[];
    };
  };
};

export const brands: Record<Variant, Brand> = {
  tom: {
    variant: "tom",
    name: "Tom Testu",
    initials: "TT",
    url: "https://tom-testu.com",
    greeting: {
      fr: "Étudiant en BUT Informatique · Toulouse",
      en: "Computer Science student · Toulouse",
    },
    meta: {
      title: "Tom Testu — Portfolio",
      description: {
        fr: "Étudiant en 2e année de BUT Informatique à l'IUT de Toulouse. Applications iOS, sites web et projets universitaires — en recherche d'un stage informatique.",
        en: "Second-year Computer Science student at IUT Toulouse. iOS apps, websites and university projects — currently looking for an internship.",
      },
      ogImage: "/og.png",
      icons: {
        icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
        apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
      },
    },
  },
  evro: {
    variant: "evro",
    name: "Evro AI",
    initials: "EA",
    avatar: "/evro/avatar.jpg",
    url: "https://evroai.xyz",
    greeting: {
      fr: "Je construis en public · iOS, macOS & web",
      en: "Building in public · iOS, macOS & web",
    },
    meta: {
      title: "Evro AI",
      description: {
        fr: "Evro AI — je conçois et développe des apps iOS, macOS et web, et je construis en public.",
        en: "Evro AI — I design and build iOS, macOS and web apps, and I build in public.",
      },
      ogImage: "/og.png",
      icons: {
        icon: [
          { url: "/evro/icon-32.png", sizes: "32x32", type: "image/png" },
          { url: "/evro/icon-192.png", sizes: "192x192", type: "image/png" },
          { url: "/evro/icon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/evro/apple-icon.png", sizes: "180x180", type: "image/png" }],
      },
    },
  },
};

export const brand: Brand = brands[SITE_VARIANT];
