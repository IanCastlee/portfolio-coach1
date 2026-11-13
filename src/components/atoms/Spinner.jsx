import React from 'react';
import PropTypes from 'prop-types';

export function Spinner({
  size = 20,
  className = '',
  ariaLabel = 'Loading',
}) {
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`inline-block animate-spin rounded-full border-2 border-solid border-sand-300 border-t-sand-800 ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};

Spinner.defaultProps = {
  size: 20,
  className: '',
  ariaLabel: 'Loading',
};
