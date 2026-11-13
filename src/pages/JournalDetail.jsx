import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../seo/SEO.jsx';
import { JsonLd } from '../seo/JsonLd.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Image } from '../components/atoms/Image.jsx';
import { Icon } from '../components/atoms/Icon.jsx';
import { mockData } from '../data/mockData.js';

export function JournalDetail() {
  const { profile, journal } = mockData;
  const { slug } = useParams();
  const post = journal.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/journal" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Journal', path: '/journal' },
    { name: post.title, path: `/journal/${post.slug}` },
  ];

  const relatedPosts = journal.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <SEO
        title={`${post.title} | The Sanctuary Journal by ${profile.name}`}
        description={post.excerpt}
        path={`/journal/${post.slug}`}
        image={post.image}
        type="article"
        keywords={`${post.category}, mindful living essay, ${profile.name} ${profile.location}, personal growth`}
      />

      <JsonLd
        breadcrumbs={breadcrumbs}
        article={{
          title: post.title,
          excerpt: post.excerpt,
          image: post.image,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: post.author,
          slug: post.slug,
        }}
      />

      {/* Article Header */}
      <header className="pt-12 pb-14 md:pt-16 md:pb-20 bg-sand-100/60 border-b border-sand-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-4">
            <Link
              to="/journal"
              className="text-xs uppercase tracking-widest text-sand-600 hover:text-sand-900 inline-flex items-center gap-1 font-display transition-colors"
            >
              &larr; Back to all reflections
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-display uppercase tracking-ultra text-sand-500 mb-3">
            <span>{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <Heading
            level={1}
            className="text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider text-sand-950 mb-4 leading-tight"
          >
            {post.title}
          </Heading>

          <p className="font-serif italic text-sand-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {post.subtitle}
          </p>
        </div>
      </header>

      {/* Main Reading Container */}
      <article className="py-14 md:py-20 bg-sand-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Featured Image */}
          <div className="aspect-[16/9] overflow-hidden rounded-xs bg-sand-200 mb-12 shadow-sm">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              priority={true}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Longform Text (300+ words) */}
          <div className="space-y-6 text-sand-800 font-light text-base sm:text-lg leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways Callout Card */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="my-12 bg-sand-100/90 border border-sand-300 p-8 sm:p-10">
              <span className="font-display text-xs uppercase tracking-ultra text-sand-600 block mb-2">
                Core Integrations
              </span>
              <Heading level={3} className="text-xl uppercase tracking-widest text-sand-950 mb-4">
                KEY INQUIRIES & TAKEAWAYS
              </Heading>
              <ul className="space-y-3">
                {post.takeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-sand-800 font-light">
                    <span className="text-sand-600 mt-1 flex-shrink-0">
                      <Icon name="Flower" size={16} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Author Bio Snippet Card */}
          <div className="mt-14 pt-8 border-t border-sand-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-sand-100/50 p-6 sm:p-8">
            <img
              src={profile.images.heroMain}
              alt={post.author}
              width={96}
              height={96}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover grayscale-[20%]"
            />
            <div className="text-center sm:text-left flex-1">
              <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase block mb-1">
                Written By
              </span>
              <p className="font-display text-base uppercase tracking-widest text-sand-950 font-medium mb-1">
                {post.author}
              </p>
              <p className="text-xs text-sand-700 font-light leading-relaxed mb-4">
                {profile.bioShort} Private coaching sanctuary based in {profile.fullAddress}.
              </p>
              <Link
                to="/about"
                className="font-display text-xs tracking-widest uppercase text-sand-900 hover:text-sand-600 border-b border-sand-400 pb-0.5"
              >
                Learn More About {profile.name} &rarr;
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-12 border-t border-sand-200">
            <span className="font-serif italic text-sand-600 text-base block mb-1">
              Continue Reading
            </span>
            <Heading level={2} className="text-2xl uppercase tracking-widest text-sand-950 mb-8">
              FURTHER ESSAYS FOR REFLECTION
            </Heading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div key={rel.slug} className="group border border-sand-200 p-6 bg-white/40">
                  <span className="font-display text-[10px] tracking-ultra text-sand-500 uppercase block mb-2">
                    {rel.category}
                  </span>
                  <Heading level={3} className="text-base uppercase tracking-wider text-sand-950 group-hover:text-sand-600 transition-colors mb-2 leading-snug">
                    <Link to={`/journal/${rel.slug}`}>{rel.title}</Link>
                  </Heading>
                  <p className="text-xs text-sand-700 font-light line-clamp-2 mb-4">
                    {rel.excerpt}
                  </p>
                  <Link
                    to={`/journal/${rel.slug}`}
                    className="font-display text-[11px] tracking-widest uppercase text-sand-900 hover:text-sand-600 inline-block border-b border-sand-300"
                  >
                    Read &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
}

export default JournalDetail;
