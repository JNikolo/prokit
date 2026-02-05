# UI Components 🏗️

This directory contains the React components that make up the ProKit Studio interface.

## 📦 Components

### `SoccerJersey.tsx`

The core visualization engine. It renders a high-fidelity SVG model of a soccer jersey.

- **Features**:
  - Front and Back view support.
  - Pattern rendering via SVG `<defs>` and CSS variables.
  - Interactive collar styles (Round, V-Neck, Polo).
  - Dynamic text placement for names and numbers.

### `ControlPanel.tsx`

The primary interaction hub for users.

- **Features**:
  - Color pickers for primary, secondary, and accent colors.
  - Pattern selection grid.
  - Personalization inputs for name and number.
  - Toggle switches for optional design elements (like the crest).

## 🛠️ Design Patterns

- **CSS Variable Injection**: Components inject state into the DOM via CSS variables (`--primary`, etc.) for efficient SVG styling.
- **Functional Components**: All components are built using React Functional Components with TypeScript for robust type safety.
