'use client';
import { useState } from 'react';
import Section from './Section';
import { skills } from '@/lib/data';

export default function Skills() {
  const cats = Object.keys(skills);
  const [active, setActive] = useState(cats[0]);
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & capabilities">
      <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)}
            className={`btn !px-5 !py-2 border ${active === c ? 'border-accent bg-accent text-ink-950' : 'border-white/15 text-slate-300 hover:border-accent'}`}>{c}</button>
        ))}
      </div>
      <ul key={active} role="tabpanel" className="mt-8 flex flex-wrap gap-3">
        {skills[active].map((s, i) => <li key={s} style={{ animationDelay: `${i * 60}ms` }} className="animate-fade rounded-xl border border-white/10 bg-ink-800 px-4 py-2.5 text-sm text-white">{s}</li>)}
      </ul>
    </Section>
  );
}
