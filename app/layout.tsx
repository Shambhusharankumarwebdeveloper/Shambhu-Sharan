import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' });

const title = `${site.name} | Web Developer, AI Prompt Engineer & FMCG Data Researcher`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title,
  description: site.description,
  keywords: ['Shambhu Sharan Kumar', 'Web Developer', 'AI Prompt Engineer', 'FMCG Data Researcher', 'HTML Developer', 'FMCG Research', 'Product Data Research', 'E-commerce Web Developer', 'SEO Optimization', 'AI Prompt Engineering'],
  authors: [{ name: site.name }],
  openGraph: { type: 'website', title, description: site.description, siteName: site.name },
  twitter: { card: 'summary_large_image', title, description: site.description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: site.name, jobTitle: 'Web Developer, AI Prompt Engineer & FMCG Data Researcher' };
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>
        <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink-950">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
