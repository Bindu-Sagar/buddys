import React from "react";
import "./staff.css";

const STAFF = [
  { name: "Store Manager", role: "Keeps everything running smooth", tag: "Always Helpful" },
  { name: "Kitchen Team", role: "Fresh hot food made daily", tag: "Hot & Fresh" },
  { name: "Morning Crew", role: "Coffee + donuts ready early", tag: "Morning Ready" },
  { name: "Checkout Team", role: "Quick service with a smile", tag: "Fast Service" },
];

export default function Staff() {
  return (
    <section className="staff-wrap" id="staff">
      <div className="staff-inner">
        <div className="staff-head">
          <div className="staff-badge">
            <span className="staff-smiley">☺</span>
            <span>Meet Our Staff</span>
          </div>

          <h2>Friendly people, every single day</h2>
          <p>
            We take pride in keeping Buddy’s clean, stocked, and welcoming - and it starts with our team.
          </p>
        </div>

        <div className="staff-grid">
          {STAFF.map((s, idx) => (
            <div className="staff-card" key={idx}>
              <div className="staff-avatar">
                <span className="staff-avatar-smiley">☺</span>
              </div>
              <div className="staff-name">{s.name}</div>
              <div className="staff-role">{s.role}</div>
              <div className="staff-tag">{s.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}