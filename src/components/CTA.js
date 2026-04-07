import React from 'react';
import './CTA.css';

export default function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-inner">
        {/* Label */}
        <div className="cta-label rv">
          <span className="cta-label-line" />
          Let's Build
          <span className="cta-label-line" />
        </div>

        <h2 className="rv d1">
          Ready for a website<br />
          <span className="cta-accent">that actually works?</span>
        </h2>

        <p className="rv d2">
          Whether you have a full brief or just an idea — reach out.
          We'll figure it out together and deliver something you'll be proud of.
        </p>

        <div className="cta-btns rv d3">
          {/* Update href with your real email */}
          <a href="mailto:hello@nodenexus.in" className="btn-primary">
            Email Us
          </a>
          {/* Update with your real WhatsApp number */}
          <a href="https://wa.me/9100000000" className="btn-secondary">
            WhatsApp →
          </a>
        </div>

        <div className="cta-meta rv d4">
          <span>📍 Salem, Tamil Nadu</span>
          <span className="cta-dot">·</span>
          <span>
            ✉️{' '}
            <a href="mailto:hello@nodenexus.in">hello@nodenexus.in</a>
          </span>
        </div>
      </div>
    </section>
  );
}
