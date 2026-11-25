# PROQRA Design Direction

Baseline visual and copy direction for PROQRA, a direct procurement platform and early-partner service for UK manufacturers sourcing from India.

## Aesthetic & Identity

- **Look & Feel**: High-contrast, industrial, precision B2B. Reads like an engineering specification and an operational workbench rather than a consumer SaaS marketing site.
- **Theme**: Light-mode first (`#FFFFFF` canvas, `#F8FAFC` secondary surfaces), using deep slate (`#0F172A`) for primary actions and high-contrast closing bands.
- **Tone**: Direct, factual, plainspoken UK English. Early-stage honesty over hype; no fabricated metrics, fake testimonials, or generic buzzwords.

## Liveliness Dials

- **ENERGY**: `1` (Calm, authoritative B2B restraint; hierarchy comes from contrast, typography, and real industrial media rather than visual noise.)
- **RHYTHM**: `2` (Consistent 12-column grid with deliberate structural breaks across sections: full-bleed hero video, asymmetric 5/7 splits, structured service cards, compact jump strips, accordion rows, and dark closing bands.)
- **MOTION**: `2` (Restrained, purposeful motion: subtle scroll-reveals, crisp hover transitions, and smooth accordion disclosure; strictly respects `prefers-reduced-motion`.)

## Color Palette

Strict high-contrast neutral foundation with one primary accent color.

| Role | Token / Hex | Usage |
| --- | --- | --- |
| Primary Canvas | `#FFFFFF` (`bg-white`) | Main page background, primary cards, form inputs |
| Secondary Surface | `#F8FAFC` (`slate-50`) | Section alternation, callout panels, form containers |
| Muted Surface | `#F1F5F9` (`slate-100`) | Boundary boxes (e.g., "What we don't do") |
| Primary Ink | `#0F172A` (`slate-900`) | Headings, primary buttons, dark contrast bands |
| Body Ink | `#334155` (`slate-700`) | Primary body copy (WCAG AA compliant) |
| Secondary Ink | `#475569` (`slate-600`) | Supporting copy, captions, metadata (minimum 4.5:1 contrast) |
| Structural Borders | `#E2E8F0` / `#CBD5E1` (`slate-200` / `slate-300`) | 1px section dividers, card frames, input outlines |
| Primary Accent | `#2563EB` (`blue-600`, hover `#1D4ED8`) | Active nav states, key headline emphasis, links, focus rings |
| Accent Tint | `#EFF6FF` (`blue-50`) | Selected-state tags and subtle featured borders only |

**Functional Status Tints** (used strictly for real delivery ownership or validation states, never decoration):
- Verified / Partner: Emerald (`emerald-50` fill, `emerald-800` text, `emerald-200` border)
- Third-Party / Independent: Amber (`amber-50` fill, `amber-800` text, `amber-200` border)
- Error / Validation: Red (`red-50` fill, `red-700` text, `red-200` border)

## Typography

- **Primary Sans (`Inter`)**: Chosen for clean optical legibility in technical copy, supplier tables, and procurement forms.
  - Headings: `font-bold`, `tracking-tight`, `leading-tight`, `text-balance`.
  - Wordmark: `PROQRA` in `font-black`, uppercase, `tracking-tighter`, paired with its `blue-600` mark.
  - Body: `16px` (`text-base`) to `18px` (`text-lg`), `leading-relaxed`, `text-pretty`.
- **Monospace (System Mono)**: Reserved strictly for technical indices (`01`, `02`), part codes, and sample document metadata. Never used for large display headings.
- **Serif Italic (`Playfair Display`, `.italic-accent`)**: Optional editorial emphasis only; use sparingly.

## Strict Visual & Component Rules

- **No Gradients**: Flat, solid color fills only. No decorative background gradients, mesh washes, radial orbs, or gradient cards/buttons. (Alpha masks strictly for blending real machining video or photography into a solid white edge are the only permitted exception.)
- **No Pills**: Never use `rounded-full` pill shapes on buttons, inputs, cards, badges, or tags. Maintain sharp, engineered geometry:
  - Buttons & form inputs: `rounded` (`4px`) to `rounded-md` (`6px`)
  - Functional status/owner tags: `rounded-md` (`6px`)
  - Cards & structural panels: `rounded-lg` (`8px`) to `rounded-xl` (`12px`)
- **Borders Over Shadows**: Establish hierarchy with crisp 1px borders and surface contrast. Avoid floating drop shadows and never use colored glows.
- **Restrained Blur**: Backdrop blur is allowed only on the fixed top navbar (`bg-white/85 backdrop-blur-md`) for scroll legibility. Never apply glassmorphism to cards, modals, or buttons.
- **Icons**: Functional cues only (navigation, file upload, disclosure chevrons, status checks). No decorative AI clichés (sparkles, stars, robots, lightning bolts).
- **Layout & Spacing**: Max container width `1440px` (scaling cleanly at `3xl`/`4xl` breakpoints), 12-column responsive grid, minimum `44px` touch targets on all interactive controls, and clear visible `:focus-visible` outlines (`blue-600`).

## Copy & Interaction Rules

- **CTAs**: Action-specific and grounded ("Become an early partner", "Ask about this", "See the platform"). Avoid generic labels ("Get Started", "Learn More").
- **Punctuation**: No em dashes in UI copy; use commas, colons, periods, or parentheses.
- **Honesty**: Every stat, sample pack, or claim must be real or explicitly marked as a sample/placeholder.
