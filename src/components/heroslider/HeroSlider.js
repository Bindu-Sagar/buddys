import React, { useEffect, useMemo, useState } from "react";
import "./heroslider.css";

import hero1 from "../../utils/images/hero1.png";
import hero2 from "../../utils/images/hero2.png";
import hero3 from "../../utils/images/hero3.png";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        img: hero1,
        title: "Fresh Groceries Everyday",
        desc: "Produce, snacks, drinks, and all the quick essentials you need.",
        ctaText: "Shop Groceries",
        ctaHref: "#groceries",
      },
      {
        img: hero2,
        title: "Fast Fuel, Easy Stop",
        desc: "Regular + Diesel prices updated daily, with quick in-and-out service.",
        ctaText: "View Fuel",
        ctaHref: "#fuel",
      },
      {
        img: hero3,
        title: "Weekly Deals & Rewards",
        desc: "Save more with in-store specials and Buddy’s Rewards.",
        ctaText: "See Deals",
        ctaHref: "#deals",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${s.img})` }}
            aria-hidden={i !== index}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <h1>{s.title}</h1>
              <p>{s.desc}</p>

              <div className="hero-actions">
                <a className="hero-cta" href={s.ctaHref}>
                  {s.ctaText}
                </a>
                <a className="hero-cta ghost" href="#directions">
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        ))}

        <button className="hero-arrow left" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <button className="hero-arrow right" onClick={next} aria-label="Next">
          ›
        </button>

        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}