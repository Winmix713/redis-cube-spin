
import React from "react";

const DockerContainers: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(58,188,237,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[200px] h-[120px] relative flex items-center justify-center">
        <div className="relative w-[160px] h-[100px]">
          <div className="absolute w-[140px] h-6 rounded-xl flex items-center justify-center text-[10px] font-semibold text-white border-2 border-white/20 transition-all duration-300 ease-out animate-float-containers bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] top-0 z-[3] group-hover:border-white/40 group-hover:animation-duration-2-5s group-hover:translate-x-1 group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#3b82f6] group-hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]">
            <div className="text-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">app</div>
          </div>
          <div className="absolute w-[140px] h-6 rounded-xl flex items-center justify-center text-[10px] font-semibold text-white border-2 border-white/20 transition-all duration-300 ease-out animate-float-containers bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] top-7 z-[2] animation-delay-500 group-hover:border-white/40 group-hover:animation-duration-2-5s group-hover:translate-x-1 group-hover:bg-gradient-to-br group-hover:from-[#38bdf8] group-hover:to-[#0ea5e9] group-hover:shadow-[0_0_16px_rgba(14,165,233,0.4)]">
            <div className="text-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">db</div>
          </div>
          <div className="absolute w-[140px] h-6 rounded-xl flex items-center justify-center text-[10px] font-semibold text-white border-2 border-white/20 transition-all duration-300 ease-out animate-float-containers bg-gradient-to-br from-[#06b6d4] to-[#0891b2] top-14 z-[1] animation-delay-1000 group-hover:border-white/40 group-hover:animation-duration-2-5s group-hover:translate-x-1 group-hover:bg-gradient-to-br group-hover:from-[#22d3ee] group-hover:to-[#06b6d4] group-hover:shadow-[0_0_16px_rgba(6,182,212,0.4)]">
            <div className="text-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">api</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DockerContainers;
