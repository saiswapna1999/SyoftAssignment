// src/Dashboard.js
import React from "react";
import "./index.css";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {userInfo ? (
        <div>
          <p>
            <strong>Name:</strong> {userInfo.user_firstname}{" "}
            {userInfo.user_lastname}
          </p>
          <p>
            <strong>Email:</strong> {userInfo.user_email}
          </p>
          <p>
            <strong>Phone:</strong> {userInfo.user_phone}
          </p>
         
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default Dashboard;