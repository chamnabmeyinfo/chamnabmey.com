import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import GrowthEstimator from '@/components/GrowthEstimator';
import CaseStudies from '@/components/CaseStudies';
import SkillsMatrix from '@/components/SkillsMatrix';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StyleSwitcher from '@/components/StyleSwitcher';

export default function Home() {
  return (
    <main className="min-h-screen theme-canvas transition-colors duration-300 relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <GrowthEstimator />
      <CaseStudies />
      <SkillsMatrix />
      <Testimonials />
      <ContactForm />
      <Footer />
      <StyleSwitcher />
    </main>
  );
}
