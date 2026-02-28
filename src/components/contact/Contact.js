import React from "react";
import "./contact.css";

export default function Contact() {
  const address = "11240 S Lone Elm Rd, Olathe, KS 66061";
  const phoneDisplay = "(913) 791-0199";
  const phoneLink = "+19137910199";

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=11240%20S%20Lone%20Elm%20Rd%2C%20Olathe%2C%20KS%2066061";

  const mapEmbedUrl =
    "https://www.google.com/maps?q=11240%20S%20Lone%20Elm%20Rd%2C%20Olathe%2C%20KS%2066061&output=embed";

  return (
    <section className="contact-wrap" id="contact">
      <div className="contact-inner">

        <div className="contact-head">
          <div className="contact-badge">
            <span className="contact-smiley">☺</span>
            <span>Contact Us</span>
          </div>

          <h2>Visit or Message Buddy’s</h2>
          <p>
            Call us directly or send a message. We’re always friendly and ready to help.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE — FORM */}
          <div className="form-card">
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="contact-form"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Write your message..." rows="5" required />

              <button type="submit" className="contact-btn primary full">
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <div className="info-row">
                <strong>Address:</strong> {address}
              </div>

              <div className="info-row">
                <strong>Phone:</strong>{" "}
                <a href={`tel:${phoneLink}`} className="link">
                  {phoneDisplay}
                </a>
              </div>

              <div className="info-row">
                <strong>Hours:</strong> Open • Closes 12 AM
              </div>

              <div className="info-buttons">
                <a className="contact-btn secondary" href={`tel:${phoneLink}`}>
                  Call Now
                </a>

                <a
                  className="contact-btn secondary"
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — MAP */}
          <div className="map-card">
            <iframe
              title="Buddy’s Map"
              src={mapEmbedUrl}
              className="map-iframe"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  );
}