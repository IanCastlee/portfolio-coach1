import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  ariaLabel,
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-display tracking-widest uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-sand-900 text-sand-50 hover:bg-sand-800 border border-sand-900 shadow-sm active:scale-[0.99]',
    outline:
      'bg-transparent text-sand-900 border border-sand-900 hover:bg-sand-900 hover:text-sand-50 active:scale-[0.99]',
    light:
      'bg-sand-50 text-sand-900 border border-sand-200 hover:bg-sand-100 hover:border-sand-300 shadow-sm',
    accent:
      'bg-sand-600 text-sand-50 hover:bg-sand-700 border border-sand-600 shadow-sm',
    text:
      'bg-transparent text-sand-900 hover:text-sand-600 border-b border-sand-900 hover:border-sand-600 p-0 rounded-none tracking-widest uppercase',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 text-[10px]',
    md: 'text-xs px-6 py-3 tracking-widest',
    lg: 'text-sm px-8 py-4 tracking-ultra',
  };

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${
    variant === 'text' ? '' : sizes[size] || sizes.md
  } ${className}`;

  if (to) {
    return (
      <RouterLink to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </RouterLink>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'outline', 'light', 'accent', 'text']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Button.defaultProps = {
  to: undefined,
  href: undefined,
  variant: 'primary',
  size: 'md',
  type: 'button',
  onClick: undefined,
  disabled: false,
  className: '',
  ariaLabel: undefined,
};
