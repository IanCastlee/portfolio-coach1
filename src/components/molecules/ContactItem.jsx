import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../atoms/Icon.jsx';
import { Text } from '../atoms/Text.jsx';

export function ContactItem({
  iconName,
  label,
  value,
  href,
  className = '',
}) {
  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sand-200/50 flex items-center justify-center text-sand-800">
        <Icon name={iconName} size={18} />
      </div>
      <div>
        <Text variant="eyebrow" className="mb-1 text-sand-600">
          {label}
        </Text>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-sm font-light text-sand-900 hover:text-sand-600 transition-colors block"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-light text-sand-900 leading-relaxed">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
};

ContactItem.defaultProps = {
  href: undefined,
  className: '',
};
