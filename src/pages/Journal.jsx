import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Image } from '../components/atoms/Image.jsx';
import { CTASection } from '../components/organisms/CTASection.jsx';
import { mockData } from '../data/mockData.js';

export function Journal() {
  const { profile, journal } = mockData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(journal.map((p) => p.category))];

  const filteredPosts =
    selectedCategory === 'All'
      ? journal
      : journal.filter((p) => p.category === selectedCategory);

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/journal' },
  ];

  return (
    <>
      <SEO
        title={`The Sanctuary Journal | Mindful Leadership & Life Reflections by ${profile.name}`}
        description={`Read original essays and reflections by ${profile.name} on intentional living, conscious leadership, emotional resilience, and overcoming imposter syndrome.`}
        path="/journal"
        keywords={`mindful living blog ${profile.location}, executive leadership essays, overcoming burnout coaching, self-discovery journal, ${profile.name}`}
      />

      <JsonLd breadcrumbs={breadcrumbs} />

      {/* Header */}
      <section className="pt-14 pb-16 md:pt-20 md:pb-24 bg-sand-100/60 border-b border-sand-200 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-2">
            Reflections & Essays
          </span>
          <Heading
            level={1}
            className="text-4xl sm:text-5xl md:text-6xl uppercase tracking-[0.15em] text-sand-950 mb-6"
          >
            THE SANCTUARY JOURNAL
          </Heading>
          <Text
            variant="lead"
            className="text-sand-700 max-w-2xl mx-auto font-light leading-relaxed text-base sm:text-lg"
          >
            Contemplative perspectives by {profile.name} on intentional leadership, somatic equilibrium, and the courage to live from your authentic center.
          </Text>
        </div>
      </section>

      {/* Articles Grid with Category Filter */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-display text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-sand-900 text-sand-50 border-sand-900 shadow-xs'
                    : 'bg-transparent text-sand-700 border-sand-300 hover:border-sand-600 hover:text-sand-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col group bg-white/40 border border-sand-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <Link
                  to={`/journal/${post.slug}`}
                  className="block aspect-[16/10] overflow-hidden bg-sand-200"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-display uppercase tracking-widest text-sand-500 mb-3">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Heading
                      level={2}
                      className="text-lg sm:text-xl uppercase tracking-wider text-sand-950 group-hover:text-sand-600 transition-colors mb-3 leading-snug"
                    >
                      <Link to={`/journal/${post.slug}`}>
                        {post.title}
                      </Link>
                    </Heading>

                    <Text
                      variant="body"
                      className="text-sand-700/80 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3"
                    >
                      {post.excerpt}
                    </Text>
                  </div>

                  <div className="pt-4 border-t border-sand-200/80 flex items-center justify-between">
                    <span className="text-[11px] font-display uppercase tracking-wider text-sand-500">
                      {post.date}
                    </span>
                    <Link
                      to={`/journal/${post.slug}`}
                      className="font-display text-[11px] tracking-widest uppercase text-sand-900 group-hover:text-sand-600 border-b border-sand-300 group-hover:border-sand-900 pb-0.5 transition-colors"
                    >
                      Read Essay &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Continue The Dialogue"
        heading="SEEKING PERSONALIZED GUIDANCE?"
        description="Explore 1-on-1 private mentorship containers crafted to help you navigate your current chapter with grace and conviction."
        buttonText="EXPLORE SERVICES"
        buttonLink="/services"
      />
    </>
  );
}

export default Journal;
