# Quote Specification

## Overview
- **Target file:** `components/quote.tsx`
- **Screenshot:** `docs/design-references/enjidev-8e78aeaa/root-8a5edab2/desktop-principles.png`
- **Interaction model:** static

## DOM Structure
`blockquote` with oversized quote mark + 3-line stack: italic first line, rule + strong middle + rule, last line with highlight behind last word.

## Computed Styles
- Quote: `text-3xl md:text-4xl lg:text-5xl`, slate-500, leading ~1.15
- Mark: h-10 / md:h-16 / lg:h-24, slate-300
- Rules: height 2px / lg:4px, slate-400, widths 32px→96px and 24px→56px
- Strong: extrabold slate-600
- Highlight: slate-100 rounded behind last word

## Text Content (Tom, not Enji)
FR/EN original lines — same composition, different words.

## Responsive
- Centered, py-8
