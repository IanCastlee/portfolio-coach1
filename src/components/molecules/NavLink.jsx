import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterNavLink } from 'react-router-dom';

export function NavLink({
  to,
  label,
  onClick,
  className = '',
}) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `font-display text-xs tracking-ultra uppercase transition-all duration-300 py-1 border-b ${
          isActive
            ? 'text-sand-950 border-sand-900 font-medium'
            : 'text-sand-700 hover:text-sand-950 border-transparent hover:border-sand-400'
        } ${className}`
      }
    >
      {label}
    </RouterNavLink>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

NavLink.defaultProps = {
  onClick: undefined,
  className: '',
};
