
import React from "react";

const NextjsLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[100px] h-[100px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-[#000000] border-2 border-white/10 transition-all duration-300 ease-out group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[36px] relative">
              <div className="absolute top-0 left-0 font-bold text-[36px] text-white">N</div>
              <div className="absolute bottom-0 right-0 w-[4px] h-[24px] bg-white rotate-[30deg] transition-all duration-300 ease-out group-hover:bg-white/90 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextjsLogo;
