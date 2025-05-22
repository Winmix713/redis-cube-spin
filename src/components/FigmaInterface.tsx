
import React from "react";

const FigmaInterface: React.FC = () => {
  return (
    <div className="figma-interface">
      <div className="search-bar">
        <div className="search-icon"></div>
        <div className="search-text">Filter files by name</div>
      </div>
      <div className="recent-files">Recent Files 3</div>
      <div className="file-item">
        <div className="file-name">Design System</div>
        <div className="file-badge">
          <div className="checkmark"></div>
        </div>
      </div>
    </div>
  );
};

export default FigmaInterface;
