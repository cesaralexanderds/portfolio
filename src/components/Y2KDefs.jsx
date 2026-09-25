import React from 'react';

/**
 * Shared SVG paint servers and filters, rendered once per page:
 * duotone portrait filters, the animated "liquid chrome" displacement filters
 * and the chrome gradient used by the display word.
 */
const Y2KDefs = () => (
  <svg
    width="0"
    height="0"
    aria-hidden="true"
    focusable="false"
    data-smil=""
    style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
  >
    <defs>
      <filter id="duo" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.171 0.575 0.058 0 0.055  0.170 0.572 0.058 0 0.102  0.136 0.457 0.046 0 0.361  0 0 0 1 0"
        />
        <feComponentTransfer>
          <feFuncR type="gamma" exponent="1.15" />
          <feFuncG type="gamma" exponent="1.1" />
          <feFuncB type="gamma" exponent="0.9" />
        </feComponentTransfer>
      </filter>
      <filter id="duo2" colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="0.190 0.639 0.065 0 0.106  0.167 0.561 0.057 0 0.216  0.063 0.213 0.022 0 0.702  0 0 0 1 0"
        />
      </filter>
      <filter id="liquid" x="-4%" y="-20%" width="108%" height="150%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.018" numOctaves="2" seed="4" result="noise">
          <animate
            attributeName="baseFrequency"
            dur="16s"
            values="0.006 0.018;0.009 0.026;0.005 0.014;0.006 0.018"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G" result="warp" />
        <feGaussianBlur in="warp" stdDeviation="5" result="soft" />
        <feColorMatrix in="soft" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -11" result="goo" />
        <feComposite in="warp" in2="goo" operator="atop" />
      </filter>
      <filter id="liquidHtml" x="-5%" y="-25%" width="110%" height="160%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.022" numOctaves="2" seed="11" result="noise">
          <animate
            attributeName="baseFrequency"
            dur="19s"
            values="0.008 0.022;0.011 0.03;0.007 0.018;0.008 0.022"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="warp" />
        <feGaussianBlur in="warp" stdDeviation="2.5" result="soft" />
        <feColorMatrix in="soft" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feComposite in="warp" in2="goo" operator="atop" />
      </filter>
      <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="380" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.44" stopColor="#f4f7ff" />
        <stop offset="0.52" stopColor="#c9d6ff" />
        <stop offset="0.64" stopColor="#ffffff" />
        <stop offset="1" stopColor="#e3e8f8" />
      </linearGradient>
    </defs>
  </svg>
);

export default Y2KDefs;
