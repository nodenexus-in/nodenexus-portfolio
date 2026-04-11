import React from 'react';
import LogoSVG from './LogoSVG';
import './Footer.css';

const LINKS = [
  { href: '#about',    label: 'About'    },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Work'     },
  { href: '#pricing',  label: 'Pricing'  },
  { href: '#cta',      label: 'Contact'  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand block */}
        <div className="footer-brand">
          <a href="#hero" className="footer-logo">
            <LogoSVG size={40} />
            <div className="footer-wordmark">
              <span className="fw-name">
                <span className="fw-node">node</span>
                <span className="fw-nexus">nexus</span>
              </span>
              <span className="fw-tag">Local roots. Digital reach.</span>
            </div>
          </a>
          <p className="footer-desc">
            A two-person web studio from Salem, Tamil Nadu — building fast,
            purposeful websites for businesses that want to grow online.
          </p>
        </div>

        {/* Nav links */}
        <nav className="footer-nav">
          <p className="footer-nav-label">Navigate</p>
          <ul className="footer-links">
            {LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact block */}
        <div className="footer-contact">
          <p className="footer-nav-label">Get in touch</p>
          <a href="mailto:hello@nodenexus.in" className="footer-contact-link">
            hello@nodenexus.in
          </a>
          <a href="https://wa.me/9100000000" className="footer-contact-link">
            WhatsApp →
          </a>
          <p className="footer-location">📍 Salem, Tamil Nadu</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} NodeNexus · All rights reserved.
        </p>
        <p className="footer-copy">
          Crafted with care in Salem 🇮🇳
        </p>
      </div>
    </footer>
  );
}