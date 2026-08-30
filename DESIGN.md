---
name: High-Contrast Tech Light
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#F0F0F0'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4732'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7d775f'
  outline-variant: '#cec6ab'
  surface-tint: '#6c5e00'
  primary: '#6c5e00'
  on-primary: '#ffffff'
  primary-container: '#ffe000'
  on-primary-container: '#716300'
  inverse-primary: '#e2c600'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#00696c'
  on-tertiary: '#ffffff'
  tertiary-container: '#13f8ff'
  on-tertiary-container: '#006e72'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe33b'
  primary-fixed-dim: '#e2c600'
  on-primary-fixed: '#211b00'
  on-primary-fixed-variant: '#524700'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#4bf9ff'
  tertiary-fixed-dim: '#00dce2'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f52'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  surface-border: '#E5E5E5'
  text-muted: '#666666'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
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
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system is a high-performance framework tailored for technical professionals who require absolute clarity and a clean, structured environment. The brand personality is **professional, surgical, and energetic**, shifting the previous "command center" aesthetic into a "modern laboratory" feel. It targets users in SaaS, fintech, and developer tooling who value efficiency and high readability.

The visual style is a refined mix of **Minimalism** and **High-Contrast Boldness**. It leverages a pure white foundation to provide a sense of infinite space, punctuated by a vibrant yellow that acts as a beacon for interaction. This light mode adaptation maintains the technical "Geist" aesthetic while utilizing soft, large-scale containers to organize complex data without visual clutter.

## Colors

This system utilizes a **high-contrast triad** of pure white, deep charcoal, and vibrant yellow. The palette is optimized for daylight readability and reducing eye strain in well-lit environments.

*   **Primary (#FFE000):** The "Action Yellow." Reserved strictly for primary call-to-actions, progress indicators, and key brand accents. It provides a warm, energetic contrast to the neutral base.
*   **Neutral/Background (#FFFFFF):** The primary canvas. Use #F9F9F9 for secondary background areas to provide subtle depth.
*   **Secondary/Text (#131313):** A deep charcoal used for all primary text and iconography. It ensures maximum contrast against the white background (AAA rating).
*   **Surface-Container (#F0F0F0):** A soft gray used to create distinct visual zones, such as sidebars, cards, or section blocks, without the need for heavy shadows.

Secondary information should use a 60% opacity of the charcoal text color to maintain a clear hierarchy.

## Typography

The typography strategy emphasizes structural integrity and technical precision through a dual-typeface system.

*   **Geist** is the workhorse typeface. It is used for all narrative and interface elements. Headlines are set with aggressive weights and negative tracking to create a "blocky" architectural feel that anchors the page.
*   **JetBrains Mono** provides a "system-level" voice. It is used for labels, status tags, and numerical data, signaling to the user that the information is technical or immutable.

For optimal readability on white backgrounds, avoid weights lighter than 400 for body text. All caps should be reserved for the `label-caps` style for use in small navigation headers or eyebrows.

## Layout & Spacing

The layout is built on a **Fixed Grid** model (12 columns) for desktop and a **Fluid Grid** (4 columns) for mobile. All spacing is derived from a strict 8px increment system.

To balance the high-contrast text and vibrant accents, the design requires significant **negative space**. Section gaps are intentionally large (128px) to prevent the interface from feeling "busy." Use the 24px gutter for most internal component grouping, and the 64px margin for primary page gutters on desktop to keep content focused and readable.

## Elevation & Depth

This design system eschews traditional soft shadows in favor of **Tonal Layering** and **Crisp Outlines** to maintain its professional, tech-oriented aesthetic.

*   **Surface Tiering:** Depth is created by placing white cards or containers on a slightly darker background (#F9F9F9) or using #F0F0F0 containers on white backgrounds.
*   **Low-Contrast Outlines:** Instead of shadows, use a 1px border (#E5E5E5) to define the boundaries of UI elements like cards and inputs.
*   **Active Elevation:** Only the most critical floating elements (like modals) may use a subtle, sharp-edged shadow (4px blur, 10% opacity black) to indicate they are on the highest plane.
*   **Glass Effects:** For sticky navigation bars, use a white background with 80% opacity and a 20px backdrop blur to maintain the airy feel while ensuring content remains legible.

## Shapes

The shape language is **Rounded**, moving away from the harsh corners of traditional "brutalist" tech designs. A base radius of 12px (0.75rem) or 16px (1rem) is applied to most UI components to create a sophisticated, modern silhouette.

This softened geometry balances the high-contrast colors, making the professional tools feel more approachable and ergonomic. Larger layout containers should use the `rounded-xl` (1.5rem) setting to create a distinct frame for content.

## Components

*   **Buttons:** Primary buttons are Solid Yellow (#FFE000) with Black text (#131313). Secondary buttons use a Solid Black background with White text for high-impact hierarchy. Both use a 12px-16px corner radius.
*   **Input Fields:** Use a white surface with a 1px #E5E5E5 border. Upon focus, the border should become 2px thick and change to Black (#131313) or Yellow (#FFE000) for a high-visibility state change.
*   **Cards:** Set with a white background and a 1px #E5E5E5 border. To separate sections, use a #F0F0F0 background for the container.
*   **Chips:** Fully rounded (pill-shaped) using #F0F0F0 backgrounds with `label-mono` text. Active states toggle to the Primary Yellow.
*   **Lists:** Items are separated by 1px dividers (#E5E5E5). Hover states should use #F9F9F9 to provide a subtle, tactile response.
*   **Checkboxes & Radios:** Use a heavy 2px black stroke for the "unselected" state. When selected, the fill is Solid Yellow with a black checkmark/dot.