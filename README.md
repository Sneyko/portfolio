# Portfolio — tomtestu.me

Portfolio bilingue (FR/EN) de **Tom Testu** — étudiant en 2e année de BUT Informatique à l'IUT de Toulouse. Applications iOS, sites web et projets universitaires.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, export statique)
- React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Instrument Sans + Geist Mono, auto-hébergées via `next/font`

## Structure

- `app/(fr)/` — version française (route `/`)
- `app/(en)/en/` — version anglaise (route `/en/`)
- `app/globals.css` — tokens de design (papier, encre, accent)
- `components/` — sections du site et cadres de présentation (mockups iPhone / navigateur adaptés d'[Opensource UI](https://opensourceui.in), MIT)
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
