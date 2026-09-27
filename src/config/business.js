/**
 * Business Configuration File
 * 
 * ALL business text, colors, services, contact details, and image URLs
 * live strictly within this configuration file.
 */

export const business = {
  name: "Kayleigh Simpson",
  type: "Legal Services",
  tagline: "Trusted Legal Support",
  city: "Saltcoats, Scotland",
  fullAddress: "9 Joan Gordon Street, Saltcoats, Scotland, KA21 6FB",
  phone: "447414007539",
  phoneFormatted: "+44 7414 007539",
  whatsapp: "447414007539",
  whatsappFormatted: "+44 7414 007539",
  whatsappUrl: "https://wa.me/447414007539?text=Hello%20Kayleigh%2C%20I%20would%20like%20to%20inquire%20about%20your%20legal%20services.",
  phoneUrl: "tel:447414007539",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=9+Joan+Gordon+Street,+Saltcoats,+Scotland,+KA21+6FB",
  
  // Brand colors & styles
  colors: {
    primary: "#0F392B",        // Scottish forest green
    primaryLight: "#164E3B",
    accent: "#059669",         // Emerald green
    secondary: "#FFFFFF",      // Clean white
    background: "#F9FAF9",
    backgroundNeutral: "#F2F5F3",
    ink: "#111817",
    inkMuted: "#4B5552",
    border: "#E3E8E5",
  },

  brandStyle: "Modern SaaS",
};

export const navigation = {
  brand: business.name,
  links: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    label: "Message on WhatsApp",
    href: business.whatsappUrl,
    external: true,
  },
};

export const heroContent = {
  eyebrow: "Saltcoats, Scotland · Legal Services",
  title: "Trusted Legal Support for Personal & Business Matters",
  subtitle: "Experienced legal guidance, contract drafting, and dispute resolution grounded in Scottish law and dedicated to your interests.",
  primaryCta: {
    label: "Message on WhatsApp",
    href: business.whatsappUrl,
    external: true,
  },
  secondaryCta: {
    label: "View Services",
    href: "#services",
    external: false,
  },
  trustLine: "Direct consultations available · 9 Joan Gordon Street, Saltcoats",
  backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
};

