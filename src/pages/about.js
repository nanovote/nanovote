import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function AboutPage() {
  return (
      <Layout>
        <SEO
            keywords={[`nano.vote`, `nano vote`]}
            title="About"
        />

        <section className="flex flex-col md:flex-row items-center">
          <div
              className="border-gray-900 font-serif leading-loose pl-4 text-justify">
            The year is 2084 democracy has failed and nanocracy has taken over.
            Well actually AI has taken over and nanocracy was born out off pure
            necessity.
            You see AI is great and all but sometimes it's gets stuck, like
            really really stuck. We don't understand why but sometimes it needs
            help to make a choice.
            Since AI has taken over it mainly communicates true the
            cryptocurrency nano. Why it picked nano is an ongoing debate, our
            best guess for now is that it really likes the letter N.
            If it gets stuck on a question it gives us the question + two
            answers each linked to a nano address. The nano address with te most
            votes wins.
          </div>
        </section>
      </Layout>
  );
}

export default AboutPage;
