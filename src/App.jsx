import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";
import DashboardMainContent from "./components/DashboardMainContent";
import SimpleAppointmentCard from "./components/SimpleAppointmentCard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app-container">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Sidebar className={sidebarOpen ? "sidebar open" : "sidebar"} />
        <div className="dashboard-main">
          <DashboardMainContent />
        </div>
        <div className="simple-appointment-card">
          <SimpleAppointmentCard />
        </div>
      </div>
    </div>
  );
}

export default App;
