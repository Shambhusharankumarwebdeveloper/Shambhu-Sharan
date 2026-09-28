'use client';
import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import Section from './Section';
import Social from './Social';
import { links } from '@/lib/data';

export default function Contact() {
  const [msg, setMsg] = useState('');
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (links.email.startsWith('[')) { setMsg('Contact form is not connected yet: set your email in lib/data.ts.'); return; }
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(String(f.get('subject')))}&body=${encodeURIComponent(body)}`;
  }
  return (
    <Section id="contact" eyebrow="Contact" title="Let's Build Something Better">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="leading-relaxed">Whether you need a modern website, e-commerce optimization, FMCG research, structured product data or AI-powered workflow solutions, let&apos;s connect.</p>
          <dl className="mt-6 space-y-2 text-sm">
            {(['email', 'phone', 'linkedin', 'github'] as const).map((k) => <div key={k} className="flex gap-3"><dt className="w-20 capitalize text-slate-500">{k}</dt><dd className="text-slate-200">{links[k]}</dd></div>)}
          </dl>
          <div className="mt-6"><Social /></div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">Name<input name="name" required className="field mt-1" placeholder="Your name" /></label>
            <label className="text-sm">Email<input name="email" type="email" required className="field mt-1" placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm">Subject<input name="subject" required className="field mt-1" placeholder="How can I help?" /></label>
          <label className="block text-sm">Message<textarea name="message" required rows={5} className="field mt-1" placeholder="Tell me about your project" /></label>
          <button className="btn bg-accent text-ink-950 hover:bg-accent-dim" type="submit">Send Message <Send size={16} /></button>
          <p role="status" className="text-sm text-gold">{msg}</p>
        </form>
      </div>
    </Section>
  );
}
