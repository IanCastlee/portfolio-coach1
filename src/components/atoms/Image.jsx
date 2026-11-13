import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function Image({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  priority = false,
  className = '',
  objectFit = 'cover',
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setHasError(true)}
      className={`transition-opacity duration-500 ${
        hasError ? 'opacity-70 grayscale' : 'opacity-100'
      } ${className}`}
      style={{ objectFit }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  priority: PropTypes.bool,
  className: PropTypes.string,
  objectFit: PropTypes.string,
};

Image.defaultProps = {
  width: undefined,
  height: undefined,
  loading: 'lazy',
  priority: false,
  className: '',
  objectFit: 'cover',
};
