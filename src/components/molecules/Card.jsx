import React from 'react';
import PropTypes from 'prop-types';

export function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
}) {
  const variants = {
    default: 'bg-sand-50 border border-sand-200 p-6 md:p-8',
    subtle: 'bg-sand-100/60 border border-sand-200/80 p-6 md:p-8',
    bordered: 'bg-transparent border border-sand-300 p-6 md:p-8',
    elevated: 'bg-sand-50 border border-sand-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300',
    clean: 'p-0',
  };

  return (
    <div
      onClick={onClick}
      className={`relative ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'subtle', 'bordered', 'elevated', 'clean']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  variant: 'default',
  className: '',
  onClick: undefined,
};
