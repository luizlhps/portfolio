import Image from 'next/image';
import { Nav } from './components/Nav';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </>
  );
}
