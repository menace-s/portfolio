# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev`: dev server on http://localhost:3000
- `npm run build`: production build (also type-checks)
- `npm run lint`: ESLint 9 flat config (`eslint.config.mjs`, extends `eslint-config-next`)
- `npx tsc --noEmit`: type-check only (there is no script for it)

There is no test suite.

## Stack

Next.js 16 (App Router) with React 19, Tailwind CSS v4 (configured in CSS, no `tailwind.config`), shadcn/ui (`base-nova` style on `@base-ui/react`, not Radix), framer-motion, lucide-react and simple-icons. The path alias `@/*` points to the repo root. Global route types such as `LayoutProps<"/">` come from Next's typegen and are not imported.

## Architecture

This is a single-page portfolio in French (`lang="fr"`). `app/page.tsx` stacks the section components (`components/sections/*`) between `Navbar` and `Footer`. Sections are linked by anchor ids (`#parcours`, `#savoir-faire`, `#expertise`) that must match `navItems` in the site config.

**All copy, links and data live in [lib/site-config.ts](lib/site-config.ts).** Components read from it and hold no text of their own. To add a service card, a tech or a skill, edit that file. Two places are tied to it by keys:
- `TechItem.icon` keys map to icons in `components/sections/stack.tsx`. Mainstream tools use devicon SVGs loaded from jsDelivr (`DEVICON_SLUGS`). Tools devicon lacks use `simple-icons` brand marks (`BRAND_ICONS`). A new tech needs an entry in one of those maps.
- `Service.image` points to a photo in `public/savoir-faire/` (downloaded from Unsplash), rendered by `services.tsx`.

`links` in the config still holds some placeholders. The CV is expected at `public/cv-philippe-aganh.pdf`.

Components are server components by default. Only the parts that need interaction or animation are client components (`navbar`, `stack`, `ui/fade-in`, `ui/tracing-beam`). Keep `"use client"` at those leaves.

## Styling

- Design tokens are defined in [app/globals.css](app/globals.css). Material-style CSS variables on `:root` (`--surface-container-*`, `--on-surface`, `--primary-container`…) are exposed to Tailwind through `@theme inline` as `--color-*`, which gives classes like `bg-surface-container` and `text-on-surface-variant`. Use these tokens instead of raw colors. The site is light-only, with no dark mode.
- [DESIGN.md](DESIGN.md) is the design spec (palette, type scale, radii, component rules) and mirrors `globals.css`. When you change tokens, update both. If they disagree, `globals.css` wins.
- Fonts come from `next/font` in `app/layout.tsx`. Geist is the base font (`font-sans`) and JetBrains Mono is `font-mono`. Two fonts are reserved for the Hero: Poppins (`font-heading-rounded`) for the headline and Instrument Serif (`font-serif-accent`) for the role line. Don't use those two elsewhere.
- Merge classes with `cn()` from `lib/utils.ts`. Add shadcn components with `npx shadcn add <name>`, which writes them to `components/ui/`.
