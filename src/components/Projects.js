import React from 'react';
import './Projects.css';

const PROJECTS = [
  {
    status: 'live',
    statusLabel: '✦ Live',
    title: 'PhysioMotion Clinic',
    desc: 'Full web presence for a physiotherapy clinic — online booking, service pages, patient testimonials, and a trust-first design that converts visitors into booked appointments.',
    chips: ['HTML/CSS', 'JavaScript', 'Booking CMS', 'SEO'],
    link: '#cta',
    linkLabel: 'View case study →',
    visual: 'physio',
  },
  {
    status: 'progress',
    statusLabel: 'In Progress',
    title: 'Local Retail Brand',
    desc: 'React-powered storefront with product catalogue, WhatsApp enquiry flow, and Google Business integration. Targeting Q3 delivery.',
    chips: ['React', 'Node.js', 'Vercel'],
    visual: 'coming',
  },
  {
    status: 'upcoming',
    statusLabel: 'Upcoming',
    title: 'Healthcare Dashboard',
    desc: 'React + TypeScript admin dashboard for a healthcare startup — patient tracking, appointment analytics, and mobile-first clinic staff experience.',
    chips: ['React', 'TypeScript', 'REST API'],
    visual: 'coming2',
  },
];

function PhysioMockup() {
  return (
    <div className="physio-frame">
      <div className="pf-dots"><span/><span/><span/></div>
      <div className="pf-nav" />
      <div className="pf-line w80" />
      <div className="pf-line w60" />
      <div className="pf-line w80" />
      <div className="pf-line w45" />
      <div className="pf-cards">
        <div/><div/><div/>
      </div>
    </div>
  );
}

function ComingRing() {
  return <div className="coming-ring">+</div>;
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="wrap">
        <div className="s-label rv">Work</div>
        <h2 className="s-title rv d1">Projects we're<br />proud to ship</h2>
        <p className="s-sub rv d2">Real clients. Real results. Every project is a commitment to quality.</p>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`project-card rv${i === 1 ? ' d1' : i === 2 ? ' d2' : ''}`}>
              <div className={`project-visual pv-${p.visual}`}>
                {p.visual === 'physio' ? <PhysioMockup /> : <ComingRing />}
              </div>
              <div className="project-body">
                <span className={`project-tag${p.status === 'live' ? ' live' : ''}`}>{p.statusLabel}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-chips">
                  {p.chips.map(c => <span key={c} className="chip">{c}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} className="project-link">{p.linkLabel}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
