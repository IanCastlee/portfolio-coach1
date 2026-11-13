import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from 'lucide-react';

export function Icon({
  name,
  size = 20,
  className = '',
  color,
}) {
  if (name === 'Flower' || name === 'Botanical') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className={className}
      >
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <path d="M50 45 C44 28, 30 24, 38 12 C47 2, 53 2, 62 12 C70 24, 56 28, 50 45 Z" />
        <path d="M54 48 C70 42, 78 30, 89 40 C98 50, 96 58, 85 65 C71 70, 60 56, 54 48 Z" />
        <path d="M52 54 C60 70, 60 82, 48 91 C38 98, 30 92, 28 80 C26 66, 42 60, 52 54 Z" />
        <path d="M47 53 C33 63, 20 68, 12 56 C5 46, 8 36, 21 32 C34 28, 41 45, 47 53 Z" />
        <path d="M46 47 C36 34, 25 35, 23 20 C22 8, 32 6, 43 14 C50 20, 48 38, 46 47 Z" />
      </svg>
    );
  }

  const Component = Icons[name] || Icons.CircleHelp;

  return (
    <Component
      size={size}
      className={className}
      color={color}
      strokeWidth={1.5}
    />
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 20,
  className: '',
  color: undefined,
};
