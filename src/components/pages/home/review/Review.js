import React from "react";
import "./review.css";

const REVIEWS = [
  {
    name: "Local Customer",
    text: "Super clean store and the staff is always friendly. Restrooms are spotless.",
    stars: 5,
  },
  {
    name: "Quick Stop",
    text: "Great snack selection and the hot food is actually good. Fast service too.",
    stars: 5,
  },
  {
    name: "Morning Run",
    text: "Fresh donuts and coffee in the morning. Easy in-and-out every time.",
    stars: 5,
  },
  {
    name: "Road Trip",
    text: "Best stop around. Clean, stocked, and the drinks selection is awesome.",
    stars: 5,
  },
];

function Stars({ n = 5 }) {
  return (
    <div className="stars" aria-label={`${n} stars`}>
      {"★★★★★".slice(0, n)}
    </div>
  );
}

export default function ReviewStrip() {
  return (
    <section className="review-strip" id="reviews">
      <div className="review-inner">
        <div className="review-head">
          <div className="review-badge">
            <span className="review-smiley">☺</span>
            <span>Customer Love</span>
          </div>

          <h2>People love stopping at Buddy’s</h2>
          <p>Quick highlights from our customers - clean store, fresh food, friendly service.</p>
        </div>

        <div className="review-row">
          <div className="review-track">
            {/* duplicate list for smooth infinite scroll */}
            {[...REVIEWS, ...REVIEWS].map((r, idx) => (
              <div className="review-card" key={idx}>
                <Stars n={r.stars} />
                <p className="review-text">"{r.text}"</p>
                <div className="review-name">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}