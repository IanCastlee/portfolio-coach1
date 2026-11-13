import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Button } from '../components/atoms/Button.jsx';
import { Image } from '../components/atoms/Image.jsx';
import { Icon } from '../components/atoms/Icon.jsx';
import { Testimonials } from '../components/organisms/Testimonials.jsx';
import { CTASection } from '../components/organisms/CTASection.jsx';
import { mockData } from '../data/mockData.js';

export function About() {
  const { profile, testimonials } = mockData;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <SEO
        title={`About ${profile.name} | Mindful Leadership & Life Coach ${profile.location}`}
        description={`Learn about ${profile.name}, ${profile.credentials}. 12+ years of guiding visionary leaders and high achievers toward purpose, emotional equilibrium, and authentic impact in ${profile.location}.`}
        path="/about"
        keywords={`about ${profile.name}, life coach background Sorsogon, ICF PCC coach Philippines, holistic leadership mentor ${profile.location}`}
      />

      <JsonLd breadcrumbs={breadcrumbs} />

      {/* About Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-sand-100/60 border-b border-sand-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
            The Philosophy & Journey
          </span>
          <Heading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.15em] text-sand-950 mb-6"
          >
            MEET {profile.displayName}
          </Heading>
          <Text
            variant="lead"
            className="text-sand-700 max-w-2xl mx-auto font-light leading-relaxed text-base sm:text-lg"
          >
            {profile.quote}
          </Text>
        </div>
      </section>

      {/* Bio and Narrative Article */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Portrait & Credentials card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="aspect-[4/5] overflow-hidden rounded-xs bg-sand-200 shadow-md">
                <Image
                  src={profile.images.heroMain}
                  alt={`${profile.name} - ${profile.credentials}`}
                  width={600}
                  height={750}
                  priority={true}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-sand-100/80 border border-sand-200 p-6 sm:p-8 space-y-4">
                <Heading level={3} className="text-base uppercase tracking-widest text-sand-900 border-b border-sand-300 pb-3">
                  ACCREDITATIONS & MASTERY
                </Heading>
                <ul className="space-y-3 text-xs sm:text-sm text-sand-800 font-light">
                  <li className="flex items-center gap-2">
                    <span className="text-sand-600"><Icon name="Award" size={16} /></span>
                    <span>Professional Certified Coach (PCC), ICF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sand-600"><Icon name="BookOpen" size={16} /></span>
                    <span>Master of Arts in Applied Psychology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sand-600"><Icon name="Heart" size={16} /></span>
                    <span>Certified Somatic Experiencing Practitioner (SEP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sand-600"><Icon name="Compass" size={16} /></span>
                    <span>12+ Years Advisory across Southeast Asia & Philippines</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: In-depth Longform Story (350+ Words) */}
            <div className="lg:col-span-7 space-y-6 text-sand-800/90 font-light text-base leading-relaxed">
              <span className="font-serif italic text-sand-600 text-lg block">
                From Acceleration to Grounded Alignment
              </span>
              <Heading level={2} className="text-2xl sm:text-3xl uppercase tracking-widest text-sand-950 font-normal">
                THE COURAGE TO CHOOSE DEPTH OVER VELOCITY
              </Heading>

              <p>
                Before founding this private coaching practice in {profile.location}, I spent nearly a decade in high-octane corporate strategy and organizational development. On paper, every marker was checked: titles, executive accolades, international travel, and measurable impact. Yet in the quiet spaces between boardroom flights and late-night deliverables, I recognized a persistent, insidious hum of exhaustion.
              </p>

              <p>
                Like so many leaders I now mentor across {profile.location} and beyond, I had fallen into the trap of confusing perpetual motion with purposeful existence. I believed that if I could only execute faster, optimize better, and sleep less, peace would magically wait at the next milestone. It never did.
              </p>

              <p>
                True transformation required a courageous unravelling. I stepped away to complete rigorous graduate training in Applied Psychology, immersed myself in somatic nervous system regulation, and earned credentials with the International Coaching Federation. What emerged was a conviction that high performance without deep presence is merely disguised burnout.
              </p>

              <blockquote className="border-l-2 border-sand-400 pl-6 my-8 italic font-serif text-sand-900 text-lg sm:text-xl">
                "Our practice is built on a quiet tenet: You do not need to be fixed, because you are not broken. You simply need the spaciousness to hear your own wisdom above the roar of external expectation."
              </blockquote>

              <p>
                Today, from my serene sanctuary studio in {profile.location}, I partner with senior executives, startup founders, creative visionaries, and individuals navigating major life thresholds. My containers are deliberate, confidential, and deeply individualized. We bridge analytical rigor with somatic awareness, ensuring that the changes you cultivate are not fleeting intellectual epiphanies, but durable, embodied realities that transform your life from the core.
              </p>

              <div className="pt-6">
                <Button to="/services" variant="primary" size="md">
                  EXPLORE COACHING CONTAINERS
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-24 bg-sand-100/60 border-t border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-serif italic text-sand-600 text-lg block mb-1">
              Our Methodology
            </span>
            <Heading level={2} className="text-3xl uppercase tracking-widest text-sand-950">
              THE 4-PILLAR TRANSFORMATION FRAMEWORK
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sanctuary', desc: 'Creating confidential safety where your nervous system can down-regulate from urgency.' },
              { step: '02', title: 'Excavation', desc: 'Dismantling inherited beliefs, hidden scripts, and fear-based behavioral patterns.' },
              { step: '03', title: 'Architecture', desc: 'Designing intentional daily rituals, energetic boundaries, and decisive milestones.' },
              { step: '04', title: 'Integration', desc: 'Embodying quiet sovereignty and lasting equilibrium during life turbulence.' },
            ].map((p) => (
              <div key={p.step} className="bg-sand-50 border border-sand-200 p-8 text-center flex flex-col justify-between">
                <div>
                  <span className="font-display text-xs tracking-ultra text-sand-500 uppercase block mb-3">
                    Stage {p.step}
                  </span>
                  <Heading level={3} className="text-lg uppercase tracking-wider text-sand-900 mb-3">
                    {p.title}
                  </Heading>
                  <Text variant="body" className="text-xs sm:text-sm text-sand-700 font-light leading-relaxed">
                    {p.desc}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        items={testimonials}
        eyebrow="Client Experiences"
        heading="WORDS OF RECOLLECTION & MASTERY"
      />

      {/* CTA */}
      <CTASection
        eyebrow="A Sacred Container"
        heading="BEGIN YOUR 1-ON-1 TRANSFORMATION"
        description={`Book your complimentary 25-minute consultation with ${profile.name} to explore chemistry and container availability.`}
        buttonText="SCHEDULE CONSULTATION"
        buttonLink="/contact"
      />
    </>
  );
}

export default About;
