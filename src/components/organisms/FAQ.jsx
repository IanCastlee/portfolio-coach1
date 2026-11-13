import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Image } from '../atoms/Image.jsx';
import { AccordionItem } from '../molecules/AccordionItem.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function FAQ({
  items = [],
  image,
  heading = 'F . A . Q',
  quote = 'The journey of mindful self-discovery asks for courage—not because it requires becoming someone new, but because it demands remembering the sovereign truth of who you have always been.',
}) {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-sand-50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo sliding in from left */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="left" duration={0.8} distance={32}>
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-sand-200 shadow-md">
                <Image
                  src={image}
                  alt="Aurelia Thorne reflecting in nature sanctuary"
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: FAQ heading & Accordion items sliding from right */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ScrollReveal direction="right" duration={0.7} distance={28} className="mb-6">
              <Heading
                level={2}
                className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.2em] text-sand-950 mb-4"
              >
                {heading}
              </Heading>
              <Text
                variant="body"
                className="text-sand-700/90 text-sm sm:text-base font-serif italic leading-relaxed mb-6"
              >
                {quote}
              </Text>
            </ScrollReveal>

            {/* Accordion List with Staggered Entrances */}
            <div className="divide-y divide-sand-300 border-t border-sand-300">
              {items.map((item, idx) => (
                <ScrollReveal
                  key={item.id}
                  direction="up"
                  delay={idx * 0.08}
                  duration={0.5}
                  distance={16}
                >
                  <AccordionItem
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openId === item.id}
                    onToggle={() => toggleAccordion(item.id)}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

FAQ.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string,
  quote: PropTypes.string,
};

FAQ.defaultProps = {
  items: [],
  heading: 'F . A . Q',
  quote: '',
};
