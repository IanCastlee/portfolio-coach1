import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Button } from '../components/atoms/Button.jsx';
import { Image } from '../components/atoms/Image.jsx';
import { FAQ } from '../components/organisms/FAQ.jsx';
import { CTASection } from '../components/organisms/CTASection.jsx';
import { mockData } from '../data/mockData.js';

export function Services() {
  const { profile, services, faqs } = mockData;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ];

  return (
    <>
      <SEO
        title={`Coaching Services & Private Programs | ${profile.name} ${profile.location}`}
        description={`Explore 1-on-1 private coaching pathways with ${profile.name}: Transformational Life Coaching, Mindful Leadership Mentorship, Career Pivot Clarity, and Somatic Breathwork.`}
        path="/services"
        keywords={`life coaching packages ${profile.location}, executive mentorship rates Philippines, career transition coaching Sorsogon, breathwork coaching`}
      />

      <JsonLd breadcrumbs={breadcrumbs} />

      {/* Services Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-sand-100/60 border-b border-sand-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
            Curated 1-on-1 Containers
          </span>
          <Heading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.15em] text-sand-950 mb-6"
          >
            COACHING PATHWAYS
          </Heading>
          <Text
            variant="lead"
            className="text-sand-700 max-w-2xl mx-auto font-light leading-relaxed text-base sm:text-lg"
          >
            Deliberate, confidential containers designed to support visionary individuals at pivotal crossroads of purpose, leadership, and personal sovereignty.
          </Text>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((svc, index) => (
            <article
              key={svc.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-sand-100/40 border border-sand-200 p-6 sm:p-10 lg:p-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo */}
              <div
                className={`lg:col-span-5 ${
                  index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-xs bg-sand-200">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    width={700}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Information */}
              <div
                className={`lg:col-span-7 flex flex-col justify-between ${
                  index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase">
                      {svc.category}
                    </span>
                    <span className="text-sand-300">&bull;</span>
                    <span className="font-display text-[10px] tracking-widest text-sand-700 uppercase font-medium">
                      {svc.duration}
                    </span>
                  </div>

                  <Heading
                    level={2}
                    className="text-2xl sm:text-3xl uppercase tracking-wider text-sand-950 mb-3"
                  >
                    <Link to={`/services/${svc.slug}`} className="hover:text-sand-600 transition-colors">
                      {svc.title}
                    </Link>
                  </Heading>

                  <p className="font-serif italic text-sand-600 text-sm sm:text-base mb-4">
                    {svc.tagline}
                  </p>

                  <Text
                    variant="body"
                    className="text-sand-800 text-sm font-light leading-relaxed mb-6"
                  >
                    {svc.summary}
                  </Text>
                </div>

                <div className="pt-6 border-t border-sand-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-display tracking-widest text-sand-500 block">
                      Investment
                    </span>
                    <span className="font-display text-base tracking-wider text-sand-950 font-medium">
                      {svc.price}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button to={`/services/${svc.slug}`} variant="outline" size="sm">
                      VIEW FULL CURRICULUM
                    </Button>
                    <Button to="/contact" variant="primary" size="sm">
                      APPLY NOW
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        image={profile.images.aboutNature}
        heading="COACHING INQUIRIES"
        quote="Every engagement is tailored to your unique psychological terrain, professional context, and deepest aspirations."
      />

      {/* CTA */}
      <CTASection
        eyebrow="Unsure Which Fits?"
        heading="LET US CO-CREATE YOUR ROADMAP"
        description={`Book a 25-minute discovery consultation with ${profile.name}. We will assess your current inflection point and recommend the most effective container.`}
        buttonText="SCHEDULE DISCOVERY CALL"
        buttonLink="/contact"
      />
    </>
  );
}

export default Services;
