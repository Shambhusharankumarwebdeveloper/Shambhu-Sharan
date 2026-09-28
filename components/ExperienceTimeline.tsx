import { Briefcase } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { experience } from '@/lib/data';

export default function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="Professional journey">
      <ol className="relative ml-4 border-l border-white/10">
        {experience.map((e, i) => (
          <li key={e.company} className="relative mb-10 ml-8 last:mb-0">
            <span className="absolute -left-12 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 ring-2 ring-accent/60"><Briefcase size={14} className="text-accent" /></span>
            <Reveal delay={i * 80}>
              <div className="card">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">{e.company}</h3>
                  <span className="chip text-accent">{e.role}</span>
                </div>
                {e.date ? <p className="mt-1 text-xs text-slate-500">{e.date}</p> : null}
                <p className="mt-3">{e.desc}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
