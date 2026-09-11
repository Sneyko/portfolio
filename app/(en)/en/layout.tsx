import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../../globals.css";

import { mono, sans } from "@/lib/fonts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Tom Testu — Portfolio", template: "%s — Tom Testu" },
  description:
    "Second-year Computer Science student at IUT Toulouse. iOS apps, websites and university projects — currently looking for an internship.",
  alternates: {
    canonical: "/en",
    languages: { fr: "/", en: "/en" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${site.url}/en`,
    siteName: "Tom Testu",
    title: "Tom Testu — Portfolio",
    description:
      "Computer Science student at IUT Toulouse — iOS apps, websites and projects.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f4f1",
  colorScheme: "light",
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
