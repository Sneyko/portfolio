# Featured Cards Specification

## Overview
- **Target file:** `components/featured-cards.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/desktop-hero.png`
- **Interaction model:** static

## DOM Structure
Row of 3 cards. Each: bordered white panel, crosshair guides (horizontal + vertical lines), pill header with circular icon + title, description below.

## Computed Styles
- Card: `rounded-2xl`, border `slate-200`, bg white
- Icon discs: amber-300 / pink-300 / sky-300, `p-3.5`, rounded-full, white glyph
- Title: 14px / 700, slate-700
- Body: 14px, slate-600, padding `p-4 pl-12`

## Responsive
- Hidden below lg (source: `hidden lg:block`, overlap `lg:-mt-16 lg:mb-24`)
- lg: 3 columns, gap 32px
