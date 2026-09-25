import React from 'react';
import infoData from '../data/info.json';
import ExternalLink from './ExternalLink.jsx';

const { about, contact } = infoData;
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="page-gutter">
    <div className="flex flex-col gap-3 py-8 text-sm text-muted sm:min-h-24 sm:flex-row sm:items-center sm:justify-between">
      <span>
        © {currentYear} {about.name}
      </span>
      <div className="flex gap-7">
        {contact.links.map((link) => (
          <ExternalLink key={link.url} href={link.url} className="link-hover text-muted">
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
