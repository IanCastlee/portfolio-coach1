import React from 'react';
import PropTypes from 'prop-types';

export function Badge({
  children,
  variant = 'neutral',
  className = '',
}) {
  const variants = {
    neutral: 'bg-sand-100 text-sand-800 border-sand-200',
    accent: 'bg-sand-900 text-sand-50 border-sand-900',
    terracotta: 'bg-terracotta-100 text-terracotta-600 border-terracotta-500/20',
    sage: 'bg-sage-100 text-sage-600 border-sage-200',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[11px] font-display tracking-widest uppercase border rounded-full ${
        variants[variant] || variants.neutral
      } ${className}`}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['neutral', 'accent', 'terracotta', 'sage']),
  className: PropTypes.string,
};

Badge.defaultProps = {
  variant: 'neutral',
  className: '',
};
