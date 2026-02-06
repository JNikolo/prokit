/**
 * @file Header.tsx
 * @description Application header component for ProKit Studio.
 * Contains the logo, branding, and configuration toggle controls.
 */
import React from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between p-4 lg:p-6 bg-white border-b border-slate-100 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-black italic shadow-blue-200 shadow-lg text-sm lg:text-base">
          PK
        </div>
        <div>
          <h1 className="text-lg lg:text-xl font-black text-slate-900 tracking-tighter leading-none">
            PROKIT <span className="text-blue-600 italic">STUDIO</span>
          </h1>
          <p className="hidden lg:block text-slate-400 text-[9px] uppercase font-bold tracking-widest mt-1">
            Vector Jersey Suite
          </p>
        </div>
      </div>
      <button
        onClick={onToggleSidebar}
        className="p-2 lg:px-4 lg:py-2.5 text-slate-600 hover:bg-slate-50 rounded-xl transition-all flex items-center gap-2 group border border-transparent hover:border-slate-200"
        aria-label="Toggle Configuration"
      >
        <span className="hidden lg:block text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
          {isSidebarOpen ? "Close Config" : "Open Config"}
        </span>
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
          className="lg:w-5 lg:h-5"
        >
          {isSidebarOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>
    </header>
  );
};

export default Header;
