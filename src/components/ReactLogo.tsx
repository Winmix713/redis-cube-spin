
import React from "react";

const ReactLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(20,158,202,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative">
        <div className="w-full h-full relative transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-[30deg]">
          <div className="absolute w-[140px] h-[30px] rounded-full border-[4px] border-[#61dafb] top-[55px] left-0 animate-spin-slow transition-all duration-300 ease-out group-hover:border-[#a5ecff] group-hover:shadow-[0_0_20px_rgba(97,218,251,0.5)] group-hover:animate-spin-medium"></div>
          <div className="absolute w-[140px] h-[30px] rounded-full border-[4px] border-[#61dafb] top-[55px] left-0 rotate-[60deg] animate-spin-slow animation-delay-100 transition-all duration-300 ease-out group-hover:border-[#a5ecff] group-hover:shadow-[0_0_20px_rgba(97,218,251,0.5)] group-hover:animate-spin-medium"></div>
          <div className="absolute w-[140px] h-[30px] rounded-full border-[4px] border-[#61dafb] top-[55px] left-0 rotate-[120deg] animate-spin-slow animation-delay-200 transition-all duration-300 ease-out group-hover:border-[#a5ecff] group-hover:shadow-[0_0_20px_rgba(97,218,251,0.5)] group-hover:animate-spin-medium"></div>
          <div className="absolute w-[20px] h-[20px] bg-[#61dafb] rounded-full top-[60px] left-[60px] transition-all duration-300 ease-out group-hover:bg-[#a5ecff] group-hover:shadow-[0_0_30px_rgba(97,218,251,0.8)]"></div>
        </div>
      </div>
    </div>
  );
};

export default ReactLogo;
