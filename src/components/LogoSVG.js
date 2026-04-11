import React from 'react';

export default function LogoSVG({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NodeNexus icon"
    >
      {/* Outer hex ring */}
      <polygon
        points="28,3 51,16 51,40 28,53 5,40 5,16"
        fill="none"
        stroke="#6366f1"
        strokeWidth="1.8"
        opacity="0.5"
      />
      {/* Inner hex fill */}
      <polygon
        points="28,11 44,20 44,36 28,45 12,36 12,20"
        fill="#6366f1"
        opacity="0.1"
      />
      {/* Corner dots */}
      <circle cx="28" cy="3"  r="2.8" fill="#6366f1" />
      <circle cx="51" cy="16" r="2.8" fill="#6366f1" opacity="0.55" />
      <circle cx="51" cy="40" r="2.8" fill="#6366f1" opacity="0.4"  />
      <circle cx="28" cy="53" r="2.8" fill="#6366f1" opacity="0.55" />
      <circle cx="5"  cy="40" r="2.8" fill="#6366f1" opacity="0.4"  />
      <circle cx="5"  cy="16" r="2.8" fill="#6366f1" opacity="0.55" />
      {/* Connection lines from center */}
      <line x1="28" y1="28" x2="28" y2="5"  stroke="#6366f1" strokeWidth="1.2" opacity="0.45" />
      <line x1="28" y1="28" x2="49" y2="17" stroke="#6366f1" strokeWidth="1.2" opacity="0.3"  />
      <line x1="28" y1="28" x2="49" y2="39" stroke="#6366f1" strokeWidth="1.2" opacity="0.2"  />
      {/* Center node */}
      <circle cx="28" cy="28" r="7"   fill="#6366f1" />
      <circle cx="28" cy="28" r="3.5" fill="#ffffff" opacity="0.9" />
      {/* N letterform */}
      <path
        d="M18 37 L18 19 L23 19 L33 31 L33 19 L38 19 L38 37 L33 37 L23 25 L23 37 Z"
        fill="#ffffff"
        opacity="0.88"
      />
    </svg>
  );
}