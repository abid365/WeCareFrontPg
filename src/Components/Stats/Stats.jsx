import React from "react";
import "./Stats.css";
const Stats = () => {
  return (
    <div
      style={{
        width: "60%",
        position: "absolute",
        top: "95%",
        left: "40%",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
      }}
    >
      <div className="stats-container">
        <div>
          <h1 className="numbers">250</h1>
          <p className="stat-text">Best Doctor</p>
        </div>
        <div>
          <h1 className="numbers">15</h1>
          <p className="stat-text">Clinic Location</p>
        </div>
        <div>
          <h1 className="numbers">20</h1>
          <p className="stat-text">Surgery Room</p>
        </div>
        <div>
          <h1 className="numbers">1500+</h1>
          <p className="stat-text">Patient Capacity</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
