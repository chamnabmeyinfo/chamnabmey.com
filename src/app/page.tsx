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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">
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
    </main>
  );
}
