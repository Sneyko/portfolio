# Hero Specification

## Overview
- **Target file:** `components/hero.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/desktop-hero.png`
- **Interaction model:** time-driven enter (once); static after

## DOM Structure
`header#page-header.background-grid.background-grid--fade-out` → `.content-wrapper` → copy column + absolute portrait (`lg` only)

## Computed Styles
- Padding lg: 208px top, 112px bottom
- Wrapper max-width 1200px, padding-inline 24px at 1920
- Greeting: 36px (md:text-4xl), slate-600
- Name: 72px (md:text-7xl), weight 800, leading-none, first name `#7c3aed`
- Subtitle: 20px, slate-600
- CTA: 48×~133, `#7c3aed`, white, 14px/700, radius 12px, padding 0 24px
- Ghost: 48px, slate-600, 14px/700
- Tech label: 14px slate-600, icons 24px, gap 14px (`gap-3.5`)

## States & Behaviors
- Enter: translateX(-32px) → 0 + opacity, delays 0.1/0.2/0.3/0.4/0.6s
- Reduced motion: opacity only
- CTA hover: `#6d28d9`, press scale 0.96

## Assets
- Portrait: circular Aven mockup (`public/shots/aven/*`) — not Enji’s `me.png`

## Responsive
- lg+: portrait visible
- < lg: copy only, tighter padding (`pt-36 pb-20`)
