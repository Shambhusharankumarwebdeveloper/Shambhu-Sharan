import Section from './Section';
import Reveal from './Reveal';
import { aboutAreas } from '@/lib/data';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A versatile professional profile">
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-4 leading-relaxed">
          <p>I am a Web Developer, AI Prompt Engineer, and FMCG Data Researcher with hands-on experience across web development, e-commerce, SEO, digital marketing coordination, data classification, supplier and product research, and AI-powered workflow optimization.</p>
          <p>My technical expertise includes HTML5, CSS3, JavaScript, Bootstrap, React.js (Basic), and SQL, with a strong focus on building responsive, user-friendly, and performance-driven websites and web applications. I have experience optimizing interfaces, troubleshooting technical challenges, maintaining data accuracy, and developing clean and maintainable solutions.</p>
          <p>By combining web development, data research, AI prompting, and workflow automation, I focus on improving operational efficiency, reducing manual effort, increasing data accuracy, and supporting faster project delivery. I am also comfortable collaborating with cross-functional teams and adapting to new tools and technologies to deliver reliable digital solutions.</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aboutAreas.map((a) => <li key={a} className="card !p-4 text-sm text-slate-200">{a}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
