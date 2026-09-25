import React, { useEffect, useState } from 'react';
import infoData from '../data/info.json';

const { about, contact } = infoData;

const NAV_LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About me' },
];

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
  </svg>
);

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

const iconButton =
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:border-accent-ink cursor-pointer';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // The inline script in Layout.astro already applied the theme; sync state with it.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {
      // Storage can be unavailable (private mode, blocked site data); the theme still applies.
    }
    setIsDark(next);
  };

  const themeLabel = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <header className="sticky top-0 z-50 bg-bg">
      <div className="page-gutter">
        <div className="flex h-[72px] items-center md:h-20 justify-between gap-4 border-b border-line">
          <a href="#home" className="link-hover min-w-0 text-base font-extrabold leading-tight tracking-[-0.02em] no-underline sm:text-[19px]">
            {about.wordmark ?? about.shortName}
          </a>

          <nav aria-label="Main navigation" className="hidden shrink-0 items-center gap-5 whitespace-nowrap text-[15px] font-medium md:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="link-hover text-muted no-underline">
                {link.label}
              </a>
            ))}
            <button type="button" onClick={toggleTheme} aria-label={themeLabel} className={iconButton}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href={contact.resume} className="pill chrome h-11 px-[22px]">
              Resume
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" onClick={toggleTheme} aria-label={themeLabel} className={iconButton}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={iconButton}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile navigation" className="border-b border-line py-4 md:hidden">
            <ul className="m-0 flex list-none flex-col p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="link-hover flex min-h-[44px] items-center text-2xl font-semibold tracking-[-0.02em] no-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={contact.resume}
              onClick={() => setMenuOpen(false)}
              className="pill chrome mt-4 h-11 px-[22px]"
            >
              Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
