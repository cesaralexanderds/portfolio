import React from 'react';

const Header = () => {
  return (
    <header>
      <nav
        role="navigation"
        className="justify-center items-center fixed top-0 left-0 right-0 bg-zinc-950/60 dark:bg-zinc-950/60 bg-white/60 p-4 z-50 shadow-2xl shadow-secondary/[0.45] backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto h-10 flex items-center justify-between">
          <div className="items-center justify-start">
            <a href="/" className="text-gray-900 dark:text-white text-2xl font-bold flex" aria-label="Home"> cesar's portfolio </a>
          </div>

          <div className="inline-flex space-x-4 items-center justify-end md:hidden">
            <a href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> Contact </a>
            <a href="/#projects" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> Projects </a>
            <a href="/#about" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> About </a>
            <a
              href="/Resume-Cesar-Alexander-Delgadillo-Sanchez.pdf.pdf"
              download="Cesar_Alexander_Resume.pdf"
              className="inline-flex items-center px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition-colors duration-200"
              aria-label="Download CV"
            >
              CV
            </a>
          </div>

          <div className="hidden rounded-full px-4 py-2 md:flex space-x-9 items-center justify-between md:justify-center">
            <a href="/" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> Home </a>
            <a href="/contact" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> Contact </a>
            <a href="/#projects" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> Projects </a>
            <a href="/#about" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"> About me </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/Resume-Cesar-Alexander-Delgadillo-Sanchez.pdf.pdf"
              download="Cesar_Alexander_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
              aria-label="Download César Alexander's Resume"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </a>
            <button
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Toggle theme"
            >
              
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 