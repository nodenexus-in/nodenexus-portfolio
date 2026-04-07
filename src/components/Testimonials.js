import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    featured: true,
    stars: '★★★★★',
    quote:
      'Working with NodeNexus was seamless from start to finish. They understood exactly what a physio clinic needs online and delivered something we\'re genuinely proud to show every new patient.',
    av: 'RP',
    name: 'Dr. Ramya Priya',
    role: 'Founder, PhysioMotion Clinic',
  },
  {
    featured: false,
    stars: '★★★★★',
    quote:
      'Our site loads in under a second and looks better than clinics three times our size. New patient enquiries came the very first week we launched.',
    av: 'AK',
    name: 'Arun Kumar',
    role: 'Practice Manager, PhysioMotion',
  },
  {
    featured: false,
    stars: '★★★★★',
    quote:
      'The booking flow they designed reduced our phone calls by half. Attention to detail was impressive — they even suggested improvements I hadn\'t thought of.',
    av: 'SR',
    name: 'Sundari R.',
    role: 'Clinic Operations, Salem',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="wrap">
        <div className="s-label rv">Reviews</div>
        <h2 className="s-title rv d1">
          Words from clients<br />who trusted us
        </h2>
        <p className="s-sub rv d2">Honest feedback after real projects. No fillers.</p>

        <div className="tc-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`tcard rv${i === 1 ? ' d1' : i === 2 ? ' d2' : ''}${t.featured ? ' featured' : ''}`}
            >
              {t.featured && <div className="t-badge">Featured</div>}
              <div className="tc-stars">{t.stars}</div>
              <blockquote>"{t.quote}"</blockquote>
              <div className="tc-author">
                <div className="tc-av">{t.av}</div>
                <div className="tc-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
