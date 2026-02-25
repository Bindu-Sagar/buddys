import "./review.css";

function Stars({ value = 5 }) {
  const full = Math.max(0, Math.min(5, value));
  return (
    <div className="stars" aria-label={`${full} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? "star filled" : "star"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      name: "Priya S.",
      rating: 5,
      text: "Super clean store, friendly staff, and the grocery section is actually stocked well. Quick stop for fuel too.",
    },
    {
      name: "Daniel R.",
      rating: 5,
      text: "Best gas station in the area. Prices are fair, and the service is fast. The snacks and drinks selection is great.",
    },
    {
      name: "Asha K.",
      rating: 4,
      text: "Love the weekly deals. Easy parking, and the checkout is quick even when it’s busy.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-inner">
        <div className="reviews-header">
          <div>
            <h2>What Customers Say</h2>
            <p>Real feedback from people who stop by for fuel and groceries.</p>
          </div>

          <div className="reviews-summary">
            <div className="rating-big">
              <span className="rating-number">4.7</span>
              <Stars value={5} />
            </div>
            <a
              className="reviews-link"
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              View All Reviews
            </a>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, idx) => (
            <div className="review-card" key={idx}>
              <div className="review-top">
                <div className="avatar">
                  {r.name.charAt(0).toUpperCase()}
                </div>
                <div className="review-meta">
                  <div className="review-name">{r.name}</div>
                  <Stars value={r.rating} />
                </div>
              </div>
              <div className="review-text">"{r.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}