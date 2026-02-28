import React from "react";
import "./info.css";
import logo1 from "../../../../utils/images/logo1.webp"

export default function Info() {
  return (
    <section className="clean-section" id="about">
      <div className="clean-inner">
        <div className="clean-header">
          <div className="clean-badge">
            <span className="smiley"><img src={logo1} alt="Logo" /></span>
            <span>Clean. Fresh. Friendly.</span>
          </div>

          <h2>We keep it simple - and we keep it clean.</h2>
          <p>
            We focus on the things that matter most - a clean store, clean restrooms,
            fresh food, and friendly service every day.
          </p>
        </div>

        <div className="clean-grid">
          <div className="clean-card">
            
            <h3>Always Clean</h3>
            <p>Neat aisles, organized shelves, and a store that feels fresh.</p>
          </div>

          <div className="clean-card">
            
            <h3>Fresh Food</h3>
            <p>Hot food, fresh donuts, coffee, and snacks you can trust.</p>
          </div>

          <div className="clean-card">
            
            <h3>Friendly Service</h3>
            <p>Quick checkout and friendly faces every time you stop by.</p>
          </div>
          <div className="clean-card">
            
            <h3>Clean Restrooms</h3>
            <p>Restrooms are checked regularly and kept spotless.</p>
          </div>
        </div>
        <div className="clean-footer">
          <a className="clean-cta" href="#contact">
            Stop By Today
          </a>

          <a
            className="clean-cta secondary"
            href="https://www.shell.us/rewards-and-savings/fuel-rewards.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shell Rewards
          </a>
        </div>
      </div>
    </section>
  );
}
