import React from 'react';
import infoData from '../data/info.json';
import experienceData from '../data/experience.json';
import ExternalLink from './ExternalLink.jsx';
import { Barcode, Globe, RegMark, Sparkle } from './Decor.jsx';

const { about, hero, contact } = infoData;
const current = experienceData.experience.find((exp) => exp.endDate === 'Present');
const PHOTO = '/photo.webp';

// Poster sparkles: [left %, top %, size in cqw, delay s, visible on mobile].
const SPARKLES = [
  [93.4, 2.3, 3.6, 0, true],
  [2.7, 36.5, 2, -1.2, false],
  [43.75, 40.4, 2.8, -2.1, false],
  [91.4, 67.3, 1.7, -0.6, true],
  [36.7, 61.5, 2.3, -2.7, false],
];

// Melting "drips" hanging off the chrome word (SMIL heights), in the word's 1280 x 380 space.
const DRIPS = [
  { x: 104, w: 26, values: '54;86;54', dur: 5.5 },
  { x: 318, w: 22, values: '70;40;96;70', dur: 7 },
  { x: 612, w: 30, values: '48;78;48', dur: 6.2 },
  { x: 808, w: 24, values: '80;52;104;80', dur: 8 },
  { x: 1182, w: 26, values: '60;92;60', dur: 6.8 },
];

const LiquidWord = ({ text }) => (
  <svg className="poster-word" aria-hidden="true" focusable="false" viewBox="0 0 1280 380" data-smil="">
    <g filter="url(#liquid)" fill="url(#chrome)">
      <text
        x="40"
        y="300"
        textLength="1200"
        lengthAdjust="spacingAndGlyphs"
        style={{ fontFamily: "'Unbounded', system-ui, sans-serif", fontWeight: 800, fontSize: 300, letterSpacing: '-0.04em' }}
      >
        {text}
      </text>
      {DRIPS.map((drip) => (
        <rect key={drip.x} x={drip.x} y="262" width={drip.w} height={drip.values.split(';')[0]} rx={drip.w / 2}>
          <animate attributeName="height" dur={`${drip.dur}s`} values={drip.values} repeatCount="indefinite" />
        </rect>
      ))}
      <circle cx="329" cy="352" r="12">
        <animate attributeName="cy" dur="7s" values="352;330;368;352" repeatCount="indefinite" />
      </circle>
      <circle cx="820" cy="360" r="13">
        <animate attributeName="cy" dur="8s" values="360;340;376;360" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

const Poster = () => (
  <div className="poster">
    {/* Horizon lines and glow */}
    <div aria-hidden="true" className="poster-deco inset-x-0 top-[67.3%] z-0 h-px bg-white/70" />
    <div aria-hidden="true" className="poster-deco inset-x-0 top-[68.5%] z-0 h-px bg-white/35" />
    <div
      aria-hidden="true"
      className="poster-deco left-[-15.6%] top-[50%] z-0 h-[34.6%] w-[131%] rounded-[50%]"
      style={{ background: 'radial-gradient(closest-side, rgba(255,255,255,0.45), rgba(255,255,255,0))' }}
    />

    {SPARKLES.map(([left, top, size, delay, mobile]) => (
      <Sparkle
        key={`${left}-${top}`}
        delay={delay}
        className={`poster-deco text-white ${mobile ? '' : 'hidden md:block'}`}
        style={{ left: `${left}%`, top: `${top}%`, width: `max(18px, ${size}cqw)`, height: `max(18px, ${size}cqw)` }}
      />
    ))}

    <RegMark className="poster-deco left-3.5 top-3.5 text-white" />
    <RegMark className="poster-deco right-3.5 top-3.5 text-white" />
    <RegMark className="poster-deco bottom-3.5 left-3.5 text-[#121413]" />
    <RegMark className="poster-deco bottom-3.5 right-3.5 text-[#121413]" />

    <Barcode className="poster-deco right-[4.4cqw] top-[34.4cqw] hidden h-[17.2cqw] w-[3.6cqw] text-white xl:block" />
    <Globe
      className="poster-deco bottom-[3.9cqw] right-[3.4cqw] hidden h-[9.4cqw] w-[9.4cqw] min-w-[72px] text-[#121413] md:block"
    />
    <p
      aria-hidden="true"
      className="poster-deco bottom-[2.6cqw] left-[29.7cqw] m-0 hidden font-mono text-xs font-bold uppercase tracking-[0.22em] lg:block"
    >
      {about.name}
    </p>

    <LiquidWord text={hero.displayWord} />

    <div className="poster-body">
      <div className="arch">
        <div className="arch-frame">
          <img
            src={PHOTO}
            alt={hero.portraitAlt}
            width={520}
            height={780}
            loading="eager"
            fetchPriority="high"
            className="duo block h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="poster-info">
        <dl className="poster-card m-0 grid grid-cols-[88px_minmax(0,1fr)] gap-y-3.5 text-[15px] sm:grid-cols-[104px_minmax(0,1fr)]">
          {current && (
            <>
              <dt className="mono-label pt-0.5 font-normal text-[#595e5a]">Now</dt>
              <dd className="m-0">
                {current.jobTitle}, {current.company}
              </dd>
            </>
          )}
          <dt className="mono-label pt-0.5 font-normal text-[#595e5a]">Focus</dt>
          <dd className="m-0">{hero.focus}</dd>
          <dt className="mono-label pt-0.5 font-normal text-[#595e5a]">Elsewhere</dt>
          <dd className="m-0 flex flex-wrap gap-x-4 gap-y-1">
            {contact.links.map((link) => (
              <ExternalLink key={link.url} href={link.url} className="font-semibold">
                {link.label}
              </ExternalLink>
            ))}
          </dd>
        </dl>
      </div>

      <div className="poster-lower">
        <div className="floaty collage hidden md:block">
          <div className="collage-crop">
            <img src={PHOTO} alt="" width={440} height={560} loading="lazy" className="duo2" />
          </div>
        </div>
        <span className="bob poster-tag">{hero.location}</span>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <section id="home" aria-labelledby="hero-title" className="page-gutter pt-4 md:pt-8">
    <Poster />

    <h1
      id="hero-title"
      className="m-0 mt-10 max-w-[1280px] font-display font-extrabold leading-[1.05] tracking-[-0.035em] md:mt-12"
      style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
    >
      {hero.headline} <span className="text-accent-ink">{hero.headlineAccent}</span>
    </h1>

    <div className="mt-8 grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10">
      <p className="m-0 max-w-[520px] text-lg leading-normal text-body-2 md:text-[22px]">{hero.intro}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={contact.resume}
          className="pill h-14 bg-accent px-8 text-[17px] text-on-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] hover:bg-accent-deep md:h-[58px]"
        >
          Resume
        </a>
        <a href={`mailto:${contact.email}`} className="pill chrome h-14 px-8 text-[17px] md:h-[58px]">
          Email me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
