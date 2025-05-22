
import React from "react";

const SvelteLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,62,0,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[100px] h-[120px] relative transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-6">
          <div className="absolute w-[80px] h-[100px] top-[10px] left-[10px] bg-[#ff3e00] rounded-[20px] rotate-[-10deg] transition-all duration-300 ease-out group-hover:bg-[#ff5a26] group-hover:shadow-[0_0_20px_rgba(255,62,0,0.5)]"></div>
          <div className="absolute w-[40px] h-[80px] top-[20px] left-[50px] bg-white rounded-full rotate-[-10deg] transition-all duration-300 ease-out group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            <div className="absolute w-[20px] h-[40px] top-[20px] left-[10px] bg-[#ff3e00] rounded-full transition-all duration-300 ease-out group-hover:bg-[#ff5a26] group-hover:shadow-[0_0_10px_rgba(255,62,0,0.5)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvelteLogo;
