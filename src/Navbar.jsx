import React from "react";
import { useNavigate } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({
  isSidebarOpen,
  isAnimating,
  toggleSidebar,
  hamburgerRef,
}) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // This will navigate to /abhishekkabi/ because of basename
  };

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
          <div onClick={handleLogoClick} style={{ cursor: "pointer" }}>
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
