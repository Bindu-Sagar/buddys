import React, { useMemo, useState } from "react";
import "./faq.css";

const FAQ_DATA = [
  {
    group: "Fuel + Rewards",
    items: [
      {
        q: "Do you have diesel?",
        a: "Yes, we offer both regular gas and diesel.",
      },
      {
        q: "Do you support Shell Rewards?",
        a: "Yes. You can use Shell Rewards to save on fuel. If you’re new, you can sign up on Shell’s website.",
      },
      {
        q: "Can I buy Shell gift cards in-store?",
        a: "Yes, Shell gift cards are available in-store.",
      },
    ],
  },
  {
    group: "Store + Cleanliness",
    items: [
      {
        q: "Are your restrooms open and clean?",
        a: "Yes. We keep our restrooms clean and well-maintained, and they’re available for customers.",
      },
      {
        q: "Do you carry fresh fruits and grocery items?",
        a: "Yes. We carry fresh fruits along with a big selection of snacks, drinks, and everyday essentials.",
      },
      {
        q: "What are your hours?",
        a: "We’re open daily and we close at 12 AM.",
      },
    ],
  },
  {
    group: "Food + Donuts + Drinks",
    items: [
      {
        q: "What hot food do you serve?",
        a: "We serve burgers, chicken sandwiches, pizzas, mini tacos, wings, strips, cheese bread, and nuggets.",
      },
      {
        q: "Do you have fresh donuts every day?",
        a: "Yes. We carry fresh donuts made by Daylight Donuts.",
      },
      {
        q: "What drinks do you have?",
        a: "We have Ronoco coffee, sweet tea, slushies, fountain drinks, and a big selection of bottled drinks — including new drinks that hit the market.",
      },
    ],
  },
  {
    group: "Extras + Services",
    items: [
      {
        q: "Do you offer propane exchange?",
        a: "Yes, we offer propane exchange for outdoor and grilling needs.",
      },
      {
        q: "Do you sell ice bags?",
        a: "Yes, we keep bagged ice available for quick pickup.",
      },
      {
        q: "Can I place a bulk order for snacks, drinks, or ice?",
        a: "Yes. If you need a large quantity, just contact us using the Contact page and we’ll help set it up.",
      },
    ],
  },
];

export default function FAQs() {
  const [activeGroup, setActiveGroup] = useState(FAQ_DATA[0].group);
  const [openKey, setOpenKey] = useState(null);

  const current = useMemo(() => {
    return FAQ_DATA.find((g) => g.group === activeGroup) || FAQ_DATA[0];
  }, [activeGroup]);

  const toggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className="faq-page" id="faqs">
      {/* HERO */}
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <div className="faq-badge">
            <span className="smiley">☺</span>
            <span>FAQs</span>
          </div>

          <h1>Quick answers, before you call.</h1>
          <p>
            Here are the most common questions about Buddy’s Always Friendly —
            fuel, food, store items, and extra services.
          </p>

          <div className="faq-quote">
            <span className="quote-icon">“</span>
            <div className="quote-text">
              Clean store, clean restrooms, friendly people… and a big selection every day.
            </div>
            <span className="quote-icon right">”</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="faq-content">
        <div className="faq-inner">
          {/* LEFT: CATEGORIES */}
          <div className="faq-sidebar">
            <div className="faq-sidebar-title">Categories</div>

            {FAQ_DATA.map((g) => (
              <button
                key={g.group}
                className={`faq-tab ${activeGroup === g.group ? "active" : ""}`}
                onClick={() => {
                  setActiveGroup(g.group);
                  setOpenKey(null);
                }}
                type="button"
              >
                <span className="tab-smiley">☺</span>
                <span className="tab-text">{g.group}</span>
              </button>
            ))}

            <div className="faq-helpbox">
              <div className="faq-help-title">Still need help?</div>
              <div className="faq-help-desc">
                If you don’t see your question here, use our Contact page and we’ll respond.
              </div>
              <a className="faq-help-link" href="/contact">
                Go to Contact
              </a>
            </div>
          </div>

          {/* RIGHT: ACCORDION */}
          <div className="faq-main">
            <div className="faq-main-head">
              <h2>{current.group}</h2>
              <div className="faq-main-sub">
                Tap a question to see the answer.
              </div>
            </div>

            <div className="faq-accordion">
              {current.items.map((it, idx) => {
                const key = `${current.group}-${idx}`;
                const isOpen = openKey === key;

                return (
                  <div className={`faq-item ${isOpen ? "open" : ""}`} key={key}>
                    <button
                      type="button"
                      className="faq-q"
                      onClick={() => toggle(key)}
                    >
                      <span className="faq-q-left">
                        <span className="faq-q-dot">●</span>
                        <span className="faq-q-text">{it.q}</span>
                      </span>

                      <span className="faq-q-icon">{isOpen ? "−" : "+"}</span>
                    </button>

                    <div className="faq-a">
                      <div className="faq-a-inner">{it.a}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-bottom-note">
              <span className="smiley">☺</span>
              <span>
                Tip: For bulk orders (ice, drinks, snacks), send a message on the Contact page.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}