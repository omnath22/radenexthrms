---
version: alpha
name: RadeNext HRMS
description: A clear, confident HR technology brand that makes people operations feel modern, connected, and easy to read.
colors:
  primary: "#365CF5"
  primary-strong: "#2547D0"
  accent: "#20B7C8"
  ink: "#15233A"
  muted: "#66748A"
  background: "#F6F8FC"
  surface: "#FFFFFF"
  surface-soft: "#EEF3FB"
  border: "#DDE5F0"
  success: "#27866E"
typography:
  sans:
    fontFamily: "'Manrope', 'Segoe UI', sans-serif"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace"
rounded:
  DEFAULT: "0.5rem"
  sm: "0.25rem"
  md: "0.5rem"
  lg: "0.75rem"
spacing:
  section-gap: "5rem"
  page-max: "77.5rem"
components:
  button: { }
  card: { }
  dashboard-preview: { }
---

# RadeNext HRMS Design System

## Overview

### Creative North Star

Present RadeNext as a people-first enterprise HR platform: the calm clarity of a well-designed operations console, with the confidence and energy of modern cloud software. Keep the marketing shell warm enough to feel human, while product previews remain precise, bright, and information-rich.

### Product context and register

- **Audience and primary job:** People teams and growing organizations coordinating employee records, time, leave, payroll, hiring, and workforce insight.
- **Target market(s) and evidence:** Broad English-language SaaS audience; the project brief specifies enterprise HRMS but no country or regulatory market.
- **Locale(s) and language policy:** English copy with system fallbacks; format examples consistently and label all sample people and content as illustrative.
- **Usage scene:** Marketing site across laptop, tablet, and mobile; the hero embeds a local, responsive product demo with in-place HR workflows and sample data.
- **Register:** Hybrid brand landing page and product preview. Brand sections can tell the story; product UI prioritizes legibility and familiarity.
- **Memorable signature:** A strong cobalt signal and generous, crisp sans typography carried from brand message into an interactive product preview.
- **Restraint:** Keep product details readable, use one dominant CTA, and avoid treating every content block as a card.
- **Anti-references:** Heritage-luxury serif typography, muted forest palettes, eco-brand imagery, tiny all-caps UI, and generic purple-gradient SaaS templates.
- **Token ownership/runtime mapping:** This file documents durable visual intent. Runtime values are implemented by `:root` custom properties and scoped overrides in `styles.css`; keep those values aligned when changing the system.

## Colors

Use cobalt `--primary` for the main action, active navigation, links, and chart emphasis. Cyan `--accent` is a secondary data signal. Deep navy carries headings and dark story sections. Use cool near-white backgrounds, white product surfaces, and clear slate borders. Reserve green for semantic success states. Keep text contrast high and never make labels depend on color alone.

## Typography

Use Manrope throughout, with Segoe UI and system sans fallbacks. Use bold, compact sans headings instead of a contrasting display serif. Body copy should remain comfortable at 15–17px; navigation and section labels should remain at least 11px. Product preview labels may be denser than marketing copy, but should stay legible at normal desktop zoom. Use normal rather than italic display emphasis.

## Layout

Use a centered content width near 1240px with fluid gutters. Alternate the editorial text and product-preview balance across sections. Breakpoints at 1100px, 800px, and 560px adapt content order, nav, tables, and previews. Keep small product tables horizontally scrollable instead of compressing values until they become unreadable.

## Elevation & Depth

Prefer thin cool-gray borders and subtle neutral shadows. Use stronger shadows only for floating previews or overlays. Dark sections use navy rather than green; elevated product interfaces use white surfaces on lightly tinted blue-gray backdrops.

## Shapes

Use compact 4–8px corner radii for controls, dashboard panels, and product windows. Buttons use a restrained rectangular shape. Use round avatars and status dots only where the content calls for them.

## Components

### Foundational visual states

Provide visible focus rings, clear hover feedback, selected states with both color and shape/background changes, and distinct semantic success, warning, and error colors. Hover and focus must not shift layout.

### Buttons and actions

Primary actions use solid cobalt with clear text; secondary actions are text links or quiet outlines. Maintain consistent height, padding, and icon spacing. Keep primary CTAs visually distinct from navigation links.

### Navigation and data display

Keep the sticky navigation compact but readable. Product previews share a navy/white/slate/cobalt language, with blue charts and semantic status colors. Preserve table column meaning on narrow viewports through horizontal scrolling.

### Iconography

Use small typographic symbols sparingly in the current CSS-only prototype; label meaningful controls in text and provide accessible names for icon-only actions. Avoid emoji iconography.

### Motion

Use short, smooth reveal and hover transitions; keep the dashboard tilt subtle and disable nonessential movement under `prefers-reduced-motion`.

### Content and data visualization

Use concise, plain-language HR terms. Product people and figures are sample data, not customer claims. Use cobalt for primary series and a contrasting cyan or neutral series; include text labels for chart context.

## Do's and Don'ts

- **Do:** Make people operations feel clear, current, and trustworthy.
- **Do:** Keep every interface label readable at normal zoom.
- **Don't:** Use heritage serif headlines or an all-forest/olive palette.
- **Don't:** Present sample customer logos, endorsements, or compliance claims as real.
