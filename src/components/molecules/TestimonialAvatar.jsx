import React from 'react';
import PropTypes from 'prop-types';

export function TestimonialAvatar({
  name,
  avatar,
  isActive,
  onClick,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View testimonial from ${name}`}
      className={`relative rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isActive
          ? 'ring-2 ring-sand-800 scale-110 shadow-sm'
          : 'opacity-60 hover:opacity-100 hover:scale-105'
      } ${className}`}
    >
      <img
        src={avatar}
        alt={name}
        width={48}
        height={48}
        loading="lazy"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover grayscale-[30%] hover:grayscale-0 transition-all"
      />
    </button>
  );
}

TestimonialAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

TestimonialAvatar.defaultProps = {
  className: '',
};
