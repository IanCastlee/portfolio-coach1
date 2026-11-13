import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Button } from '../atoms/Button.jsx';
import { Image } from '../atoms/Image.jsx';

export function ServiceHighlightSection({
  services = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!services || services.length === 0) return null;

  const currentService = services[activeIndex] || services[0];

  return (
    <section className="py-20 md:py-28 bg-sand-100/50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Category Header */}
        <div className="text-center mb-10">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-1">
            Curated Programs
          </span>
          <Heading
            level={2}
            className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-sand-950"
          >
            SIGNATURE PATHWAYS
          </Heading>
        </div>

        {/* Tab Switcher for Services */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12">
          {services.map((svc, idx) => (
            <button
              key={svc.slug}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`font-display text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-sand-900 text-sand-50 border-sand-900 shadow-xs'
                  : 'bg-transparent text-sand-700 border-sand-300 hover:border-sand-600 hover:text-sand-900'
              }`}
            >
              {svc.category || svc.title}
            </button>
          ))}
        </div>

        {/* Service Spotlight Display (Matching Screenshot `media_1794396824999_f568e42f.jpg`) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch bg-sand-50 border border-sand-200 shadow-sm overflow-hidden">
          
          {/* Photo side */}
          <div className="lg:col-span-6 relative min-h-[350px] lg:min-h-[460px]">
            <Image
              src={currentService.image}
              alt={currentService.title}
              width={800}
              height={600}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details side */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-sand-100/40">
            <span className="font-serif italic text-sand-600 text-base md:text-lg mb-2">
              Featured Container
            </span>
            <Heading
              level={3}
              className="text-2xl sm:text-3xl uppercase tracking-widest text-sand-950 mb-4"
            >
              {currentService.title}
            </Heading>
            <Text
              variant="body"
              className="text-sand-800 text-sm sm:text-base mb-6 font-light leading-relaxed"
            >
              {currentService.summary || currentService.description}
            </Text>

            <div className="mb-8 pt-4 border-t border-sand-200/80 flex items-center justify-between text-xs tracking-wider uppercase font-display text-sand-600">
              <span>{currentService.duration}</span>
              <span className="font-medium text-sand-900">{currentService.price}</span>
            </div>

            <div>
              <Button
                to={`/services/${currentService.slug}`}
                variant="outline"
                size="md"
              >
                DISCOVER MORE
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

ServiceHighlightSection.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      duration: PropTypes.string,
      price: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
};

ServiceHighlightSection.defaultProps = {
  services: [],
};
