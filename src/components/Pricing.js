import React from 'react';
import './Pricing.css';

const PLANS = [
  {
    tier: 'Starter',
    name: 'Landing Page',
    desc: 'Perfect for small businesses, clinics, and professionals who need a clean, fast online presence.',
    price: '7,050',
    note: 'One-time · Delivered in 5–7 days',
    popular: false,
    btnStyle: 'outline',
    btnLabel: 'Get Started',
    features: [
      { yes: true,  text: '1-3 pages' },
      { yes: true,  text: 'Mobile responsive design' },
      { yes: true,  text: 'Basic on-page SEO' },
      { yes: true,  text: 'campaign optimised' },
      { yes: true,  text: 'Google Maps integration' },
      { yes: true,  text: '1 month free support' },
      { yes: false, text: 'React / dynamic features' },
      { yes: false, text: 'whatsApp integration' },
    ],
  },
  {
    tier: 'Professional',
    name: 'React Website',
    desc: 'For businesses that need dynamic features, booking systems, or an interactive web experience.',
    price: '24,999',
    note: 'One-time · Delivered in 15–21 days',
    popular: true,
    btnStyle: 'solid',
    btnLabel: 'Get Started',
    features: [
      { yes: true, text: 'Up to 10 pages' },
      { yes: true, text: 'React.js / Next.js development' },
      { yes: true, text: 'Online booking / enquiry system' },
      { yes: true, text: 'CMS integration' },
      { yes: true, text: 'Advanced SEO + performance' },
      { yes: true, text: 'WhatsApp / social links' },
      { yes: true, text: '2 months free support' },
      { yes: true, text: 'Google Analytics setup' },
    ],
  },
  {
    tier: 'Custom',
    name: 'Full-Stack App',
    desc: 'For startups and businesses needing a full product — dashboards, portals, APIs, and databases.',
    price: '49,999',
    priceSuffix: 'onwards',
    note: 'Custom timeline · Scoped per project',
    popular: false,
    btnStyle: 'outline',
    btnLabel: "Let's Talk",
    features: [
      { yes: true, text: 'Full React + Node.js stack' },
      { yes: true, text: 'Database design (MongoDB/SQL)' },
      { yes: true, text: 'Admin dashboard' },
      { yes: true, text: 'REST API development' },
      { yes: true, text: 'Authentication & user roles' },
      { yes: true, text: 'Cloud deployment (Vercel/AWS)' },
      { yes: true, text: '6 months support' },
      { yes: true, text: 'Dedicated project manager' },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="wrap">
        <div className="pricing-head">
          <div className="s-label rv pricing-label">Pricing</div>
          <h2 className="s-title rv d1">Transparent pricing.<br />No surprises.</h2>
          <p className="s-sub rv d2">
            Every plan is a one-time project fee — no hidden costs, no lock-in.
            Pay once, own it forever.
          </p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.tier}
              className={`price-card rv${i === 1 ? ' d1' : i === 2 ? ' d2' : ''}${plan.popular ? ' popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}

              <div className="price-tier">{plan.tier}</div>
              <h3 className="price-name">{plan.name}</h3>
              <p className="price-desc">{plan.desc}</p>

              <div className="price-amount">
                <span className="price-currency">₹</span>
                <span className="price-num">{plan.price}</span>
                {plan.priceSuffix && <span className="price-suffix">{plan.priceSuffix}</span>}
              </div>
              <p className="price-note">{plan.note}</p>

              <ul className="price-features">
                {plan.features.map(f => (
                  <li key={f.text}>
                    <span className={`chk${f.yes ? '' : ' off'}`}>{f.yes ? '✓' : '–'}</span>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a href="#cta" className={`price-btn ${plan.btnStyle}`}>{plan.btnLabel}</a>
            </div>
          ))}
        </div>

        <p className="price-custom rv d3">
          Need something in between?{' '}
          <a href="#cta">Send us a message</a> — we'll craft a plan that fits your budget.
        </p>
      </div>
    </section>
  );
}
