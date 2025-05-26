import React from 'react';
import { motion } from 'framer-motion';

const ContactInfo = () => {
  return (
    <div className="mb-12 pt-16">
      <motion.h1 
        className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white mb-8 text-center" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact
      </motion.h1>
      
      <motion.div 
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a 
          className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200" 
          href="https://github.com/cesaralexanderds/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit César Alexander's GitHub profile"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src="/github-mark-white.svg" className="h-5 w-5 mr-2" alt="" />
          <span>GitHub</span>
        </motion.a>
        
        <motion.a 
          className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200" 
          href="https://www.linkedin.com/in/c-a-d-s/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Connect with César Alexander on LinkedIn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
          <span>LinkedIn</span>
        </motion.a>
        
        <motion.a 
          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200" 
          href="mailto:cesaralexanderds@gmail.com" 
          aria-label="Send an email to César Alexander"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
            <path d="M3 6l9 6l9 -6"></path>
            <path d="M15 18h6"></path>
            <path d="M18 15l3 3l-3 3"></path>
          </svg>
          <span>Email</span>
        </motion.a>
      </motion.div>
      
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.a 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-transparent border border-white hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go back to the home page"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ContactInfo; 