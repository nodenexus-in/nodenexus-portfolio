import React from 'react';
import LogoSVG from './LogoSVG';
import './Footer.css';

const LINKS = [
  { href: '#about',        label: 'About'    },
  { href: '#services',     label: 'Services' },
  { href: '#projects',     label: 'Work'     },
  { href: '#pricing',      label: 'Pricing'  },
  { href: '#cta',          label: 'Contact'  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#hero" className="footer-logo">
        <LogoSVG size={28} />
        <span>NodeNexus</span>
      </a>

      <ul className="footer-links">
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      <p className="footer-copy">
        © {new Date().getFullYear()} NodeNexus · Local roots. Digital reach.
      </p>
    </footer>
  );
}
