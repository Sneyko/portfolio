# Navbar Specification

## Overview
- **Target file:** `components/site-header.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/desktop-hero.png`
- **Interaction model:** scroll-driven overlay + hover on links

## DOM Structure
`header.fixed.z-[1000]` → overlay `div.fixed.h-16` → spacer `h-2` → `content-wrapper-max` → flex row (nav + utilities)

## Computed Styles
- Overlay height: 64px
- Overlay at rest: transparent
- Overlay scrolled: `background: rgba(255,255,255,0.7)`, `backdrop-filter: blur(8px)`, `border-bottom: 1px solid rgb(226,232,240)`
- Nav link: 13px / 700, color `#7c3aed`, height 36px, padding 0 8px, radius 12px
- Logo row: height 36px, gap 8px, padding 0 8px, radius 12px
- Icon hit: 36×36, radius 12px

## States & Behaviors
- **Scroll:** trigger `scrollY > 0`. Transition implicit via class toggle (no long color smear — keep overlay transition to background/border 150ms max).
- **Hover nav:** accent-600 → accent-700
- **Logo active:** mark filled accent with light glyph

## Text Content (Tom)
FR: Projets, À propos, Compétences, Contact, FR/EN
EN: Projects, About, Skills, Contact, FR/EN

## Responsive
- Desktop: all links
- < md: Projets + Contact + utilities
