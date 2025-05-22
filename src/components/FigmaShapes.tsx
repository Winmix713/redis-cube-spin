
import React from "react";

const FigmaShapes: React.FC = () => {
  return (
    <div className="absolute left-5 top-5 w-[60px] h-[120px]">
      <div className="absolute w-[40px] h-[20px] bg-[#ff5757] rounded-[20px] top-0 animate-float-shapes transition-all duration-300 ease-out group-hover:animate-float-shapes-fast group-hover:bg-[#ff6b6b] group-hover:shadow-[0_0_16px_rgba(255,87,87,0.6)]"></div>
      <div className="absolute w-[35px] h-[35px] bg-[#a259ff] top-[25px] left-[-5px] rounded-full animate-float-shapes animation-delay-500 transition-all duration-300 ease-out group-hover:animate-float-shapes-fast group-hover:bg-[#b569ff] group-hover:shadow-[0_0_16px_rgba(162,89,255,0.6)]"></div>
      <div className="absolute w-[25px] h-[25px] bg-[#1abcfe] top-[50px] right-0 rounded-full animate-float-shapes animation-delay-1000 transition-all duration-300 ease-out group-hover:animate-float-shapes-fast group-hover:bg-[#29c5fe] group-hover:shadow-[0_0_16px_rgba(26,188,254,0.6)]"></div>
      <div className="absolute w-[30px] h-[30px] bg-[#0acf83] bottom-0 left-[5px] rounded-full animate-float-shapes animation-delay-1500 transition-all duration-300 ease-out group-hover:animate-float-shapes-fast group-hover:bg-[#1dd490] group-hover:shadow-[0_0_16px_rgba(10,207,131,0.6)]"></div>
    </div>
  );
};

export default FigmaShapes;
