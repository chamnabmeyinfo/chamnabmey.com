import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import StatementBanner from "@/components/StatementBanner";
import About from "@/components/About";
import ResumeTimeline from "@/components/ResumeTimeline";
import SkillsProgress from "@/components/SkillsProgress";
import CaseStudies from "@/components/CaseStudies";
import ExpertiseRadial from "@/components/ExpertiseRadial";
import WhySoloPartner from "@/components/WhySoloPartner";
import GrowthEstimator from "@/components/GrowthEstimator";
import PlatformGrid from "@/components/PlatformGrid";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-white relative selection:bg-[#139BFD] selection:text-white font-body overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustMarquee />
      <StatementBanner />
      <About />
      <ResumeTimeline />
      <SkillsProgress />
      <CaseStudies />
      <ExpertiseRadial />
      <WhySoloPartner />
      <GrowthEstimator />
      <PlatformGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
