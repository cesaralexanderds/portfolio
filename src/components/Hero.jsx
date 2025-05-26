import React from 'react';
import { motion } from 'framer-motion';

const profilePhotoSrc = '/photo.webp'; 

const Hero = () => {
  return (
    <section className="py-16 section md:py-36 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl" id="home">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div>
          <motion.img 
            src={profilePhotoSrc} 
            height={240}
            width={240}
            className="mb-10 mt-10 md:mt-0 rounded-full md:mx-0" 
            alt="César Alexander's profile photo" 
            loading="eager"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white" 
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi! I'm César Alexander
          </motion.h1>
          <motion.p 
            className="tracking-[0.06em] text-xl text-zinc-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A computer science student, focused on web development and data engineering.
          </motion.p>
          <motion.div 
            className="md:w-full mt-6 text-xl text-zinc-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="[&>strong]:text-indigo-400">
              I am a <strong>Computer Science</strong> student at <span className="text-orange-500 font-bold">UANL</span>, with a strong interest in web development and data engineering.
            </p>
            <p>
              Currently doing an internship as a Data Engineer @ <span className="text-orange-500 font-bold">DEACERO</span>.
            </p>
          </motion.div>
         
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <motion.a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-white hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 