import React, { useState } from 'react';
import { servicesContent } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import ServiceCard from './ui/ServiceCard';

export default function Services({ onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // Categorize 12 services into clean logical tabs while keeping all content in business.js
  const filterCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'advisory', label: 'Advisory & Contracts' },
    { id: 'commercial', label: 'Commercial & Property' },
    { id: 'personal', label: 'Personal & Disputes' },
  ];

  const categoryMap = {
    advisory: ['legal-consultation', 'contract-drafting', 'legal-research', 'document-review'],
    commercial: ['business-law', 'property-law', 'employment-law', 'legal-notices'],
    personal: ['family-law', 'civil-law', 'immigration-law', 'dispute-resolution'],
  };

  const filteredServices = servicesContent.items.filter((item) => {
    if (activeFilter === 'all') return true;
    return categoryMap[activeFilter]?.includes(item.id);
  });

  const handleCardSelect = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-wrapper bg-[#F9FAF9] scroll-mt-20">
      <div className="container-custom">
        <SectionHeading
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.title}
          description={servicesContent.description}
          align="center"
        />

        {/* Filter Bar (Functional segmented buttons per frontend-design skill) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-[8px] transition-all cursor-pointer whitespace-nowrap ${
                activeFilter === cat.id
                  ? 'bg-[#0F392B] text-white shadow-xs'
                  : 'bg-white text-[#4B5552] border border-[#E3E8E5] hover:text-[#0F392B] hover:border-[#CAD4CE]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid: 3 across desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={handleCardSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
