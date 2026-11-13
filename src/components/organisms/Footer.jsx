import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '../atoms/Icon.jsx';
import { SocialLinks } from '../molecules/SocialLinks.jsx';

export function Footer({
  brandName = 'AURELIA',
  fullName = 'Aurelia Thorne Coaching',
  socialLinks = [],
  contactInfo,
}) {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#7F6E5E] text-sand-50 pt-16 pb-12 relative border-t border-[#726253]">
      
      {/* Scroll to Top floating button (matching screenshot round up arrow) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="absolute -top-5 right-6 sm:right-12 w-10 h-10 rounded-full bg-[#9E8B7A] hover:bg-[#8D7B6A] text-sand-50 flex items-center justify-center shadow-md transition-all focus-visible:outline-none cursor-pointer"
      >
        <Icon name="ArrowUp" size={18} />
      </button>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Botanical Flower Emblem (matching screenshot) */}
        <div className="flex justify-center mb-6 text-sand-200">
          <Icon name="Flower" size={54} />
        </div>

        {/* Social Icons row (matching screenshot) */}
        <div className="flex justify-center mb-8">
          <SocialLinks
            links={socialLinks}
            size={18}
            className="text-sand-100 hover:text-white"
          />
        </div>

        {/* Footer Navigation Links */}
        <nav
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs tracking-ultra uppercase font-display text-sand-200 mb-8"
          aria-label="Footer Navigation"
        >
          <Link to="/" className="hover:text-white transition-colors">HOME</Link>
          <span className="text-sand-400">|</span>
          <Link to="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <span className="text-sand-400">|</span>
          <Link to="/services" className="hover:text-white transition-colors">SERVICES</Link>
          <span className="text-sand-400">|</span>
          <Link to="/journal" className="hover:text-white transition-colors">JOURNAL</Link>
          <span className="text-sand-400">|</span>
          <Link to="/contact" className="hover:text-white transition-colors">CONTACT</Link>
        </nav>

        {/* Semantic Address for Local SEO */}
        {contactInfo && (
          <address className="not-italic text-xs text-sand-300/80 font-light leading-relaxed max-w-xl mx-auto mb-6 pb-6 border-b border-sand-400/30">
            <span className="font-medium text-sand-100 block mb-1">
              {fullName} &bull; Private Practice Studio
            </span>
            <span>
              {contactInfo.address.displayFull}
            </span>
            <span className="block mt-1">
              Direct: <a href={contactInfo.phones[0]?.href} className="underline hover:text-white">{contactInfo.phones[0]?.value}</a> &bull; Email: <a href={contactInfo.emails[0]?.href} className="underline hover:text-white">{contactInfo.emails[0]?.value}</a>
            </span>
          </address>
        )}

        {/* Copyright */}
        <p className="text-[11px] font-display tracking-widest text-sand-300 uppercase">
          {brandName} &copy; {new Date().getFullYear()}. Mindful Leadership & Transformational Coaching. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

Footer.propTypes = {
  brandName: PropTypes.string,
  fullName: PropTypes.string,
  socialLinks: PropTypes.array,
  contactInfo: PropTypes.object,
};

Footer.defaultProps = {
  brandName: 'AURELIA',
  fullName: 'Aurelia Thorne Coaching',
  socialLinks: [],
  contactInfo: undefined,
};
