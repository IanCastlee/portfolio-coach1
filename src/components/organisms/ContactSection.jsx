import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Button } from '../atoms/Button.jsx';
import { FormField } from '../molecules/FormField.jsx';
import { ContactItem } from '../molecules/ContactItem.jsx';
import { Icon } from '../atoms/Icon.jsx';

export function ContactSection({
  contactInfo,
  services = [],
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: services[0]?.title || 'Transformational Life Coaching',
    format: 'Virtual (Encrypted Video)',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMapIframe, setShowMapIframe] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief note about what brings you to coaching.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulated graceful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const serviceOptions = services.map((s) => ({
    value: s.title,
    label: s.title,
  }));

  const formatOptions = [
    { value: 'Virtual (Encrypted Video)', label: 'Virtual (Worldwide / Secure Video)' },
    { value: 'In-Person BGC Penthouse Studio', label: 'In-Person Studio (BGC, Taguig, Manila)' },
  ];

  return (
    <section className="py-20 md:py-28 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-1">
            Begin Your Conversation
          </span>
          <Heading
            level={2}
            className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-widest text-sand-950 mb-4"
          >
            INITIATE A DISCOVERY DIALOGUE
          </Heading>
          <Text variant="lead" className="text-sand-700/90 font-light text-base">
            Every meaningful partnership begins with a confidential, pressure-free 25-minute consultation to explore chemistry, aspirations, and container alignment.
          </Text>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white/70 border border-sand-200 p-8 sm:p-10 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-sand-100 text-sand-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={28} />
                </div>
                <Heading level={3} className="text-2xl uppercase tracking-widest text-sand-900">
                  Thank You, {formData.name}
                </Heading>
                <Text variant="body" className="max-w-md mx-auto text-sand-700">
                  Your inquiry has been received with warm care. Aurelia or our concierge coordinator will respond within 24 business hours with scheduling options.
                </Text>
                <div className="pt-4">
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: services[0]?.title || '',
                        format: 'Virtual (Encrypted Video)',
                        message: '',
                      });
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Note
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="contact-name"
                    label="Full Name"
                    placeholder="Elena Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    error={errors.name}
                    required
                  />
                  <FormField
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    placeholder="elena@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={errors.email}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="contact-phone"
                    label="Mobile / WhatsApp"
                    type="tel"
                    placeholder="+63 917 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                  <FormField
                    id="contact-service"
                    label="Program of Interest"
                    type="select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    options={serviceOptions}
                  />
                </div>

                <FormField
                  id="contact-format"
                  label="Preferred Meeting Sanctuary"
                  type="select"
                  value={formData.format}
                  onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                  options={formatOptions}
                />

                <FormField
                  id="contact-message"
                  label="Your Intentions & Background"
                  type="textarea"
                  rows={5}
                  placeholder="Share a few words about what transitions or questions you are currently navigating..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full text-center"
                >
                  {isSubmitting ? 'TRANSMITTING INQUIRY...' : 'REQUEST DISCOVERY CONSULTATION'}
                </Button>

                <p className="text-[11px] text-sand-500 text-center font-display tracking-wide uppercase">
                  Protected by absolute privacy and professional confidentiality.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Local SEO & Map Facade */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-sand-100/60 border border-sand-200 p-8 space-y-6">
              <Heading level={3} className="text-xl uppercase tracking-widest text-sand-950 pb-3 border-b border-sand-200">
                STUDIO INFORMATION
              </Heading>

              <ContactItem
                iconName="MapPin"
                label="BGC Private Studio"
                value={contactInfo.address.displayFull}
                href={contactInfo.googleMapsLink}
              />

              <ContactItem
                iconName="Phone"
                label="Direct & WhatsApp"
                value={contactInfo.phones[0]?.value}
                href={contactInfo.phones[0]?.href}
              />

              <ContactItem
                iconName="Mail"
                label="Confidential Email"
                value={contactInfo.emails[0]?.value}
                href={contactInfo.emails[0]?.href}
              />

              <div className="pt-2 border-t border-sand-200">
                <Text variant="eyebrow" className="mb-2 text-sand-600">
                  Consultation Sanctuary Hours
                </Text>
                {contactInfo.hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-xs text-sand-800 py-1 font-light">
                    <span className="font-medium">{h.days}:</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Facade for SEO & Performance */}
            <div className="bg-sand-200/50 border border-sand-300 relative aspect-video flex items-center justify-center overflow-hidden">
              {showMapIframe ? (
                <iframe
                  title="Aurelia Thorne Coaching Studio Map"
                  src={contactInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="text-center p-6 flex flex-col items-center">
                  <div className="text-sand-700 mb-2">
                    <Icon name="MapPin" size={32} />
                  </div>
                  <p className="font-display text-xs uppercase tracking-widest text-sand-900 mb-1">
                    Arthaland Century Pacific Tower, BGC
                  </p>
                  <p className="text-xs text-sand-600 mb-4 max-w-xs font-light">
                    Click to load interactive studio map preview
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setShowMapIframe(true)}
                      className="bg-sand-900 text-sand-50 text-[10px] font-display uppercase tracking-widest px-4 py-2 hover:bg-sand-800 transition-colors"
                    >
                      Load Map
                    </button>
                    <a
                      href={contactInfo.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-sand-700 text-sand-900 text-[10px] font-display uppercase tracking-widest px-4 py-2 hover:bg-sand-900 hover:text-white transition-colors"
                    >
                      Open in Google Maps &rarr;
                    </a>
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

ContactSection.propTypes = {
  contactInfo: PropTypes.object.isRequired,
  services: PropTypes.array,
};

ContactSection.defaultProps = {
  services: [],
};
