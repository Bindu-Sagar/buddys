import React from "react";
import "./splitsection.css";

const SECTIONS = [
  {
    id: "food",
    eyebrow: "Hot Food",
    title: "Fresh, Hot, and Made to Go",
    desc: "Grab a quick bite that feels fresh - perfect for lunch, dinner, or late-night cravings.",
    bullets: [
      "Burgers and chicken sandwiches",
      "Pizza, mini tacos, wings, strips",
      "Cheese bread and nuggets",
    ],
    primaryText: "Explore Food",
    primaryHref: "#food",
    secondaryText: "Get Directions",
    secondaryHref: "#contact",
    imageClass: "split-img-food",
  },
  {
    id: "drinks",
    eyebrow: "Drinks & Coffee",
    title: "Coffee, Slushies, and Every Drink You Want",
    desc: "From a quick coffee run to a cold drink on a hot day - we’ve got it covered.",
    bullets: [
      "Ronoco coffee and morning favorites",
      "Sweet tea, slushies, and fountain drinks",
      "New drinks that just hit the market",
    ],
    primaryText: "View Drinks",
    primaryHref: "#drinks",
    secondaryText: "Shell Rewards",
    secondaryHref: "https://www.shell.us/rewards-and-savings/fuel-rewards.html",
    imageClass: "split-img-drinks",
    imageRight: true,
  },
  {
    id: "donuts",
    eyebrow: "Fresh Donuts Daily",
    title: "Made Fresh with Daylight Donuts",
    desc: "Start your day right - fresh donuts made daily, perfect with coffee on the way out.",
    bullets: [
      "Freshly made every morning",
      "Great for breakfast and office runs",
      "Pairs perfectly with hot coffee",
    ],
    primaryText: "See Donuts",
    primaryHref: "#donuts",
    secondaryText: "Visit Us",
    secondaryHref: "#contact",
    imageClass: "split-img-donuts",
  },
  {
    id: "snacks",
    eyebrow: "Snacks & Grocery",
    title: "Fully Stocked for the Road",
    desc: "Snacks, candy, drinks, and quick groceries - if it’s popular, there’s a good chance we have it.",
    bullets: [
      "Chips, chocolates, candy, and more",
      "Fresh fruits and everyday essentials",
      "Shell gift cards and in-store favorites",
    ],
    primaryText: "Explore Store",
    primaryHref: "#about",
    secondaryText: "View Deals",
    secondaryHref: "#deals",
    imageClass: "split-img-snacks",
    imageRight: true,
  },
];

export default function SplitSection() {
  return (
    <section className="split-wrap">
      {SECTIONS.map((s) => (
        <div key={s.id} className="split-block" id={s.id}>
          <div className={`split-inner ${s.imageRight ? "reverse" : ""}`}>
            {/* IMAGE */}
            <div className={`split-media ${s.imageClass}`}>
              <div className="split-media-shade" />
              <div className="split-media-badge">
                <span className="split-smiley">☺</span>
                <span>{s.eyebrow}</span>
              </div>
            </div>

            {/* TEXT */}
            <div className="split-content">
              <h2 className="split-title">{s.title}</h2>
              <p className="split-desc">{s.desc}</p>

              <ul className="split-bullets">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>
                    <span className="split-bullet-dot">●</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="split-actions">
                <a className="split-btn primary" href={s.primaryHref}>
                  {s.primaryText}
                </a>

                <a
                  className="split-btn secondary"
                  href={s.secondaryHref}
                  target={s.secondaryHref.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.secondaryHref.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {s.secondaryText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}