import Section from './Section';
import Reveal from './Reveal';
import { expertise } from '@/lib/data';

export default function Expertise() {
  return (
    <Section id="expertise" eyebrow="Expertise" title="Digital & creative expertise">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {expertise.map(({ title, icon: Icon, items }, i) => (
          <Reveal key={title} delay={i * 70}>
            <article className="card group h-full">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:scale-110"><Icon size={22} /></span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm">{items.map((t) => <li key={t}>• {t}</li>)}</ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
