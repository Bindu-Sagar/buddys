import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now: just demo. Later you can connect EmailJS / backend.
    alert("Thanks! We received your message.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
            Questions about fuel, groceries, deals, or store hours? Reach out and
            we’ll get back to you.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact card + form */}
          <div className="contact-card">
            <div className="contact-card-top">
              <div className="contact-badge">Buddy’s Gas & Grocery</div>
              <div className="contact-info">
                <div className="contact-row">
                  <span className="contact-label">Phone</span>
                  <a className="contact-value" href="tel:+10000000000">
                    (000) 000-0000
                  </a>
                </div>

                <div className="contact-row">
                  <span className="contact-label">Address</span>
                  <a
                    className="contact-value"
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noreferrer"
                  >
                    123 Main St, Your City, ST 00000
                  </a>
                </div>

                <div className="contact-row">
                  <span className="contact-label">Hours</span>
                  <span className="contact-value">Mon-Sun: 6:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  rows={4}
                  required
                />
              </div>

              <button className="contact-btn" type="submit">
                Send Message
              </button>

              <div className="contact-note">
                For urgent help, call us directly.
              </div>
            </form>
          </div>

          {/* Right: Map */}
          <div className="map-card">
            <div className="map-header">
              <h3>Find Us</h3>
              <a className="map-link" href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                Open in Maps
              </a>
            </div>

            <div className="map-frame">
              <iframe
                title="Buddy's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086334!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v0000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-actions">
              <a className="map-btn primary" href="#directions">
                Get Directions
              </a>
              <a className="map-btn" href="tel:+10000000000">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}