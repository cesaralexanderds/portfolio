import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const { projects } = projectsData;

const Projects = () => {
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
    <section id="projects" className="py-12 section md:pt-24 md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-8 text-center md:text-left text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.article 
            key={project.id || index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            className="bg-white/90 dark:bg-zinc-800/50 rounded-lg overflow-hidden border border-gray-300 dark:border-zinc-600/50 hover:border-gray-400 dark:hover:border-zinc-600/70 hover:shadow-lg hover:shadow-gray-400/20 dark:hover:shadow-zinc-400/20"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * techIndex }}
                    className="px-3 py-1 bg-gray-200 dark:bg-zinc-900/80 rounded-full text-xs text-gray-700 dark:text-zinc-300 border border-gray-300 dark:border-zinc-700/50"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed mt-4 flex-grow">{project.description}</p>
              <div className="pt-6 mt-auto flex flex-wrap gap-3">
                {project.liveUrl && project.liveUrl.trim() !== '' && (
                  <motion.a 
                    href={project.liveUrl} 
                    className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm font-medium" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Project
                  </motion.a>
                )}
                {project.githubUrl && project.githubUrl.trim() !== '' ? (
                  <motion.a 
                    href={project.githubUrl} 
                    className="inline-flex items-center px-4 py-2 bg-transparent border border-gray-300 dark:border-zinc-600 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm font-medium" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img 
                      src="/github-mark-white.svg" 
                      className="h-4 w-4 mr-2 dark:inline hidden" 
                      alt="GitHub logo" 
                      loading="lazy" 
                      aria-hidden="true"
                    />
                    <img 
                      src="/github-mark-white.svg" 
                      className="h-4 w-4 mr-2 dark:hidden inline filter invert" 
                      alt="GitHub logo" 
                      loading="lazy" 
                      aria-hidden="true"
                    />
                    View Code
                  </motion.a>
                ) : (
                  <span className="text-sm text-gray-500 dark:text-zinc-500 italic flex items-center">Code repository not available</span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 