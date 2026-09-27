import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF9] text-[#111817] selection:bg-[#10B981] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Services */}
        <Services onSelectService={handleSelectService} />

        {/* 4. About */}
        <About />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Testimonials (rendered ONLY if real testimonials exist) */}
        <Testimonials />

        {/* 7. FAQ */}
        <Faq />

        {/* 8. Contact */}
        <Contact selectedService={selectedService} />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
