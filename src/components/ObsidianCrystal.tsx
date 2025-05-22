
import React from "react";

const ObsidianCrystal: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(124,58,237,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[120px] h-[120px] relative filter drop-shadow-[0_8px_32px_rgba(124,58,237,0.4)] transition-all duration-300 ease-out group-hover:drop-shadow-[0_12px_48px_rgba(124,58,237,0.7)] group-hover:scale-110 group-active:scale-105">
        <div className="w-full h-full bg-gradient-to-br from-[#a855f7] via-[#7c3aed] to-[#5b21b6] clip-path-crystal animate-float transition-all duration-300 ease-out group-hover:bg-gradient-to-br group-hover:from-[#c084fc] group-hover:via-[#a855f7] group-hover:to-[#7c3aed] group-hover:animate-float-fast relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]">
            <div className="absolute w-[30px] h-[2px] top-[30%] left-[25%] bg-white/10 rounded-[20px] rotate-45 transition-all duration-300 ease-out group-hover:bg-white/20 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
            <div className="absolute w-[25px] h-[2px] top-[45%] right-[20%] bg-white/10 rounded-[20px] -rotate-30 transition-all duration-300 ease-out group-hover:bg-white/20 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
            <div className="absolute w-[35px] h-[2px] bottom-[35%] left-[30%] bg-white/10 rounded-[20px] rotate-15 transition-all duration-300 ease-out group-hover:bg-white/20 group-hover:shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent clip-path-crystal transition-all duration-300 ease-out group-hover:from-white/50"></div>
        </div>
      </div>
    </div>
  );
};

export default ObsidianCrystal;
