import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { footerContent, business, navigation } from '../config/business';

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0F392B] text-white border-t border-[#164E3B] pt-14 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              {footerContent.brandName}
            </h3>
            <p className="text-sm font-medium text-[#A7F3D0] mb-4">
              {footerContent.businessType} · {footerContent.tagline}
            </p>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed mb-6">
              Dedicated legal assistance in Saltcoats, Scotland. Direct counsel across contract drafting, civil law, and commercial matters.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={footerContent.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-[8px] bg-white/10 hover:bg-white/20 text-[#A7F3D0] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {business.whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#A7F3D0] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              {navigation.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office & Direct Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#A7F3D0] mb-4">
              Practice Location
            </h4>
            <div className="space-y-3 text-sm text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{footerContent.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={footerContent.phoneUrl} className="hover:text-white transition-colors">
                  {footerContent.phone}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#A7F3D0] hover:text-white underline transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {footerContent.copyrightYear} {footerContent.brandName}. {footerContent.copyrightNotice}</p>
          <p>Saltcoats, North Ayrshire, Scotland</p>
        </div>
      </div>
    </footer>
  );
}
