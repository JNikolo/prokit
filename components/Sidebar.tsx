import React from "react";
import ControlPanel from "./ControlPanel";
import { JerseyConfig } from "../types";

interface SidebarProps {
  config: JerseyConfig;
  onChange: (config: JerseyConfig) => void;
  isSidebarOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  config,
  onChange,
  isSidebarOpen,
  onClose,
}) => {
  return (
    <>
      {/* Backdrop for mobile modal */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-50 lg:z-20 bg-white border-slate-200 transition-all duration-500 ease-in-out flex flex-col h-full overflow-hidden shadow-2xl lg:shadow-none ${
          isSidebarOpen
            ? "w-[85vw] lg:w-[400px] border-r translate-x-0 opacity-100"
            : "-translate-x-full lg:translate-x-0 w-[85vw] lg:w-0 border-r-0 opacity-0 lg:opacity-100 overflow-hidden"
        }`}
      >
        {/* Mobile-only Close control */}
        <div className="lg:hidden flex items-center justify-end p-5 border-b border-slate-50 bg-slate-50/50">
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 bg-white rounded-xl shadow-sm border border-slate-100 transition-all active:scale-95"
            aria-label="Close configuration"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Configuration Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <div className="mb-8 lg:hidden">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-1">
              Configuration
            </h2>
            <p className="text-xl font-black text-slate-900 tracking-tight">
              Jersey Styles
            </p>
          </div>

          <ControlPanel config={config} onChange={onChange} />

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
    </>
  );
};

export default Sidebar;
