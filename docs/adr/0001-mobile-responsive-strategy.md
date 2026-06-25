# 1. Mobile responsive strategy

- Status: accepted
- Date: 2026-06-24

## Context

The homepage was built as a desktop **full-page snap-scroll**: each section was
`h-screen`/`min-h-screen` + `snap-mandatory` + `justify-center`. That paradigm is correct on
desktop but broke on phones in four ways:

1. `h-screen`/`min-h-screen` resolve to `100vh`, the viewport _behind_ mobile browser chrome, so
   every snap panel was taller than the visible area and section bottoms hid under the address bar.
2. The hard-height hero centred more content than fit, trapping the overflow off-screen where it
   could not be reached.
3. `snap-mandatory` fought the reader whenever a panel exceeded the viewport.
4. The scroll root had no horizontal-overflow guard, so any child that overflowed (most often the
   non-wrapping tech-badge row in a card) produced a horizontal scrollbar.

## Decision

Keep the snap-scroll experience on `md+`; on mobile fall back to a natural scrolling document.

Rules every future change must follow:

1. **Always `dvh`, never `vh`** for full-height. Use `min-h-dvh` for content-driven panels and
   `h-dvh` only for genuinely single-screen pages (e.g. the resume viewer).
2. **`Section` (`src/routes/index.tsx`) is the single source of truth** for homepage panel layout.
   Add sections through it, not with ad-hoc `<section>` wrappers, so the responsive behaviour stays
   in one place.
3. **Snap is gated to `md+`.** The snap container + inner scroller live on `<main>` behind `md:`
   (`md:h-dvh md:snap-y md:snap-mandatory md:overflow-y-auto`). Mobile scrolls as a normal document.
4. **The scroll root carries `overflow-x-hidden`** and mobile must have **no horizontal scroll**.
   Content must fit, not be clipped: prefer wrapping/`min-w-0` over relying on the guard. Cards wrap
   their badge rows on mobile (`flex-wrap md:flex-nowrap`) for exactly this reason.
5. **Embedded PDFs (`<object>`) render blank on most mobile browsers.** Gate them to `md+` and offer
   a mobile fallback that opens the PDF in a new tab or downloads it (see `src/routes/resume.tsx`).
6. **Primary icon buttons are ≥44px on mobile** (`size-11 md:size-9`).

## Consequences

- Desktop is unchanged. Mobile flows naturally, never clips, and has no horizontal scroll.
- Verify mobile changes at ~360px (no clipping, no horizontal scrollbar) and re-check `md+` for the
  snap experience.
