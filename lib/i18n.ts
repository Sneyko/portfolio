export type Lang = "fr" | "en";

export type Bilingual = { fr: string; en: string };

export function tx(lang: Lang, fr: string, en: string) {
  return lang === "fr" ? fr : en;
}
