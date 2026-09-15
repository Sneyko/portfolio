# Principles Specification

## Overview
- **Target file:** `components/principles.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/desktop-principles.png`
- **Interaction model:** click-driven

## DOM Structure
Section title (caption accent, black title, muted description) over white. Then grid-wash `SectionContent` with left numbered buttons and right demo card.

## Computed Styles
- Caption: 16px / 900, accent-600, mb 16px
- Title: 30px / 900 (lg: 36px), slate-700
- Description: max-w-lg, slate-600
- Button: height ~108px, padding 16px, gap 16px, radius 16px, border 2px slate-200, bg white
- Number: ~72px black, slate-400; active accent-600 + border accent-400
- Demo card: ~384px (`lg:w-96`), padding 24px, rounded-xl, white, slate border

## States
- Default: all visual layers on
- Click item i: that button active; demo can stay fully styled for Aven (Tom’s card is a product preview, not a live CSS playground)

## Responsive
- Numbers hidden below xl
- List hidden below lg; demo centered
