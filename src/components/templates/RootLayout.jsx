import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../organisms/Navbar.jsx';
import { NewsletterSection } from '../organisms/NewsletterSection.jsx';
import { Footer } from '../organisms/Footer.jsx';
import { Icon } from '../atoms/Icon.jsx';
import { ScrollProgress } from '../atoms/ScrollProgress.jsx';
import { navLinks, primaryCTA } from '../../data/navLinks.js';
import { siteInfo } from '../../data/siteInfo.js';
import { socialLinks } from '../../data/socialLinks.js';
import { contactInfo } from '../../data/contactInfo.js';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-espresso-900 selection:bg-sand-300 selection:text-espresso-950">
      
      {/* Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress color="#7E6852" height={3} />

      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-sand-900 focus:text-sand-50 focus:px-4 focus:py-2 text-xs uppercase tracking-widest"
      >
        Skip to main content
      </a>

      {/* Main Navbar */}
      <Navbar
        brandName={siteInfo.name}
        navLinks={navLinks}
        cta={primaryCTA}
      />

      {/* Dynamic Route Content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Global Newsletter & Footer */}
      <NewsletterSection
        heading={siteInfo.newsletter.heading}
        subheading={siteInfo.newsletter.subheading}
        placeholder={siteInfo.newsletter.placeholder}
        buttonText={siteInfo.newsletter.buttonText}
      />

      <Footer
        brandName={siteInfo.name}
        fullName={siteInfo.fullName}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />

      {/* Mobile Sticky Action Bar / WhatsApp Floating Button */}
      <aside
        aria-label="Direct mobile contact options"
        className="fixed bottom-4 right-4 z-40 md:hidden flex items-center gap-2"
      >
        <a
          href={contactInfo.phones[1]?.href || 'https://wa.me/639178452291'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-sand-900 text-sand-50 flex items-center justify-center shadow-lg border border-sand-700 active:scale-95 transition-transform"
        >
          <Icon name="MessageCircle" size={22} />
        </a>
      </aside>

    </div>
  );
}

export default RootLayout;
