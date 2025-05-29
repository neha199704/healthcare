import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/App.css";
import DashboardMainContent from "./components/DashboardMainContent";
import SimpleAppointmentCard from "./components/SimpleAppointmentCard";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
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
