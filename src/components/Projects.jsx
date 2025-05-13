import React from 'react';
import projectsData from '../data/projects.json';

const { projects } = projectsData;

const Projects = () => {
  return (
    <section id="projects" className="py-12 section md:pt-24 md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <article 
            key={project.id || index} // Use project.id if available, otherwise fallback to index
            className="bg-zinc-800/50 rounded-lg overflow-hidden border border-zinc-600/50 transition-all hover:scale-[1.01] hover:border-zinc-600/70 hover:shadow-lg hover:shadow-zinc-400/20"
          >
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-zinc-900/80 rounded-full text-xs text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-zinc-300 leading-relaxed mt-4 flex-grow">{project.description}</p>
              {project.githubUrl && (
                <div className="pt-6 mt-auto">
                  <a 
                    href={project.githubUrl} 
                    className="inline-flex items-center text-zinc-400 hover:text-white transition-colors" // Removed 'hidden' class, was it intentional?
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="/github-mark-white.svg" // Assuming this is in the public folder
                      className="h-6 opacity-70 hover:opacity-100 mr-2" 
                      alt="GitHub logo" 
                      loading="lazy" 
                    />
                    <span className="text-sm">View Code</span>
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects; 