import { ArrowUp } from 'lucide-react';
import { nav, site } from '@/lib/data';
import Social from './Social';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-slate-400">{site.title}</p>
          <div className="mt-4"><Social /></div>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">{nav.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-accent">{n.label}</a></li>)}</ul></nav>
        <a href="#top" aria-label="Back to top" className="flex h-11 w-11 items-center justify-center self-start rounded-full border border-white/15 hover:border-accent hover:text-accent"><ArrowUp size={18} /></a>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-slate-500">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
