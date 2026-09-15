# Footer Specification

## Overview
- **Target file:** `components/contact-footer.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/fullpage-user.png`
- **Interaction model:** static + link hover

## DOM Structure
`footer.background-grid.background-grid--fade-in` → about column + 2–3 link groups → bottom bar copyright

## Computed Styles
- mt-24, pt-16, text-sm
- Groups: title muted, links h-8, px-2, slate-900
- New/soon pills: 10px uppercase, rounded-full, border
- Bottom: border-t, py-6, 12px

## Text Content (Tom)
About blurb, GitHub, mailto, projets, formation, source.

## Responsive
- Stack reverse on small; row on lg
