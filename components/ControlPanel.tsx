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
  <div className="flex flex-col gap-2 group">
    <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 shrink-0">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full rounded-2xl cursor-pointer border-0 p-0 overflow-hidden bg-transparent z-10 opacity-0"
        />
        <div
          className="w-full h-full rounded-2xl border-4 border-white shadow-[0_5px_15px_rgba(0,0,0,0.08)] transform transition-transform group-hover:scale-110 active:scale-95 duration-300"
          style={{ backgroundColor: value }}
        />
      </div>
      <div className="relative flex-1">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="#FFFFFF"
          className="w-full text-xs font-mono border border-slate-100 rounded-xl px-4 py-3 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300"
        />
      </div>
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

  const SectionHeader: React.FC<{ title: string; icon?: React.ReactNode }> = ({
    title,
    icon,
  }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-100/80 shadow-sm text-slate-500">
        {icon}
      </div>
      <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.25em]">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-100 to-transparent" />
    </div>
  );

  return (
    <div className="space-y-12 pb-8">
      {/* Kit Colors Section */}
      <section>
        <SectionHeader
          title="Color Palette"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19 7-7 3 3-7 7-3-3z" />
              <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
              <path d="m2 2 5 2.5" />
              <path d="m2 2 2.5 5" />
              <circle cx="11" cy="11" r="2" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-6">
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
            label="Typography"
            value={config.textColor}
            onChange={(val) => updateField("textColor", val)}
          />
        </div>
      </section>

      {/* Pattern & Style Section */}
      <section>
        <SectionHeader
          title="Pattern & Style"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
            </svg>
          }
        />

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Fabric Geometry
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.values(JerseyPattern).map((p) => (
                <button
                  key={p}
                  onClick={() => updateField("pattern", p)}
                  className={`py-3.5 px-1 text-[10px] font-black border-2 rounded-2xl capitalize transition-all duration-300 ${
                    config.pattern === p
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200"
                      : "bg-white text-slate-500 border-slate-50 hover:border-slate-200 hover:text-slate-900"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">
              Collar Construction
            </label>
            <div className="flex gap-2">
              {Object.values(CollarType).map((c) => (
                <button
                  key={c}
                  onClick={() => updateField("collarType", c)}
                  className={`flex-1 py-3.5 text-[10px] font-black border-2 rounded-2xl capitalize transition-all duration-300 ${
                    config.collarType === c
                      ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200"
                      : "bg-white text-slate-500 border-slate-50 hover:border-slate-200 hover:text-slate-900"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section>
        <SectionHeader
          title="Personalization"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <div className="sm:col-span-2 group">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2 px-1 group-focus-within:text-blue-600 transition-colors">
              Number
            </label>
            <input
              type="text"
              maxLength={2}
              value={config.backNumber}
              onChange={(e) => updateField("backNumber", e.target.value)}
              className="w-full border border-slate-100 rounded-2xl px-5 py-4 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-black text-xl text-slate-900"
            />
          </div>
          <div className="sm:col-span-3 group">
            <label className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-2 px-1 group-focus-within:text-blue-600 transition-colors">
              Player Name
            </label>
            <input
              type="text"
              value={config.backName}
              onChange={(e) => updateField("backName", e.target.value)}
              className="w-full border border-slate-100 rounded-2xl px-5 py-4 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-bold text-slate-900 uppercase tracking-widest"
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="p-1 rounded-[2rem] bg-gradient-to-br from-slate-100 to-white shadow-inner border border-slate-100">
        <div className="flex items-center justify-between p-6 bg-white rounded-[1.8rem] border border-slate-50 shadow-sm transition-all hover:shadow-md group">
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${config.showCrest ? "bg-blue-50 text-blue-600 shadow-blue-100" : "bg-slate-50 text-slate-400"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-black text-slate-900 uppercase tracking-[0.1em] block">
                Team Crest
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5 block">
                Official Branding
              </span>
            </div>
          </div>
          <button
            onClick={() => updateField("showCrest", !config.showCrest)}
            className={`w-14 h-8 rounded-full transition-all relative focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${config.showCrest ? "bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-200"}`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${config.showCrest ? "translate-x-6 scale-110" : "scale-90 opacity-80"}`}
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ControlPanel;
