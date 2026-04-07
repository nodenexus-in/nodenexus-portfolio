import React from 'react';
import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'One focused call to understand your goals, audience, and vision — no wasted time.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Custom wireframes and visuals crafted around your brand identity, not templates.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Hand-coded, performance-first development. Live updates as we make progress.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We go live, hand over full control, and stay available for whatever comes next.',
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="wrap">
        <div className="s-label rv">How It Works</div>
        <h2 className="s-title rv d1">
          From brief to live<br />in four clean steps
        </h2>
        <p className="s-sub rv d2">
          No bloated agency process. Focused work that ships on time.
        </p>

        <div className="process-steps">
          <div className="process-line" />
          {STEPS.map((s, i) => (
            <div key={s.num} className={`process-step rv d${i}`}>
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
