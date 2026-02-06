# ProKit Studio 👕

ProKit Studio is a high-fidelity, CSS-enhanced vector jersey customization suite. It allows users to design and preview soccer jerseys in real-time with various patterns, colors, and personalization options.

## 🚀 Features

- **Real-time Preview**: Instant visualization of design changes on a high-fidelity SVG jersey model.
- **Dynamic Patterns**: Support for multiple jersey patterns (Stripes, Hoops, Gradient, Half, Chevron).
- **Personalization**: Custom player names and numbers with real-time SVG text rendering.
- **Hardware Accelerated**: Uses CSS Variables and hardware-accelerated transforms for smooth interactions.
- **AI-Powered Design**: (Experimental) Integration with Google Gemini for generating designs from natural language prompts.
- **Print Support**: Dedicated print styles for exporting design specifications.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **AI**: [Google Gemini API](https://ai.google.dev/)

## 📂 Project Structure

- `src/`: Root of the application source code.
- `components/`: UI components for jersey visualization, layout, and design controls.
- `services/`: Service layers (AI generation) and external integrations.
- `types.ts`: Centralized TypeScript definitions for the application state.
- `index.html`: Application entry point and layout with CSS-driven jersey rendering logic.
- `index.css`: Tailwind CSS entry point and global styling.
- `vite.config.ts`: Vite build and development server configuration.

## 📥 Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 🎨 CSS-Driven Design

The project uses a hybrid approach where the jersey's visual state is driven by CSS variables and data attributes on the SVG container. This ensures high performance and decouples the React state from the complex SVG rendering logic.
