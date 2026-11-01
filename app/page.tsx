'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Minus,
  Phone,
  Plus,
} from 'lucide-react';
import {
  conceptWords,
  experience,
  links,
  nav,
  services,
  site,
  skills,
  works,
} from '../lib/data';

export default function PortfolioPage() {
  const [openService, setOpenService] = useState<number | null>(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % conceptWords.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6"
        >
          <a href="#home" className="text-xl font-black tracking-tight">
            SHAMBHU<span className="lime-text">.</span>
          </a>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold tracking-wider text-neutral-300 sm:text-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition hover:text-white hover:underline hover:decoration-[var(--lime)] hover:underline-offset-4"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          aria-labelledby="hero-title"
          className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20"
        >
          <div className="hero-circles" aria-hidden="true">
            <span className="hero-circle hero-circle-1" />
            <span className="hero-circle hero-circle-2" />
            <span className="hero-circle hero-circle-3" />
            <span className="hero-orbit">
              <span className="hero-orbit-dot" />
            </span>
          </div>

          <div className="relative mx-auto max-w-7xl">
            <h1 id="hero-title" className="sr-only">
              Shambhu Sharan — Frontend UI Developer, React.js and Next.js
            </h1>
            <p aria-hidden="true" className="hero-word">
              Portfolio
            </p>

            <div className="mt-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
              <div className="monogram" aria-hidden="true">
                SS
              </div>
              <div className="max-w-3xl">
                <p className="text-3xl font-bold leading-tight sm:text-5xl">
                  <span className="font-black">Frontend</span>{' '}
                  <span className="font-light italic text-neutral-300">
                    UI Developer
                  </span>
                </p>
                <p className="mt-2 text-xl text-neutral-300 sm:text-2xl">
                  &amp; React.js / Next.js
                </p>
                <p className="mt-6 text-base leading-relaxed text-neutral-400">
                  {site.intro}
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                  <a
                    href="#contact"
                    className="lime-bg inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
                  >
                    Contact <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                  <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-300">
                    <span className="lime-dot" aria-hidden="true" />
                    AVAILABLE FOR COLLABORATIONS
                  </p>
                </div>
                <a
                  href="#about"
                  className="mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 transition hover:text-white"
                >
                  SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Concept strip / About */}
        <section
          id="about"
          aria-labelledby="about-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <h2 id="about-title" className="sr-only">
              About
            </h2>
            <p className="text-center text-xl leading-relaxed text-neutral-300 sm:text-2xl">
              From idea to something real: imagine, engineer, launch.
            </p>
            <p
              key={conceptWords[wordIndex]}
              aria-live="polite"
              className="concept-word mt-6 text-center text-4xl font-black tracking-tight sm:text-6xl"
            >
              {conceptWords[wordIndex]}
            </p>
            <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-neutral-400">
              {site.description}
            </p>
          </div>
        </section>

        {/* Selected work */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="work-title"
              className="text-3xl font-black tracking-tight sm:text-5xl"
            >
              SELECTED <span className="lime-text">WORK</span>
            </h2>
            <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {works.map((work) => (
                <li
                  key={work.no}
                  className="grid gap-2 py-8 sm:grid-cols-[4rem_1fr] sm:gap-6"
                >
                  <span className="lime-text text-lg font-bold">
                    {work.no}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold leading-snug sm:text-4xl">
                      {work.title}
                    </h3>
                    <p className="mt-3 max-w-3xl leading-relaxed text-neutral-400">
                      {work.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Services accordion */}
        <section
          id="services"
          aria-labelledby="services-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="services-title"
              className="text-3xl font-black tracking-tight sm:text-5xl"
            >
              WHAT I <span className="lime-text">CAN DO</span>
            </h2>
            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {services.map((service, index) => {
                const isOpen = openService === index;
                return (
                  <div key={service.no}>
                    <h3>
                      <button
                        type="button"
                        id={`service-button-${index}`}
                        aria-expanded={isOpen}
                        aria-controls={`service-panel-${index}`}
                        onClick={() =>
                          setOpenService(isOpen ? null : index)
                        }
                        className="flex w-full items-center justify-between gap-4 py-6 text-left"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="lime-text text-sm font-bold">
                            {service.no}
                          </span>
                          <span className="text-xl font-bold sm:text-2xl">
                            {service.title}
                          </span>
                        </span>
                        {isOpen ? (
                          <Minus aria-hidden="true" className="shrink-0" />
                        ) : (
                          <Plus aria-hidden="true" className="shrink-0" />
                        )}
                      </button>
                    </h3>
                    <div
                      id={`service-panel-${index}`}
                      role="region"
                      aria-labelledby={`service-button-${index}`}
                      className={`accordion-body ${
                        isOpen ? 'accordion-body-open' : ''
                      }`}
                    >
                      <div className="accordion-inner">
                        <ul className="list-disc space-y-2 pb-6 pl-12 pr-4 text-neutral-400 marker:text-[var(--lime)]">
                          {service.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section
          id="experience"
          aria-labelledby="experience-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="experience-title"
              className="text-3xl font-black tracking-tight sm:text-5xl"
            >
              THE <span className="lime-text">JOURNEY</span>
            </h2>
            <ol className="relative mt-10 space-y-10 border-l-2 border-white/10 pl-6 sm:pl-8">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span
                    aria-hidden="true"
                    className="lime-bg absolute -left-[2.05rem] top-1.5 h-3 w-3 rounded-full sm:-left-[2.55rem]"
                  />
                  <h3 className="text-xl font-bold sm:text-2xl">
                    {job.company}
                  </h3>
                  <p className="mt-1 font-semibold text-neutral-300">
                    {job.role}
                    {job.date ? (
                      <span className="font-normal text-neutral-400">
                        {' '}
                        — {job.date}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-2 max-w-3xl leading-relaxed text-neutral-400">
                    {job.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section
          aria-labelledby="skills-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="skills-title"
              className="text-3xl font-black tracking-tight sm:text-5xl"
            >
              SKILLS
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="border-t border-white/10 px-4 py-16 sm:px-6"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="contact-title"
                className="text-3xl font-black tracking-tight sm:text-5xl"
              >
                Get in <span className="lime-text">touch</span>
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-neutral-400">
                Open to a React.js and Next.js role, and to collaborations on
                frontend, e-commerce and email work.
              </p>
              <ul className="mt-8 space-y-4 text-neutral-300">
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Mail size={20} aria-hidden="true" /> {links.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${links.phone}`}
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Phone size={20} aria-hidden="true" /> {links.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Linkedin size={20} aria-hidden="true" /> LinkedIn
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Github size={20} aria-hidden="true" /> GitHub
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <form
              action={`mailto:${links.email}`}
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-white/10 bg-neutral-900 p-6"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[var(--lime)] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[var(--lime)] focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-[var(--lime)] focus:outline-none"
                    placeholder="Tell me about the role or project…"
                  />
                </div>
                <button
                  type="submit"
                  className="lime-bg w-full rounded-full px-6 py-3 text-sm font-bold text-black transition hover:opacity-90"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-neutral-500 sm:px-6">
        © {new Date().getFullYear()} Shambhu Sharan Kumar — Frontend UI
        Developer.
      </footer>
    </div>
  );
}
