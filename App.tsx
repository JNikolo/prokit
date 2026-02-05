/**
 * @file App.tsx
 * @description Main application component for the ProKit Studio jersey customizer.
 * Manages the global jersey configuration state and orchestrates the UI layout.
 */
import React, { useState } from "react";
import SoccerJersey from "./components/SoccerJersey";
import ControlPanel from "./components/ControlPanel";
import { JerseyConfig, DEFAULT_CONFIG, ViewMode } from "./types";

/**
 * The root component of ProKit Studio.
 *
 * @returns {React.FC} The rendered application layout.
 */
const App: React.FC = () => {
  // Global state for jersey configuration (colors, patterns, personalization, etc.)
  const [config, setConfig] = useState<JerseyConfig>(DEFAULT_CONFIG);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200">
      {/* Main Canvas Area - Placed first in mobile for immediate visual impact */}
      <main className="flex-1 relative flex items-center justify-center p-6 md:p-12 overflow-hidden bg-slate-100 min-h-[500px] md:min-h-0 order-1 md:order-2">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative w-full max-w-2xl aspect-square flex flex-col items-center">
          {/* Visual Indicator of current view side */}
          <div className="absolute top-0 left-0 bg-white/80 backdrop-blur border rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-500 z-10 shadow-sm">
            {config.view} VIEW
          </div>

          <div className="w-full h-full drop-shadow-2xl filter transform transition-all duration-700 hover:scale-105 flex items-center justify-center">
            {/* The SVG Jersey Component */}
            <SoccerJersey config={config} />
          </div>

          {/* View Toggle Buttons */}
          <div className="mt-6 md:mt-8 bg-white p-1.5 md:p-2 rounded-2xl shadow-xl border flex gap-1 md:gap-2 z-10">
            <button
              onClick={() => setConfig({ ...config, view: ViewMode.FRONT })}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${config.view === ViewMode.FRONT ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"}`}
            >
              Front
            </button>
            <button
              onClick={() => setConfig({ ...config, view: ViewMode.BACK })}
              className={`px-6 md:px-8 py-2 md:py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${config.view === ViewMode.BACK ? "bg-blue-600 text-white shadow-lg" : "text-slate-500 hover:bg-slate-50"}`}
            >
              Back
            </button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-black text-slate-400 upper-case tracking-[0.2em]">
            <span>Hardware Accelerated</span>
            <span>CSS Variables Engine</span>
            <span>Instant Preview</span>
          </div>
        </div>
      </main>

      {/* Sidebar Navigation & Controls - Placed after content in mobile flow */}
      <aside className="w-full md:w-[420px] bg-white p-6 md:p-8 flex-shrink-0 z-20 order-2 md:order-1 overflow-y-auto">
        <header className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic shadow-blue-200 shadow-lg">
              PK
            </div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
              PROKIT <span className="text-blue-600 italic">STUDIO</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xs md:text-sm">
            CSS-Enhanced Vector Jersey Suite
          </p>
        </header>

        {/* Dynamic configuration inputs */}
        <ControlPanel config={config} onChange={setConfig} />

        <div className="mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-black transition-all hover:shadow-lg active:scale-[0.98]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect width="12" height="8" x="6" y="14" />
            </svg>
            Export Spec
          </button>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">
            &copy; 2026 ProKit Customizer
          </p>
        </footer>
      </aside>
    </div>
  );
};

export default App;