export const servicesContent = {
  eyebrow: "Our Practice Areas",
  title: "Comprehensive Legal Services",
  description: "Practical legal counsel across twelve focused practice areas, delivered with clarity and attention to detail.",
  items: [
    {
      id: "legal-consultation",
      title: "Legal Consultation",
      description: "Direct, confidential legal advice to evaluate your circumstances and chart a clear course of action under Scottish law.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "contract-drafting",
      title: "Contract Drafting",
      description: "Carefully structured commercial agreements and private contracts tailored to secure your rights and mitigate future risk.",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "legal-research",
      title: "Legal Research",
      description: "In-depth case law and statutory research to establish clear answers on complex Scottish and UK legal questions.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "document-review",
      title: "Document Review",
      description: "Thorough clause-by-clause assessment of legal documents, leases, and agreements before you commit.",
      image: "https://images.unsplash.com/photo-1453733197781-e24ffbb2d04a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "business-law",
      title: "Business Law",
      description: "Pragmatic legal guidance for local businesses, covering partnership agreements, governance, and commercial disputes.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "family-law",
      title: "Family Law",
      description: "Clear, supportive guidance through sensitive personal matters, family arrangements, and formal agreements.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "property-law",
      title: "Property Law",
      description: "Dependable legal counsel on residential and commercial property matters, leasing terms, and title considerations.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "employment-law",
      title: "Employment Law",
      description: "Balanced legal guidance on workplace contracts, grievance procedures, settlement agreements, and employee rights.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "immigration-law",
      title: "Immigration Law",
      description: "Assistance navigating visa documentation, status reviews, and formal compliance submissions.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "civil-law",
      title: "Civil Law",
      description: "Support for civil claims, liability queries, personal obligations, and enforcing lawful entitlements.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "legal-notices",
      title: "Legal Notices",
      description: "Precise drafting and formal issuance of statutory notices, formal demand letters, and formal responses.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      description: "Constructive negotiation and conflict mediation focused on reaching fair, cost-effective settlements without trial.",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const aboutContent = {
  eyebrow: "About The Practice",
  title: "Dedicated Legal Advocacy in Saltcoats",
  paragraphs: [
    "Kayleigh Simpson provides focused legal counsel to individuals and business owners across Saltcoats and North Ayrshire.",
    "Legal challenges can be complex and stressful. Our practice is built on direct communication, meticulous document handling, and clear Scottish legal insight that you can act upon with confidence.",
    "Whether drafting commercial terms, resolving a sensitive dispute, or seeking clarity on property or family rights, you receive personal attention tailored to your exact objectives.",
  ],
  image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Legal consultation and documentation desk",
  cta: {
    label: "Message on WhatsApp",
    href: business.whatsappUrl,
    external: true,
  },
};

export const whyChooseUsContent = {
  eyebrow: "Why Choose Us",
  title: "A Focused, Straightforward Approach",
  description: "Practical legal representation built on accessibility, rigor, and local knowledge.",
  points: [
    {
      number: "01",
      title: "Direct Lawyer Contact",
      description: "Speak directly with your legal advisor via phone or WhatsApp without being passed around staff.",
    },
    {
      number: "02",
      title: "Local Saltcoats Base",
      description: "Conveniently situated at 9 Joan Gordon Street, serving clients in Saltcoats and the wider Scottish community.",
    },
    {
      number: "03",
      title: "Breadth of 12 Practice Areas",
      description: "Broad expertise across contract, business, property, civil, and family law provides unified legal support.",
    },
    {
      number: "04",
      title: "Clear, Uncomplicated Advice",
      description: "We communicate in plain language, detailing your rights and legal options without dense jargon.",
    },
  ],
};

// Reviews/Testimonials omitted cleanly if not provided in business details
export const testimonialsContent = null;

export const faqContent = {
  eyebrow: "Common Questions",
  title: "Frequently Asked Questions",
  description: "Clear answers to frequent inquiries about starting your legal consultation.",
  items: [
    {
      question: "How do I book an initial legal consultation?",
      answer: "The quickest way to get started is by sending a message on WhatsApp or calling directly on +44 7414 007539. We will briefly review your query and arrange a suitable consultation.",
    },
    {
      question: "Where is your office situated?",
      answer: "Our practice is located at 9 Joan Gordon Street, Saltcoats, Scotland, KA21 6FB. In-person meetings are arranged by appointment.",
    },
    {
      question: "Which legal matters do you handle?",
      answer: "We handle twelve core legal services: legal consultation, contract drafting, legal research, document review, business law, family law, property law, employment law, immigration law, civil law, legal notices, and dispute resolution.",
    },
    {
      question: "Can I submit contracts or documents for advance review?",
      answer: "Yes. Once you reach out via WhatsApp or telephone, we will provide guidance on securely providing your documents for preliminary review.",
    },
  ],
};

export const contactContent = {
  eyebrow: "Get In Touch",
  title: "Contact Kayleigh Simpson",
  description: "Reach out today to discuss your legal requirements. We are ready to assist you.",
  addressCard: {
    label: "Practice Address",
    value: business.fullAddress,
    ctaText: "View on Google Maps",
    ctaUrl: business.googleMapsUrl,
  },
  phoneCard: {
    label: "Telephone",
    value: business.phoneFormatted,
    ctaText: "Call Now",
    ctaUrl: business.phoneUrl,
  },
  whatsappCard: {
    label: "WhatsApp Support",
    value: business.whatsappFormatted,
    ctaText: "Message on WhatsApp",
    ctaUrl: business.whatsappUrl,
  },
  form: {
    title: "Send a Consultation Request",
    subtitle: "Complete the form below and we will respond promptly.",
    nameLabel: "Your Full Name",
    phoneLabel: "Phone Number",
    serviceLabel: "Service of Interest",
    messageLabel: "Details of Your Query",
    submitButtonText: "Submit Inquiry",
    whatsappAlternativeText: "Prefer instant messaging? Chat directly on WhatsApp",
  },
};

export const footerContent = {
  brandName: business.name,
  businessType: business.type,
  tagline: business.tagline,
  address: business.fullAddress,
  phone: business.phoneFormatted,
  phoneUrl: business.phoneUrl,
  whatsappUrl: business.whatsappUrl,
  copyrightYear: 2026,
  copyrightNotice: "All rights reserved. Providing legal services in Saltcoats, Scotland.",
};
