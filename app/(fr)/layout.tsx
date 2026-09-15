import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../globals.css";

import { ThemeScript } from "@/components/theme-script";
import { mono, sans } from "@/lib/fonts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Tom Testu — Portfolio", template: "%s — Tom Testu" },
  description:
    "Étudiant en 2e année de BUT Informatique à l'IUT de Toulouse. Applications iOS, sites web et projets universitaires — en recherche d'un stage informatique.",
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: "Tom Testu",
    title: "Tom Testu — Portfolio",
    description:
      "Étudiant en BUT Informatique à l'IUT de Toulouse — applications iOS, sites web et projets.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function FrLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-dvh bg-paper text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-200">
        {children}
      </body>
    </html>
  );
}
