import React from 'react';
import PropTypes from 'prop-types';

export function Heading({
  level = 2,
  children,
  className = '',
  as,
}) {
  const Component = as || `h${level}`;

  const styles = {
    1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide text-sand-950 font-display leading-[1.1]',
    2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-sand-900 font-display leading-[1.2]',
    3: 'text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-sand-900 font-display leading-snug',
    4: 'text-lg sm:text-xl font-normal tracking-wide text-sand-800 font-display',
    5: 'text-base font-medium tracking-widest uppercase text-sand-700 font-display',
    6: 'text-xs font-semibold tracking-ultra uppercase text-sand-600 font-display',
  };

  return (
    <Component className={`${styles[level] || styles[2]} ${className}`}>
      {children}
    </Component>
  );
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
};

Heading.defaultProps = {
  level: 2,
  className: '',
  as: undefined,
};
