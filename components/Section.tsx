import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[.2em] text-accent">{eyebrow}</p>
        <h2 id={`${id}-h`} className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
