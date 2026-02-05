/**
 * @file vite.config.ts
 * @description Vite configuration for the ProKit Studio project.
 * Includes React support and Tailwind CSS integration via the Vite plugin.
 */
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
