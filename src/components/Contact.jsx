import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, ExternalLink, Send, CheckCircle2 } from 'lucide-react';
import { contactContent, business, servicesContent } from '../config/business';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete your name, phone number, and query details.');
      return;
    }

    setSubmitted(true);
  };

  const whatsappDirectMessageUrl = `${business.whatsappUrl}&text=${encodeURIComponent(
    `Hello Kayleigh, my name is ${formData.name || 'a client'}. Phone: ${formData.phone || ''}. Service: ${
      formData.service || 'General Inquiry'
    }. Details: ${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="section-wrapper bg-[#F9FAF9] scroll-mt-20">
      <div className="container-custom">
        <SectionHeading
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.description}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card with Directions button */}
            <div className="card-surface p-6 bg-white border border-[#E3E8E5]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E2ECE5] text-[#0F392B] rounded-[8px] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#4B5552] block mb-1">
                    {contactContent.addressCard.label}
                  </span>
                  <p className="text-base font-semibold text-[#111817] leading-snug mb-3">
                    {contactContent.addressCard.value}
                  </p>
                  <a
                    href={contactContent.addressCard.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#059669] hover:text-[#047857] transition-colors"
                  >
                    <span>{contactContent.addressCard.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="card-surface p-6 bg-white border border-[#E3E8E5]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E2ECE5] text-[#0F392B] rounded-[8px] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#4B5552] block mb-1">
                    {contactContent.phoneCard.label}
                  </span>
                  <p className="text-base font-semibold text-[#111817] mb-3">
                    {contactContent.phoneCard.value}
                  </p>
                  <a
                    href={contactContent.phoneCard.ctaUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F392B] hover:text-[#059669] transition-colors"
                  >
                    <span>{contactContent.phoneCard.ctaText}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="card-surface p-6 bg-white border border-[#E3E8E5]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#E2ECE5] text-[#059669] rounded-[8px] shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-xs uppercase font-semibold tracking-wider text-[#4B5552] block mb-1">
                    {contactContent.whatsappCard.label}
                  </span>
                  <p className="text-base font-semibold text-[#111817] mb-3">
                    {contactContent.whatsappCard.value}
                  </p>
                  <a
                    href={contactContent.whatsappCard.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#059669] hover:text-[#047857] transition-colors"
                  >
                    <span>{contactContent.whatsappCard.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-[12px] bg-[#0F392B] text-white">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A7F3D0] mb-1">
                Direct Consultations
              </h4>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                Prompt legal advice tailored to individuals and businesses in Saltcoats and throughout Scotland.
              </p>
            </div>
          </div>

          {/* Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 md:p-9 rounded-[16px] border border-[#E3E8E5] shadow-xs">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#111817] mb-1">
                      {contactContent.form.title}
                    </h3>
                    <p className="text-sm text-[#4B5552]">
                      {contactContent.form.subtitle}
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 mb-6 bg-red-50 border border-red-200 text-red-700 text-sm rounded-[8px]">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#111817] mb-2">
                        {contactContent.form.nameLabel} <span className="text-[#059669]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John MacLeod"
                        className="w-full px-4 py-3 text-sm md:text-base border border-[#E3E8E5] rounded-[8px] bg-[#F9FAF9] focus:bg-white focus:border-[#059669] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#111817] mb-2">
                          {contactContent.form.phoneLabel} <span className="text-[#059669]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07414 007539"
                          className="w-full px-4 py-3 text-sm md:text-base border border-[#E3E8E5] rounded-[8px] bg-[#F9FAF9] focus:bg-white focus:border-[#059669] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#111817] mb-2">
                          {contactContent.form.serviceLabel}
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm md:text-base border border-[#E3E8E5] rounded-[8px] bg-[#F9FAF9] focus:bg-white focus:border-[#059669] focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="">Select a service (optional)</option>
                          {servicesContent.items.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#111817] mb-2">
                        {contactContent.form.messageLabel} <span className="text-[#059669]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your legal query..."
                        className="w-full px-4 py-3 text-sm md:text-base border border-[#E3E8E5] rounded-[8px] bg-[#F9FAF9] focus:bg-white focus:border-[#059669] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3.5 text-base font-semibold"
                        icon={Send}
                      >
                        {contactContent.form.submitButtonText}
                      </Button>
                    </div>

                    <div className="text-center pt-2">
                      <a
                        href={business.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#059669] hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{contactContent.form.whatsappAlternativeText}</span>
                      </a>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-[#E2ECE5] text-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#111817] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm md:text-base text-[#4B5552] max-w-md mx-auto mb-6">
                    Thank you, {formData.name}. Your legal consultation request has been recorded. We will review your details and be in touch promptly.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                      href={whatsappDirectMessageUrl}
                      external={true}
                      variant="accent"
                      icon={MessageSquare}
                    >
                      Send Query on WhatsApp
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', service: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
