import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import StatsBar from '../sections/StatsBar';
import About from '../sections/About';
import Services from '../sections/ServicesGrid';
import Process from '../sections/HowWeWork';
import TitleVerification from '../sections/TitleVerification';
import LandUseTypes from '../sections/LandUseTypes';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative bg-offwhite selection:bg-gold/30 selection:text-forest">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <StatsBar />
      <About />
      <Services />
      <Process />
      <TitleVerification />
      <LandUseTypes />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

