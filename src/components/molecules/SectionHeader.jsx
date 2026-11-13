import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  level = 2,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align] || alignClasses.center} ${className}`}>
      {eyebrow && (
        <span className="font-serif italic text-base sm:text-lg md:text-xl text-sand-700 font-light mb-1.5 tracking-normal">
          {eyebrow}
        </span>
      )}
      <Heading
        level={level}
        className="uppercase tracking-widest text-sand-900 mb-4"
      >
        {title}
      </Heading>
      {description && (
        <Text
          variant="lead"
          className="text-sand-700/90 max-w-2xl font-light text-sm sm:text-base leading-relaxed"
        >
          {description}
        </Text>
      )}
    </div>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4]),
};

SectionHeader.defaultProps = {
  eyebrow: undefined,
  description: undefined,
  align: 'center',
  className: '',
  level: 2,
};
