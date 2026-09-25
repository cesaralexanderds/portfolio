import React from 'react';

/* Decorative Y2K ornaments. All are aria-hidden; colour comes from `currentColor`. */

const SPARKLE_PATH = 'M0-20C1.5-5 5-1.5 20 0C5 1.5 1.5 5 0 20C-1.5 5-5 1.5-20 0C-5-1.5-1.5-5 0-20Z';

export const Sparkle = ({ size = 30, delay = 0, className = '', style }) => (
  <svg
    className={`twinkle ${className}`}
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="-20 -20 40 40"
    style={{ animationDelay: `${delay}s`, ...style }}
  >
    <path d={SPARKLE_PATH} fill="currentColor" />
  </svg>
);

/** Printer's registration mark. */
export const RegMark = ({ className = '', style }) => (
  <svg aria-hidden="true" focusable="false" width="26" height="26" viewBox="0 0 26 26" className={className} style={style}>
    <circle cx="13" cy="13" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M13 0V26M0 13H26" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

/** Barcode strip; `horizontal` runs the bars left to right. Size it with utilities. */
export const Barcode = ({ horizontal = false, className = '' }) => (
  <div aria-hidden="true" className={`${horizontal ? 'barcode-h' : 'barcode'} ${className}`} />
);

/** Wireframe globe: meridians breathe via SMIL, the dashed orbit ring spins via CSS. */
export const Globe = ({ className = '', style, dur = 6, tilt = -24 }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="-60 -60 120 120"
    data-smil=""
    className={className}
    style={style}
  >
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle r="48" />
      <ellipse rx="48" ry="12" />
      <ellipse cy="-26" rx="40" ry="8" />
      <ellipse cy="26" rx="40" ry="8" />
      <line x1="0" y1="-48" x2="0" y2="48" />
      <ellipse rx="46" ry="48">
        <animate attributeName="rx" dur={`${dur}s`} values="46;2;46" repeatCount="indefinite" />
      </ellipse>
      <ellipse rx="30" ry="48">
        <animate attributeName="rx" dur={`${dur}s`} values="30;46;2;30" repeatCount="indefinite" />
      </ellipse>
      <ellipse rx="14" ry="48">
        <animate attributeName="rx" dur={`${dur}s`} values="14;30;46;2;14" repeatCount="indefinite" />
      </ellipse>
      <g className="orbit">
        <ellipse rx="58" ry="16" transform={`rotate(${tilt})`} strokeDasharray="4 5" />
      </g>
    </g>
  </svg>
);
