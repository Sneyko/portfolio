# Design tokens — enji.dev (computed + source)

Measured on https://enji.dev/ at 1920×1080, `data-accent="violet"`, class `light`.

## Fonts

- Sans: Plus Jakarta Sans (next/font variable, weights 200–800)
- Mono: JetBrains Mono (variable 100–800)
- Body: 16px / 24px

## Color (light)

- Body background: `rgb(255, 255, 255)` / `#ffffff`
- Grid wash: Tailwind `slate-100` `#f1f5f9`
- Grid lines: `slate-200` at ~80%
- Body text: `slate-900` `#0f172a`
- Muted: `slate-600` `#475569`, `slate-500` `#64748b`
- Headings: `slate-700` `#334155`
- Accent (violet-600): `rgb(124, 58, 237)` `#7c3aed`
- Accent hover: `violet-700` `#6d28d9`
- Work-group links (source): `blue-600` `#2563eb` — not used on Tom’s single-accent home
- Divider: `slate-200` `#e2e8f0`
- CTA text: white
- Nav link: 13px / 700, accent-600, height 36px, padding 0 8px, radius 12px

## Dark (source CSS, not default screenshot)

- Body: `slate-900` / `color-scheme: dark`
- Grid: `#0c1222`
- Overlay header: `slate-900/80`

## Layout

- Content wrapper: `max-width: 1200px` (`max-w-[75rem]`), padding `0 24px` at this viewport (`xl:px-6`)
- Hero padding: `208px 0 112px` (`lg:pt-52 lg:pb-28`)
- Fixed header: 64px bar; on scroll: `bg-white/70`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid #e2e8f0`
- Featured cards overlap hero: `lg:-mt-16`

## Type (hero)

- Greeting: `text-2xl` / `md:text-4xl`, `slate-600`
- Name: `text-[2.5rem]` / `md:text-7xl`, `font-[1000]` (clamps to 800), `leading-none`, first name `accent-600`
- Subtitle: `text-base` / `md:text-xl`, `slate-600`, bold phrase `slate-700`

## Controls

- Solid button: `h-12` on md (`button--big`), `px-6`, `rounded-xl`, 14px/700, `bg-accent-600`
- Ghost button: transparent, `slate-600`, 14px/700
- Section button: white, `border-2` `slate-200`, `rounded-2xl`, padding 16px, gap 16px; active border `accent-400`
- Number: `text-7xl font-black`, inactive `slate-400`, active `accent-600`

## Motion

- Hero enter: `translateX(-32px)` + opacity, delays 0.1 / 0.2 / 0.3 / 0.4s
- Header blur: scrollY > 0
- Principles: click-driven (not scroll-driven)
