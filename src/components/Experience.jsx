import React from 'react';
import experienceData from '../data/experience.json';

const { experience } = experienceData;

const Experience = () => {
  return (
    <section id="experience" className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700/50 transition-all hover:scale-[1.01] hover:border-orange-600/50 hover:shadow-md hover:shadow-orange-600/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl font-bold">
                {exp.jobTitle} at <span className="text-orange-600">{exp.company}</span>
              </h3>
              <span className="text-sm text-zinc-400">
                {exp.startDate} - {exp.endDate === "Present" ? 
                  <span className="text-orange-600 font-medium">{exp.endDate}</span> : 
                  exp.endDate}
              </span>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 