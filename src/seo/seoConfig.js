import { mockData } from '../data/mockData.js';

export const SITE_URL = 'https://eyhan.com';

export const seoConfig = {
  siteName: `${mockData.profile.name} Coaching`,
  brandName: mockData.profile.name,
  founder: `${mockData.profile.name}, ${mockData.profile.credentials}`,
  tagline: mockData.site.tagline,
  defaultTitle: `${mockData.profile.name} | Mindful Leadership & Transformational Life Coaching Sorsogon Philippines`,
  defaultDescription: `Private 1-on-1 transformational life and mindful leadership coaching with ${mockData.profile.name} in Sorsogon, Philippines. Cultivate purposeful direction, emotional resilience, and sustainable clarity.`,
  keywords: `mindful life coach Sorsogon, life coaching Philippines, executive coaching Sorsogon Bicol, transformational life coach ${mockData.profile.name}, personal growth mentor Sorsogon`,
  defaultImage: `${SITE_URL}/og-image.jpg`,
  locale: 'en_PH',
  twitterHandle: '@eyhancoach',
  contact: {
    telephone: mockData.contact.phones[0]?.value || '+63 917 845 2291',
    email: mockData.profile.email,
    streetAddress: mockData.contact.address.line1,
    addressLocality: mockData.contact.address.city,
    addressRegion: mockData.contact.address.province,
    postalCode: mockData.contact.address.postalCode,
    addressCountry: mockData.contact.address.country,
    priceRange: '₱₱₱',
    openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-15:00',
    geo: {
      latitude: '12.9742',
      longitude: '124.0058',
    },
  },
  sameAs: mockData.socialLinks.map((s) => s.url),
};
