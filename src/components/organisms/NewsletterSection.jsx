import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Icon } from '../atoms/Icon.jsx';

export function NewsletterSection({
  heading = 'SUBSCRIBE TO MY NEWSLETTER',
  subheading = 'Receive thoughtful reflections, mindful leadership essays, and private invitations via email.',
  placeholder = 'Your Email Address',
  buttonText = 'SUBSCRIBE NOW',
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="bg-[#8A7968] text-sand-50 py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Title */}
        <Heading
          level={2}
          className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.2em] text-sand-50 mb-3 font-light font-display"
        >
          {heading}
        </Heading>

        {/* Subtitle */}
        <Text
          variant="body"
          className="text-sand-100/90 text-sm sm:text-base font-light mb-8 max-w-xl mx-auto"
        >
          {subheading}
        </Text>

        {/* Subscription Form (matching screenshot) */}
        {submitted ? (
          <div className="bg-sand-50/15 border border-sand-50/30 p-6 max-w-md mx-auto rounded-xs">
            <p className="font-display text-xs uppercase tracking-widest text-sand-100">
              Welcome to the sanctuary. Please check your inbox to confirm your subscription.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch justify-center max-w-xl mx-auto shadow-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              aria-label="Email address for newsletter"
              required
              className="w-full sm:flex-1 bg-white text-sand-950 px-5 py-3.5 text-xs sm:text-sm placeholder:text-sand-400 focus:outline-none focus:ring-1 focus:ring-sand-900 border-none rounded-none"
            />
            <button
              type="submit"
              className="bg-[#2B2724] hover:bg-[#1E1B18] text-sand-50 font-display text-xs uppercase tracking-ultra px-8 py-3.5 transition-colors focus-visible:outline-none cursor-pointer"
            >
              {buttonText}
            </button>
          </form>
        )}

        {error && <p className="text-xs text-terracotta-200 mt-2">{error}</p>}

      </div>
    </section>
  );
}

NewsletterSection.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
};

NewsletterSection.defaultProps = {
  heading: 'SUBSCRIBE TO MY NEWSLETTER',
  subheading: 'Receive thoughtful reflections, mindful leadership essays, and private invitations via email.',
  placeholder: 'Your Email Address',
  buttonText: 'SUBSCRIBE NOW',
};
