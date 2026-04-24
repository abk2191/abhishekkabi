import React from "react";

const Sidebar = ({ sidebarRef }) => {
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
            <p>Profile</p>
          </div>

          <div className="flex-box-one">
            <p>Projects</p>
          </div>

          <div className="flex-box-one">
            <p>Contact</p>
          </div>
        </div>

        <div className="resume-button-container">
          <div>
            <i
              class="fa-solid fa-file-pdf"
              style={{ color: "#000033", fontSize: "40px" }}
            ></i>
          </div>
          <div>
            <button className="download-resume-button">
              Click here to View/Download my resume{" "}
            </button>
          </div>
        </div>

        <div className="github-link-button">
          <div>
            <i
              class="fa-brands fa-github"
              style={{ color: "#000033", fontSize: "40px" }}
            ></i>
          </div>
          <div>
            <button className="github-link">Check my Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
