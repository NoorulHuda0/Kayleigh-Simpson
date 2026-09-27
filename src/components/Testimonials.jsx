import React from 'react';
import { testimonialsContent } from '../config/business';
import SectionHeading from './ui/SectionHeading';

/**
 * Rendered ONLY if testimonials exist in business configuration.
 * When null/empty, returns null (clean omission without placeholders).
 */
export default function Testimonials() {
  if (!testimonialsContent || !testimonialsContent.items || testimonialsContent.items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="section-wrapper bg-[#F2F5F3] scroll-mt-20 border-t border-[#E3E8E5]">
      <div className="container-custom">
        <SectionHeading
          eyebrow={testimonialsContent.eyebrow}
          title={testimonialsContent.title}
          description={testimonialsContent.description}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsContent.items.map((item, idx) => (
            <div key={idx} className="card-surface p-7 bg-white flex flex-col justify-between">
              <blockquote className="text-base text-[#111817] leading-relaxed mb-6 italic">
                "{item.quote}"
              </blockquote>
              <div className="pt-4 border-t border-[#E3E8E5]">
                <p className="font-semibold text-sm text-[#111817]">{item.author}</p>
                {item.context && (
                  <p className="text-xs text-[#4B5552]">{item.context}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
