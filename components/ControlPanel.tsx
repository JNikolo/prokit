/**
 * @file ControlPanel.tsx
 * @description UI component providing design controls for customizing the jersey.
 */
import React from "react";
import { JerseyConfig, JerseyPattern, CollarType } from "../types";

/**
 * Props for the ControlPanel component.
 */
interface ControlPanelProps {
  /** The current jersey configuration state. */
  config: JerseyConfig;
  /** Callback function to update the configuration. */
  onChange: (config: JerseyConfig) => void;
}

/**
 * Helper sub-component for rendering a color picker with a manual hex input.
 * Modularized to improve re-render performance and maintainability.
 */
const ColorInput: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
}> = ({ label, value, onChange }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
      {label}
    </label>
    <div className="flex items-center gap-2">
      <div className="relative group w-11 h-11 shrink-0">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full rounded-lg cursor-pointer border border-slate-200 p-0 overflow-hidden bg-transparent z-10 opacity-0"
        />
        <div
          className="w-full h-full rounded-lg border border-slate-200 shadow-sm"
          style={{ backgroundColor: value }}
        />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="#FFFFFF"
        className="text-xs font-mono border border-slate-200 rounded-lg px-3 py-2.5 w-full bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
      />
    </div>
  </div>
);

/**
 * A sidebar component containing inputs for colors, patterns, and personalization.
 */
const ControlPanel: React.FC<ControlPanelProps> = ({ config, onChange }) => {
  const updateField = (field: keyof JerseyConfig, value: any) => {
    onChange({ ...config, [field]: value });
  };

  return (
    <div className="space-y-10">
      {/* Kit Colors Section */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
            Base Colors
          </h3>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-2 xs:grid-cols-2 gap-x-4 gap-y-5">
          <ColorInput
            label="Primary"
            value={config.primaryColor}
            onChange={(val) => updateField("primaryColor", val)}
          />
          <ColorInput
            label="Secondary"
            value={config.secondaryColor}
            onChange={(val) => updateField("secondaryColor", val)}
          />
          <ColorInput
            label="Accent / Trim"
            value={config.accentColor}
            onChange={(val) => updateField("accentColor", val)}
          />
          <ColorInput
            label="Text / Details"
            value={config.textColor}
            onChange={(val) => updateField("textColor", val)}
          />
        </div>
      </section>

      {/* Pattern & Style Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
            Pattern & Cut
          </h3>
          <div className="h-px flex-1 bg-slate-100" />
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
            Jersey Pattern
          </label>
          <div className="grid grid-cols-3 gap-2">
            {Object.values(JerseyPattern).map((p) => (
              <button
                key={p}
                onClick={() => updateField("pattern", p)}
                className={`py-3 px-1 text-[10px] font-bold border rounded-xl capitalize transition-all ${config.pattern === p ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 active:scale-95"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em]">
            Collar Construction
          </label>
          <div className="flex gap-2">
            {Object.values(CollarType).map((c) => (
              <button
                key={c}
                onClick={() => updateField("collarType", c)}
                className={`flex-1 py-3 text-[10px] font-bold border rounded-xl capitalize transition-all ${config.collarType === c ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 active:scale-95"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="space-y-5">
        <div className="flex items-center gap-3">
          <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
            Personalization
          </h3>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="sm:col-span-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] block mb-2">
              Number
            </label>
            <input
              type="text"
              maxLength={2}
              value={config.backNumber}
              onChange={(e) => updateField("backNumber", e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-bold"
            />
          </div>
          <div className="sm:col-span-3">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] block mb-2">
              Player Name
            </label>
            <input
              type="text"
              value={config.backName}
              onChange={(e) => updateField("backName", e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all font-bold"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-200/60 shadow-inner">
        <div>
          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
            Display Crest
          </span>
          <span className="text-[10px] text-slate-500">
            Enable team branding
          </span>
        </div>
        <button
          onClick={() => updateField("showCrest", !config.showCrest)}
          className={`w-14 h-7 rounded-full transition-all relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 ${config.showCrest ? "bg-blue-600 shadow-blue-200 shadow-lg" : "bg-slate-300"}`}
        >
          <div
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out ${config.showCrest ? "translate-x-7" : ""}`}
          />
        </button>
      </section>
    </div>
  );
};

export default ControlPanel;
