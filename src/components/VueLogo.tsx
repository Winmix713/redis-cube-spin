
import React from "react";

const VueLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(66,184,131,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[120px] h-[104px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[120px] h-0 border-b-[104px] border-b-transparent border-l-[60px] border-l-[#41b883] border-r-[60px] border-r-[#41b883] transition-all duration-300 ease-out group-hover:border-l-[#65d398] group-hover:border-r-[#65d398] group-hover:shadow-[0_0_20px_rgba(66,184,131,0.5)]"></div>
          <div className="absolute w-[72px] h-0 left-[24px] border-b-[62px] border-b-transparent border-l-[36px] border-l-[#35495e] border-r-[36px] border-r-[#35495e] transition-all duration-300 ease-out group-hover:border-l-[#41b883] group-hover:border-r-[#41b883] group-hover:shadow-[0_0_20px_rgba(66,184,131,0.5)]"></div>
        </div>
      </div>
    </div>
  );
};

export default VueLogo;
