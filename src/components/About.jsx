import React, { useState } from 'react';
import { Scale, CheckCircle2, MessageSquare } from 'lucide-react';
import { aboutContent } from '../config/business';
import Button from './ui/Button';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section-wrapper bg-[#F2F5F3] scroll-mt-20 border-y border-[#E3E8E5]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[16px] overflow-hidden bg-[#0F392B] shadow-[0_10px_30px_rgba(15,57,43,0.08)] border border-[#E3E8E5] aspect-[4/3] lg:aspect-[5/6]">
              {!imageError ? (
                <img
                  src={aboutContent.image}
                  alt={aboutContent.imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0F392B] to-[#164E3B] text-white">
                  <Scale className="w-16 h-16 text-[#10B981] mb-4" />
                  <p className="text-sm font-semibold tracking-wide text-white/90 text-center">
                    Kayleigh Simpson · Legal Practice
                  </p>
                </div>
              )}
              {/* Subtle tonal gradient frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F392B]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="eyebrow block mb-3 font-semibold">
                {aboutContent.eyebrow}
              </span>
              <h2 className="text-[#111817] font-bold text-balance mb-6 leading-tight">
                {aboutContent.title}
              </h2>

              <div className="space-y-4 text-[#4B5552] text-base md:text-lg leading-relaxed mb-8">
                {aboutContent.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Clean proof points without fake stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-4 border-t border-[#E3E8E5]">
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#111817]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Confidential consultations</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#111817]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Direct practitioner contact</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#111817]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Scottish jurisdiction counsel</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#111817]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                  <span>Transparent, practical advice</span>
                </div>
              </div>

              <div>
                <Button
                  href={aboutContent.cta.href}
                  external={aboutContent.cta.external}
                  variant="primary"
                  className="py-3 px-6"
                  icon={MessageSquare}
                >
                  {aboutContent.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
