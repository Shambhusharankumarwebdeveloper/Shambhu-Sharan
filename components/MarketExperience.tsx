import { Globe } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import { markets } from '@/lib/data';

export default function MarketExperience() {
  return (
    <Section id="markets" eyebrow="International" title="International E-commerce & Digital Markets">
      <Reveal><p className="mb-8 max-w-2xl">Experience across multiple international domains and markets, supporting e-commerce websites and digital content for European audiences.</p></Reveal>
      <div className="grid gap-5 md:grid-cols-3">
        {markets.map((m, i) => (
          <Reveal key={m.name} delay={i * 100}>
            <article className="card h-full">
              <Globe className="text-accent" size={22} />
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{m.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${m.name} domains`}>
                {m.domains.map((d) => <li key={d} className="chip">{d}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
