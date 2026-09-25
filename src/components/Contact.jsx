import React from 'react';
import infoData from '../data/info.json';
import { Barcode, Globe, RegMark, Sparkle } from './Decor.jsx';

const { contact } = infoData;

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="page-gutter section-space">
    <div
      className="relative flex flex-col gap-10 overflow-hidden rounded-[28px] px-6 pb-10 pt-14 text-white md:gap-12 md:px-20 md:pb-[72px] md:pt-[84px]"
      style={{ background: 'linear-gradient(165deg, #1b37b3 0%, #2443d6 70%)' }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-220px] left-[-120px] h-[420px] w-[calc(100%+240px)] rounded-[50%]"
        style={{ background: 'radial-gradient(closest-side, rgba(201,214,255,0.28), rgba(201,214,255,0))' }}
      />
      <RegMark className="absolute left-4 top-4 text-white" />
      <RegMark className="absolute bottom-4 right-4 text-white" />
      <Globe dur={7} tilt={20} className="absolute right-16 top-14 hidden h-[110px] w-[110px] text-white md:block" />
      <Sparkle size={40} delay={-1.8} className="absolute left-[56%] top-10 hidden text-white md:block" />
      <Sparkle size={24} delay={-0.4} className="absolute right-6 top-24 text-white md:left-[82%] md:right-auto md:top-[190px]" />

      <h2
        id="contact-title"
        className="liquid-html relative m-0 max-w-[1000px] font-display font-extrabold leading-none tracking-[-0.05em]"
        style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.75rem)' }}
      >
        Get in touch.
      </h2>

      <div className="relative grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex min-w-0 flex-col gap-[22px]">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-base text-white no-underline [overflow-wrap:anywhere] hover:underline md:text-xl"
          >
            {contact.email}
          </a>
          <Barcode horizontal className="h-[30px] w-[200px] text-white md:w-[260px]" />
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={contact.resume}
            className="pill h-14 border-[1.5px] border-white px-8 text-lg text-white hover:bg-white/10 md:h-[60px]"
          >
            Resume
          </a>
          <a href={`mailto:${contact.email}`} className="pill chrome h-14 border-transparent px-[34px] text-lg md:h-[60px]">
            Email me
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
