import React from 'react';
import skillsData from '../data/skills.json';
import { Barcode, RegMark, Sparkle } from './Decor.jsx';

const { skillCategories } = skillsData;
const totalSkills = skillCategories.reduce((sum, group) => sum + group.skills.length, 0);

const pad = (n) => String(n).padStart(2, '0');

// Festival-flyer hierarchy: the first rows are the headliners and set the largest type.
const TIER_SIZES = [
  'clamp(1.0625rem, 3.2vw, 2.625rem)',
  'clamp(1rem, 2.7vw, 2.125rem)',
  'clamp(1rem, 2.1vw, 1.625rem)',
  'clamp(1rem, 2.1vw, 1.625rem)',
  'clamp(0.9375rem, 1.7vw, 1.375rem)',
];
const tierSize = (i) => TIER_SIZES[Math.min(i, TIER_SIZES.length - 1)];

// Every item carries a leading sparkle; the list is pulled left by one separator width and
// clipped, so a sparkle only shows between items, never at the start of a wrapped line.
// Sticker tilts cycle so neighbouring highlights never lean the same way.
const TILTS = ['-2.5deg', '1.8deg', '-1.2deg', '2.6deg'];

const SeparatorStar = () => (
  <svg className="lineup-sep" aria-hidden="true" focusable="false" viewBox="-20 -20 40 40">
    <path d="M0-20C1.5-5 5-1.5 20 0C5 1.5 1.5 5 0 20C-1.5 5-5 1.5-20 0C-5-1.5-1.5-5 0-20Z" fill="currentColor" />
  </svg>
);

// Sparkle that bursts out of a skill on hover/focus.
const BurstStar = () => (
  <svg className="skill-burst" aria-hidden="true" focusable="false" viewBox="-20 -20 40 40">
    <path d="M0-20C1.5-5 5-1.5 20 0C5 1.5 1.5 5 0 20C-1.5 5-5 1.5-20 0C-5-1.5-1.5-5 0-20Z" fill="currentColor" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

/**
 * Skills as a static Y2K "lineup" poster: every skill visible at once, grouped by CV category.
 * Highlighted skills are chrome stickers with a gentle float and holo sweep; everything else is
 * headliner-style display type separated by sparkles. Each skill links to an official or neutral
 * reference page; hover/focus peels it like a sticker and flips the row's stamp into a luggage tag
 * with the skill's blurb (CSS only, see `.skill-link` in global.css).
 */
const Skills = () => {
  let stickerCount = 0;

  return (
    <section id="skills" aria-labelledby="skills-title" className="page-gutter section-space">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 id="skills-title" className="section-title">
          Skills
        </h2>
        <p className="m-0 font-mono text-[13px] font-bold uppercase tracking-[0.08em] text-muted">
          {pad(skillCategories.length)} categories / {pad(totalSkills)} skills
        </p>
      </div>

      <div className="lineup mt-12 px-5 pb-8 pt-10 md:mt-14 md:px-12 md:pb-12 md:pt-14 lg:px-16">
        <RegMark className="absolute left-3.5 top-3.5 text-white" />
        <RegMark className="absolute right-3.5 top-3.5 text-white" />
        <RegMark className="absolute bottom-3.5 left-3.5 text-white" />
        <RegMark className="absolute bottom-3.5 right-3.5 text-white" />
        <Sparkle size={40} className="absolute right-[6%] top-[5%] hidden text-white md:block" />
        <Sparkle size={26} delay={-1.4} className="absolute bottom-[8%] right-[18%] hidden text-tint-1 md:block" />
        <Sparkle size={22} delay={-2.3} className="absolute left-[46%] top-[2.5%] text-white" />
        <Barcode className="absolute right-5 top-1/2 hidden h-[180px] w-9 -translate-y-1/2 text-white/80 xl:block" />

        <div className="relative xl:pr-16">
          {skillCategories.map((group, row) => (
            <div key={group.category} className="lineup-row">
              <h3 className="lineup-stamp m-0">
                <span aria-hidden="true">{pad(row + 1)}</span>
                {group.category}
              </h3>
              <div className="lineup-clip">
              <ul className="lineup-list" style={{ fontSize: tierSize(row) }}>
                {group.skills.map((skill, i) => {
                  const tilt = skill.highlight ? TILTS[stickerCount++ % TILTS.length] : null;
                  const chip = (
                    <span
                      className={skill.highlight ? 'skill-chip sticker' : 'skill-chip'}
                      style={skill.highlight ? { '--r': tilt, animationDelay: `${-(stickerCount % 5) * 0.9}s` } : undefined}
                    >
                      {skill.name}
                    </span>
                  );
                  if (!skill.url) {
                    return (
                      <li key={skill.name}>
                        <SeparatorStar />
                        {chip}
                      </li>
                    );
                  }
                  const tipId = `skill-tip-${row}-${i}`;
                  return (
                    <li key={skill.name}>
                      <SeparatorStar />
                      <a
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-link"
                        aria-describedby={skill.blurb ? tipId : undefined}
                      >
                        <span className="skill-peel">
                          {chip}
                          <BurstStar />
                        </span>
                        <span className="sr-only">, opens official page in a new tab</span>
                        {skill.blurb && (
                          <span id={tipId} className="skill-tag" aria-hidden="true">
                            <span className="skill-tag-arrow">
                              <ArrowIcon />
                            </span>
                            <span>
                              <span className="skill-tag-name">{skill.name}</span>
                              {skill.blurb}
                            </span>
                          </span>
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
