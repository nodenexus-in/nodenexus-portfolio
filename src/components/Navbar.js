import React, { useEffect, useState } from 'react';
import LogoSVG from './LogoSVG';
import './Navbar.css';

const links = [
  { href: '#about',        label: 'About'    },
  { href: '#services',     label: 'Services' },
  { href: '#projects',     label: 'Work'     },
  { href: '#pricing',      label: 'Pricing'  },
  { href: '#testimonials', label: 'Reviews'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">
        <LogoSVG size={34} />
        <div className="nav-wordmark">
          <span className="w1">NodeNexus</span>
          <span className="w2">Local roots · Digital reach</span>
        </div>
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>

      <a href="#cta" className="nav-cta">Start a Project</a>
    </nav>
  );
}
