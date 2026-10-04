---
name: AuthAPI
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#f7be1d'
  on-tertiary: '#3f2e00'
  tertiary-container: '#b68a00'
  on-tertiary-container: '#372700'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#ffdf9a'
  tertiary-fixed-dim: '#f7be1d'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4300'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  headline-md-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is centered on the principles of **Modern Minimalism** fused with **Functional Glassmorphism**. It is engineered for technical users—developers and security administrators—who require high legibility and precision without sacrificing a forward-thinking aesthetic.

The personality is professional, secure, and ethereal. It utilizes subtle background blurs and translucent layers to establish a clear information hierarchy, suggesting a lightweight yet powerful infrastructure. The user interface should feel like a high-performance dashboard: fast, responsive, and uncluttered. Visual interest is generated through light refraction effects and high-quality typography rather than heavy textures or illustrative flourishes.

## Colors

This design system defaults to a **Dark Mode** first approach to reduce eye strain for technical operators. The palette is anchored by deep Slates and Indigos.

- **Primary (#6366f1):** Used for primary actions, active navigation states, and brand-critical elements.
- **Secondary (#a855f7):** Reserved for "Admin" level designations and high-priority system alerts.
- **Tertiary (#eab308):** Used exclusively for high-privilege warnings or "Super Admin" status indicators.
- **Neutral (#0f172a):** The core background foundation.
- **Glass Accents:** All surface layers use a semi-transparent version of the slate palette (e.g., `rgba(30, 41, 59, 0.7)`) combined with a `backdrop-filter: blur(12px)`.

## Typography

The typography strategy leverages three distinct typefaces to balance aesthetics with technical utility:
1. **Geist** is used for headlines to provide a sharp, modern developer-centric feel.
2. **Inter** handles the bulk of the UI text, ensuring maximum readability and accessibility across all screen sizes.
3. **JetBrains Mono** is employed for labels, badges, and code snippets, reinforcing the "API-first" nature of the product.

All headings use a slight negative letter-spacing to appear more compact and professional. Labels and body text maintain standard spacing for clarity.

## Layout & Spacing

The design system utilizes a **Fluid Grid** approach with a modular 4px base unit. 

- **Desktop:** 12-column grid with a 1440px max-width. Content is centered with 48px outer margins.
- **Tablet:** 8-column grid with 24px margins.
- **Mobile:** 4-column grid with 16px margins.

Vertical rhythm is strictly maintained using the `md (16px)` and `lg (24px)` increments for grouping related components. Layouts should prefer `flex` and `gap` properties over fixed heights to allow for the dynamic scaling of RBAC permission lists.

## Elevation & Depth

Depth is established through **Backdrop Blurs** and **Inner Glows** rather than traditional drop shadows.

1.  **Level 0 (Floor):** Pure Slate (#0f172a).
2.  **Level 1 (Navigation/Sidebars):** Slight translucency (80% opacity) with a 4px blur.
3.  **Level 2 (Cards/Containers):** `backdrop-filter: blur(12px)`. A 1px border with 10% white opacity creates a "glass" edge.
4.  **Level 3 (Modals/Popovers):** Higher blur (20px) with a subtle 15% opacity primary color tint in the background to indicate high focus.

Interactive elements should use a soft 0 8px 32px rgba(0,0,0,0.3) shadow only when hovered to simulate physical lifting.

## Shapes

The design system adopts a **Rounded** shape language to soften the technical edge of the platform.

- **Buttons & Inputs:** Use the standard `rounded` (0.5rem) setting.
- **Cards & Modals:** Use `rounded-lg` (1rem) to define major structural blocks.
- **Badges/Roles:** Use `rounded-xl` (1.5rem) or fully pill-shaped to differentiate them from actionable buttons.

Geometric consistency is vital; avoid mixing sharp corners with rounded elements.

## Components

### Buttons
Primary buttons use a solid Indigo (#6366f1) fill with white text. Hover states trigger a subtle glow (`box-shadow: 0 0 15px rgba(99, 102, 241, 0.4)`) and a 200ms ease-in-out transition. Secondary buttons use a glass background with a thin 1px border.

### Sleek Form Inputs
Inputs feature a dark, semi-transparent background with a 1px border. On focus, the border transitions to the primary Indigo color, and the background blur intensity increases. Labels should be small, uppercase, and set in JetBrains Mono.

### Vibrant Badges (Roles)
- **User:** Soft blue background (`rgba(59, 130, 246, 0.1)`) with blue text.
- **Admin:** Soft purple background (`rgba(168, 85, 247, 0.1)`) with purple text.
- **Super Admin:** Soft gold/yellow background (`rgba(234, 179, 8, 0.1)`) with gold text.
All badges use JetBrains Mono for a "monospaced tag" look.

### Glassmorphism Cards
The primary container for RBAC lists and user profiles. Includes a `1px` border (top and left slightly brighter than bottom and right) to simulate a light source from the top-left.

### Additional Components
- **Permission Toggles:** Custom-styled switches using the primary Indigo color for the "on" state.
- **API Key Blocks:** Monospaced text inside a glass container with a "click to copy" micro-interaction.
- **Status Indicator:** Pulsing neon dots (Green for Active, Red for Revoked) to provide live system feedback.