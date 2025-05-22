
import React from "react";

const FirebaseLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,150,0,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[80px] h-[110px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[80px] h-[100px] left-0 bottom-0 border-b-[100px] border-b-[#ff9600] border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent transition-all duration-300 ease-out group-hover:border-b-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,150,0,0.5)]"></div>
          <div className="absolute w-[40px] h-[80px] left-[20px] bottom-0 border-b-[80px] border-b-[#ffca80] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent transition-all duration-300 ease-out group-hover:border-b-[#ffda99] group-hover:shadow-[0_0_15px_rgba(255,202,128,0.6)]"></div>
          <div className="absolute w-[20px] h-[20px] left-0 top-0 bg-[#ff9600] transition-all duration-300 ease-out group-hover:bg-[#ffac33] group-hover:shadow-[0_0_10px_rgba(255,150,0,0.7)] animate-flicker"></div>
          <div className="absolute w-[15px] h-[15px] left-[30px] top-[15px] bg-[#ff9600] transition-all duration-300 ease-out group-hover:bg-[#ffac33] group-hover:shadow-[0_0_10px_rgba(255,150,0,0.7)] animate-flicker animation-delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default FirebaseLogo;
