import React from 'react';

/** Text link to an external site with a trailing arrow that screen readers skip. */
const ExternalLink = ({ href, children, className = '' }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`no-underline ${className}`}>
    {children}
    <span aria-hidden="true" className="ml-[0.3em]">↗</span>
    <span className="sr-only"> (opens in a new tab)</span>
  </a>
);

export default ExternalLink;
