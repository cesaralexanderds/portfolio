import React from 'react';
import skillsData from '../data/skills.json';

const { skills } = skillsData;

const Skills = () => {
  return (
    <section className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <h2 className="text-3xl font-semibold mb-10">
        Skills and Tools
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-1 items-center justify-center">
        {skills.map((skill, index) => (
          <div 
            key={skill.name || index} // Use skill.name or index as key
            className="py-4 w-full text-center flex flex-col items-center group hover:scale-[1.25] transition-transform duration-300 ease-in-out"
          >
            <img
              src={skill.svg} // Assuming skill.svg contains a path accessible from the public folder (e.g., /icons/react.svg)
              width={64}
              height={64}
              className="mb-3 md:filter md:grayscale group-hover:filter-none transition-all drop-shadow-lg hover:drop-shadow-2xl shadow-secondary"
              alt={`${skill.name} icon`}
              loading="lazy"
              decoding="async"
            />
            <span className="text-md font-medium text-zinc-200 md:opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 