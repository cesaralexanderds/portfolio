import React from 'react';
import infoData from '../data/info.json'; // Assuming info.json is in src/data

const { about } = infoData;

const About = () => {
  return (
    <section id="about" className="py-12 section md:pb-24 scroll-m-20 w-5/6 mx-auto container lg:max-w-6xl md:max-w-2xl">
      <h2 className="text-3xl font-semibold mb-8">
        About me
      </h2>
      <div className="flex flex-wrap md:w-full items-center md:justify-between mb-8">
        {/* 
          Astro's <Image /> component specific features (like optimization) are not directly transferable.
          If you were using specific props for optimization or format, you might need a React-specific image solution
          or adjust the <img> tag accordingly. For now, I'm assuming a simple image display if one was present.
          The original About.astro did not seem to use an <Image /> component directly in its template,
          but it did import it. If there was an image meant to be here, you'll need to add an <img> tag.
        */}
        <p 
            className="md:w-3/6 text-xl text-zinc-200 [&>strong]:text-indigo-500"
            dangerouslySetInnerHTML={{ __html: about.description }}
        >
            {/* The original Astro component directly rendered HTML from about.description.
                In React, to render HTML strings, you use dangerouslySetInnerHTML.
                Ensure that the content of about.description is trusted.
                If it can contain user-generated content, this could be an XSS risk.
                If about.description is just text with some <strong> tags you control, it's fine.
            */}
        </p>
        <div className="mt-8 md:mt-0 flex flex-col gap-2 dark:text-white max-w-md md:w-3/6 dark:bg-opacity-25">
          <h3 className="text-2xl font-medium text-zinc-200">
            Education
          </h3>
          <div className="text-xl text-zinc-200">
            {about.education}
          </div>
          <div className="mt-3 flex flex-row justify-start text-zinc-200">
            <p className="text-lg">Expected Graduation in June, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 