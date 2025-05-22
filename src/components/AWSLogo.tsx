
import React from "react";

const AWSLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,153,1,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[120px] h-[70px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-full h-[20px] top-[25px] bg-[#ff9901] transition-all duration-300 ease-out group-hover:bg-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,153,1,0.5)]"></div>
          <div className="absolute w-[60px] h-[60px] left-0 bottom-0 border-[20px] border-transparent border-l-[#ff9901] border-b-[#ff9901] rounded-bl-[10px] transition-all duration-300 ease-out group-hover:border-l-[#ffac33] group-hover:border-b-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,153,1,0.5)]"></div>
          <div className="absolute w-[60px] h-[60px] right-0 bottom-0 border-[20px] border-transparent border-r-[#ff9901] border-b-[#ff9901] rounded-br-[10px] transition-all duration-300 ease-out group-hover:border-r-[#ffac33] group-hover:border-b-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,153,1,0.5)]"></div>
          <div className="absolute w-[60px] h-[60px] left-0 top-0 border-[20px] border-transparent border-l-[#ff9901] border-t-[#ff9901] rounded-tl-[10px] transition-all duration-300 ease-out group-hover:border-l-[#ffac33] group-hover:border-t-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,153,1,0.5)]"></div>
          <div className="absolute w-[60px] h-[60px] right-0 top-0 border-[20px] border-transparent border-r-[#ff9901] border-t-[#ff9901] rounded-tr-[10px] transition-all duration-300 ease-out group-hover:border-r-[#ffac33] group-hover:border-t-[#ffac33] group-hover:shadow-[0_0_20px_rgba(255,153,1,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

export default AWSLogo;
