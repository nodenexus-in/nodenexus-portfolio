import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '🌐',
    title: 'Static Websites',
    desc: 'Clean, fast, SEO-optimised websites built with HTML, CSS & JavaScript. Perfect for businesses needing a professional online presence.',
    tag: 'HTML/CSS/JS',
    featured: false,
  },
  {
    icon: '⚛️',
    title: 'React Development',
    desc: 'Dynamic, component-driven web apps built with React.js and Next.js. Ideal for dashboards, portals, booking systems, and interactive platforms.',
    tag: 'React · Next.js',
    featured: true,   // highlighted card
  },
  {
    icon: '🔧',
    title: 'Full-Stack Apps',
    desc: 'End-to-end development with Node.js backends, REST APIs, and database integration. Scalable solutions for growing businesses.',
    tag: 'Node.js · MongoDB',
    featured: false,
  },
  {
    icon: '🔍',
    title: 'SEO & Performance',
    desc: 'On-page SEO, Core Web Vitals tuning, structured data, and 90+ Lighthouse scores that help you rank and retain visitors.',
    tag: 'SEO · Speed',
    featured: false,
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Custom Figma designs tailored to your brand. Every screen crafted for clarity, trust, and conversion before a single line of code.',
    tag: 'Figma · Design',
    featured: false,
  },
  {
    icon: '🛡️',
    title: 'Support & Maintenance',
    desc: 'Monthly retainer plans for updates, monitoring, bug fixes, and continuous improvements. We stay as your long-term tech partner.',
    tag: 'Retainer',
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="wrap">
        <div className="services-header">
          <div>
            <div className="s-label rv">Services</div>
            <h2 className="s-title rv d1">What we build,<br />and how we build it</h2>
          </div>
          <p className="s-sub rv d2">
            Every service delivered with hand-written code, clear communication,
            and zero compromise on quality.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card rv${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}${s.featured ? ' featured' : ''}`}
            >
              <div className="sc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="sc-tag">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
