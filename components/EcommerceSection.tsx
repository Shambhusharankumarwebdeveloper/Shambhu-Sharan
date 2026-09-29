import { TrendingUp, Package } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';

export default function EcommerceSection() {
  return (
    <Section id="ecommerce" eyebrow="Growth" title="E-commerce Growth & Digital Marketing Collaboration">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal><article className="card h-full">
          <TrendingUp className="text-accent" />
          <p className="mt-4">Coordinated with digital marketing teams to support e-commerce growth through website optimization, campaign implementation, content improvements and digital experiences across international markets.</p>
          <p className="mt-4 text-sm text-slate-400">Contributed, as part of the wider digital and e-commerce workflow, to activities supporting billion-level e-commerce sales volumes. Sales outcomes reflect collective team and company performance.</p>
        </article></Reveal>
        <Reveal delay={100}><article className="card h-full">
          <Package className="text-gold" />
          <h3 className="mt-4 font-display text-lg font-semibold text-white">Wholesale Product Sales</h3>
          <p className="mt-2">Experience working with wholesale product sales, product information and e-commerce-related product research.</p>
        </article></Reveal>
      </div>
    </Section>
  );
}
