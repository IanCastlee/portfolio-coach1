import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export function Link({
  children,
  to,
  href,
  className = '',
  ariaLabel,
}) {
  const baseClasses =
    'transition-colors duration-200 text-sand-900 hover:text-sand-600 focus-visible:outline-2 focus-visible:outline-offset-2';

  if (to) {
    return (
      <RouterLink to={to} className={`${baseClasses} ${className}`} aria-label={ariaLabel}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Link.defaultProps = {
  to: undefined,
  href: undefined,
  className: '',
  ariaLabel: undefined,
};
