import React from 'react';
import projectsData from '../data/projects.json';
import ExternalLink from './ExternalLink.jsx';
import { Barcode, Sparkle } from './Decor.jsx';

const { projects } = projectsData;
const featured = projects.find((project) => project.featured);
const others = projects.filter((project) => project !== featured);

// Collage tiles cycle through these surfaces; each tile gets one ornament.
const TONES = [
  { card: 'bg-card shadow-[0_1px_0_var(--line),0_18px_36px_-26px_var(--shadow)]', tilt: 'md:rotate-[-1deg]', text: 'text-body-2', chip: 'chrome', link: 'text-accent-ink', ornament: 'barcode' },
  { card: 'bg-invert-bg text-invert-fg', tilt: 'md:rotate-[1.2deg]', text: 'text-invert-muted', chip: 'border border-invert-edge bg-white/10 text-invert-fg', link: 'text-invert-fg', ornament: 'sparkle-invert' },
  { card: 'bg-tint-card text-tint-card-ink', tilt: 'md:rotate-[0.8deg]', text: 'text-tint-card-ink', chip: 'chrome', link: 'text-tint-card-ink', ornament: 'barcode' },
  { card: 'bg-accent-tint', tilt: 'md:rotate-[-1.1deg]', text: 'text-body-3', chip: 'chrome', link: 'text-accent-ink', ornament: 'sparkle' },
];

/** Holographic trading-card stack used when the featured project has no screenshot. */
const TradingCardArt = () => (
  <svg aria-hidden="true" focusable="false" viewBox="0 0 550 300" className="block h-auto w-full max-w-[550px] self-center">
    <defs>
      <linearGradient id="holo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.35" stopColor="#c9d6ff" />
        <stop offset="0.6" stopColor="#9fb4f5" />
        <stop offset="1" stopColor="#ffffff" />
      </linearGradient>
      <clipPath id="frontCard">
        <rect x="0" y="0" width="190" height="262" rx="16" />
      </clipPath>
    </defs>
    <g transform="translate(318 44) rotate(11)">
      <rect x="0" y="0" width="170" height="236" rx="14" fill="#1b37b3" stroke="#c9d6ff" strokeWidth="2" />
      <rect x="12" y="12" width="146" height="212" rx="9" fill="none" stroke="#9fb4f5" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="85" cy="92" r="26" fill="#9fb4f5" opacity="0.6" />
      <path d="M36 170C36 132 134 132 134 170Z" fill="#9fb4f5" opacity="0.6" />
      <rect x="30" y="186" width="110" height="10" rx="5" fill="#c9d6ff" opacity="0.7" />
    </g>
    <g transform="translate(64 60) rotate(-9)">
      <rect x="0" y="0" width="150" height="208" rx="12" fill="#e3e8f8" opacity="0.28" stroke="#ffffff" strokeOpacity="0.6" />
    </g>
    <g transform="translate(168 22) rotate(-4)">
      <rect x="0" y="0" width="190" height="262" rx="16" fill="url(#holo)" />
      <rect x="10" y="10" width="170" height="242" rx="10" fill="#1b37b3" />
      <path d="M28 34C29 26 31 24 38 23C31 22 29 20 28 12C27 20 25 22 18 23C25 24 27 26 28 34Z" fill="#ffffff" />
      <rect x="120" y="20" width="46" height="16" rx="8" fill="#c9d6ff" />
      <circle cx="95" cy="92" r="30" fill="#9fb4f5" />
      <path d="M40 176C40 134 150 134 150 176Z" fill="#9fb4f5" />
      <rect x="30" y="190" width="130" height="12" rx="6" fill="#ffffff" />
      <rect x="30" y="212" width="58" height="7" rx="3.5" fill="#c9d6ff" />
      <rect x="102" y="212" width="46" height="7" rx="3.5" fill="#c9d6ff" />
      <rect x="30" y="226" width="40" height="7" rx="3.5" fill="#9fb4f5" />
      <rect x="102" y="226" width="58" height="7" rx="3.5" fill="#9fb4f5" />
      <g clipPath="url(#frontCard)">
        <g transform="skewX(-18)">
          <rect className="shimmer" x="0" y="-20" width="46" height="310" fill="#ffffff" opacity="0.32" />
        </g>
      </g>
    </g>
    <path
      className="twinkle"
      d="M470 60C471.5 45 475 41.5 490 40C475 38.5 471.5 35 470 20C468.5 35 465 38.5 450 40C465 41.5 468.5 45 470 60Z"
      fill="#ffffff"
    />
    <path
      className="twinkle"
      style={{ animationDelay: '-1.6s' }}
      d="M96 262C97 252 99 250 109 249C99 248 97 246 96 236C95 246 93 248 83 249C93 250 95 252 96 262Z"
      fill="#ffffff"
    />
  </svg>
);

