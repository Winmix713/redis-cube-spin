
import React from "react";

const AngularLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(195,20,58,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[100px] h-[100px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[100px] h-0 border-b-[100px] border-b-[#dd0031] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent transition-all duration-300 ease-out group-hover:border-b-[#ff2c54] group-hover:shadow-[0_0_20px_rgba(221,0,49,0.5)]"></div>
          <div className="absolute w-[100px] h-0 top-[20px] border-t-[80px] border-t-[#c3143a] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent transition-all duration-300 ease-out group-hover:border-t-[#dd0031] group-hover:shadow-[0_0_20px_rgba(195,20,58,0.5)]"></div>
          <div className="absolute flex items-center justify-center w-full h-full">
            <div className="text-white font-bold text-3xl translate-y-[10px] transition-all duration-300 ease-out group-hover:text-white/90 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]">A</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngularLogo;
