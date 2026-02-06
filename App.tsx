/**
 * @file App.tsx
 * @description Main application component for the ProKit Studio jersey customizer.
 * Refactored into modular components for improved scalability and responsiveness.
 */
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import JerseyCanvas from "./components/JerseyCanvas";
import { JerseyConfig, DEFAULT_CONFIG, ViewMode } from "./types";

/**
 * The root component of ProKit Studio.
 */
const App: React.FC = () => {
  // Global state for jersey configuration
  const [config, setConfig] = useState<JerseyConfig>(DEFAULT_CONFIG);
  // Sidebar state for mobile/medium screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handlers
  const handleConfigChange = (newConfig: JerseyConfig) => setConfig(newConfig);
  const handleViewChange = (view: ViewMode) => setConfig({ ...config, view });
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="h-screen w-full bg-slate-50 flex flex-col overflow-hidden relative font-sans">
      {/* 1. Header - Mobile Only */}
      <Header isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-row overflow-hidden relative">
        {/* Sidebar - Acts as Modal on mobile, Panel on desktop */}
        <Sidebar
          config={config}
          onChange={handleConfigChange}
          isSidebarOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        {/* Canvas - The jersey display area */}
        <JerseyCanvas config={config} onViewChange={handleViewChange} />
      </div>

      {/* Backdrop for mobile sidebar accessibility - redundant as it's in sidebar now, but keeping for reference if needed or removing */}
    </div>
  );
};

export default App;
