import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Hero } from '../components/organisms/Hero.jsx';
import { FeatureGrid } from '../components/organisms/FeatureGrid.jsx';
import { AboutSnippetSection } from '../components/organisms/AboutSnippetSection.jsx';
import { ScrollytellingSection } from '../components/organisms/ScrollytellingSection.jsx';
import { ServiceHighlightSection } from '../components/organisms/ServiceHighlightSection.jsx';
import { Testimonials } from '../components/organisms/Testimonials.jsx';
import { FAQ } from '../components/organisms/FAQ.jsx';
import { JournalGrid } from '../components/organisms/JournalGrid.jsx';
import { CTASection } from '../components/organisms/CTASection.jsx';
import { mockData } from '../data/mockData.js';

export function Home() {
  const { profile, site, services, testimonials, faqs, journal } = mockData;

  return (
    <>
      <SEO
        title={`Mindful Leadership & Transformational Life Coaching ${profile.location}`}
        description={`Private 1-on-1 transformational life and mindful leadership coaching with ${profile.name} in ${profile.location}. Cultivate grounded purpose, emotional resilience, and quiet mastery.`}
        path="/"
        keywords={`mindful life coach Sorsogon, executive coaching ${profile.location}, life coaching Philippines, transformational coach ${profile.name}, leadership mentor`}
      />

      <JsonLd
        faqItems={faqs}
      />

      {/* Hero section */}
      <Hero
        name={profile.displayName}
        headline="I’M HERE TO HELP YOU RECONNECT WITH YOUR ESSENCE"
        subheading="Self-discovery is not an exotic destination—it is the courageous process of peeling back the layers built to survive, to please, and to perform. Welcome to your quiet sanctuary."
        ctaText="DISCOVER MORE"
        ctaLink="/about"
        secondaryCtaText="VIEW SIGNATURE SERVICES"
        secondaryCtaLink="/services"
        primaryImage={profile.images.heroMain}
        secondaryImage={profile.images.heroSecondary}
      />

      {/* 3 Pillars Feature Grid */}
      <FeatureGrid pillars={site.pillars} />

      {/* About & Bio Snippet Layered Layout */}
      <AboutSnippetSection
        eyebrow="Hello & Welcome"
        heading="UNCOVER YOUR POTENTIAL WITH PURPOSEFUL COACHING"
        narrative={`In a world characterized by speed, distraction, and relentless performance anxiety, true leadership begins with conscious inner alignment. Together in our private studio in ${profile.location} or across secure virtual sanctuaries, we clarify your values, dismantle chronic stress loops, and architect an existence rooted in quiet sovereignty.`}
        ctaText="DISCOVER MY STORY"
        ctaLink="/about"
        image={profile.images.aboutStudio}
      />

      {/* Interactive Scrollytelling Section */}
      <ScrollytellingSection />

      {/* Interactive Service Spotlight Section */}
      <ServiceHighlightSection services={services} />

      {/* Client Testimonials with Avatar Switcher */}
      <Testimonials
        items={testimonials}
        eyebrow="Testimonials"
        heading="TRUSTED BY VISIONARY LEADERS"
      />

      {/* FAQ Split Section with Image and Accordion */}
      <FAQ
        items={faqs}
        image={profile.images.sereneWheat}
        heading="F . A . Q"
        quote="The journey of mindful self-discovery asks for courage—not because it requires becoming someone new, but because it demands remembering the sovereign truth of who you have always been."
      />

      {/* Latest Journal Reflections Grid */}
      <JournalGrid
        posts={journal}
        eyebrow="My Journal"
        heading="LATEST REFLECTIONS"
        showViewAll={true}
        viewAllLink="/journal"
      />

      {/* Final Pre-Footer Call to Action */}
      <CTASection
        eyebrow="Begin Your Reset"
        heading="ARE YOU READY TO EMBODY QUIET MASTERY?"
        description={`Schedule a confidential 25-minute discovery consultation with ${profile.name} to clarify your path forward.`}
        buttonText="BOOK DISCOVERY CALL"
        buttonLink="/contact"
      />
    </>
  );
}

export default Home;
