import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { ContactSection } from '../components/organisms/ContactSection.jsx';
import { FAQ } from '../components/organisms/FAQ.jsx';
import { mockData } from '../data/mockData.js';

export function Contact() {
  const { profile, contact, services, faqs } = mockData;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <SEO
        title={`Contact & Schedule Consultation | ${profile.name} Coaching ${profile.location}`}
        description={`Book your complimentary 25-minute discovery consultation with ${profile.name}. In-person sessions at ${contact.address.displayFull} or worldwide via secure video.`}
        path="/contact"
        keywords={`book life coach Sorsogon, contact ${profile.name}, life coaching inquiry Sorsogon, ${profile.location} coaching studio`}
      />

      <JsonLd breadcrumbs={breadcrumbs} />

      {/* Contact Page Header */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 bg-sand-100/60 border-b border-sand-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
            The Still Point
          </span>
          <Heading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.15em] text-sand-950 mb-4"
          >
            SAY HELLO
          </Heading>
          <Text
            variant="lead"
            className="text-sand-700 max-w-xl mx-auto font-light leading-relaxed text-base"
          >
            A calm, confidential space to explore how private mentorship with {profile.name} can anchor your life and leadership.
          </Text>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection
        contactInfo={contact}
        services={services}
      />

      {/* FAQ */}
      <FAQ
        items={faqs}
        image={profile.images.sereneWheat}
        heading="CONSULTATION FAQS"
        quote="Every inquiry is met with absolute discretion, prompt attention, and thoughtful consideration."
      />
    </>
  );
}

export default Contact;
