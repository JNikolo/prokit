/**
 * @file JerseyCanvas.tsx
 * @description Main display area for the interactive jersey visualization.
 * Handles the background aesthetics and view toggles for the 3D-like SVG model.
 */
import React from "react";
import SoccerJersey from "./SoccerJersey";
import { JerseyConfig, ViewMode } from "../types";

interface JerseyCanvasProps {
  config: JerseyConfig;
  onViewChange: (view: ViewMode) => void;
}

const JerseyCanvas: React.FC<JerseyCanvasProps> = ({
  config,
  onViewChange,
}) => {
  return (
    <main className="flex-1 relative flex items-center justify-center p-4 lg:p-16 bg-slate-100 overflow-hidden transition-all duration-300 h-full">
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
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative w-full h-full max-w-4xl flex flex-col items-center justify-center gap-6 lg:gap-12">
        {/* Visual Indicator - Top center on mobile, removed from dekstop */}
        <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 bg-white/60 backdrop-blur-xl border border-white/20 rounded-full px-5 py-1.5 text-[9px] font-black uppercase tracking-[0.25em] text-slate-600 z-10 shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-700">
          <span
            className={`w-1.5 h-1.5 rounded-full ${config.view === ViewMode.FRONT ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"} animate-pulse`}
          ></span>
          <span>{config.view} VIEW</span>
        </div>

        {/* Jersey Display Area - Critical to ensure it fills available space correctly */}
        <div className="relative w-full h-[55%] lg:h-[65%] flex items-center justify-center drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] filter transform transition-all duration-1000 ease-out hover:scale-[1.02]">
          <SoccerJersey config={config} />
        </div>

        {/* Responsive View Toggle Buttons */}
        <div className="flex flex-col items-center gap-4 lg:gap-6 z-10 w-full max-w-sm px-4 lg:px-0">
          <div className="bg-white/40 backdrop-blur-xl p-1.5 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 flex gap-1.5 w-full">
            <button
              onClick={() => onViewChange(ViewMode.FRONT)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 lg:py-4 rounded-2xl text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                config.view === ViewMode.FRONT
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]"
                  : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
              }`}
            >
              Front
            </button>
            <button
              onClick={() => onViewChange(ViewMode.BACK)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 lg:py-4 rounded-2xl text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                config.view === ViewMode.BACK
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]"
                  : "text-slate-500 hover:bg-white/60 hover:text-slate-900"
              }`}
            >
              Back
            </button>
          </div>

          {/* Desktop Only Features */}
          <div className="hidden lg:flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-40 hover:opacity-100 transition-opacity duration-500">
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
  );
};

export default JerseyCanvas;
