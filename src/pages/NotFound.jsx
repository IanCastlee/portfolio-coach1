import React from 'react';
import { SEO } from '../seo/SEO.jsx';
import { Heading } from '../components/atoms/Heading.jsx';
import { Text } from '../components/atoms/Text.jsx';
import { Button } from '../components/atoms/Button.jsx';
import { Icon } from '../components/atoms/Icon.jsx';

export function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for does not exist or has been relocated."
        path="/404"
        noindex={true}
      />

      <section className="py-24 sm:py-36 bg-sand-50 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-sand-400 mb-6 flex justify-center">
            <Icon name="Flower" size={64} />
          </div>
          <span className="font-serif italic text-sand-600 text-xl block mb-2">
            A Momentary Pause
          </span>
          <Heading
            level={1}
            className="text-4xl sm:text-6xl uppercase tracking-[0.2em] text-sand-950 mb-4"
          >
            404 &mdash; PAGE NOT FOUND
          </Heading>
          <Text
            variant="lead"
            className="text-sand-700 font-light mb-8 max-w-md mx-auto text-sm sm:text-base leading-relaxed"
          >
            The reflection or pathway you are seeking appears to have moved or does not exist. Let us return you to the sanctuary.
          </Text>
          <Button to="/" variant="primary" size="md">
            RETURN TO HOMEPAGE
          </Button>
        </div>
      </section>
    </>
  );
}

export default NotFound;
