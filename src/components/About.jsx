import React from 'react';
import infoData from '../data/info.json';
import { Sparkle } from './Decor.jsx';

const { about } = infoData;

const About = () => (
  <section id="about" aria-labelledby="about-title" className="page-gutter section-space relative">
    <h2
      id="about-title"
      className="liquid-html m-0 mb-8 font-display font-extrabold leading-none tracking-[-0.05em] text-accent-ink md:mb-12"
      style={{ fontSize: 'clamp(3rem, 11.7vw, 10.5rem)' }}
    >
      About me
    </h2>
    <Sparkle size={56} delay={-0.9} className="absolute right-6 top-[180px] hidden text-tint-2 md:block lg:right-24" />

    <div className="grid gap-12 lg:grid-cols-12 lg:gap-6">
      <p
        className="m-0 font-medium leading-[1.3] tracking-[-0.02em] lg:col-span-8"
        style={{ fontSize: 'clamp(1.375rem, 2.6vw, 2.25rem)' }}
      >
        {about.statement ?? about.description[0]}
      </p>

      <div className="relative self-start md:rotate-[1.6deg] lg:col-span-4">
        <dl className="m-0 flex flex-col gap-2.5 rounded-card bg-card p-7 shadow-[0_1px_0_var(--line),0_22px_44px_-28px_var(--shadow)] md:p-8">
          <dt className="mono-label text-accent-ink">Education</dt>
          <dd className="m-0 mb-4 text-[17px] leading-[1.55]">
            {about.education.map((item) => (
              <span key={item.degree} className="block">
                {item.degree}, {item.school}
              </span>
            ))}
          </dd>
          <dt className="mono-label border-t-2 border-dashed border-line pt-4 text-accent-ink">Certifications</dt>
          <dd className="m-0 mb-4 text-[17px] leading-[1.55]">
            {about.certifications.map((cert) => (
              <span key={cert.name} className="block">
                {cert.name}, {cert.issuer}
              </span>
            ))}
          </dd>
          {about.activities?.length > 0 && (
            <>
              <dt className="mono-label border-t-2 border-dashed border-line pt-4 text-accent-ink">Activities</dt>
              <dd className="m-0 text-[17px] leading-[1.55]">
                {about.activities.map((activity) => (
                  <span key={activity} className="block">
                    {activity}
                  </span>
                ))}
              </dd>
            </>
          )}
        </dl>
        {/* Tape strip */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-[-14px] -ml-[55px] h-7 w-[110px] rotate-[-4deg] bg-[rgba(159,180,245,0.7)]"
        />
      </div>
    </div>
  </section>
);

export default About;
