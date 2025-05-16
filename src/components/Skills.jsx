import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const { skills } = skillsData;

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <motion.h2 
        className="text-3xl font-semibold mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills and Tools
      </motion.h2>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-1 items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name || index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.25,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="py-4 w-full text-center flex flex-col items-center group"
          >
            <motion.img
              src={skill.svg}
              width={64}
              height={64}
              className="mb-3 md:filter md:grayscale group-hover:filter-none transition-all drop-shadow-lg hover:drop-shadow-2xl shadow-secondary"
              alt={`${skill.name} icon`}
              loading="lazy"
              decoding="async"
              whileHover={{ scale: 1.1 }}
            />
            <span className="text-md font-medium text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 