import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";

const Sidebar = ({ sidebarRef }) => {
  const [projectsClicked, setProjectsClicked] = useState(false);

  return (
    <div
      ref={sidebarRef}
      className="sidebar"
      id="sidebar"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Sidebar content can go here */}
      <div className="sidebar-items-container">
        <div className="sidebar-items-wrapper">
          <div className="flex-box-one">
            <i className="fa-solid fa-circle-user"></i>
            <p>Profile</p>
          </div>

          <div className="flex-box-one">
            <i
              className="fa-solid fa-diagram-project"
              onClick={() => setProjectsClicked((prev) => !prev)}
            ></i>
            <p onClick={() => setProjectsClicked((prev) => !prev)}>Projects</p>
            <i
              className={`fa-solid fa-angle-down chevron-icon ${projectsClicked ? "rotated" : ""}`}
              style={{ marginTop: "5px" }}
              onClick={() => setProjectsClicked((prev) => !prev)}
            ></i>
          </div>

          {projectsClicked && (
            <div className="place-holder">
              {/* Your project content here */}
            </div>
          )}

          <div className="flex-box-one">
            <i className="fa-solid fa-address-card"></i>
            <p>Contact</p>
          </div>
        </div>

        <div className="resume-button-container">
          <div>
            <i
              className="fa-solid fa-file-pdf"
              style={{ color: "#000033", fontSize: "40px" }}
            ></i>
          </div>
          <div>
            <button className="download-resume-button">
              Click here to View/Download my resume
            </button>
          </div>
        </div>

        <div className="github-link-button">
          <div>
            <i
              className="fa-brands fa-github"
              style={{ color: "#000033", fontSize: "40px" }}
            ></i>
          </div>
          <div>
            <button className="github-link">Check out my Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
