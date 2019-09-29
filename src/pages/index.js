import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`nano.vote`, `nano vote`]}
        title="Home"
      />

      <section className="text-center">

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Hey there! Welcome to nano.vote.
        </h2>

      </section>
    </Layout>
  );
}

export default IndexPage;
