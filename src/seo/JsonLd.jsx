import React from 'react';
import PropTypes from 'prop-types';
import { Head } from 'vite-react-ssg';
import { SITE_URL, seoConfig } from './seoConfig.js';

export function JsonLd({
  breadcrumbs,
  faqItems,
  article,
  service,
}) {
  const schemas = [];

  // 1. Primary Organization & ProfessionalService (LocalBusiness) Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: seoConfig.siteName,
    alternateName: seoConfig.brandName,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    description: seoConfig.defaultDescription,
    telephone: seoConfig.contact.telephone,
    email: seoConfig.contact.email,
    priceRange: seoConfig.contact.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.contact.streetAddress,
      addressLocality: seoConfig.contact.addressLocality,
      addressRegion: seoConfig.contact.addressRegion,
      postalCode: seoConfig.contact.postalCode,
      addressCountry: seoConfig.contact.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.contact.geo.latitude,
      longitude: seoConfig.contact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '15:00',
      },
    ],
    sameAs: seoConfig.sameAs,
  };
  schemas.push(organizationSchema);

  // 2. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path.startsWith('http') ? crumb.path : `${SITE_URL}${crumb.path}`,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  // 3. FAQPage Schema
  if (faqItems && faqItems.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };
    schemas.push(faqSchema);
  }

  // 4. Article Schema
  if (article) {
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: article.title,
      description: article.excerpt,
      image: article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`,
      datePublished: article.datePublished,
      dateModified: article.dateModified || article.datePublished,
      author: {
        '@type': 'Person',
        name: article.author || seoConfig.founder,
        url: `${SITE_URL}/about`,
      },
      publisher: {
        '@type': 'Organization',
        name: seoConfig.siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/favicon.svg`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/journal/${article.slug}`,
      },
    };
    schemas.push(articleSchema);
  }

  // 5. Service Schema
  if (service) {
    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: 'Philippines, International',
      offers: {
        '@type': 'Offer',
        price: service.priceNumeric,
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
      },
    };
    schemas.push(serviceSchema);
  }

  return (
    <Head>
      {schemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}

JsonLd.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  faqItems: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    dateModified: PropTypes.string,
    author: PropTypes.string,
    slug: PropTypes.string.isRequired,
  }),
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    priceNumeric: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

JsonLd.defaultProps = {
  breadcrumbs: null,
  faqItems: null,
  article: null,
  service: null,
};
