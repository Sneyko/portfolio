import type { Bilingual } from "./i18n";

export type Project = {
  slug: string;
  title: string;
  category: Bilingual;
  year: string;
  summary: Bilingual;
  tech: string[];
  role?: Bilingual;
  links?: { github?: string; live?: string };
};

export const aven: Project & {
  description: Bilingual;
  features: Bilingual[];
} = {
  slug: "aven",
  title: "Aven",
  category: {
    fr: "Application iOS · projet personnel",
    en: "iOS app · personal project",
  },
  year: "2026",
  summary: {
    fr: "Une app de musculation qui transforme la régularité en progression visible.",
    en: "A weight-training app that turns consistency into visible progress.",
  },
  description: {
    fr: "Séances guidées, rangs par exercice et par muscle, XP, records personnels — et une Live Activity sur la Dynamic Island pendant l'effort. Conçue, dessinée et développée en Swift et SwiftUI.",
    en: "Guided workouts, ranks per exercise and per muscle, XP, personal records — and a Live Activity on the Dynamic Island while you train. Designed and built in Swift and SwiftUI.",
  },
  features: [
    {
      fr: "Séances guidées : séries, repos, notes, reprise après fermeture",
      en: "Guided workouts: sets, rest, notes, resume after quitting",
    },
    {
      fr: "Rangs et records par exercice et par muscle, XP et séries",
      en: "Ranks and records per exercise and muscle, XP and streaks",
    },
    {
      fr: "Catalogue de 104 exercices, recherche bilingue et filtres",
      en: "A catalogue of 104 exercises with bilingual search and filters",
    },
    {
      fr: "Live Activity + Dynamic Island, notifications de fin de repos",
      en: "Live Activity + Dynamic Island, rest-end notifications",
    },
    {
      fr: "Import Hevy, thèmes clair et sombre, 94 tests unitaires",
      en: "Hevy import, light and dark themes, 94 unit tests",
    },
  ],
  tech: ["Swift", "SwiftUI", "iOS 26", "StoreKit 2", "Live Activity", "Supabase"],
};

