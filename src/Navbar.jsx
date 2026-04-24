import React from "react";
import MusicPlayer from "./MusicPlayer";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
  isSidebarOpen,
  isAnimating,
  toggleSidebar,
  hamburgerRef,
}) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <button
          ref={hamburgerRef}
          className={`hamburger ${isSidebarOpen ? "open" : ""}`}
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
          disabled={isAnimating}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ThemeToggle />
        <div className="logo">
          <div>
            <p>ABHISHEK KABI</p>
          </div>
          <div>
            <MusicPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
