# Portfolio — Tom Testu / Evro AI

Portfolio bilingue (FR/EN) en deux variantes servies sur deux domaines :

| Domaine | Projet Vercel | Variante | Contenu |
| --- | --- | --- | --- |
| [tom-testu.com](https://tom-testu.com) | `tom-testu` | `tom` | CV / LinkedIn — parcours, compétences, projets, contact |
| [evroai.xyz](https://evroai.xyz) | `evro` | `evro` | Personal branding — bio, liens (X, GitHub, e-mail), projets |

Même repo, même design minimaliste (inspiré de [spidex.dev](https://spidex.dev)) ; la variante est choisie au build par la variable `NEXT_PUBLIC_SITE_VARIANT`.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, export statique)
- React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- Inter (texte), Geist (titres) + JetBrains Mono (dates, méta), via `next/font` (Google Fonts)

## Structure

- `app/(fr)/` — version française (route `/`)
- `app/(en)/en/` — version anglaise (route `/en/`)
- `lib/brand.ts` — marque, monogramme, URL et métadonnées par variante ; expose `SITE_VARIANT` (lu depuis `NEXT_PUBLIC_SITE_VARIANT`)
- `components/tom-page.tsx` / `components/evro-page.tsx` — les deux pages
- `components/` — sections : `site-header`, `intro` / `evro-intro`, `projects` (cartes flottantes), `parcours`, `skills`, `contact`
- `components/project-card.tsx` — carte projet + dialogue de détail (client)
- `lib/projects.ts` — contenu des projets, bilingue
- `public/shots/` — captures utilisées sur le site

## Développement

```bash
bun install
bun dev                                   # variante Tom (défaut)
NEXT_PUBLIC_SITE_VARIANT=evro bun dev     # variante Evro
```

## Déploiement

Deux projets Vercel branchés sur ce repo :

- `tom-testu` → `tom-testu.com`, avec `NEXT_PUBLIC_SITE_VARIANT=tom`
- `evro` → `evroai.xyz`, avec `NEXT_PUBLIC_SITE_VARIANT=evro`

Chaque push sur `main` redéploie les deux.

## Modifier le contenu

- Projets : `lib/projects.ts` (champs `fr` / `en`).
- Marque, monogramme, métadonnées, URL canonique : `lib/brand.ts`.
- Textes : `components/*.tsx` via le helper `tx(lang, fr, en)`.
- Coordonnées (e-mail, GitHub, X) : `lib/site.ts`.
