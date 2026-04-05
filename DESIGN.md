# Design System — WorshipBuddy

## Product Context
- **What this is:** A marketing site for WorshipBuddy, a suite of three free tools for church worship teams
- **Who it's for:** Worship leaders, church admins, volunteer team coordinators — technically literate people frustrated by legacy church software
- **Space/industry:** Church/worship software (competitors: Planning Center Online, Elvanto, ChurchTrac)
- **Project type:** Marketing site (Next.js 13 + Tailwind CSS)
- **Mission:** 501(c)(3) nonprofit — free forever, no ads, no in-app purchases

## Aesthetic Direction
- **Direction:** Clean Technical + Mission Warmth
- **Decoration level:** Minimal — typography and structure do all the work
- **Mood:** "Looks like serious software. Feels like it was built by people who care." — credible, precise, warm. Not pastoral, not corporate. The spiritual connection lives in the copy and mission, not the UI chrome.
- **Key insight:** Every worship software product looks like a church website. WorshipBuddy's users also use Notion, Linear, and Figma — they want tools that look and work like real software, not clipart-heavy ministry portals.
- **Reference sites:** tailscale.com (per-product color system, clean nav, monospace accents, footer with ruled separators), owner.com (editorial warmth, bold headlines, real-content focus)

## Typography

- **Display/Hero:** Instrument Serif (Google Fonts) — warmth and soul for big moments. The serif/mono contrast IS the visual signature. Used for hero headlines, section titles, pull quotes.
  - Load: `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap`
- **Body/UI:** Satoshi (Fontshare) — clean, modern grotesque. Not Poppins-tier generic. Used for all body copy, UI labels, buttons, nav.
  - Load: `https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap`
- **Monospace accent:** JetBrains Mono (Google Fonts) — product tags, nav labels, version numbers, key stats, technical callouts. The "tech shop" signal.
  - Load: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap`
- **Code:** JetBrains Mono (same as accent)
- **Never use as primary:** Inter, Poppins, Roboto, Montserrat, system-ui as a deliberate choice

### Type Scale
| Token   | Size  | Weight | Font             | Use |
|---------|-------|--------|------------------|-----|
| hero    | 80px  | 400    | Instrument Serif | Homepage H1 |
| display | 52px  | 400    | Instrument Serif | Section headings |
| title   | 36px  | 400    | Instrument Serif | Sub-section headings |
| heading | 24px  | 600    | Satoshi          | Card headings, panel titles |
| body-lg | 18px  | 400    | Satoshi          | Lead paragraphs |
| body    | 16px  | 400    | Satoshi          | Standard body |
| body-sm | 14px  | 400    | Satoshi          | Supporting copy |
| label   | 13px  | 500    | Satoshi          | UI labels |
| mono-md | 13px  | 500    | JetBrains Mono   | Nav items, product tags |
| mono-sm | 11px  | 500    | JetBrains Mono   | Eyebrow labels, badges, footer headings |

## Color

### Global Palette
| Token       | Hex       | Usage |
|-------------|-----------|-------|
| `--bg`      | `#FAFAF9` | Page background — warm white, not clinical |
| `--surface` | `#F4F4F0` | Card backgrounds, hover states |
| `--border`  | `#E4E4E7` | All borders and dividers |
| `--text`    | `#18181B` | Primary text — warm near-black (Zinc 900) |
| `--muted`   | `#71717A` | Secondary text, placeholders (Zinc 500) |
| `--dark`    | `#0F172A` | Footer, dark sections (Slate 950) |

### Per-Product Colors
| Product          | Token  | Hex       | Light bg    | Dark        | Rationale |
|------------------|--------|-----------|-------------|-------------|-----------|
| WorshipBuddy     | `--wb` | `#0C245E` | `#DCE4F8`   | `#0A1A45`   | Deep navy — serious, trustworthy, focused. AAA contrast (18.4:1) on all backgrounds |
| ChurchBuddy      | `--cb` | `#0B7261` | `#CCE9E4`   | `#074F43`   | Sage teal — organic, life-giving, community. Derived from #032224. AA pass (5.3:1) |
| PresenterBuddy   | `--pb` | `#1E6B8A` | `#D0E9F2`   | `#134F67`   | Deep Horizon teal — muted, sophisticated, stage-depth. Distinct blue-teal vs CB's green-teal. AA pass (5.1:1) |

### Semantic Colors
| State   | Hex       | Background | Text      |
|---------|-----------|------------|-----------|
| Success | `#22C55E` | `#F0FDF4`  | `#166534` |
| Warning | `#F59E0B` | `#FFFBEB`  | `#92400E` |
| Error   | `#EF4444` | `#FEF2F2`  | `#991B1B` |
| Info    | `#3B82F6` | `#EFF6FF`  | `#1E40AF` |

