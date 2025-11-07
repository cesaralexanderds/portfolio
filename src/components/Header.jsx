import React, { useState, useEffect } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside or on route change
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    closeMobileMenu();
    
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl"
      >
        <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 dark:border-zinc-700 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a 
              href="/#home" 
              className="text-gray-900 dark:text-white text-lg md:text-xl font-bold flex focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2" 
              aria-label="Home"
            > 
              Alexander's Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/#home" 
              className="text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-3 py-2"
            > 
              Home 
            </a>
            <a 
              href="/#projects" 
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-3 py-2"
            > 
              Projects 
            </a>
            <a 
              href="/#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="text-sm text-gray-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-3 py-2"
            > 
              About me 
            </a>
            <a
              href="/Resume-Cesar-Alexander-Delgadillo-Sanchez.pdf.pdf"
              download="Cesar_Alexander_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Download César Alexander's Resume"
            >
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-700 mx-2 overflow-hidden">
            <div className="flex flex-col space-y-1 p-4">
              <a 
                href="/#home" 
                onClick={closeMobileMenu}
                className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              > 
                Home 
              </a>
              <a 
                href="/#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              > 
                Projects 
              </a>
              <a 
                href="/#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 transition-colors px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              > 
                About me 
              </a>
              
              {/* Social Links in Mobile Menu */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-zinc-700">
                <p className="text-xs text-gray-500 dark:text-zinc-500 mb-3 px-4">Connect with me</p>
                <div className="flex gap-3 px-4">
                  <a
                    href="https://github.com/cesaralexanderds/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/c-a-d-s/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:cesaralexanderds@gmail.com"
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                  href="/Resume-Cesar-Alexander-Delgadillo-Sanchez.pdf.pdf"
                  download="Cesar_Alexander_Resume.pdf"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
                  aria-label="Download César Alexander's Resume"
                >
                  
                CV
              </a>
                </div>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 