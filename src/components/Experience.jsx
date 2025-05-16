import React from 'react';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const { experience } = experienceData;

const Experience = () => {
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <motion.h2 
        className="text-3xl font-semibold mb-8 text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      <motion.div 
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experience.map((exp, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50 hover:border-orange-600/50 hover:shadow-md hover:shadow-orange-600/10"
          >
            <motion.div 
              className="flex flex-col md:flex-row md:justify-between md:items-center mb-3"
              variants={itemVariants}
            >
              <motion.h3 
                className="text-xl font-bold"
                variants={itemVariants}
              >
                {exp.jobTitle} at <span className="text-orange-600">{exp.company}</span>
              </motion.h3>
              <motion.span 
                className="text-sm text-zinc-400"
                variants={itemVariants}
              >
                {exp.startDate} - {exp.endDate === "Present" ? 
                  <span className="text-orange-600 font-medium">{exp.endDate}</span> : 
                  exp.endDate}
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-zinc-300 leading-relaxed"
              variants={itemVariants}
            >
              {exp.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience; 