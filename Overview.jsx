import React from "react";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview-container">
      <header className="overview-header">
        <h1>Dashboard Overview</h1>
      </header>
      <section className="overview-cards">
        <div className="card">
          <h3>Card 1 Title</h3>
          <p>Card 1 description or content here.</p>
        </div>
        <div className="card">
          <h3>Card 2 Title</h3>
          <p>Card 2 description or content here.</p>
        </div>
        {/* Add more cards as needed */}
      </section>
    </div>
  );
};

export default Overview;