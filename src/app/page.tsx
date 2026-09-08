import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustMarquee from '@/components/TrustMarquee';
import About from '@/components/About';
import WhySoloPartner from '@/components/WhySoloPartner';
import Services from '@/components/Services';
import GrowthEstimator from '@/components/GrowthEstimator';
import CaseStudies from '@/components/CaseStudies';
import SkillsMatrix from '@/components/SkillsMatrix';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white relative selection:bg-[#139BFD] selection:text-white font-body">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <About />
      <WhySoloPartner />
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
