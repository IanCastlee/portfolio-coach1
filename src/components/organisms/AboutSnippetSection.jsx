import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Button } from '../atoms/Button.jsx';
import { Image } from '../atoms/Image.jsx';
import { Icon } from '../atoms/Icon.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function AboutSnippetSection({
  eyebrow = 'Hello & Welcome',
  heading = 'UNCOVER YOUR POTENTIAL WITH PURPOSEFUL COACHING',
  narrative = 'Modern high achievement often exacts a quiet toll: decision fatigue, disconnection from your authentic intuition, and the exhausting burden of living up to everyone else’s definitions of success. Through a blend of deep psychological inquiry, somatic nervous system regulation, and clear-eyed life architecture, we create the space for you to remember who you truly are.',
  ctaText = 'DISCOVER MY STORY',
  ctaLink = '/about',
  image,
}) {
  return (
    <section className="py-20 md:py-32 bg-sand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Image with layered border sliding from left */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="left" duration={0.8} distance={36}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="aspect-[4/5] overflow-hidden rounded-xs bg-sand-200 shadow-lg">
                  <Image
                    src={image}
                    alt="Aurelia Thorne - Transformational Life and Leadership Coach"
                    width={700}
                    height={875}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Subtle aesthetic backdrop border */}
                <div className="absolute -top-6 -left-6 w-full h-full border border-sand-300 -z-10 hidden sm:block" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Layered Box with Content sliding from right */}
          <div className="lg:col-span-6 lg:-ml-12 z-10">
            <ScrollReveal direction="right" delay={0.2} duration={0.8} distance={36}>
              <div className="bg-sand-100/90 border border-sand-200/90 p-8 sm:p-12 lg:p-14 shadow-sm relative">
                <div className="absolute top-6 right-6 text-sand-300 hover:rotate-45 transition-transform duration-700">
                  <Icon name="Flower" size={56} />
                </div>

                <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
                  {eyebrow}
                </span>

                <Heading
                  level={2}
                  className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-sand-950 mb-6 leading-snug"
                >
                  {heading}
                </Heading>

                <Text
                  variant="body"
                  className="text-sand-800 text-sm sm:text-base mb-8 leading-relaxed font-light"
                >
                  {narrative}
                </Text>

                <div className="flex items-center gap-6">
                  <Button to={ctaLink} variant="outline" size="md">
                    {ctaText}
                  </Button>
                  <span className="text-xs uppercase tracking-ultra text-sand-500 font-display hidden sm:inline-block">
                    Bonifacio Global City, Manila
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

AboutSnippetSection.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  narrative: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  image: PropTypes.string.isRequired,
};

AboutSnippetSection.defaultProps = {
  eyebrow: 'Hello & Welcome',
  heading: 'UNCOVER YOUR POTENTIAL WITH PURPOSEFUL COACHING',
  narrative: '',
  ctaText: 'DISCOVER MY STORY',
  ctaLink: '/about',
};
