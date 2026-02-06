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

### `Header.tsx`

Application header and navigation hub.

- **Features**:
  - ProKit Studio branding.
  - Interactive configuration toggle.
  - Responsive design for mobile and desktop views.

### `Sidebar.tsx`

Configuration container for the design studio.

- **Features**:
  - Modal behavior on mobile devices.
  - Side panel layout for desktop screens.
  - Hosts the `ControlPanel` for design adjustments.

### `JerseyCanvas.tsx`

Interactive stage for the jersey visualization.

- **Features**:
  - Visual stage for the `SoccerJersey` component.
  - Design-focused background aesthetics.
  - Front/Back view toggle controls.

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
