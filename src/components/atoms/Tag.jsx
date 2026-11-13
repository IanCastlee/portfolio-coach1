import React from 'react';
import PropTypes from 'prop-types';

export function Tag({
  children,
  className = '',
}) {
  return (
    <span
      className={`inline-block text-[10px] uppercase font-display tracking-ultra text-sand-600 bg-sand-200/50 px-2.5 py-1 ${className}`}
    >
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Tag.defaultProps = {
  className: '',
};
