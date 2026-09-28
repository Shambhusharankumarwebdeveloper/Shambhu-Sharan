import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { links } from '@/lib/data';

const set = (v: string) => !v.startsWith('[');
const items = [
  { label: 'Email', Icon: Mail, href: set(links.email) ? `mailto:${links.email}` : '#contact' },
  { label: 'Phone', Icon: Phone, href: set(links.phone) ? `tel:${links.phone}` : '#contact' },
  { label: 'LinkedIn', Icon: Linkedin, href: set(links.linkedin) ? links.linkedin : '#contact' },
  { label: 'GitHub', Icon: Github, href: set(links.github) ? links.github : '#contact' },
];

export default function Social() {
  return (
    <ul className="flex gap-3">
      {items.map(({ label, Icon, href }) => (
        <li key={label}>
          <a href={href} aria-label={label} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
