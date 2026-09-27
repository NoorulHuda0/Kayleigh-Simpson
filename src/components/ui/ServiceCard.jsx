import React, { useState } from 'react';
import { Scale, ArrowUpRight } from 'lucide-react';
import { business } from '../../config/business';

export default function ServiceCard({
  service,
  onSelectService,
}) {
  const [imageError, setImageError] = useState(false);

  const inquiryUrl = `${business.whatsappUrl}&text=${encodeURIComponent(
    `Hello Kayleigh, I would like to inquire regarding ${service.title}.`
  )}`;

  return (
    <article className="group card-surface flex flex-col h-full overflow-hidden bg-white">
      {/* Image container with fixed 16:10 / 4:3 aspect ratio */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#E2ECE5] border-b border-[#E3E8E5]">
        {!imageError ? (
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F392B] to-[#164E3B] text-white p-6">
            <Scale className="w-10 h-10 text-[#059669] mb-2" />
            <span className="text-xs uppercase tracking-wider text-[#A7F3D0] font-medium text-center">
              {service.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7 justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3 className="text-lg md:text-xl font-bold text-[#111817] group-hover:text-[#0F392B] transition-colors leading-snug">
              {service.title}
            </h3>
            <span className="text-[#059669] shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
          <p className="text-[#4B5552] text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Footer actions */}
        <div className="pt-6 mt-6 border-t border-[#E3E8E5] flex items-center justify-between text-sm">
          <button
            type="button"
            onClick={() => onSelectService ? onSelectService(service.title) : null}
            className="text-xs font-semibold text-[#0F392B] hover:text-[#059669] transition-colors uppercase tracking-wider cursor-pointer"
          >
            Request Advice
          </button>
          <a
            href={inquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[#4B5552] hover:text-[#0F392B] inline-flex items-center gap-1 transition-colors"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </article>
  );
}
