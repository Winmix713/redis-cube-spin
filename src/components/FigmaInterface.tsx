
import React from "react";

const FigmaInterface: React.FC = () => {
  return (
    <div className="absolute right-0 bottom-0 w-[280px] h-[140px] relative bg-[rgba(30,41,59,0.8)] rounded-xl backdrop-blur-[10px] border border-white/10 p-4 transition-all duration-300 ease-out group-hover:bg-[rgba(51,65,85,0.9)] group-hover:border-white/20 group-hover:scale-[1.02] group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
      <div className="bg-[rgba(51,65,85,0.8)] rounded-lg py-2 px-3 mb-3 flex items-center gap-2 border border-white/10 transition-all duration-300 ease-out group-hover:bg-[rgba(71,85,105,0.9)] group-hover:border-white/20 group-hover:shadow-[0_0_8px_rgba(26,188,254,0.2)]">
        <div className="w-4 h-4 bg-[#1abcfe] rounded-full relative transition-all duration-300 ease-out group-hover:bg-[#29c5fe] group-hover:shadow-[0_0_8px_rgba(26,188,254,0.5)]">
          <div className="absolute top-0.5 left-0.5 w-3 h-3 border-2 border-white rounded-full border-b-transparent border-r-transparent"></div>
        </div>
        <div className="text-white/60 text-xs transition-colors duration-300 ease-out group-hover:text-white/80">Filter files by name</div>
      </div>
      <div className="text-white/50 text-[11px] mb-2 transition-colors duration-300 ease-out group-hover:text-white/70">Recent Files 3</div>
      <div className="bg-[rgba(15,23,42,0.8)] rounded-md p-2 flex items-center justify-between border border-white/8 transition-all duration-300 ease-out group-hover:bg-[rgba(30,41,59,0.9)] group-hover:border-white/15 group-hover:translate-x-1">
        <div className="text-white text-xs font-medium transition-colors duration-300 ease-out group-hover:text-[#f1f5f9]">Design System</div>
        <div className="bg-[#0acf83] text-white text-[10px] py-0.5 px-1.5 rounded flex items-center gap-1 transition-all duration-300 ease-out group-hover:bg-[#1dd490] group-hover:shadow-[0_0_8px_rgba(10,207,131,0.4)]">
          <div className="w-2 h-2 rounded-full bg-white transition-all duration-300 ease-out group-hover:bg-[#f8fafc] group-hover:shadow-[0_0_4px_rgba(255,255,255,0.6)]"></div>
        </div>
      </div>
    </div>
  );
};

export default FigmaInterface;
