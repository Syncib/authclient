import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuthContext();
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {user && <h2>Welcome, {user.user.name}</h2>}
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Total Users</h3>
            <p>150</p>
          </div>
          <div className="widget">
            <h3>Active Sessions</h3>
            <p>32</p>
          </div>
          <div className="widget">
            <h3>Recent Orders</h3>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