const FeaturedArt = ({ project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt ?? `${project.title} screenshot`}
        width={1600}
        height={1000}
        loading="lazy"
        className="block aspect-[16/10] h-auto w-full rounded-xl object-cover"
      />
    );
  }
  return project.art === 'trading-card' ? <TradingCardArt /> : null;
};

const FeaturedCard = ({ project }) => (
  <article
    className="relative flex flex-col gap-5 overflow-hidden rounded-[24px] p-6 text-white md:col-span-2 md:p-10 xl:row-span-2"
    style={{ background: 'linear-gradient(170deg, #1b37b3 0%, #2443d6 60%)' }}
  >
    <FeaturedArt project={project} />
    <h3
      className="m-0 mt-2 font-display font-extrabold leading-none tracking-[-0.04em]"
      style={{ fontSize: 'clamp(2.25rem, 4vw, 3.125rem)' }}
    >
      {project.title}
    </h3>
    <p className="m-0 max-w-[520px] text-base leading-[1.55] md:text-lg">{project.summary ?? project.description}</p>
    <div className="mt-auto flex flex-wrap items-center justify-between gap-5">
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0 font-mono text-xs">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-white/50 bg-white/15 px-[13px] py-[7px]">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        {project.liveUrl && (
          <ExternalLink href={project.liveUrl} className="pill chrome h-[52px] px-6">
            Visit site
          </ExternalLink>
        )}
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl} className="pill h-[52px] border border-white px-6 text-white">
            Code
          </ExternalLink>
        )}
      </div>
    </div>
  </article>
);

const Ornament = ({ kind }) => {
  if (kind === 'barcode') return <Barcode horizontal className="mt-auto h-[22px] w-[150px]" />;
  if (kind === 'sparkle') return <Sparkle size={30} delay={-1.4} className="mt-auto self-end text-accent-ink" />;
  if (kind === 'sparkle-invert') return <Sparkle size={30} className="mt-auto self-end text-invert-accent" />;
  return null;
};

const ProjectCard = ({ project, tone }) => (
  <article className={`relative flex min-h-[260px] flex-col gap-3 rounded-card p-7 ${tone.card} ${tone.tilt}`}>
    <span
      className={`self-start rounded-[14px] px-3 py-1.5 font-mono text-[11px] font-bold ${tone.chip}`}
    >
      {project.technologies.join(', ')}
    </span>
    <h3 className="m-0 font-display text-xl font-bold leading-[1.18] tracking-[-0.02em]">{project.title}</h3>
    <p className={`m-0 text-[15px] leading-[1.55] ${tone.text}`}>{project.summary ?? project.description}</p>
    {project.liveUrl || project.githubUrl ? (
      <div className="mt-auto flex gap-4 font-mono text-[13px] font-bold">
        {project.liveUrl && (
          <ExternalLink href={project.liveUrl} className={`hover:underline ${tone.link}`}>
            Visit
          </ExternalLink>
        )}
        {project.githubUrl && (
          <ExternalLink href={project.githubUrl} className={`hover:underline ${tone.link}`}>
            Code
          </ExternalLink>
        )}
      </div>
    ) : (
      <Ornament kind={tone.ornament} />
    )}
  </article>
);

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="page-gutter section-space">
    <h2 id="projects-title" className="section-title">
      Projects
    </h2>
    <div className="mt-12 grid gap-[22px] md:mt-14 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[minmax(340px,auto)_minmax(340px,auto)]">
      {featured && <FeaturedCard project={featured} />}
      {others.map((project, i) => (
        <ProjectCard key={project.title} project={project} tone={TONES[i % TONES.length]} />
      ))}
    </div>
  </section>
);

export default Projects;
