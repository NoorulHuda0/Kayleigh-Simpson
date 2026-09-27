import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { business, navigation } from '../config/business';
import Button from './ui/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-[#E3E8E5] shadow-xs py-3.5'
          : 'bg-[#F9FAF9]/90 backdrop-blur-sm border-[#E3E8E5]/70 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight text-[#0F392B] hover:text-[#164E3B] transition-colors font-display"
          >
            {navigation.brand}
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5552]">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#0F392B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#059669] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + Mobile Menu toggle */}
          <div className="flex items-center gap-3">
            <Button
              href={navigation.cta.href}
              external={navigation.cta.external}
              variant="primary"
              className="hidden sm:inline-flex text-xs md:text-sm py-2 px-4"
              icon={MessageSquare}
            >
              {navigation.cta.label}
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0F392B] hover:bg-[#F2F5F3] rounded-[8px] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E3E8E5] px-6 py-6 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#111817]">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 hover:text-[#059669] transition-colors border-b border-[#F2F5F3]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <Button
                href={navigation.cta.href}
                external={navigation.cta.external}
                variant="primary"
                className="w-full justify-center py-3"
                icon={MessageSquare}
              >
                {navigation.cta.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
