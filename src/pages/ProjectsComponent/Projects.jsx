import React from "react";
import "./Projects.modules.css";
function Projects() {
  return (
    <div className="projects-component">
      <div className="project-menu">
        <div>
          <div className="head">
            <span>Project Name</span>
            <i className="fab fa-github"></i>
          </div>
          <div>Discription</div>
        </div>

        <div>
          <div className="head">
            <span>Ticke Status</span>
            <i className="fab fa-github"></i>
          </div>
          <div>
            <p>well done app</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
