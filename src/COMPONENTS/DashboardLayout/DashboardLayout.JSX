import React from "react";
import './DashboardLayout.css'

const DashboardLayout = ({ children }) => (
  <div className="dashboardComponent">
    <header className="dashboardHeader">
      <h1>Dashboard</h1>
    </header>
    <main className="dashboardmain">
      {children}
    </main>
  </div>
);

export default DashboardLayout;