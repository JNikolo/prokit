
import React from 'react';
import { JerseyConfig, JerseyPattern, CollarType, ViewMode } from '../types';

interface ControlPanelProps {
  config: JerseyConfig;
  onChange: (config: JerseyConfig) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ config, onChange }) => {
  const updateField = (field: keyof JerseyConfig, value: any) => {
    onChange({ ...config, [field]: value });
  };

  const ColorInput = ({ label, field }: { label: string, field: keyof JerseyConfig }) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</label>
      <div className="flex items-center gap-2">
        <div className="relative group">
          <input 
            type="color" 
            value={config[field] as string}
            onChange={(e) => updateField(field, e.target.value)}
            className="w-10 h-10 rounded cursor-pointer border border-slate-200 p-0 overflow-hidden bg-transparent"
          />
        </div>
        <input 
          type="text" 
          value={config[field] as string}
          onChange={(e) => updateField(field, e.target.value)}
          className="text-sm font-mono border rounded px-2 py-1 w-full bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-8 overflow-y-auto max-h-[calc(100vh-100px)]">
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b pb-2">Kit Colors</h3>
        <div className="grid grid-cols-2 gap-4">
          <ColorInput label="Primary" field="primaryColor" />
          <ColorInput label="Secondary" field="secondaryColor" />
          <ColorInput label="Accent" field="accentColor" />
          <ColorInput label="Text" field="textColor" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Pattern Selection</label>
          <div className="grid grid-cols-3 gap-2">
            {Object.values(JerseyPattern).map((p) => (
              <button
                key={p}
                onClick={() => updateField('pattern', p)}
                className={`py-2 px-1 text-xs border rounded-lg capitalize transition-all ${config.pattern === p ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-600 hover:border-slate-300'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Collar Style</label>
          <div className="flex gap-2">
            {Object.values(CollarType).map((c) => (
              <button
                key={c}
                onClick={() => updateField('collarType', c)}
                className={`flex-1 py-2 text-xs border rounded-lg capitalize transition-all ${config.collarType === c ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-600 hover:border-slate-300'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b pb-2">Personalization</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Number</label>
            <input 
              type="text" 
              maxLength={2}
              value={config.backNumber}
              onChange={(e) => updateField('backNumber', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Name</label>
            <input 
              type="text" 
              value={config.backName}
              onChange={(e) => updateField('backName', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
        <span className="text-sm font-medium text-slate-700">Display Crest</span>
        <button 
          onClick={() => updateField('showCrest', !config.showCrest)}
          className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${config.showCrest ? 'bg-blue-600' : 'bg-slate-300'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${config.showCrest ? 'translate-x-6' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
