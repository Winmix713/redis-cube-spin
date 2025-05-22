
import React from "react";

const RedisCube: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(237,58,58,0.3)_0%,transparent_70%)] animate-pulse transition-all duration-300 ease-out"></div>
      <div className="w-[120px] h-[120px] relative">
        <div className="w-[80px] h-[80px] relative transform-style-3d animate-rotate-cube mx-auto my-5 group-hover:animation-duration-3s">
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#ef4444] to-[#dc2626] transform translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#dc2626] to-[#b91c1c] transform rotate-y-180 translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#b91c1c] to-[#991b1b] transform rotate-y-minus-90 translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#f87171] to-[#ef4444] transform rotate-y-90 translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#fca5a5] to-[#f87171] transform rotate-x-90 translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
          <div className="absolute w-[80px] h-[80px] border-2 border-white/20 rounded-lg bg-gradient-to-br from-[#991b1b] to-[#7f1d1d] transform rotate-x-minus-90 translate-z-40px group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"></div>
        </div>
      </div>
    </div>
  );
};

export default RedisCube;
