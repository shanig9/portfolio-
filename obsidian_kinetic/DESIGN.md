---
name: Obsidian Kinetic
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#d1bcff'
  on-secondary: '#3c0090'
  secondary-container: '#7000ff'
  on-secondary-container: '#ddcdff'
  tertiary: '#eef9ff'
  on-tertiary: '#003543'
  tertiary-container: '#a0e5ff'
  on-tertiary-container: '#006881'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d1bcff'
  on-secondary-fixed: '#23005b'
  on-secondary-fixed-variant: '#5700c9'
  tertiary-fixed: '#b7eaff'
  tertiary-fixed-dim: '#4cd6ff'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#004e60'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 80px
    fontWeight: '300'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '300'
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 44px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style
This design system is engineered for a high-end ML and Business Analyst portfolio, projecting an image of technical precision and cinematic sophistication. The brand personality is "The Architect of Intelligence"—analytical yet visionary. 

The aesthetic blends **Glassmorphism** with **Futuristic Minimalism**. It utilizes deep, obsidian-layered backgrounds to create an infinite sense of depth, punctuated by high-frequency neon accents that signify data energy and algorithmic life. The emotional response should be one of awe, trust, and "future-readiness." 

Key characteristics include:
- **Cinematic Depth:** Using blurred background orbs and translucent glass layers to create a multi-dimensional workspace.
- **Precision Engineering:** Sharp execution of borders and alignment to mirror the meticulous nature of machine learning and data analysis.
- **High-Contrast Accents:** Using light and color as functional indicators rather than just decoration.

## Colors
The palette is rooted in a "True Dark" philosophy. The base is not a flat black but an ultra-deep obsidian (#050505) to ensure OLED screens provide infinite contrast.

- **Primary (Cyber Blue):** Used for primary actions, success states, and data visualization highlights.
- **Secondary (Electric Purple):** Used for secondary interactions, luxury accents, and gradient transitions.
- **Surface Tints:** All glass surfaces use a highly desaturated white at extremely low opacity (3-5%) to create the frosted effect without washing out the dark background.
- **Gradients:** Linear gradients should flow from Electric Purple to Cyber Blue at a 135-degree angle for a kinetic, forward-leaning feel.

## Typography
The typography system relies on a dramatic scale contrast. **Sora** provides the futuristic, geometric structure for headlines, while **Inter** ensures maximum legibility for dense technical insights. **JetBrains Mono** is introduced for technical metadata, code snippets, and "system" labels to reinforce the ML engineering theme.

- **Headlines:** Use Light (300) or Regular (400) weights for a sleek, premium look. Avoid heavy weights for large text.
- **Body:** Stick to a tight, focused rhythm. Use 1.5x line height for optimal readability on dark backgrounds.
- **Labels:** Always uppercase with generous letter spacing to evoke a "HUD" (Heads-Up Display) feel.

## Layout & Spacing
The layout follows a strict 12-column grid to maintain a "technical" and "calculated" appearance. 

- **Generous Verticals:** Sections are separated by large gaps (160px+) to allow the glass elements and background blurs to breathe, maintaining a premium feel.
- **The "Safe Zone":** Content should generally be centered in a 1280px max-width container, but background "data-streams" or decorative blurs can bleed to the edge of the viewport.
- **Grid Alignment:** All glass panels and internal elements must align strictly to the 8px base unit.

## Elevation & Depth
Depth is not communicated through shadows, but through **Tonal Stacking** and **Backdrop Filtration**.

1.  **Level 0 (Base):** Obsidian (#050505).
2.  **Level 1 (Sub-surface):** Background blurs (mesh gradients of Primary and Secondary colors at 10% opacity) behind the glass layers.
3.  **Level 2 (Glass Panels):** 3% white fill with a `backdrop-filter: blur(20px)`.
4.  **Level 3 (Interactive):** Elements that "glow." Instead of a shadow, use a `box-shadow` with the Primary color at 20-40% opacity and a large blur radius (30px+) to simulate light emission.

**Internal Borders:** Every glass container must have a 1px solid border at 10% white opacity. This "inner stroke" defines the physical edge of the glass against the dark background.

## Shapes
The shape language is "Sophisticated Softness." We avoid sharp 90-degree angles to keep the interface feeling modern and approachable, yet we avoid pill-shapes to maintain a professional, architectural structure.

- **Standard Radius:** 0.5rem (8px) for cards and inputs.
- **Large Radius:** 1rem (16px) for major glass sections.
- **Micro-interactions:** Buttons use the standard 8px radius, but may expand slightly on hover to simulate a "physical" press.

## Components
### Glowing CTA Buttons
Primary buttons use a solid Cyber Blue fill with black text. On hover, the button should trigger a peripheral glow (box-shadow) and a slight scale increase (1.02x). Secondary buttons use a transparent background with the 1px internal border.

### 3D-Tilt Skill Cards
Cards are glass panels. They should implement a subtle 3D tilt effect on mouse move, with the internal border brightness increasing where the "light source" hits the edge.

### Input Fields
Inputs are dark with only a bottom border (2px) that illuminates in a Primary-to-Secondary gradient when focused.

### Timeline Connectors
For the portfolio history, use 1px vertical lines with a "pulsing" dot indicator. The line should be a gradient that fades into transparency at the top and bottom.

### Data Chips
Small, low-profile badges using JetBrains Mono. They should have a subtle background tint of the Primary color (10% opacity) and no border.