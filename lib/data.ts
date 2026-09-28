import { Search, LayoutDashboard, Mail, PenTool, AtSign, type LucideIcon } from 'lucide-react';

export const site = {
  name: 'Shambhu Sharan Kumar',
  title: 'Frontend Developer | AI Prompt Engineer | FMCG Data Researcher | Python Developer',
  intro: 'Frontend Developer with experience in website design, UI development, and responsive web development. Skilled in UI Development using HTML5, CSS3, JavaScript, React.js (Basic), Bootstrap, and SQL. Strong understanding of responsive layouts, cross-browser compatibility, website performance optimization, and clean, maintainable code. Experienced in collaborating with cross-functional teams, troubleshooting technical challenges, implementing website improvements, and delivering high-quality digital experiences across devices.',
  description: 'Shambhu Sharan Kumar is a Frontend Developer with hands-on experience in responsive UI development, web applications, AI-assisted workflows, and FMCG data research.',
};

export const links = {
  email: 'Shambhusharankumar@outlook.com',
  phone: '9508133776',
  linkedin: 'https://linkedin.com/in/shambhu-sharan-kumar-0029b5192',
  github: 'https://github.com/Shambhusharankumarwebdeveloper',
};

export const nav = [
  { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'markets', label: 'Markets' },
  { id: 'expertise', label: 'Expertise' }, { id: 'fmcg', label: 'Research' }, { id: 'ai', label: 'AI' },
  { id: 'skills', label: 'Skills' }, { id: 'contact', label: 'Contact' },
];

export const aboutAreas = ['Web Development', 'FrontEnd Development', 'AI Prompt Engineering', 'FMCG Data Research', 'Data Classification', 'SEO & Web Optimization', 'E-commerce', 'Digital Marketing Coordination', 'Content & Layout Design', 'Email & Newsletter Design'];

export const experience = [
  { company: 'Zydus Wellness', role: 'Web Developer', date: '', desc: 'Designed and developed responsive e-commerce web interfaces, working on product pages, UI components, content integration, promotional landing pages, and website enhancements. Focused on front-end implementation, usability, performance optimization, cross-browser compatibility, and maintaining consistent design across digital platforms. Also handled newsletter development, email campaigns, and HTML email signature implementation.' },
  { company: 'Comfort Click Pvt. Ltd.', role: 'Web Developer', date: '', desc: 'Worked on web development projects with a focus on website implementation, optimization, digital content and e-commerce-related requirements.' },
  { company: 'DSPL Pvt. Ltd.', role: 'HTML Developer', date: '', desc: 'Worked as an HTML Developer, developing and implementing responsive web layouts, page structures and digital content components.' },
  { company: 'Numerator', role: 'Data Classification & Researcher', date: '', desc: 'Worked on data classification and research projects involving FMCG products, supplier information and structured product data.' },
];

const domains = ['UK', 'FR', 'DE', 'IE', 'PT', 'ES', 'SE', 'DK', 'FI', 'EU'];
export const markets = ['WeightWorld', 'ShytoBuy', 'Animigo'].map((name) => ({ name, domains }));

export const expertise: { title: string; icon: LucideIcon; items: string[] }[] = [
  { title: 'SEO & Optimization', icon: Search, items: ['SEO optimization', 'Web page optimization', 'Website performance', 'Content optimization'] },
  { title: 'Web Design', icon: LayoutDashboard, items: ['Responsive web design', 'Landing pages', 'Website layouts', 'UI implementation', 'HTML/CSS-based layouts'] },
  { title: 'Newsletter Campaigns', icon: Mail, items: ['Newsletter campaign design', 'Email campaign layouts', 'Promotional communication', 'Responsive email design'] },
  { title: 'Content Design', icon: PenTool, items: ['Content structure', 'Visual layouts', 'Promotional content', 'E-commerce content presentation'] },
  { title: 'Email Signature Design', icon: AtSign, items: ['Professional email signatures', 'HTML email signatures', 'Brand-consistent layouts'] },
];

export const retailers = ['Castco', 'Walmart', 'Bath & Body Tub', 'Kroger'];

export const aiHighlights = ['Custom AI prompts', 'Workflow automation', 'Company-specific modules', 'Process optimization', 'Structured prompt design', 'AI-assisted research', 'Productivity improvement', 'Faster project delivery'];

export const skills: Record<string, string[]> = {
  Development: ['HTML5', 'CSS3', 'Responsive Web Design', 'Web Development', 'Email HTML', 'Landing Page Development'],
  AI: ['AI Prompt Engineering', 'Prompt Design', 'AI Workflow Optimization', 'AI-assisted Research'],
  'Research & Data': ['FMCG Research', 'Data Classification', 'Product Research', 'Supplier Research', 'Data Validation'],
  Digital: ['SEO', 'E-commerce', 'Content Optimization', 'Newsletter Campaigns', 'Email Campaigns', 'Digital Marketing Coordination'],
};

export const workflow = [
  { n: '01', t: 'Understand', d: 'Understand the business requirement and project objective.' },
  { n: '02', t: 'Research', d: 'Collect, analyze and validate relevant information.' },
  { n: '03', t: 'Build', d: 'Develop the required website, content, data structure or AI workflow.' },
  { n: '04', t: 'Optimize', d: 'Improve performance, usability, SEO and workflow efficiency.' },
  { n: '05', t: 'Deliver', d: 'Provide a structured, accurate and production-ready result.' },
];

export const value = ['Technical web development experience', 'International e-commerce exposure', 'FMCG research expertise', 'Structured data classification', 'AI prompt engineering', 'SEO and optimization knowledge', 'Digital campaign support', 'Strong attention to data quality', 'Cross-functional collaboration', 'Workflow efficiency'];
