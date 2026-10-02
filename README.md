# Portfolio — tomtestu.me

Portfolio bilingue (FR/EN) de **Tom Testu** — étudiant en 2e année de BUT Informatique à l'IUT de Toulouse. Applications iOS, sites web et projets universitaires.

Design minimaliste, une seule colonne de lecture (inspiré de [spidex.dev](https://spidex.dev)), avec des cartes flottantes pour les projets.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, export statique)
- React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Inter (texte), Geist (titres) + JetBrains Mono (dates, méta), via `next/font` (Google Fonts)

## Structure

- `app/(fr)/` — version française (route `/`)
- `app/(en)/en/` — version anglaise (route `/en/`)
- `app/globals.css` — tokens de design (fond, encre, accent, bordure) et styles des cartes / dialogue projet
- `components/` — sections du site : `site-header`, `intro`, `projects` (cartes), `parcours` (frise), `skills`, `contact`
- `components/project-card.tsx` — carte projet + dialogue de détail (client)
- `components/covers.tsx` — aperçus pour le dialogue (fenêtre navigateur, adaptée d'[Opensource UI](https://opensourceui.in), MIT)
- `lib/projects.ts` — contenu des projets, bilingue
- `public/shots/` — captures utilisées sur le site (app Aven + projets)

## Développement

```bash
bun install
bun dev
```

## Déploiement

Export statique (`out/`) construit par GitHub Actions et publié sur GitHub Pages → **https://tomtestu.me**

## Modifier le contenu

- Projets : tout est dans `lib/projects.ts` (champs `fr` / `en`).
- Textes du site (hero, à propos, contact) : dans `components/*.tsx`, via le helper `tx(lang, fr, en)`.
</content>
