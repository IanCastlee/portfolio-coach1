# E-YHAN Mindful Coaching — SEO-Friendly React Website (Atomic Design)

A production-ready, static site generated (SSG) website for **E-yhan** (**E-yhan Mindful Coaching & Mentorship**), based in **Sorsogon, Philippines**. Designed following **Atomic Design** principles, **React 18**, **Vite 6.4+**, **vite-react-ssg**, **Tailwind CSS**, and self-hosted **@fontsource** typography with built-in **Scrollytelling** and scroll-triggered animations.

Prerenders 100% real static HTML at build time with comprehensive Schema.org JSON-LD, Open Graph, Twitter Cards, XML Sitemap, and semantic Local SEO.

---

## 🚀 Quick Start

From the project directory (`C:\Users\Eyhan\.gemini\antigravity\scratch\aurelia-coaching`):

```bash
# Start development server
npm run dev

# Build Static Site Generation (prerenders all HTML routes to /dist)
npm run build

# Preview static production build
npm run preview
```

---

## 📦 Centralized `mockData` Architecture

Lahat ng mahahalagang impormasyon (Pangalan, Lokasyon, Numero, Email, Serbisyo, Testimonials, atbp.) ay nakapaloob sa isang sentralisadong file:
[`src/data/mockData.js`](file:///C:/Users/Eyhan/.gemini/antigravity/scratch/aurelia-coaching/src/data/mockData.js)

### Paano tawagin sa kahit saang component o pahina:

```javascript
import { mockData } from '../data/mockData.js';
// O kaya gamit ang destructuring mula sa barrel index:
import { mockData, profile, contactInfo, services } from '../data';

export function AnyComponent() {
  return (
    <div>
      <h1>{mockData.profile.displayName}</h1>      {/* E-YHAN */}
      <p>{mockData.profile.location}</p>         {/* Sorsogon, Philippines */}
      <a href={`mailto:${mockData.profile.email}`}>
        {mockData.profile.email}                  {/* eyhan@gmail.com */}
      </a>
      <p>{mockData.profile.phone}</p>             {/* +63 917 845 2291 */}
    </div>
  );
}
```

### Nilalaman ng `mockData`:
1. `mockData.profile`: Pangalan (`E-yhan`), display name (`E-YHAN`), titulo, bio, lokasyon (`Sorsogon, Philippines`), email (`eyhan@gmail.com`), mga larawan.
2. `mockData.contact`: Studio address sa Sorsogon City, mga telepono, WhatsApp, oras ng opisina, Google Maps embed at coordinates.
3. `mockData.site`: Brand tagline, 3 pillars of clarity, newsletter copy.
4. `mockData.navLinks`: Header at footer navigation items.
5. `mockData.services`: Listahan ng 1-on-1 coaching containers (Life coaching, leadership, career pivot, somatic breathwork).
6. `mockData.journal`: Mga sanaysay at in-depth reflections.
7. `mockData.testimonials`: Mga review mula sa mga kliyente at lider.
8. `mockData.faqs`: Accordion questions at answers.
9. `mockData.scrollytellingSteps`: 4-stage interactive narrative steps.

---

## 🏛️ Folder Structure

```
aurelia-coaching/
├── public/
│   ├── favicon.svg             # Botanical flower emblem
│   ├── robots.txt              # Generated at build time
│   └── sitemap.xml             # Generated at build time
├── scripts/
│   └── generate-sitemap.js     # Postbuild script
├── src/
│   ├── components/
│   │   ├── atoms/              # Button, Heading, Text, Image, Icon, ScrollProgress, ScrollReveal
│   │   ├── molecules/          # NavLink, Card, ContactItem, SocialLinks, FormField, SectionHeader, RatingStars, AccordionItem, TestimonialAvatar
│   │   ├── organisms/          # Navbar, Footer, Hero, FeatureGrid, AboutSnippetSection, ScrollytellingSection, ServiceHighlightSection, Testimonials, FAQ, JournalGrid, NewsletterSection, ContactSection, CTASection
│   │   └── templates/          # RootLayout with ScrollProgress & sticky WhatsApp
│   ├── pages/                  # Home, About, Services, ServiceDetail, Journal, JournalDetail, Contact, NotFound
│   ├── seo/                    # SEO.jsx, JsonLd.jsx, seoConfig.js
│   ├── data/
│   │   ├── mockData.js         # ⭐ CENTRALIZED MOCKDATA (Name, Location, Email, Number, Content)
│   │   └── index.js            # Barrel export
│   ├── styles/                 # globals.css
│   ├── routes.jsx              # Routes & dynamic getStaticPaths
│   └── main.jsx                # ViteReactSSG root entry
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📋 Mga Na-update na Detalye (Profile & Contact)

- **Name**: `E-yhan` (Display: `E-YHAN`)
- **Location**: `Sorsogon, Philippines` (Rizal Street, West District, Sorsogon City, Sorsogon 4700)
- **Email**: `eyhan@gmail.com`
- **Phone / WhatsApp**: `+63 917 845 2291`
- **Geo Coordinates**: `12.9742, 124.0058` (Sorsogon City, Philippines)
