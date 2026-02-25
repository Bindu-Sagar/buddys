import React from "react";
import "./staff.css";

import staff1 from "../../utils/images/staff1.jpg";
import staff2 from "../../utils/images/staff2.jpg";
import staff3 from "../../utils/images/staff3.jpg";

export default function Staff() {
  const team = [
    {
      name: "Raj Patel",
      role: "Store Manager",
      image: staff1,
      bio: "Oversees daily operations and ensures fast, friendly service for every customer."
    },
    {
      name: "Maria Lopez",
      role: "Grocery Lead",
      image: staff2,
      bio: "Keeps our shelves stocked with fresh produce and quality essentials."
    },
    {
      name: "James Carter",
      role: "Fuel & Service Associate",
      image: staff3,
      bio: "Helps customers at the pumps and ensures quick and smooth checkout."
    }
  ];

  return (
    <section className="staff-section" id="staff">
      <div className="staff-inner">
        <div className="staff-header">
          <h2>Meet Our Staff</h2>
          <p>
            Friendly faces committed to making your stop quick and enjoyable.
          </p>
        </div>

        <div className="staff-grid">
          {team.map((member, index) => (
            <div className="staff-card" key={index}>
              <div className="staff-image">
                <img src={member.image} alt={member.name} />
              </div>

              <div className="staff-content">
                <h3>{member.name}</h3>
                <span className="staff-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}