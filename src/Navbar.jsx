import React from "react";

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
        <div className="logo">
          <h1>ABHISHEK KABI</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
