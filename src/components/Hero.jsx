import React from 'react';
import { MessageSquare, ArrowDown, MapPin } from 'lucide-react';
import { heroContent, business } from '../config/business';
import Button from './ui/Button';

export default function Hero() {
  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Full-bleed atmospheric background image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroContent.backgroundImage}
          alt="Kayleigh Simpson Legal Services Office"
          className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Single elegant tonal overlay: deep green-slate blend for crisp legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F392B]/95 via-[#0F392B]/85 to-[#0F392B]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Hero Content Area */}
      <div className="container-custom relative z-10 py-12 md:py-20">
        <div className="max-w-3xl text-left">
          {/* Eyebrow: city + business type */}
          <div className="inline-flex items-center gap-2 mb-6 text-xs md:text-sm font-semibold tracking-[0.14em] uppercase text-[#A7F3D0]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>{heroContent.eyebrow}</span>
          </div>

          {/* Confident H1 headline */}
          <h1 className="text-white font-extrabold text-balance leading-[1.12] mb-6">
            {heroContent.title}
          </h1>

          {/* Supporting line */}
          <p className="text-white/85 text-lg md:text-xl font-normal leading-relaxed mb-8 md:mb-10 max-w-2xl">
            {heroContent.subtitle}
          </p>

          {/* Primary CTA + Secondary CTA */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Button
              href={heroContent.primaryCta.href}
              external={heroContent.primaryCta.external}
              variant="accent"
              className="py-3.5 px-6 text-base font-semibold"
              icon={MessageSquare}
            >
              {heroContent.primaryCta.label}
            </Button>

            <Button
              href={heroContent.secondaryCta.href}
              onClick={handleScrollToServices}
              variant="secondary"
              className="py-3.5 px-6 text-base font-medium bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              icon={ArrowDown}
            >
              {heroContent.secondaryCta.label}
            </Button>
          </div>

          {/* Quiet trust line */}
          {heroContent.trustLine && (
            <div className="pt-6 border-t border-white/15 flex items-center gap-2 text-xs md:text-sm text-white/70">
              <MapPin className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>{heroContent.trustLine}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
