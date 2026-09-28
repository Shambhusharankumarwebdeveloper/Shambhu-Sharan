import { ArrowRight, Sparkles } from 'lucide-react';
import { site } from '@/lib/data';
import Social from './Social';

const chips = [
  { t: '<html lang="en">', c: 'left-[4%] top-[18%]', d: '0s' },
  { t: 'prompt.design()', c: 'right-[2%] top-[20%]', d: '1.5s' },
  { t: '{ category: "FMCG" }', c: 'left-[8%] bottom-[16%]', d: '3s' },
  { t: 'SELECT * FROM products', c: 'right-[6%] bottom-[18%]', d: '4.5s' },
];

const stats = [
  { value: '5+', label: 'Years in digital work' },
  { value: '20+', label: 'Projects & workflows' },
  { value: '100%', label: 'Detail-oriented execution' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 pb-8 sm:pt-24">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      {chips.map((c) => (
        <span key={c.t} aria-hidden style={{ animationDelay: c.d }} className={`absolute hidden animate-float rounded-lg border border-white/10 bg-ink-800/75 px-3 py-1.5 font-mono text-xs text-slate-400 shadow-lg shadow-black/30 md:block ${c.c}`}>{c.t}</span>
      ))}

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="text-center lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            <Sparkles size={14} /> Portfolio
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {site.name}
          </h1>

          <p className="mt-5 text-lg font-medium text-accent sm:text-xl">{site.title}</p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">{site.intro}</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#experience" className="btn bg-accent text-ink-950 hover:bg-accent-dim">
              View My Experience
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn border border-white/15 bg-white/5 text-white hover:border-accent hover:text-accent">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <Social />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left backdrop-blur-sm">
                <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="hero-photo-visual">
            <div className="hero-photo-backdrop" aria-hidden="true" />
            <div className="hero-photo-card">
              <img
                src="/profile.jpg"
                alt="Shambhu Sharan Kumar"
                className="hero-photo"
              />
            </div>

            <div className="hero-mini-card">
              <span className="font-display text-lg font-bold text-white">AI + FrontEnd Developer</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300">Workflow design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
