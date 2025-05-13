import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="hidden opacity-80 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl md:flex justify-center"
    >
      <div
        className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between lg:justify-between py-4"
      >
        <ul
          className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0"
        >
          <li>
            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:underline me-4 md:me-6">Contact</a>
          </li>
          <li>
            <a href="#resume" className="hover:underline me-4 md:me-6">Resume</a>
          </li>
        </ul>
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear} Made with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">React</a> and <a href="https://astro.build/" target="_blank" rel="noopener noreferrer" className="hover:underline">Astro</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer; 