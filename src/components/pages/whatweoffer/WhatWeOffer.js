// src/components/pages/whatweoffer/WhatWeOffer.js
import React from "react";
import "./whatweoffer.css";

const SECTIONS = [
  {
    title: "Fuel + Shell Rewards",
    desc: "Quality Shell fuel with rewards that help you save on every stop.",
    items: ["Regular + Diesel", "Shell Rewards savings", "Shell gift cards available"],
    tag: "Powered by Shell",
    theme: "blue",
    quote: "Quick fill-up, clean stop, and savings with Shell Rewards.",
  },
  {
    title: "Hot Food",
    desc: "Fresh, hot, and ready when you’re hungry.",
    items: [
      "Burgers + chicken sandwiches",
      "Pizza + cheese bread",
      "Mini tacos, wings, strips, nuggets",
    ],
    tag: "Made to go",
    theme: "green",
    quote: "Hot food that feels fresh, not just gas station food.",
  },
  {
    title: "Coffee + Drinks",
    desc: "Everything from your morning coffee to an ice-cold drink.",
    items: ["Ronoco coffee", "Sweet tea + fountain drinks", "Slushies + trending drinks"],
    tag: "Always stocked",
    theme: "blue",
    quote: "Coffee in the morning, slushies in the afternoon — easy.",
  },
  {
    title: "Fresh Donuts",
    desc: "Start your day with fresh donuts made daily.",
    items: ["Daylight Donuts daily", "Perfect with coffee", "Great for morning runs"],
    tag: "Morning favorites",
    theme: "green",
    quote: "Fresh donuts in the morning — the best kind of stop.",
  },
  {
    title: "Snacks + Grocery",
    desc: "A full store feel - snacks, groceries, and essentials.",
    items: ["Chips, chocolates, candy", "Fresh fruits + everyday items", "New drinks in the market"],
    tag: "Big selection",
    theme: "blue",
    quote: "If it’s new on the market, there’s a good chance we have it.",
  },
  {
    title: "Tobacco + Essentials",
    desc: "Convenient essentials available when you need them.",
    items: ["Tobacco products", "Quick essentials", "Grab-and-go convenience"],
    tag: "Quick stop",
    theme: "green",
    quote: "Grab what you need, check out fast, and you’re back on the road.",
  },
  {
    title: "Propane Exchange",
    desc: "Easy propane exchange when you need it - quick and convenient.",
    items: ["Propane tank exchange", "Fast service", "Great for grilling and outdoor use"],
    tag: "Outdoor ready",
    theme: "blue",
    quote: "Perfect for grilling days and weekend plans.",
  },
  {
    title: "Ice Bags",
    desc: "Grab ice on the way to work, home, or a weekend trip.",
    items: ["Bagged ice available", "Quick checkout", "Perfect for parties and road trips"],
    tag: "Always available",
    theme: "green",
    quote: "Ice, drinks, snacks — done in one quick stop.",
  },
  {
    title: "Bulk Orders",
    desc: "Need a large quantity of drinks, snacks, ice, or supplies? We can help.",
    items: ["Large quantity orders", "Call ahead or message us", "Fast pickup coordination"],
    tag: "Order ahead",
    theme: "blue",
    quote: "Hosting something big? Just contact us and we’ll set it up.",
  },
];

export default function WhatWeOffer() {
  return (
    <div className="offerpage">
      {/* HERO */}
      <section className="offer-hero">
        <div className="offer-hero-inner">
          <div className="offer-hero-badge">
            <span className="smiley">☺</span>
            <span>What We Offer</span>
          </div>

          <h1>Everything you need, all in one stop.</h1>

          <p>
            Buddy’s Always Friendly is more than a gas station — we’re fuel, food,
            drinks, snacks, and a clean store with friendly service every day.
          </p>

          <div className="offer-quote">
            <div className="quote-text">
              Try out our in-store grocery deals, grab fresh donuts in the morning,
              or stop in for hot food and Shell fuel — we’ve got you covered.
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="offer-sections" id="offer-sections">
        <div className="offer-inner">
          <div className="offer-grid">
            {SECTIONS.map((s, idx) => (
              <div className={`offer-card ${s.theme}`} key={idx}>
                <div className="offer-card-top">
                  <div className="offer-tag">
                    <span className="smiley">☺</span>
                    <span>{s.tag}</span>
                  </div>
                </div>

                <h2 className="offer-title">{s.title}</h2>
                <p className="offer-desc">{s.desc}</p>

                <ul className="offer-list">
                  {s.items.map((it, i) => (
                    <li key={i}>
                      <span className="dot">●</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* Small quote per card (no buttons) */}
                <div className="offer-mini-quote">
                  <span className="mini-quote-text">{s.quote}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Help Banner (only FAQs + Contact) */}
          <div className="help-banner">
            <div className="help-left">
              <div className="help-badge">
                <span className="smiley">☺</span>
                <span>Need help?</span>
              </div>
              <div className="help-title">Got questions or special requests?</div>
              <div className="help-desc">
                Check our FAQs for quick answers, or contact us anytime.
              </div>
            </div>

            <div className="help-right">
              <a className="btn primary" href="/faqs">
                Check FAQs
              </a>
              <a className="btn secondary" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}