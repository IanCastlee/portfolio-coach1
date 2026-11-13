import React from 'react';
import PropTypes from 'prop-types';
import { ChevronDown } from 'lucide-react';

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  className = '',
}) {
  return (
    <div className={`border-b border-sand-300 py-4 transition-colors ${className}`}>
      <button
        type="button"
        id={`faq-btn-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 group focus-visible:outline-none"
      >
        <span className="font-display text-xs sm:text-sm tracking-widest uppercase text-sand-900 group-hover:text-sand-600 transition-colors pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-sand-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {isOpen && (
        <div
          id={`faq-panel-${id}`}
          role="region"
          aria-labelledby={`faq-btn-${id}`}
          className="pt-2 pb-3 text-sm text-sand-700/90 font-light leading-relaxed animate-fadeIn"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

AccordionItem.defaultProps = {
  className: '',
};
