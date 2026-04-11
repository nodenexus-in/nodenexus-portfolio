import React, { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Work',     href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team' },
  { label: 'Contact',  href: '#cta' },
];

/* ── Inline SVG logo — no image file needed ── */
function NodeNexusLogo() {
  return (
    <svg width="176" height="38" viewBox="0 0 260 56" xmlns="http://www.w3.org/2000/svg" aria-label="NodeNexus logo">
      <g transform="translate(4,4)">
        {/* Outer hex ring */}
        <polygon points="24,2 44,13 44,35 24,46 4,35 4,13"
          fill="none" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
        {/* Inner hex fill */}
        <polygon points="24,9 38,17 38,31 24,39 10,31 10,17"
          fill="#6366f1" opacity="0.12"/>
        {/* Corner dots */}
        <circle cx="24" cy="2"  r="2.2" fill="#6366f1"/>
        <circle cx="44" cy="13" r="2.2" fill="#6366f1" opacity="0.6"/>
        <circle cx="44" cy="35" r="2.2" fill="#6366f1" opacity="0.4"/>
        <circle cx="24" cy="46" r="2.2" fill="#6366f1" opacity="0.6"/>
        <circle cx="4"  cy="35" r="2.2" fill="#6366f1" opacity="0.4"/>
        <circle cx="4"  cy="13" r="2.2" fill="#6366f1" opacity="0.6"/>
        {/* Connection lines */}
        <line x1="24" y1="24" x2="24" y2="4"  stroke="#6366f1" strokeWidth="1" opacity="0.5"/>
        <line x1="24" y1="24" x2="42" y2="14" stroke="#6366f1" strokeWidth="1" opacity="0.35"/>
        <line x1="24" y1="24" x2="42" y2="34" stroke="#6366f1" strokeWidth="1" opacity="0.25"/>
        {/* Center node */}
        <circle cx="24" cy="24" r="5"   fill="#6366f1"/>
        <circle cx="24" cy="24" r="2.5" fill="#ffffff" opacity="0.9"/>
        {/* N letterform */}
        <path d="M16 31 L16 17 L20 17 L28 27 L28 17 L32 17 L32 31 L28 31 L20 21 L20 31 Z"
          fill="#ffffff" opacity="0.92"/>
      </g>
      {/* Wordmark */}
      <text x="68" y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="19" fontWeight="800" fill="#ffffff"
        letterSpacing="-0.04em">node</text>
      <text x="120" y="26"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="19" fontWeight="800" fill="#6366f1"
        letterSpacing="-0.04em">nexus</text>
      {/* Tagline */}
      <text x="68" y="41"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="8.5" fontWeight="500" fill="#6366f1"
        letterSpacing="0.18em" opacity="0.8">LOCAL ROOTS. DIGITAL REACH.</text>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>

        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={close}>
          <NodeNexusLogo />
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="mailto:hello@nodenexus.in" className="nav-cta desktop-cta">
          Let's Talk
        </a>

        {/* Hamburger */}
        <button
          className={`burger${open ? ' is-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="b-line b1" />
          <span className="b-line b2" />
          <span className="b-line b3" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-logo">
          <NodeNexusLogo />
        </div>
        <ul className="mobile-links">
          {LINKS.map((l, i) => (
            <li key={l.label} style={{ '--i': i }}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="mailto:hello@nodenexus.in" className="mobile-cta" onClick={close}>
          Let's Talk →
        </a>
        <p className="mobile-meta">📍 Salem, Tamil Nadu</p>
      </div>

      {/* Backdrop */}
      {open && <div className="drawer-backdrop" onClick={close} />}
    </>
  );
}