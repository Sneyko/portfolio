# Behaviors — enji.dev home

## Interaction model (page)

Mostly static layout + click. Header is scroll-driven. Principles demo is click-driven.

## Scroll sweep

- **Header:** at `scrollY === 0` the 64px overlay is transparent. After any scroll (`useOnScroll(0)`), overlay becomes `bg-white/70 backdrop-blur(8px)` with `border-b` divider. Spacer `h-2` collapses with `-mt-2`.
- **No scroll-snap.** Native `html { scroll-smooth }`.
- **No Lenis / Locomotive** (no `.lenis` class).
- Hero illustration is static after load (draw-on outline then fade to PNG). Not replicated (copyrighted portrait).

## Click sweep

- Nav links: in-page / route navigation.
- **Get in Touch:** route to contact.
- **RESUME:** external Figma file.
- **Quick Access:** command palette (out of scope for Tom’s first pass; replaced by FR/EN + theme).
- **Principles 1–4:** click sets `currentState`; active item gets accent border + accent number; demo card layers typography/spacing/colors/effects. Default state shows all effects on.

## Hover sweep

- Nav links: accent-600 → accent-700.
- Solid button: accent-600 → accent-700, 150ms.
- Ghost: slate-600 → slate-700.
- Icon buttons: `hover:bg-slate-300/50`, 36×36, radius 12px.
- Tech icons: color to brand hex, 200ms.
- Footer links: standard text, 32px height.

## Responsive sweep

- **1440+:** two-column hero (copy + circular illustration), 3 featured cards in a row overlapping hero, principles = numbered column + demo card.
- **768:** illustration hidden (`lg:block` only). Featured cards hidden below `lg`. Principles stack.
- **390:** greeting `text-2xl`, name `2.5rem`. Nav compresses; Work becomes dropdown on Enji. Tom’s nav keeps Projets/Contact visible, rest at `md+`.
