
import React from "react";

const DockerContainers: React.FC = () => {
  return (
    <div className="docker-containers">
      <div className="container-stack">
        <div className="container container-1">
          <div className="container-label">app</div>
        </div>
        <div className="container container-2">
          <div className="container-label">db</div>
        </div>
        <div className="container container-3">
          <div className="container-label">api</div>
        </div>
      </div>
    </div>
  );
};

export default DockerContainers;
