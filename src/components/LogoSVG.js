import React from 'react';

/** NodeNexus ring logo — pass size prop (default 34) */
export default function LogoSVG({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#6366f1" strokeWidth="3.5"
        strokeDasharray="70 207" strokeDashoffset="0" strokeLinecap="round"/>
      <circle cx="60" cy="60" r="44" fill="none" stroke="#a5b4fc" strokeWidth="2"
        strokeDasharray="35 207" strokeDashoffset="-105" strokeLinecap="round"/>
      <circle cx="60" cy="60" r="27" fill="none" stroke="rgba(165,180,252,0.2)" strokeWidth="1.5"/>
      <circle cx="60" cy="60" r="27" fill="none" stroke="#6366f1" strokeWidth="2.5"
        strokeDasharray="44 127" strokeDashoffset="12" strokeLinecap="round"/>
      <circle cx="60" cy="60" r="10" fill="#6366f1"/>
      <circle cx="60" cy="60" r="5"  fill="#07070f"/>
    </svg>
  );
}
