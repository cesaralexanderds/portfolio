import React from 'react';

const Header = () => {
  return (
    <header>
      <nav
        role="navigation"
        className="justify-center items-center fixed top-0 left-0 right-0 bg-zinc-950 bg-opacity-60 p-4 z-50 shadow-2xl shadow-secondary/[0.45] backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto h-10 flex justify-between md:justify-between items-center">
          <div className="items-center justify-start">
            <a href="/" className="text-white text-2xl font-bold flex" aria-label="Home"> cads </a>
          </div>

          <div className="inline-flex space-x-6 items-center justify-end md:hidden">
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors"> Contact </a>
            <a href="/#projects" className="text-white hover:text-gray-300 transition-colors"> Projects </a>
            <a href="/#about" className="text-white hover:text-gray-300 transition-colors"> About me </a>
          </div>

          <div className="hidden rounded-full px-4 py-2 md:flex space-x-9 items-center">
            <a href="/" className="text-white hover:text-gray-300 transition-colors"> Home </a>
            <a href="/contact" className="text-white hover:text-gray-300 transition-colors"> Contact </a>
            <a href="/#projects" className="text-white hover:text-gray-300 transition-colors"> Projects </a>
            <a href="/#about" className="text-white hover:text-gray-300 transition-colors"> About me </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Change language"
            >
              
            </button>
            <button
              className="text-white hover:text-gray-300 transition-colors"
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