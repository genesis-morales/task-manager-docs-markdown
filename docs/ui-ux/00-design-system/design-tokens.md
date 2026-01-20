# TaskFlow Design Tokens

**Version**: 1.0.0  
**Last Updated**: November 25, 2025  
**Status**: ✅ Approved

## Overview

Design tokens are the core visual properties of the TaskFlow design system. They ensure consistency across all components and pages.

## Color Palette

### Primary Colors
- **Primary**: `#1E5AEE` - Brand color, primary buttons, active states
- **Success**: `#4CAF50` - Completed tasks, positive indicators
- **Warning**: `#FFC107` - Medium priority, warnings
- **Error**: `#F44336` - High priority, errors, alerts

### Background Colors (Dark Theme)
- **BG Dark**: `#0F1419` - Main application background
- **BG Card Dark**: `#1C2128` - Cards, panels, elevated surfaces

### Text Colors
- **Text Primary (Light)**: `#E7E9EA` - Main text on dark (13.8:1 contrast ✅ AAA)
- **Text Secondary**: `#8C9196` - Muted text, descriptions (5.2:1 contrast ✅ AA)

### UI Elements
- **Border**: `#2D3139` - Card borders, dividers

## Typography

### Font Family
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;


### Type Scale

| Size | Usage |
|------|-------|
| 12px | Small captions, helper text |
| 14px | Body text, descriptions |
| 16px | Default text, labels |
| 22px | Section headers |
| 32px | Page titles |
| 36px | Statistics, large numbers |

### Font Weights
- **Regular (400)** - Body text
- **Medium (500)** - Emphasized text
- **Semibold (600)** - Subheadings
- **Bold (700)** - Headings, important text

## Spacing System

Based on 4px grid:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Related elements |
| md | 12px | Component internal |
| base | 16px | Standard spacing |
| lg | 24px | Section separation |
| xl | 32px | Major sections |
| 2xl | 48px | Page margins |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| sm | 4px | Badges, small elements |
| md | 8px | Buttons, inputs |
| lg | 12px | Cards, modals |
| full | 24px | Pills, rounded buttons |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| sm | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| md | `0 4px 6px rgba(0,0,0,0.1)` | Cards, dropdowns |
| lg | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |

## Accessibility

All color combinations meet WCAG 2.1 AA standards:
- ✅ Normal text: 4.5:1 minimum contrast ratio
- ✅ Large text: 3.0:1 minimum contrast ratio
- ✅ UI components: 3.0:1 minimum contrast ratio

## Implementation

See:
- Technical implementation: [Ant Design Theme](../theme/antd-theme.ts)
- Accessibility validation: [Accessibility Audit](../accessibility/accessibility-audit-plan.md)

## References

- [Ant Design Theming](https://ant.design/docs/react/customize-theme)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Inter Font](https://rsms.me/inter/)
