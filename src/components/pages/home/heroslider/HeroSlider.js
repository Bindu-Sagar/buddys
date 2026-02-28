import React, { useEffect, useState } from "react";
import "./heroslider.css";
// import hero1 from "../../../../utils/images/hero1.png";

const slides = [
  {
    id: 1,
    title: "Your Go-To Stop Around the Corner",
    desc: "Quick fuel, friendly service, and a clean store that’s always ready.",
    primaryText: "Get Directions",
    primaryHref: "#contact",
    secondaryText: "Explore Store",
    secondaryHref: "#about",
    bgClass: "hero-bg-1",
  },
  {
    id: 2,
    title: "Quality Fuel You Can Trust",
    desc: "Proudly serving Shell fuel for smooth drives and dependable performance.",
    primaryText: "Join Shell Rewards",
    primaryHref: "https://www.shell.us/rewards-and-savings/fuel-rewards.html",
    secondaryText: "View Fuel",
    secondaryHref: "#fuel",
    bgClass: "hero-bg-2",
    externalPrimary: true,
  },
  {
    id: 3,
    title: "Fresh, Hot, and Ready to Go",
    desc: "Burgers, pizza, chicken, donuts, coffee, and fountain drinks — all in one stop.",
    primaryText: "See Food",
    primaryHref: "#food",
    secondaryText: "See Drinks",
    secondaryHref: "#drinks",
    bgClass: "hero-bg-3",
  },
  {
    id: 4,
    title: "More Value Every Visit",
    desc: "Enjoy weekly specials, in-store deals, and savings with Shell rewards.",
    primaryText: "View Deals",
    primaryHref: "#deals",
    secondaryText: "Today’s Specials",
    secondaryHref: "#deals",
    bgClass: "hero-bg-4",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const goPrev = () =>
    setActive((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () =>
    setActive((p) => (p + 1) % slides.length);

  const s = slides[active];

  return (
    <section className="hero" id="home">
      <div className={`hero-bg ${s.bgClass}`} />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">{s.title}</h1>
          <p className="hero-desc">{s.desc}</p>

          <div className="hero-actions">
            {s.externalPrimary ? (
              <a
                className="hero-btn primary"
                href={s.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.primaryText}
              </a>
            ) : (
              <a className="hero-btn primary" href={s.primaryHref}>
                {s.primaryText}
              </a>
            )}

            <a className="hero-btn secondary" href={s.secondaryHref}>
              {s.secondaryText}
            </a>
          </div>
        </div>
      </div>

      {/* Controls Layer */}
      <div className="hero-controls">
        <button
          className="hero-arrow left"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          className="hero-arrow right"
          onClick={goNext}
          aria-label="Next slide"
        >
          ›
        </button>

        <div className="hero-dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === active ? "active" : ""}`}
              onClick={() => setActive(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}