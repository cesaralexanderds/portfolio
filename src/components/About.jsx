import React from 'react';
import { motion } from 'framer-motion';
import infoData from '../data/info.json'; // Assuming info.json is in src/data

const { about } = infoData;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <motion.h2 
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h2>
      <motion.div 
        className="flex flex-wrap md:w-full items-center md:justify-between mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* 
          Astro's <Image /> component specific features (like optimization) are not directly transferable.
          If you were using specific props for optimization or format, you might need a React-specific image solution
          or adjust the <img> tag accordingly. For now, I'm assuming a simple image display if one was present.
          The original About.astro did not seem to use an <Image /> component directly in its template,
          but it did import it. If there was an image meant to be here, you'll need to add an <img> tag.
        */}
        <motion.p 
          className="md:w-3/6 text-xl text-zinc-200 [&>strong]:text-indigo-500"
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: about.description }}
        >
            {/* The original Astro component directly rendered HTML from about.description.
                In React, to render HTML strings, you use dangerouslySetInnerHTML.
                Ensure that the content of about.description is trusted.
                If it can contain user-generated content, this could be an XSS risk.
                If about.description is just text with some <strong> tags you control, it's fine.
            */}
        </motion.p>
        <motion.div 
          className="mt-8 md:mt-0 flex flex-col gap-2 dark:text-white max-w-md md:w-3/6 dark:bg-opacity-25"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-2xl font-medium text-zinc-200"
            variants={itemVariants}
          >
            Education
          </motion.h3>
          <motion.div 
            className="text-xl text-zinc-200"
            variants={itemVariants}
          >
            {about.education}
          </motion.div>
          <motion.div 
            className="mt-3 flex flex-row justify-start text-zinc-200"
            variants={itemVariants}
          >
            <p className="text-lg">Expected Graduation in June, 2026</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 