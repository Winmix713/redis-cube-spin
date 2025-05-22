
import React from "react";

const GatsbyLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(102,51,153,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[100px] h-[100px] relative transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-[30deg]">
          <div className="absolute inset-0 rounded-full bg-[#663399] transition-all duration-300 ease-out group-hover:bg-[#7e40bb] group-hover:shadow-[0_0_20px_rgba(102,51,153,0.5)]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[60px] relative">
              <div className="absolute inset-0 border-[4px] border-white rounded-full"></div>
              <div className="absolute w-[30px] h-[60px] bg-white right-0 rounded-r-full"></div>
              <div className="absolute w-[15px] h-[15px] bg-[#663399] right-[8px] top-[22px] rounded-full transition-all duration-300 ease-out group-hover:bg-[#7e40bb]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GatsbyLogo;
