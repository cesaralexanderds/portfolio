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
        className="text-3xl font-semibold mb-8 text-center md:text-left"
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
            className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-600/50 hover:border-zinc-600/70 hover:shadow-lg hover:shadow-zinc-400/20"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * techIndex }}
                    className="px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-zinc-300 leading-relaxed mt-4 flex-grow">{project.description}</p>
              {project.githubUrl && (
                <div className="pt-6 mt-auto">
                  <motion.a 
                    href={project.githubUrl} 
                    className="inline-flex items-center text-zinc-400 hover:text-white transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img 
                      src="/github-mark-white.svg" 
                      className="h-6 opacity-70 hover:opacity-100 mr-2" 
                      alt="GitHub logo" 
                      loading="lazy" 
                    />
                    <span className="text-sm">View Code</span>
                  </motion.a>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects; 