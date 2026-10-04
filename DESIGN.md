---
name: Sober Stone Light
colors:
  background: '#fbfbf9'
  on-background: '#1c1917'
  surface: '#f4f3ee'
  surface-dim: '#ece9e2'
  surface-bright: '#fbfbf9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f6f0'
  surface-container: '#f2efea'
  surface-container-high: '#ece8e1'
  surface-container-highest: '#e5e2da'
  surface-variant: '#ece8e1'
  on-surface: '#1c1917'
  on-surface-variant: '#6b6661'
  on-surface-muted: '#6b6661'
  outline: '#a39d94'
  outline-variant: '#e5e2da'
  primary: '#1c1917'
  on-primary: '#ffffff'
  primary-container: '#1c1917'
  on-primary-container: '#ffffff'
  secondary: '#4a4542'
  on-secondary: '#ffffff'
  secondary-container: '#ece8e1'
  on-secondary-container: '#4a4542'
  tertiary: '#00696c'
  on-tertiary: '#ffffff'
  tertiary-container: '#13f8ff'
  on-tertiary-container: '#006e72'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  inverse-primary: '#7ba0dd'
typography:
  headline-xl:
    fontFamily: Poppins
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Poppins
    fontSize: 44px
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-caps:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  role-accent:
    fontFamily: Instrument Serif
    fontStyle: italic
rounded:
  control: 5px
  DEFAULT: 5px
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

> Source of truth: the tokens above mirror `app/globals.css`. If the two ever disagree, `globals.css` wins. Update this file to match it.

## Brand & Style

The site is a personal portfolio for a software engineer. It should feel **sober, professional and precise**: a quiet, paper-like canvas where the content (projects, stack, career path) does the talking.

The style is **warm minimalism**. Off-white "stone" neutrals replace pure white, and a near-black accent replaces any bright brand color. The texture is technical but subtle: a dot grid behind the whole page and a hairline grid or noise pattern on the Hero only. The site is light mode only.

## Colors

The palette is warm neutrals (close to Tailwind's `stone` scale) plus one dark accent.

*   **Background (#fbfbf9):** The page canvas. It is warm off-white, not pure white.
*   **Text / Accent (#1c1917):** Near-black, used for all primary text and as the brand accent (`primary` / `primary-container`). The shadcn Button's `default` variant uses it.
*   **Muted text (#6b6661):** `on-surface-variant`, used for secondary copy, descriptions and tags.
*   **Surface containers (#f7f6f0 → #e5e2da):** Tonal steps for cards and zones. Pick the step instead of adding shadows.
*   **Outline-variant (#e5e2da):** The default 1px border colour, also used by shadcn's `--border` and `--input`.
*   **Tertiary (teal) and error:** Available but rarely used. Don't use them as a second brand color.

Always use the token classes (`bg-surface-container`, `text-on-surface-variant`, `border-outline-variant`…), never raw hex values. shadcn's semantic variables (`--card`, `--muted`, `--ring`…) are wired to these tokens, so registry components inherit the palette.

## Typography

*   **Geist** (`font-sans`) is the workhorse font for headings, body and UI. Headlines use heavy weights and negative tracking.
*   **JetBrains Mono** (`font-mono`, `text-label-mono`) gives the "system" voice for labels, numbers and eyebrows.
*   **Poppins** (`font-heading-rounded`) is **only for the Hero headline** (`text-headline-xl` / `text-headline-xl-mobile`).
*   **Instrument Serif italic** (`font-serif-accent`) is **only for the Hero role line** ("Ingénieur Logiciel").

The text scale is exposed as Tailwind utilities (`text-headline-lg`, `text-body-md`…). Each one sets size, line height, tracking and weight together. `headline-xl-mobile` is deliberately separate from `headline-lg-mobile`, so changing the Hero doesn't resize the section h2s. Body text never goes below weight 400. Use all caps only for `label-caps`.

## Layout & Spacing

All spacing is in 8px steps. Use 24px gutters within components and 64px desktop margins (16px on mobile). Sections are separated by large gaps (~128px) so the page stays airy. Content sits in the shared `Container` component.

## Elevation & Depth

*   **Tonal layering and hairline borders** come first. Depth comes from moving between surface-container steps and from 1px `outline-variant` borders, not from shadows.
*   **Glass navigation:** The sticky navbar uses `.glass-panel` (80% white, 20px backdrop blur, faint outline) plus a shadow.
*   **Shadows** are reserved for floating or "physical" objects: the navbar and the tilted polaroid-style photo in the Hero.
*   **Background textures:** `.bg-dot-grid` (32px dots, on `body`), plus `.bg-grid-lines` and `.bg-pattern-randomized` for the Hero only. All three use the faint `--dot-color` tint.

## Shapes

Corners are **tight, not pill-like**. The shared radius is `--radius-control` (5px), used through `rounded-control` for the nav shell and solid buttons. shadcn's `--radius` uses the same value, so registry components line up. `rounded-full` is used only for small chips and tags.

## Components

*   **Buttons:** The shadcn `Button` (`components/ui/button.tsx`). Primary buttons are solid near-black with white text and a `rounded-control` radius. Secondary buttons are quiet neutral surfaces.
*   **Tags / Chips:** Pill-shaped (`rounded-full`), `bg-surface-bright`, a 1px `outline-variant/50` border, small `on-surface-variant` text.
*   **Cards:** Surface-container backgrounds with 1px `outline-variant` borders and no heavy shadows.
*   **Motion:** framer-motion reveals through `FadeIn`, and a `TracingBeam` on the career path. Keep motion subtle and purposeful.
