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
    </div>
  );
};

export default Sidebar;
