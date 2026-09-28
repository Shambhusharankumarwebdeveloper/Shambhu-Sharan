'use client';
import { useEffect, useState } from 'react';
import { Sparkles, Loader2, CheckCircle2 } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { aiHighlights } from '@/lib/data';

const labels = ['Prompt', 'Processing', 'Structured result'];

export default function AIPromptEngineering() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStage((s) => (s + 1) % 3), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <Section id="ai" eyebrow="AI" title="AI Prompt Engineering & Workflow Optimization">
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="leading-relaxed">Designed and generated prompts for company-specific modules and workflows to improve operational efficiency, reduce repetitive work and accelerate project delivery.</p>
          <p className="mt-4 text-slate-400">Building intelligent prompt workflows designed to reduce project turnaround time while maintaining consistent output quality.</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">{aiHighlights.map((h) => <li key={h} className="flex items-center gap-2 text-sm"><Sparkles size={14} className="text-accent" />{h}</li>)}</ul>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-ink-900 p-5 font-mono text-xs" role="img" aria-label="Illustrative animation of a prompt being processed into a structured result">
            <div className="mb-4 flex gap-2">{labels.map((l, i) => <span key={l} className={`chip transition ${stage === i ? '!border-accent text-accent' : 'opacity-50'}`}>{l}</span>)}</div>
            <p className="rounded-lg bg-ink-800 p-3 text-slate-300">&gt; Classify these product records by category and pack size. Return validated JSON.</p>
            <div className="my-3 flex items-center gap-2 text-slate-400">
              {stage === 1 ? <><Loader2 size={14} className="animate-spin text-accent" />Processing…</> : stage === 2 ? <><CheckCircle2 size={14} className="text-accent" />Ready for review</> : <>Waiting…</>}
            </div>
            {stage === 2 && (
              <pre key="out" className="animate-fade overflow-x-auto rounded-lg bg-ink-800 p-3 text-accent">{`{
  "category": "…",
  "pack_size": "…",
  "status": "needs_review"
}`}</pre>
            )}
            <p className="mt-3 text-[11px] text-slate-500">Illustrative example. Outputs are always reviewed by a human.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
