import React from 'react';
import PropTypes from 'prop-types';

export function Text({
  children,
  variant = 'body',
  as = 'p',
  className = '',
}) {
  const Component = as;

  const variants = {
    lead: 'text-lg sm:text-xl text-sand-800 font-light leading-relaxed',
    body: 'text-sm sm:text-base text-sand-800/90 font-light leading-relaxed',
    small: 'text-xs sm:text-sm text-sand-700/80 leading-normal',
    muted: 'text-xs text-sand-600 leading-normal',
    italic: 'text-sm sm:text-base italic text-sand-800 font-display font-light leading-relaxed',
    eyebrow: 'text-xs tracking-ultra uppercase text-sand-600 font-display font-medium',
  };

  return (
    <Component className={`${variants[variant] || variants.body} ${className}`}>
      {children}
    </Component>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['lead', 'body', 'small', 'muted', 'italic', 'eyebrow']),
  as: PropTypes.string,
  className: PropTypes.string,
};

Text.defaultProps = {
  variant: 'body',
  as: 'p',
  className: '',
};
