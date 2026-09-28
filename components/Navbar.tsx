'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg font-bold text-white">Shambhu Sharan<span className="text-accent">.</span></a>
        <ul className="hidden gap-6 text-sm lg:flex">
          {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="transition hover:text-accent">{n.label}</a></li>)}
        </ul>
        <button className="lg:hidden" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 bg-ink-900 px-5 py-3 lg:hidden">
          {nav.map((n) => <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2.5">{n.label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
