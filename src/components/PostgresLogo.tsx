
import React from "react";

const PostgresLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(51,103,145,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[100px] h-[100px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[90px] h-[90px] top-[5px] left-[5px] bg-[#336791] rounded-full transition-all duration-300 ease-out group-hover:bg-[#3d7db0] group-hover:shadow-[0_0_20px_rgba(51,103,145,0.5)]"></div>
          <div className="absolute w-[15px] h-[40px] top-[10px] left-[42px] bg-white rounded-t-full"></div>
          <div className="absolute w-[60px] h-[15px] top-[40px] left-[20px] bg-white rounded-full"></div>
          <div className="absolute w-[10px] h-[20px] bottom-[20px] left-[30px] bg-[#336791] border-[2px] border-white rounded-full transition-all duration-300 ease-out group-hover:bg-[#3d7db0]"></div>
          <div className="absolute w-[10px] h-[20px] bottom-[20px] right-[30px] bg-[#336791] border-[2px] border-white rounded-full transition-all duration-300 ease-out group-hover:bg-[#3d7db0]"></div>
          <div className="absolute w-[20px] h-[10px] bottom-[30px] left-[40px] bg-[#336791] border-[2px] border-white rounded-full transition-all duration-300 ease-out group-hover:bg-[#3d7db0]"></div>
        </div>
      </div>
    </div>
  );
};

export default PostgresLogo;
