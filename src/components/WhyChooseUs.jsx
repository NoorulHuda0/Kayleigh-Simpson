import React from 'react';
import { whyChooseUsContent } from '../config/business';
import SectionHeading from './ui/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-wrapper bg-[#F9FAF9] scroll-mt-20">
      <div className="container-custom">
        <SectionHeading
          eyebrow={whyChooseUsContent.eyebrow}
          title={whyChooseUsContent.title}
          description={whyChooseUsContent.description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsContent.points.map((point) => (
            <div
              key={point.number}
              className="card-surface p-6 md:p-8 flex flex-col justify-between bg-white border border-[#E3E8E5] hover:border-[#059669]/50 transition-all duration-200"
            >
              <div>
                <span className="font-display text-2xl font-bold text-[#059669] block mb-4">
                  {point.number}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-[#111817] mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-sm md:text-base text-[#4B5552] leading-relaxed">
                  {point.description}
                </p>
              </div>
              <div className="w-8 h-[2px] bg-[#E3E8E5] mt-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
