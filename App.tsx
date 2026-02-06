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
    <div className="h-screen w-full bg-slate-50 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-200 overflow-hidden">
      {/* Sidebar Navigation & Controls - Left side in desktop */}
      <aside className="w-full md:w-[400px] bg-white flex flex-col z-20 order-2 md:order-1 h-1/2 md:h-full">
        <div className="p-6 md:p-8 flex-shrink-0 border-b border-slate-100/50">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black italic shadow-blue-200 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform cursor-default">
              PK
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-none">
                PROKIT <span className="text-blue-600 italic">STUDIO</span>
              </h1>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">
                Vector Jersey Suite
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic configuration inputs - Scrollable area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <ControlPanel config={config} onChange={setConfig} />

          <div className="mt-10 pt-8 border-t border-slate-100">
            <button
              onClick={() => window.print()}
              className="w-full h-14 flex items-center justify-center gap-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-[0.98] group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:rotate-12 transition-transform"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Export Specification
            </button>
          </div>

          <footer className="mt-10 pb-4 text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
              &copy; 2026 ProKit Customizer &bull; Ver 1.4.2
            </p>
          </footer>
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="flex-1 relative flex items-center justify-center p-8 md:p-16 bg-slate-100 overflow-hidden order-1 md:order-2 h-1/2 md:h-full">
        {/* Designer Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-100/0 via-slate-100/50 to-slate-200/80"></div>

          {/* Subtle Decorative Accents */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative w-full h-full max-w-4xl flex flex-col items-center justify-center gap-8 md:gap-12">
          {/* Visual Indicator of current view side - Relocated to top right */}
          <div className="absolute top-0 right-0 bg-white/40 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2 text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 z-10 shadow-sm flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-1000">
            <div className="flex flex-col items-end">
              <span className="text-slate-300 text-[7px] mb-0.5">
                ACTIVE WORKSPACE
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${config.view === ViewMode.FRONT ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"} animate-pulse`}
                ></span>
                <span className="text-slate-600 font-black">
                  {config.view} VIEW
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[65%] flex items-center justify-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] filter transform transition-all duration-1000 ease-out hover:scale-[1.02]">
            {/* The SVG Jersey Component */}
            <SoccerJersey config={config} />
          </div>

          {/* View Toggle Buttons */}
          <div className="flex flex-col items-center gap-6 z-10 w-full max-w-sm">
            <div className="bg-white/40 backdrop-blur-xl p-2 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 flex gap-2 w-full">
              <button
                onClick={() => setConfig({ ...config, view: ViewMode.FRONT })}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  config.view === ViewMode.FRONT
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]"
                    : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setConfig({ ...config, view: ViewMode.BACK })}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                  config.view === ViewMode.BACK
                    ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]"
                    : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                Back
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
              {[
                "Hardware Accelerated",
                "SVG Geometry Engine",
                "Instant Preview",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-[9px] font-black text-slate-600 uppercase tracking-[0.2em]"
                >
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