export const projects: Project[] = [
  {
    slug: "signal-perdu",
    title: "Signal perdu",
    category: {
      fr: "Webdocumentaire · R2.13",
      en: "Web documentary · R2.13",
    },
    year: "2026",
    summary: {
      fr: "Webdocumentaire sur la télévision et sa réinvention, construit comme cinq « chaînes » — du Canal 02 historique aux plateformes de streaming. Recherche, maquettage et montage d'interview.",
      en: "A web documentary about television and its reinvention, built as five “channels” — from the historical Canal 02 to today's streaming platforms. Research, layout and interview editing.",
    },
    role: {
      fr: "Projet de groupe (6 étudiants), IUT de Toulouse",
      en: "Team project (6 students), IUT Toulouse",
    },
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "Vite"],
    links: {
      live: "https://signal-perdu.vercel.app",
      github: "https://github.com/Sneyko/webdoc",
    },
  },
  {
    slug: "village-numerique-resistant",
    title: "Village Numérique Résistant",
    category: {
      fr: "Site-jeu · Nuit de l'Info 2025",
      en: "Game website · 2025 Nuit de l'Info",
    },
    year: "2025",
    summary: {
      fr: "Imaginé et livré en une nuit pour la Nuit de l'Info 2025, avec l'équipe « Beaucoup trop goatesque » : promouvoir un numérique plus responsable (démarche NIRD) contre l'obsolescence programmée. Mini-jeux, chatbot et animations.",
      en: "Imagined and shipped in one night for the 2025 Nuit de l'Info hackathon with team “Beaucoup trop goatesque”: championing responsible computing (NIRD) against planned obsolescence. Mini-games, a chatbot and motion design.",
    },
    role: {
      fr: "Équipe de 6 · 4–5 décembre 2025",
      en: "Team of 6 · 4–5 December 2025",
    },
    tech: ["React", "Vite", "Framer Motion"],
    links: {
      github: "https://github.com/Sneyko/village-numerique-resistant",
    },
  },
  {
    slug: "concours-webdocumentaires",
    title: "Concours webdocumentaires",
    category: {
      fr: "Landing page · SAE S2.06",
      en: "Landing page · SAE S2.06",
    },
    year: "2026",
    summary: {
      fr: "Landing page du concours de webdocumentaires du département Informatique de l'IUT de Toulouse : présentation, règlement et inscriptions, en une page.",
      en: "Landing page for the IUT Toulouse Computer Science department web-documentary competition: presentation, rules and registration — all in one page.",
    },
    tech: ["HTML", "Tailwind CSS"],
    links: {
      github: "https://github.com/Sneyko/sae-s2-06-maquette-concours",
    },
  },
  {
    slug: "congres-sif-2026",
    title: "Congrès SIF 2026",
    category: {
      fr: "Maquette web · SAE S2.05",
      en: "Mock website · SAE S2.05",
    },
    year: "2026",
    summary: {
      fr: "Maquette complète du site du congrès annuel de la Société Informatique de France, organisé à Toulouse sur le thème de l'intelligence artificielle : accueil, programme, conférences, inscription, hébergement, infos pratiques.",
      en: "A complete mock website for the annual congress of the Société Informatique de France, held in Toulouse around artificial intelligence: home, programme, talks, registration, accommodation, practical info.",
    },
    tech: ["HTML", "CSS", "JavaScript"],
    links: {
      github: "https://github.com/Sneyko/sae-s2-05-congres-sif-2026",
    },
  },
  {
    slug: "site-but-informatique",
    title: "Site du BUT Informatique",
    category: {
      fr: "Site vitrine · R1.02",
      en: "Showcase website · R1.02",
    },
    year: "2025",
    summary: {
      fr: "Site vitrine du BUT Informatique de l'IUT de Toulouse : présentation du diplôme, six blocs de compétences, vie étudiante et contact.",
      en: "A showcase website for the IUT Toulouse Computer Science degree: programme overview, six skill blocks, student life and contact.",
    },
    tech: ["HTML", "CSS"],
    links: {
      github: "https://github.com/Sneyko/sae-s1-02-site-but",
    },
  },
  {
    slug: "fromagerie",
    title: "Gestion de fromagerie",
    category: {
      fr: "Application Java · SAE S2.01",
      en: "Java desktop app · SAE S2.01",
    },
    year: "2026",
    summary: {
      fr: "Application desktop de gestion d'une fromagerie : catalogue de fromages, clients, panier, factures et transporteurs — avec base de données et interface graphique.",
      en: "A desktop app to manage a cheese shop: catalogue, customers, cart, invoices, carriers — with a database layer and a graphical interface.",
    },
    tech: ["Java", "Maven", "SQL"],
    links: {
      github: "https://github.com/Sneyko/S2.01",
    },
  },
  {
    slug: "analyse-trames-gps",
    title: "Analyse de trames GPS",
    category: {
      fr: "Programme C · R2.04",
      en: "C program · R2.04",
    },
    year: "2026",
    summary: {
      fr: "Analyseur de trames GPS NMEA 0183 en C : décodage des trames GPGGA (heure UTC, position, satellites, HDOP, altitude) et export des résultats dans un fichier.",
      en: "A GPS NMEA 0183 frame parser in C: decodes GPGGA sentences (UTC time, position, satellites, HDOP, altitude) and exports results to a file.",
    },
    tech: ["C", "GCC", "Make"],
    links: {
      github: "https://github.com/Sneyko/analyse-trames-gps",
    },
  },
  {
    slug: "analyse-de-textes",
    title: "Analyse de textes",
    category: {
      fr: "Bibliothèque Kotlin · SAE S1.01",
      en: "Kotlin library · SAE S1.01",
    },
    year: "2025",
    summary: {
      fr: "Bibliothèque Kotlin d'analyse de textes, développée en binôme : comptage de tokens, de formes, de phrases, de voyelles et de consonnes — couverte par des tests unitaires JUnit.",
      en: "A Kotlin text-analysis library, built in pairs: counting tokens, word forms, sentences, vowels and consonants — covered by JUnit unit tests.",
    },
    tech: ["Kotlin", "Gradle", "JUnit"],
    links: {
      github: "https://github.com/Sneyko/sae-s1-01-analyse-textes",
    },
  },
];
