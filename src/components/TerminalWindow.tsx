
import React from "react";

const TerminalWindow: React.FC = () => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
      </div>
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="prompt">user@mac:</span>
          <span className="command">npm start</span>
        </div>
        <div className="terminal-line">
          <span className="output">Server running on port 3000</span>
        </div>
        <div className="terminal-line">
          <span className="prompt">user@mac:</span>
          <span className="cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
