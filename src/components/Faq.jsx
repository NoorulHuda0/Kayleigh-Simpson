import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqContent } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqContent || !faqContent.items || faqContent.items.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-wrapper bg-[#F2F5F3] scroll-mt-20 border-t border-[#E3E8E5]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
          description={faqContent.description}
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqContent.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[12px] border border-[#E3E8E5] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#059669]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg text-[#111817]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#059669] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm md:text-base text-[#4B5552] leading-relaxed border-t border-[#F2F5F3]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
