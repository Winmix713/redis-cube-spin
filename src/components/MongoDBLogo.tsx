
import React from "react";

const MongoDBLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(67,153,52,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[140px] h-[140px] relative flex items-center justify-center">
        <div className="w-[80px] h-[120px] relative transition-all duration-300 ease-out group-hover:scale-110">
          <div className="absolute w-[80px] h-[80px] left-0 bottom-0 bg-[#449934] rounded-full transition-all duration-300 ease-out group-hover:bg-[#58cc02] group-hover:shadow-[0_0_20px_rgba(67,153,52,0.5)]"></div>
          <div className="absolute w-[80px] h-[100px] left-0 bottom-0 bg-[#449934] transition-all duration-300 ease-out group-hover:bg-[#58cc02] group-hover:shadow-[0_0_20px_rgba(67,153,52,0.5)]"></div>
          <div className="absolute w-[20px] h-[60px] left-[30px] bottom-[80px] bg-[#58cc45] rounded-full transition-all duration-300 ease-out group-hover:bg-[#83da74] group-hover:shadow-[0_0_15px_rgba(88,204,69,0.6)]"></div>
          <div className="absolute w-[15px] h-[40px] left-[50px] bottom-[70px] bg-[#58cc45] rounded-full rotate-[20deg] transition-all duration-300 ease-out group-hover:bg-[#83da74] group-hover:shadow-[0_0_15px_rgba(88,204,69,0.6)]"></div>
          <div className="absolute w-[15px] h-[30px] left-[15px] bottom-[75px] bg-[#58cc45] rounded-full rotate-[-20deg] transition-all duration-300 ease-out group-hover:bg-[#83da74] group-hover:shadow-[0_0_15px_rgba(88,204,69,0.6)]"></div>
        </div>
      </div>
    </div>
  );
};

export default MongoDBLogo;
