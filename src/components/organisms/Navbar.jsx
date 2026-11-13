import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../atoms/Icon.jsx';
import { Button } from '../atoms/Button.jsx';
import { NavLink } from '../molecules/NavLink.jsx';

export function Navbar({
  brandName = 'AURELIA',
  navLinks = [],
  cta = { label: 'SAY HELLO', path: '/contact' },
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur-md shadow-xs py-3 border-b border-sand-200/60'
          : 'bg-sand-50/80 backdrop-blur-xs py-5 border-b border-sand-200/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo with Botanical Flower */}
          <Link
            to="/"
            className="flex items-center gap-2 group text-sand-950 focus-visible:outline-2 focus-visible:outline-offset-2"
            aria-label={`${brandName} - Return to Homepage`}
          >
            <span className="text-sand-700 group-hover:text-sand-900 transition-colors">
              <Icon name="Flower" size={26} />
            </span>
            <span className="font-display text-xl sm:text-2xl tracking-[0.25em] uppercase font-light text-sand-950">
              {brandName}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} label={link.label} />
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:block">
            <Button
              to={cta.path}
              variant="outline"
              size="sm"
              className="text-[11px] tracking-ultra py-2 px-5"
            >
              {cta.label}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-sand-900 hover:text-sand-700 focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden bg-sand-50 border-b border-sand-200 px-6 py-8 space-y-6 animate-fadeIn shadow-lg"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                label={link.label}
                className="text-base py-2"
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
          <div className="pt-4 border-t border-sand-200">
            <Button
              to={cta.path}
              variant="primary"
              size="md"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {cta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  cta: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  brandName: 'AURELIA',
  navLinks: [],
  cta: { label: 'SAY HELLO', path: '/contact' },
};
