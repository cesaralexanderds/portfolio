import React from 'react';
import experienceData from '../data/experience.json';
import infoData from '../data/info.json';
import { Barcode, Sparkle } from './Decor.jsx';

// JSON is newest first; keep the current role at the front regardless.
const roles = [...experienceData.experience].sort((a, b) => (b.endDate === 'Present') - (a.endDate === 'Present'));
const { badges } = infoData;

const shortDate = (value) => (value === 'Present' ? value : value.replace(/^(\w{3})\w*/, '$1'));

// Roles with no bullets or tags render as a compact stub-style ticket (no empty description area).
const isCompact = (role) => !role.highlights?.length && !role.description && !role.technologies?.length;

/** Company logo on a small tilted "stamp", so full-colour marks stay legible in both themes. */
const LogoStamp = ({ role }) => (
  <span className="logo-stamp" style={role.logoBg ? { background: role.logoBg } : undefined}>
    <img
      src={role.logo}
      alt={role.logoAlt ?? `${role.company} logo`}
      width={role.logoWidth}
      height={role.logoHeight}
      loading="lazy"
      decoding="async"
      className="block h-6 w-auto md:h-[30px]"
    />
  </span>
);

const Ticket = ({ role, isCurrent }) => (
  <article className={`ticket ${isCurrent ? 'ticket-current' : 'ticket-past'}`}>
    <div aria-hidden="true" className="ticket-notch -top-3.5" />
    <div aria-hidden="true" className="ticket-notch -bottom-3.5" />
    <div className="ticket-stub flex flex-col items-center gap-4 px-2 py-7 md:px-[18px] md:py-9">
      <p
        className={`m-0 text-center font-mono text-xs font-bold leading-normal md:text-[13px] ${
          isCurrent ? 'text-accent-ink' : 'text-muted'
        }`}
      >
        {shortDate(role.startDate)}
        <br />- {shortDate(role.endDate)}
      </p>
      <Barcode
        className={`mt-auto w-8 md:w-11 ${isCompact(role) ? 'h-12' : 'h-[150px]'} ${isCurrent ? 'text-accent-ink' : 'text-ink'}`}
      />
    </div>
    <div className="flex min-w-0 flex-col gap-5 px-5 py-7 md:px-9 md:py-10">
      {role.logo && <LogoStamp role={role} />}
      <div className="flex flex-col gap-2">
        <h3 className="m-0 font-display text-[22px] font-extrabold leading-[1.1] tracking-[-0.03em] md:text-[28px]">
          {role.jobTitle}
        </h3>
        <p className="m-0 text-base text-body-2 md:text-[17px]">
          {role.city ? `${role.company}, ${role.city}` : role.company}
        </p>
      </div>
      {isCompact(role) ? null : role.highlights?.length ? (
        <ul className="m-0 flex flex-col gap-3 pl-5 text-[15px] leading-[1.55] text-body-3 md:text-base">
          {role.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="m-0 text-base leading-relaxed text-body-3 md:text-[17px]">{role.description}</p>
      )}
      {role.technologies?.length > 0 && (
      <ul className="m-0 mt-auto flex list-none flex-wrap gap-2 p-0 font-mono text-xs">
        {role.technologies.map((tech) => (
          <li
            key={tech}
            className={`rounded-full px-[13px] py-[7px] ${isCurrent ? 'border border-tag-edge bg-card' : 'bg-chip'}`}
          >
            {tech}
          </li>
        ))}
      </ul>
      )}
    </div>
  </article>
);

// Desktop placement for up to four roles: two columns that interlock like a collage
// (DOM order stays chronological for mobile and assistive tech).
const PLACEMENT = [
  'lg:col-start-1 lg:row-start-1 lg:row-span-2 md:rotate-[-1.4deg]',
  'lg:col-start-2 lg:row-start-1 md:rotate-[1.1deg]',
  'lg:col-start-2 lg:row-start-2 lg:row-span-2 md:rotate-[-0.8deg]',
  'lg:col-start-1 lg:row-start-3 md:rotate-[1.4deg] lg:max-w-[520px]',
];

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="page-gutter section-space">
    <h2 id="experience-title" className="section-title">
      Experience
    </h2>
    <ol className="m-0 mt-12 grid list-none items-start gap-10 p-0 md:mt-14 lg:grid-cols-2 lg:gap-x-9 lg:gap-y-9">
      {roles.map((role, i) => {
        const isCurrent = role.endDate === 'Present';
        return (
          <li
            key={`${role.company}-${role.jobTitle}-${role.startDate}`}
            className={`relative ${i === 0 ? 'mt-4' : ''} ${PLACEMENT[i] ?? ''}`}
          >
            <Ticket role={role} isCurrent={isCurrent} />
            {isCurrent && (
              <div className="bob now-sticker" aria-hidden="true">
                {badges.current}
              </div>
            )}
            {i === roles.length - 1 && (
              <Sparkle size={44} className="absolute -bottom-[18px] right-2 text-accent md:-right-3.5" />
            )}
          </li>
        );
      })}
    </ol>
  </section>
);

export default Experience;
