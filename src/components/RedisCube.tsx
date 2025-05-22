
import React from "react";

const RedisCube: React.FC = () => {
  return (
    <div className="redis-logo">
      <div className="redis-cube">
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face left"></div>
        <div className="cube-face right"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};

export default RedisCube;
