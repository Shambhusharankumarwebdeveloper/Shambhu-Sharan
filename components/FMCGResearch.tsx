import { Building2, Database, ShieldCheck, Tags } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { retailers } from '@/lib/data';

const points = [
  { Icon: Building2, t: 'Supplier research' }, { Icon: Tags, t: 'Product classification' },
  { Icon: ShieldCheck, t: 'Data validation' }, { Icon: Database, t: 'Structured records' },
];

export default function FMCGResearch() {
  return (
    <Section id="fmcg" eyebrow="Research" title="FMCG Research & Product Data Intelligence">
      <Reveal><p className="max-w-3xl">Experienced in FMCG research, product classification, supplier research and structured product data. Focused on delivering highly accurate FMCG supplier and product data with rigorous research and validation processes.</p></Reveal>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card h-full">
            <h3 className="font-display text-lg font-semibold text-white">Companies & retailers researched</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">{retailers.map((r) => <li key={r} className="rounded-xl border border-white/10 bg-ink-900 p-4 text-sm text-white">{r}</li>)}</ul>
            <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {points.map(({ Icon, t }) => <li key={t} className="flex items-center gap-2"><Icon size={16} className="text-accent" />{t}</li>)}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card h-full font-mono text-xs" aria-label="Illustrative product record structure">
            <p className="mb-3 font-sans text-[11px] uppercase tracking-widest text-slate-500">Illustrative record structure</p>
            <div className="flex items-center gap-2 text-sm text-white"><span className="chip">Supplier</span>→<span className="chip">Product</span>→<span className="chip">Category</span></div>
            <dl className="mt-4 space-y-2">
              {['supplier', 'product_name', 'category', 'pack_size', 'validation_status'].map((k) => (
                <div key={k} className="flex justify-between rounded-lg bg-ink-900 px-3 py-2"><dt className="text-slate-400">{k}</dt><dd className="text-accent">…</dd></div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
