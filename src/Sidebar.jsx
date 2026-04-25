import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarRef, closeSidebar }) => {
  const [projectsClicked, setProjectsClicked] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log("Navigating to:", path); // Debug log
    navigate(path);
    // Add a small delay before closing to ensure navigation happens
    setTimeout(() => {
      closeSidebar();
    }, 100);
  };

  return (
    <div
      ref={sidebarRef}
      className="sidebar"
      id="sidebar"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      <div className="sidebar-items-container">
        <div className="sidebar-items-wrapper">
          <div
            className="flex-box-one"
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div
            className="flex-box-one"
            onClick={() => handleNavigation("/profile")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-circle-user"></i>
            <p>Profile</p>
          </div>

          <div className="flex-box-one">
            <i
              className="fa-solid fa-diagram-project"
              onClick={() => setProjectsClicked((prev) => !prev)}
              style={{ cursor: "pointer" }}
            ></i>
            <p
              onClick={() => setProjectsClicked((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              Projects
            </p>
            <i
              className={`fa-solid fa-angle-down chevron-icon ${projectsClicked ? "rotated" : ""}`}
              style={{ marginTop: "5px", cursor: "pointer" }}
              onClick={() => setProjectsClicked((prev) => !prev)}
            ></i>
          </div>

          {projectsClicked && (
            <div className="place-holder">
              <div className="project-section">
                <div
                  className="menu-item-div"
                  onClick={() => handleNavigation("/space")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/abhishekkabi/space-nobg.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  <p>Space. (PWA)</p>
                </div>
                <div
                  className="menu-item-div"
                  onClick={() => handleNavigation("/proxima-calculator")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/abhishekkabi/proxima-nobg.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  <p>Proxima Calculator (Native)</p>
                </div>
                <div
                  className="menu-item-div"
                  onClick={() => handleNavigation("/scratchpad")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/abhishekkabi/sp-nobg.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  <p>ScratchPad (Native)</p>
                </div>
                <div className="menu-item-div">
                  <img
                    src="/abhishekkabi/more.png"
                    style={{ height: "25px", width: "25px" }}
                  />
                  <p>More</p>
                </div>
              </div>
            </div>
          )}

          <div
            className="flex-box-one"
            onClick={() => handleNavigation("/contact")}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-address-card"></i>
            <p>Contact</p>
          </div>
        </div>

        <div className="game-div-wrapper">
          <div className="game-div">
            <i class="fa-solid fa-gamepad"></i>
            <div
              className="Play-Color-Match"
              onClick={() => handleNavigation("/game")}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Play Color Match
            </div>
          </div>
          {/* */}
        </div>
        <div className="source-code-div-wrapper">
          <div
            className="source-code-div"
            style={{ color: "navy", fontWeight: "bold" }}
          >
            <i class="fa-solid fa-code"></i>
            View Source Code
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
