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
        className="text-3xl font-semibold mb-8 text-center md:text-left text-gray-900 dark:text-white"
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
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-lg p-6 border border-gray-200 dark:border-zinc-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-colors"
          >
            <motion.div
              className="flex flex-col md:flex-row md:justify-between md:items-center mb-3"
              variants={itemVariants}
            >
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                {exp.jobTitle} at <span className="text-orange-600">{exp.company}</span>
              </motion.h3>
              <motion.span
                className="text-sm text-gray-600 dark:text-zinc-400"
                variants={itemVariants}
              >
                {exp.startDate} - {exp.endDate === "Present" ?
                  <span className="text-orange-600 font-medium">{exp.endDate}</span> :
                  exp.endDate}
              </motion.span>

            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-zinc-300 leading-relaxed"
              variants={itemVariants}
            >
              {exp.description}
            </motion.p>

            <motion.span
              className="text-sm text-gray-600 dark:text-zinc-400 block mt-4"
              variants={itemVariants}
            >
              Technologies: <span className="text-orange-500 font-bold">{exp.technologies.join(", ")}</span>.
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience; 