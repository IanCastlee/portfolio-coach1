import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Button } from '../components/atoms/Button.jsx';
import { Image } from '../components/atoms/Image.jsx';
import { Icon } from '../components/atoms/Icon.jsx';
import { CTASection } from '../components/organisms/CTASection.jsx';
import { mockData } from '../data/mockData.js';

export function ServiceDetail() {
  const { profile, services } = mockData;
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <SEO
        title={`${service.title} | ${profile.name} Coaching ${profile.location}`}
        description={service.summary}
        path={`/services/${service.slug}`}
        image={service.image}
        keywords={`${service.title} Sorsogon, ${service.category} Philippines, private coaching ${profile.location}`}
      />

      <JsonLd
        breadcrumbs={breadcrumbs}
        service={{
          title: service.title,
          description: service.description,
          priceNumeric: service.priceNumeric,
        }}
      />

      {/* Service Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-sand-100/60 border-b border-sand-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-4">
            <Link
              to="/services"
              className="text-xs uppercase tracking-widest text-sand-600 hover:text-sand-900 inline-flex items-center gap-1 font-display transition-colors"
            >
              &larr; Back to all programs
            </Link>
          </div>

          <span className="font-serif italic text-sand-600 text-base md:text-lg block mb-2">
            {service.category} &bull; {service.duration}
          </span>

          <Heading
            level={1}
            className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-sand-950 mb-4"
          >
            {service.title}
          </Heading>

          <p className="font-serif italic text-sand-700 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            {service.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-sand-200">
            <div>
              <span className="text-[10px] uppercase font-display tracking-widest text-sand-500 block">
                Container Investment
              </span>
              <span className="font-display text-lg tracking-wider text-sand-950 font-medium">
                {service.price}
              </span>
            </div>

            <Button to="/contact" variant="primary" size="md">
              APPLY FOR THIS CONTAINER
            </Button>
          </div>
        </div>
      </section>

      {/* Main Service Content */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Narrative, Curriculum & Inclusions */}
            <div className="lg:col-span-8 space-y-14">
              
              {/* Program Overview */}
              <div>
                <Heading level={2} className="text-2xl uppercase tracking-wider text-sand-950 mb-4">
                  PROGRAM OVERVIEW
                </Heading>
                <Text variant="lead" className="text-sand-800 text-base sm:text-lg leading-relaxed font-light mb-6">
                  {service.description}
                </Text>
                <Text variant="body" className="text-sand-700 text-sm leading-relaxed font-light">
                  Every 1-on-1 session is a confidential sanctuary held either in our peaceful studio in {profile.location} or across encrypted video. We don't rely on cookie-cutter templates; each engagement is tailored to your unique psychological terrain, professional context, and deepest aspirations.
                </Text>
              </div>

              {/* Who It Is For */}
              <div className="bg-sand-100/50 border border-sand-200 p-8 sm:p-10">
                <Heading level={3} className="text-xl uppercase tracking-wider text-sand-950 mb-6">
                  WHO THIS SANCTUARY IS FOR
                </Heading>
                <ul className="space-y-4">
                  {service.whoItsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-sand-800 font-light leading-relaxed">
                      <span className="flex-shrink-0 text-sand-600 mt-0.5">
                        <Icon name="Check" size={18} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Curriculum Phases */}
              <div>
                <Heading level={2} className="text-2xl uppercase tracking-wider text-sand-950 mb-8">
                  THE 4-STAGE ARCHITECTURAL JOURNEY
                </Heading>
                <div className="space-y-6">
                  {service.curriculum.map((c, idx) => (
                    <div
                      key={idx}
                      className="border border-sand-200 bg-white/60 p-6 sm:p-8"
                    >
                      <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase block mb-1">
                        {c.phase}
                      </span>
                      <Heading level={3} className="text-lg uppercase tracking-wider text-sand-900 mb-2">
                        {c.title}
                      </Heading>
                      <Text variant="body" className="text-xs sm:text-sm text-sand-700 font-light leading-relaxed">
                        {c.description}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Deliverables */}
              <div>
                <Heading level={2} className="text-2xl uppercase tracking-wider text-sand-950 mb-6">
                  CONTAINER INCLUSIONS & DELIVERABLES
                </Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.includedFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-sand-100/60 border border-sand-200/80 p-5"
                    >
                      <span className="text-sand-600 mt-1 flex-shrink-0">
                        <Icon name="Flower" size={16} />
                      </span>
                      <span className="text-xs sm:text-sm text-sand-800 font-light leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual & Application Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              <div className="aspect-[3/4] overflow-hidden rounded-xs bg-sand-200 shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-sand-100/90 border border-sand-200 p-8 space-y-6 sticky top-28">
                <Heading level={3} className="text-lg uppercase tracking-widest text-sand-950 pb-3 border-b border-sand-300">
                  PROGRAM SNAPSHOT
                </Heading>
                
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-display uppercase tracking-widest text-sand-500 block mb-1">
                      Format
                    </span>
                    <span className="text-sand-900 font-medium">
                      In-Person ({profile.location}) or Encrypted Video
                    </span>
                  </div>

                  <div>
                    <span className="font-display uppercase tracking-widest text-sand-500 block mb-1">
                      Duration
                    </span>
                    <span className="text-sand-900 font-medium">
                      {service.duration}
                    </span>
                  </div>

                  <div>
                    <span className="font-display uppercase tracking-widest text-sand-500 block mb-1">
                      Investment
                    </span>
                    <span className="text-sand-900 font-medium text-sm">
                      {service.price}
                    </span>
                  </div>

                  <div>
                    <span className="font-display uppercase tracking-widest text-sand-500 block mb-1">
                      Cohort Limit
                    </span>
                    <span className="text-sand-900 font-medium">
                      Max 6 active private clients per quarter
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-200">
                  <Button to="/contact" variant="primary" size="md" className="w-full text-center">
                    REQUEST DISCOVERY CALL
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Initiate Your Journey"
        heading={`EXPERIENCE ${service.title.toUpperCase()}`}
        description={`Book a 25-minute discovery consultation with ${profile.name} to discuss your aspirations and ensure complete container alignment.`}
        buttonText="SCHEDULE DISCOVERY CALL"
        buttonLink="/contact"
      />
    </>
  );
}

export default ServiceDetail;
