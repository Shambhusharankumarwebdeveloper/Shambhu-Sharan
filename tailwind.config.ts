import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: { 950: '#070b14', 900: '#0c1220', 800: '#121a2c', 700: '#1b2540' }, accent: { DEFAULT: '#5eead4', dim: '#2dd4bf' }, gold: '#f5c26b' },
    fontFamily: { sans: ['var(--font-inter)', 'system-ui', 'sans-serif'], display: ['var(--font-grotesk)', 'var(--font-inter)', 'sans-serif'] },
    keyframes: { float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } }, fade: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } } },
    animation: { float: 'float 7s ease-in-out infinite', fade: 'fade .45s ease both' },
  } },
  plugins: [],
};
export default config;
