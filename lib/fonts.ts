import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";

export const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});
