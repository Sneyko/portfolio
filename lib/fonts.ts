import { Geist, Inter, JetBrains_Mono } from "next/font/google";

// Body — matches the original site (Inter 400/600).
export const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

// Headings / display — the "serif" slot in the original design.
export const display = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// Dates, meta, technical labels.
export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
