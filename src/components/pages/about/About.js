// src/components/pages/about/About.js
import React from "react";
import "./about.css";
import Staff from "../home/staff/Staff";

export default function About() {
  return (
    <div className="about-page" id="about">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-badge">
            <span className="smiley">☺</span>
            <span>About Us</span>
          </div>

          <h1>Buddy’s Always Friendly.</h1>
          <p>
            We’re a Shell-powered gas station and a big convenience grocery store in Olathe.
            People stop here for fuel, fresh food, drinks, snacks, and a clean place that feels welcoming.
          </p>

          <div className="about-quote">
            <span className="quote-icon">“</span>
            <div className="quote-text">
              Clean store, clean restrooms, fresh food, and friendly service — every single day.
            </div>
            <span className="quote-icon right">”</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="about-content">
        <div className="about-inner">
          {/* VALUES GRID */}
          <div className="about-grid">
            <div className="about-card blue">
              <div className="about-tag">
                <span className="smiley">☺</span>
                <span>Clean & Comfortable</span>
              </div>
              <h2>We take cleanliness seriously</h2>
              <p>
                We keep the store neat, the aisles organized, and the restrooms clean. When you stop here,
                you should feel comfortable — not rushed and not stressed.
              </p>

              <div className="mini-quote blueq">
                <span className="mini-quote-icon">“</span>
                <span className="mini-quote-text">A clean stop makes the whole trip feel better.</span>
                <span className="mini-quote-icon right">”</span>
              </div>
            </div>

            <div className="about-card green">
              <div className="about-tag">
                <span className="smiley">☺</span>
                <span>Fresh Food Daily</span>
              </div>
              <h2>More than snacks</h2>
              <p>
                We offer hot food like burgers, chicken sandwiches, pizza, wings, strips, mini tacos,
                cheese bread, and nuggets — plus fresh donuts from Daylight Donuts.
              </p>

              <div className="mini-quote greenq">
                <span className="mini-quote-icon">“</span>
                <span className="mini-quote-text">Quick food that actually tastes fresh.</span>
                <span className="mini-quote-icon right">”</span>
              </div>
            </div>

            <div className="about-card blue">
              <div className="about-tag">
                <span className="smiley">☺</span>
                <span>Big Selection</span>
              </div>
              <h2>Stocked for real life</h2>
              <p>
                Chips, chocolates, new drinks, slushies, fountain drinks, sweet tea, Ronoco coffee,
                fresh fruits, gift cards, essentials — if it’s popular, you’ll likely find it here.
              </p>

              <div className="mini-quote blueq">
                <span className="mini-quote-icon">“</span>
                <span className="mini-quote-text">One stop for fuel, food, and everything in between.</span>
                <span className="mini-quote-icon right">”</span>
              </div>
            </div>

            <div className="about-card green">
              <div className="about-tag">
                <span className="smiley">☺</span>
                <span>Friendly People</span>
              </div>
              <h2>Service with a smile</h2>
              <p>
                We’re proud of our team. We keep things simple: be respectful, be helpful, and treat
                customers like neighbors.
              </p>

              <div className="mini-quote greenq">
                <span className="mini-quote-icon">“</span>
                <span className="mini-quote-text">You’ll feel the friendly vibe the moment you walk in.</span>
                <span className="mini-quote-icon right">”</span>
              </div>
            </div>
          </div>
          <Staff />
          {/* LOCATION STRIP */}
          <div className="about-location">
            <div className="loc-left">
              <div className="loc-badge">
                <span className="smiley">☺</span>
                <span>Visit Us</span>
              </div>

              <div className="loc-title">11240 S Lone Elm Rd, Olathe, KS 66061</div>
              <div className="loc-desc">
                Stop by for Shell fuel, fresh food, donuts, drinks, snacks, propane exchange, and ice bags.
              </div>
            </div>

            <div className="loc-right">
              <div className="loc-quote">
                <span className="quote-icon">“</span>
                <span className="quote-text small">
                  If you need something in bulk, just reach out — we’ll help you set it up.
                </span>
                <span className="quote-icon right">”</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}