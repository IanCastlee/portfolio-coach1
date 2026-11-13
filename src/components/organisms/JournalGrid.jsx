import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heading } from '../atoms/Heading.jsx';
import { Text } from '../atoms/Text.jsx';
import { Image } from '../atoms/Image.jsx';
import { Button } from '../atoms/Button.jsx';
import { ScrollReveal } from '../atoms/ScrollReveal.jsx';

export function JournalGrid({
  posts = [],
  eyebrow = 'My Journal',
  heading = 'LATEST REFLECTIONS',
  showViewAll = true,
  viewAllLink = '/journal',
}) {
  return (
    <section className="py-20 md:py-28 bg-sand-50 border-t border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" distance={20} className="text-center mb-14">
          <span className="font-serif italic text-sand-600 text-lg md:text-xl block mb-1">
            {eyebrow}
          </span>
          <Heading
            level={2}
            className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-widest text-sand-950"
          >
            {heading}
          </Heading>
        </ScrollReveal>

        {/* 3-Column Cards Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {posts.slice(0, 3).map((post, idx) => (
            <ScrollReveal
              key={post.slug}
              direction="up"
              delay={idx * 0.15}
              duration={0.7}
              distance={28}
              className="flex flex-col group h-full"
              as="article"
            >
              <Link
                to={`/journal/${post.slug}`}
                className="block overflow-hidden aspect-[16/10] mb-5 bg-sand-200"
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

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase block mb-2">
                    {post.category} &bull; {post.readTime}
                  </span>
                  <Heading
                    level={3}
                    className="text-lg sm:text-xl uppercase tracking-wider text-sand-950 group-hover:text-sand-600 transition-colors mb-3 line-clamp-2 leading-snug"
                  >
                    <Link to={`/journal/${post.slug}`}>
                      {post.title}
                    </Link>
                  </Heading>
                  <Text
                    variant="body"
                    className="text-sand-700/80 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-4"
                  >
                    {post.excerpt}
                  </Text>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/journal/${post.slug}`}
                    className="font-display text-[11px] tracking-widest uppercase text-sand-900 group-hover:text-sand-600 border-b border-sand-300 group-hover:border-sand-900 pb-0.5 transition-colors inline-block"
                  >
                    Read Essay &rarr;
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Posts Button */}
        {showViewAll && (
          <ScrollReveal direction="up" delay={0.3} className="text-center pt-4">
            <Button to={viewAllLink} variant="outline" size="md">
              VIEW ALL POSTS
            </Button>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
}

JournalGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
      readTime: PropTypes.string,
      excerpt: PropTypes.string.isRequired,
    })
  ).isRequired,
  eyebrow: PropTypes.string,
  heading: PropTypes.string,
  showViewAll: PropTypes.bool,
  viewAllLink: PropTypes.string,
};

JournalGrid.defaultProps = {
  posts: [],
  eyebrow: 'My Journal',
  heading: 'LATEST REFLECTIONS',
  showViewAll: true,
  viewAllLink: '/journal',
};
