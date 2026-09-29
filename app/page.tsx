import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import MarketExperience from '@/components/MarketExperience';
import Expertise from '@/components/Expertise';
import EcommerceSection from '@/components/EcommerceSection';
import FMCGResearch from '@/components/FMCGResearch';
import AIPromptEngineering from '@/components/AIPromptEngineering';
import Skills from '@/components/Skills';
import Workflow from '@/components/Workflow';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><ExperienceTimeline /><MarketExperience /><Expertise /><EcommerceSection />
        <FMCGResearch /><AIPromptEngineering /><Skills /><Workflow /><Contact />
      </main>
      <Footer />
    </>
  );
}
