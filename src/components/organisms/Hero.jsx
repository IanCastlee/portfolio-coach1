import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Button } from '../atoms/Button.jsx';
import { Image } from '../atoms/Image.jsx';
import { Icon } from '../atoms/Icon.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function Hero({
  name = 'AURELIA',
  headline = 'I’M HERE TO HELP YOU RECONNECT WITH YOUR ESSENCE',
  subheading = 'Self-discovery is not an exotic destination—it is the sacred process of peeling back the layers built to survive, to please, and to perform. Welcome to your quiet sanctuary.',
  ctaText = 'DISCOVER MORE',
  ctaLink = '/about',
  secondaryCtaText = 'EXPLORE SERVICES',
  secondaryCtaLink = '/services',
  primaryImage,
  secondaryImage,
}) {
  return (
    <section className="relative pt-6 pb-20 md:pt-10 md:pb-28 overflow-hidden bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Monolithic Name Heading with gentle reveal */}
        <ScrollReveal direction="down" duration={0.8} distance={20} className="text-center mb-8 md:mb-12 select-none">
          <Heading
            level={1}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-sand-900 uppercase leading-none font-display"
          >
            I’M {name}
          </Heading>
        </ScrollReveal>

        {/* Editorial Grid: Left Photo, Center Narrative + CTA, Right Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <ScrollReveal direction="up" delay={0.15} duration={0.8} distance={32}>
              <div className="relative mx-auto max-w-sm lg:max-w-none group">
                <div className="aspect-[3/4] overflow-hidden rounded-xs bg-sand-200 shadow-md">
                  <Image
                    src={primaryImage}
                    alt={`${name} - Mindful Life & Leadership Coach`}
                    width={600}
                    height={800}
                    priority={true}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-sand-300 -z-10 hidden sm:block" />
              </div>
            </ScrollReveal>
          </div>

          {/* Center Column: Text & Call to Action */}
          <div className="lg:col-span-4 order-1 lg:order-2 text-center lg:text-left flex flex-col justify-center py-4">
            <ScrollReveal direction="up" delay={0.25} duration={0.8} distance={24}>
              <span className="font-serif italic text-sand-600 text-base md:text-lg mb-2 block">
                Transformational Mentorship
              </span>
              <Heading
                level={2}
                className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-sand-950 mb-6 leading-tight"
              >
                {headline}
              </Heading>
              <Text
                variant="body"
                className="text-sand-800/90 text-sm sm:text-base mb-8 leading-relaxed font-light"
              >
                {subheading}
              </Text>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button to={ctaLink} variant="outline" size="md">
                  {ctaText}
                </Button>
                <Button to={secondaryCtaLink} variant="text" size="md" className="py-2 text-xs">
                  {secondaryCtaText} &rarr;
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Lifestyle Photo with Botanical Flower */}
          <div className="lg:col-span-4 order-3 relative">
            <ScrollReveal direction="up" delay={0.35} duration={0.8} distance={32}>
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-[3/4] overflow-hidden rounded-xs bg-sand-200 shadow-md">
                  <Image
                    src={secondaryImage}
                    alt="Mindful contemplation and serene nature retreat"
                    width={600}
                    height={800}
                    priority={true}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Delicate Botanical Emblem Watermark */}
                <div className="absolute -bottom-6 -right-6 text-sand-400/80 pointer-events-none animate-pulse">
                  <Icon name="Flower" size={88} />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}

Hero.propTypes = {
  name: PropTypes.string,
  headline: PropTypes.string,
  subheading: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  secondaryCtaText: PropTypes.string,
  secondaryCtaLink: PropTypes.string,
  primaryImage: PropTypes.string.isRequired,
  secondaryImage: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  name: 'AURELIA',
  headline: 'I’M HERE TO HELP YOU RECONNECT WITH YOUR ESSENCE',
  subheading: 'Self-discovery is not an exotic destination—it is the sacred process of peeling back the layers built to survive, to please, and to perform. Welcome to your quiet sanctuary.',
  ctaText: 'DISCOVER MORE',
  ctaLink: '/about',
  secondaryCtaText: 'EXPLORE SERVICES',
  secondaryCtaLink: '/services',
};
