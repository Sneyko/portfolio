import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "../../globals.css";

import { ThemeScript } from "@/components/theme-script";
import { display, mono, sans } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-dvh flex-col bg-bg font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
