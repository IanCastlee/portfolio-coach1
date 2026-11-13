import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { RatingStars } from '../molecules/RatingStars.jsx';
import { TestimonialAvatar } from '../molecules/TestimonialAvatar.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function Testimonials({
  items = [],
  eyebrow = 'Testimonials',
  heading = 'TRUSTED BY VISIONARY LEADERS',
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!items || items.length === 0) return null;

  const current = items[activeIdx] || items[0];

  return (
    <section className="py-20 md:py-28 bg-sand-50 border-t border-sand-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow and Heading with scroll entrance */}
        <ScrollReveal direction="up" distance={20} className="mb-10">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
            {eyebrow}
          </span>
          <Heading
            level={2}
            className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-sand-950"
          >
            {heading}
          </Heading>
        </ScrollReveal>

        {/* Circular Avatar Thumbnails Row */}
        <ScrollReveal direction="up" delay={0.15} distance={20} className="flex items-center justify-center gap-3 sm:gap-4 mb-10 overflow-x-auto py-2">
          {items.map((item, idx) => (
            <TestimonialAvatar
              key={item.id}
              name={item.name}
              avatar={item.avatar}
              isActive={activeIdx === idx}
              onClick={() => setActiveIdx(idx)}
            />
          ))}
        </ScrollReveal>

        {/* Selected Testimonial Quote with AnimatePresence */}
        <div className="min-h-[160px] flex flex-col items-center justify-center mb-8">
          <RatingStars rating={current.rating || 5} className="mb-4" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Text
                variant="body"
                className="text-base sm:text-lg md:text-xl text-sand-800 font-light leading-relaxed max-w-2xl mx-auto italic font-serif"
              >
                "{current.quote}"
              </Text>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Client Attribution */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`attr-${current.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pt-4 border-t border-sand-200/60 max-w-xs mx-auto"
          >
            <p className="font-display text-xs sm:text-sm tracking-widest uppercase text-sand-950 font-medium mb-1">
              {current.name}
            </p>
            <p className="text-[11px] font-display tracking-wider uppercase text-sand-600">
              {current.role} &bull; {current.location}
            </p>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      location: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      rating: PropTypes.number,
    })
  ).isRequired,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
};

Testimonials.defaultProps = {
  items: [],
  eyebrow: 'Testimonials',
  heading: 'TRUSTED BY VISIONARY LEADERS',
};
