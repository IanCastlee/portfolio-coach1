import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Button } from '../atoms/Button.jsx';
import { Icon } from '../atoms/Icon.jsx';

export function CTASection({
  eyebrow = 'Your Next Threshold',
  heading = 'ARE YOU READY TO EMBODY QUIET MASTERY?',
  description = 'Step away from the frantic noise of default living. Schedule your private discovery conversation with Aurelia Thorne to clarify your path forward.',
  buttonText = 'BOOK DISCOVERY CALL',
  buttonLink = '/contact',
}) {
  return (
    <section className="py-20 md:py-28 bg-sand-100/80 border-t border-sand-200 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-sand-400 mb-4 flex justify-center">
          <Icon name="Flower" size={48} />
        </div>
        <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
          {eyebrow}
        </span>
        <Heading
          level={2}
          className="text-2xl sm:text-4xl md:text-5xl uppercase tracking-widest text-sand-950 mb-6 font-light max-w-2xl mx-auto leading-tight"
        >
          {heading}
        </Heading>
        <Text
          variant="lead"
          className="text-sand-700/90 text-sm sm:text-base font-light mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {description}
        </Text>
        <Button to={buttonLink} variant="primary" size="lg">
          {buttonText}
        </Button>
      </div>
    </section>
  );
}

CTASection.propTypes = {
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

CTASection.defaultProps = {
  eyebrow: 'Your Next Threshold',
  heading: 'ARE YOU READY TO EMBODY QUIET MASTERY?',
  description: 'Step away from the frantic noise of default living. Schedule your private discovery conversation with Aurelia Thorne to clarify your path forward.',
  buttonText: 'BOOK DISCOVERY CALL',
  buttonLink: '/contact',
};
