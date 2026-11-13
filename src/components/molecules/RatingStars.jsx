import React from 'react';
import PropTypes from 'prop-types';
import { Star } from 'lucide-react';

export function RatingStars({
  rating = 5,
  max = 5,
  size = 14,
  className = '',
}) {
  return (
    <div
      className={`inline-flex items-center gap-1 text-sand-700 ${className}`}
      aria-label={`Rated ${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={
            i < rating
              ? 'fill-sand-600 text-sand-600'
              : 'fill-sand-200 text-sand-300'
          }
        />
      ))}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
};

RatingStars.defaultProps = {
  rating: 5,
  max: 5,
  size: 14,
  className: '',
};
