
import React from "react";

const TerminalWindow: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(160,160,160,0.2)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[280px] h-[140px] bg-[rgba(31,41,59,0.9)] rounded-xl border border-white/10 overflow-hidden font-mono text-[11px] backdrop-blur-[10px] transition-all duration-300 ease-out group-hover:bg-[rgba(55,65,81,0.95)] group-hover:border-white/20 group-hover:scale-[1.02]">
        <div className="h-7 bg-[rgba(15,23,42,0.8)] flex items-center px-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] transition-all duration-300 ease-out group-hover:bg-[#ff6b6b] group-hover:shadow-[0_0_8px_rgba(255,95,87,0.5)]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] transition-all duration-300 ease-out group-hover:bg-[#ffd93d] group-hover:shadow-[0_0_8px_rgba(255,189,46,0.5)]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28ca42] transition-all duration-300 ease-out group-hover:bg-[#32d74b] group-hover:shadow-[0_0_8px_rgba(40,202,66,0.5)]"></span>
          </div>
        </div>
        <div className="p-3 text-[#e2e8f0]">
          <div className="mb-1 flex items-center">
            <span className="text-[#10b981] mr-2 group-hover:text-[#34d399] group-hover:text-shadow-[0_0_4px_rgba(16,185,129,0.4)]">user@mac:</span>
            <span className="text-[#3b82f6] group-hover:text-[#60a5fa] group-hover:text-shadow-[0_0_4px_rgba(59,130,246,0.4)]">npm start</span>
          </div>
          <div className="mb-1">
            <span className="text-[#94a3b8]">Server running on port 3000</span>
          </div>
          <div className="flex items-center">
            <span className="text-[#10b981] mr-2 group-hover:text-[#34d399] group-hover:text-shadow-[0_0_4px_rgba(16,185,129,0.4)]">user@mac:</span>
            <span className="text-[#f59e0b] animate-blink group-hover:text-[#fbbf24]">|</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
