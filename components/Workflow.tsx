import Section from './Section';
import Reveal from './Reveal';
import { workflow, value } from '@/lib/data';

export default function Workflow() {
  return (
    <>
      <Section id="workflow" eyebrow="Process" title="How I work">
        <ol className="grid gap-5 md:grid-cols-5">
          {workflow.map((w, i) => (
            <li key={w.n}><Reveal delay={i * 80} className="h-full"><div className="card h-full">
              <span className="font-display text-3xl font-bold text-accent/70">{w.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{w.t}</h3>
              <p className="mt-2 text-sm">{w.d}</p>
            </div></Reveal></li>
          ))}
        </ol>
      </Section>
      <Section id="value" eyebrow="Value" title="What I bring">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {value.map((v) => <li key={v} className="card !p-4 text-sm text-slate-200">{v}</li>)}
        </ul>
      </Section>
    </>
  );
}
