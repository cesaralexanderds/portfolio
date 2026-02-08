import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const { skillCategories } = skillsData;

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

  const cardVariants = {
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
    <section className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <motion.h2
        className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Bento Grid Layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            variants={cardVariants}
            whileHover={{
              y: -3,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            className={`
              bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-zinc-800 
              hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/10 transition-all
              ${category.category === 'Frontend Development' ? 'md:col-span-2 lg:col-span-2' : ''}
              ${category.category === 'Data Engineering' ? 'lg:row-span-2' : ''}
            `}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              {category.category === 'Data Engineering' && (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )}
              {category.category === 'Frontend Development' && (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {category.category === 'Backend Development' && (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              )}
              {category.category === 'Tools' && (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              {category.category}
            </h3>

            <div className={`grid gap-4 ${category.category === 'Frontend Development'
              ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5'
              : category.category === 'Data Engineering'
                ? 'grid-cols-2'
                : 'grid-cols-3'
              }`}>
              {category.skills.map((skill) => (
                <motion.a
                  key={skill.name}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-2">
                    <img
                      src={skill.svg}
                      alt={`${skill.name} icon`}
                      className={`w-10 h-10 md:w-12 md:h-12 object-contain ${skill.name === 'Astro'
                        ? 'dark:drop-shadow-none drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]'
                        : ''
                        }`}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs text-center text-gray-700 dark:text-zinc-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-all font-medium opacity-0 group-hover:opacity-100 duration-200">
                    {skill.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills; 