import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms/Icon.jsx';

export function SocialLinks({
  links = [],
  variant = 'icon-only',
  size = 18,
  className = '',
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((item) => (
        <a
          key={item.platform}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${item.platform} profile`}
          className="text-sand-700 hover:text-sand-950 transition-colors p-1"
        >
          <Icon name={item.icon || 'Share2'} size={size} />
          {variant === 'with-label' && (
            <span className="ml-2 text-xs tracking-wider uppercase font-display">
              {item.platform}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  variant: PropTypes.oneOf(['icon-only', 'with-label']),
  size: PropTypes.number,
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  variant: 'icon-only',
  size: 18,
  className: '',
};
