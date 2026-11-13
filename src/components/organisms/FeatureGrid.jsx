import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function FeatureGrid({
  pillars = [],
}) {
  return (
    <section className="bg-sand-100/70 border-y border-sand-200/80 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-sand-300/60">
          {pillars.map((item, idx) => (
            <ScrollReveal
              key={item.id || idx}
              direction="up"
              delay={idx * 0.15}
              duration={0.7}
              className={`flex flex-col justify-between text-center px-4 sm:px-6 ${
                idx > 0 ? 'pt-8 md:pt-0' : ''
              }`}
            >
              <div>
                <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase block mb-2">
                  Pillar {item.number}
                </span>
                <Heading
                  level={3}
                  className="text-xl sm:text-2xl font-light uppercase tracking-widest text-sand-900 mb-3"
                >
                  {item.title}
                </Heading>
                <Text
                  variant="body"
                  className="text-sand-700/90 text-sm font-light leading-relaxed mb-6 max-w-sm mx-auto"
                >
                  {item.description}
                </Text>
              </div>

              <div>
                <Link
                  to={item.link}
                  className="inline-block font-display text-xs tracking-ultra uppercase text-sand-800 hover:text-sand-500 border-b border-sand-400 hover:border-sand-700 pb-1 transition-all"
                >
                  {item.actionText} &rarr;
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

FeatureGrid.propTypes = {
  pillars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      actionText: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

FeatureGrid.defaultProps = {
  pillars: [],
};
