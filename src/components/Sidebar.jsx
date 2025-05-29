import sidebarData, { tool } from "../data/navLinks";
import "../styles/Sidebar.css";
import { IoMdSettings } from "react-icons/io";

function Sidebar({ className }) {
  return (
    <div className={className}>
      <h3 className="sidebar-title">General</h3>
      <nav className="sidebar-nav">
        {sidebarData.map((link, index) => (
          <div
            key={index}
            className={`nav-item ${link.active ? "active" : ""}`}
          >
            <link.icon className="nav-icon" />
            <span className="nav-label">{link.label}</span>
          </div>
        ))}
      </nav>
      <h3 className="sidebar-title">Tool</h3>
      <nav className="sidebar-nav">
        {tool.map((link, index) => (
          <div
            key={index}
            className={`nav-item ${link.active ? "active" : ""}`}
          >
            <link.icon className="nav-icon" />
            <span className="nav-label">{link.label}</span>
          </div>
        ))}
      </nav>
      <div className="setting">
        <IoMdSettings />
        <p className="setting-word">Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;