### Dark Mode Strategy
- Redesign surfaces (don't just invert): `--bg` → `#0F172A`, `--surface` → `#1E293B`
- Reduce saturation of product colors 10-15% in dark mode
- Keep borders subtle: `rgba(255,255,255,0.08)` on dark backgrounds
- Footer `--dark` becomes the page background in dark mode

### Anti-patterns — never use
- Purple/violet gradients as default accent
- Gradient buttons (use flat color)
- Gradient text (use solid product color or dark)
- 3-column icon grids with colored circle icons
- `background: linear-gradient(...)` in hero sections

## Spacing

- **Base unit:** 8px
- **Density:** Comfortable — generous enough to signal quality, tight enough to show data
- **Max content width:** 1280px (`max-w-7xl` in Tailwind)

| Token | Value | Tailwind |
|-------|-------|----------|
| 2xs   | 4px   | `p-1`    |
| xs    | 8px   | `p-2`    |
| sm    | 16px  | `p-4`    |
| md    | 24px  | `p-6`    |
| lg    | 32px  | `p-8`    |
| xl    | 48px  | `p-12`   |
| 2xl   | 64px  | `p-16`   |
| 3xl   | 96px  | `p-24`   |

### Section Padding
- Standard sections: `py-24` (96px) desktop, `py-16` (64px) mobile
- Hero: `pt-32 pb-24` desktop
- Footer: `py-16` desktop

## Layout

- **Approach:** Grid-disciplined for product sections, editorial for hero
- **Grid:** 12-column, 32px gutters
- **Max width:** 1280px with 32px side padding
- **Border radius:** sm(4px) md(8px) lg(12px) xl(16px) — no `rounded-full` on cards or sections, only on pills/badges
- **Box shadow:** Use sparingly — only on cards on hover, modals

### Key Layout Patterns

**Nav:**
- White background with `border-bottom: 1px solid var(--border)`
- Logo left (wordmark + logomark), product links center in JetBrains Mono, CTA right
- Height: 60px
- Sticky with `backdrop-filter: blur(12px)` on scroll

**Product tabs (Tailscale-style):**
- Horizontal tab bar with `border-bottom` rule
- Active tab: colored background swatch + matching `border-bottom` in product color
- Content panel below with 2-column text + product mockup
- Tab transitions: 150ms ease

**Footer:**
- Background: `var(--dark)` (#0F172A)
- Column section titles in JetBrains Mono, 11px, uppercase, with `border-bottom: 1px solid rgba(255,255,255,0.08)` under each title — this is the Tailscale-style line detail
- 4-column grid: Brand + description / Products / Resources / Legal
- Bottom bar with copyright in mono + legal links

## Motion

- **Approach:** Intentional — only transitions that aid comprehension, no decoration for its own sake
- **Easing:** enter(`ease-out`) exit(`ease-in`) move(`ease-in-out`)
- **Duration scale:**
  - micro: 50-100ms (hover states, button presses)
  - short: 150-250ms (tab transitions, tooltips)
  - medium: 250-400ms (panel reveals, menu open)
  - long: 400-600ms (page entrance animations)
- **Scroll animations:** Subtle fade-in-up (20px, 0.5s ease-out) — keep via framer-motion
- **Never:** Parallax, looping animations in content areas, animation that delays content

## Tailwind Config Updates Needed

```js
// tailwind.config.js changes:
fontFamily: {
  heading: ['"Instrument Serif"', 'Georgia', 'serif'],
  sans:    ['Satoshi', 'system-ui', 'sans-serif'],
  mono:    ['"JetBrains Mono"', '"Courier New"', 'monospace'],
},
colors: {
  // Per-product color system:
  wb:   { DEFAULT: '#0C245E', light: '#DCE4F8', dark: '#0A1A45' },
  cb:   { DEFAULT: '#0B7261', light: '#CCE9E4', dark: '#074F43' },
  pb:   { DEFAULT: '#1E6B8A', light: '#D0E9F2', dark: '#134F67' },
  zinc: { /* keep Tailwind defaults */ },
  surface: { DEFAULT: '#FAFAF9', card: '#F4F4F0' },
  dark: '#0F172A',
},
```

## Decisions Log

| Date       | Decision | Rationale |
|------------|----------|-----------|
| 2026-04-03 | Instrument Serif for display type | Differentiates from every all-sans church software competitor. Serif + mono contrast IS the visual signature. |
| 2026-04-03 | Satoshi replaces Poppins + DM Sans | Poppins is heavily associated with generic SaaS; Satoshi is clean/modern without that baggage |
| 2026-04-03 | JetBrains Mono as accent | Signals "we're a tech shop" — monospace in nav/labels/badges gives a Tailscale-like precision feel |
| 2026-04-03 | Amber for ChurchBuddy | Every church app uses blues and purples. Amber signals community warmth, not enterprise cold |
| 2026-04-03 | Zero gradients policy | Gradients age badly and signal "2019 SaaS". Flat color blocks age better and look more confident |
| 2026-04-03 | Dark footer with ruled column separators | Direct reference to Tailscale footer pattern user identified as a design reference |
| 2026-04-03 | Full redesign (navy removed) | User approved full redesign — original navy #10245c replaced by per-product color system on neutral foundation |
| 2026-04-04 | WB color → #0C245E deep navy | Returned to a deep navy feel (intentionally close to the original #10245c); user confirmed this direction. Light: #DCE4F8, Dark: #0A1A45. AAA contrast. |
| 2026-04-04 | CB color → #0B7261 Sage Teal | Replaced amber with Sage Teal derived from #032224 hue. Warm, organic, community feel. Differentiates from PB's blue-teal direction. |
| 2026-04-04 | PB color → #1E6B8A Deep Horizon Teal | Replaced violet with a muted blue-teal. Sophisticated, desktop-native feel appropriate for a macOS/Windows app. Distinct from CB's green-teal. |
