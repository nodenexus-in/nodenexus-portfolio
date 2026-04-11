import React from 'react';
import './CTA.css';

import devPhoto from '../assets/dev-photo.jpg';
import seoPhoto from '../assets/seo-photo.jpg';

export default function CTA() {
  return (
    <>
      {/* ── Team Section ── */}
      <section id="team" className="team-section">
        <div className="team-inner">

          <div className="team-label rv">
            <span className="team-label-line" />
            Our Team
            <span className="team-label-line" />
          </div>

          <h2 className="rv d1">
            The minds behind<br />
            <span className="team-accent">NodeNexus</span>
          </h2>

          <p className="team-sub rv d2">
            A focused duo — one builds, one grows. Together we ship websites that perform.
          </p>

          <div className="team-grid rv d3">

            {/* Developer Card */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src={devPhoto} alt="R Sriram - Developer" className="team-img" />
                <div className="team-role-badge">Developer</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">R Sriram</h3>
                <p className="team-role-text">Full-Stack Developer</p>
                <p className="team-bio">
                  Crafts fast, scalable web experiences from pixel-perfect frontends to robust backends.
                </p>
                <div className="team-tags">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>UI/UX</span>
                </div>
              </div>
            </div>

            {/* SEO Card */}
            <div className="team-card">
              <div className="team-img-wrap">
                <img src={seoPhoto} alt="AP Gowtham - SEO Specialist" className="team-img" />
                <div className="team-role-badge">SEO</div>
              </div>
              <div className="team-info">
                <h3 className="team-name">AP Gowtham</h3>
                <p className="team-role-text">SEO Specialist</p>
                <p className="team-bio">
                  Drives organic growth through technical SEO, content strategy, and data-backed optimisation.
                </p>
                <div className="team-tags">
                  <span>On-Page SEO</span>
                  <span>Analytics</span>
                  <span>Growth</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section id="cta" className="cta-section">
        <div className="cta-inner">

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
            We'll figure it out together and deliver something you'll beLooking forward to!
          </p>

          <div className="cta-btns rv d3">
            <a href="mailto:hello@nodenexus.in" className="btn-primary">
              Email Us
            </a>
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
    </>
  );
}