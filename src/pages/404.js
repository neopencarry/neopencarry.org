import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const NotFoundPage = () => (
  <Layout>
    <SEO
      title="Page Not found"
      description={`Well, this is embarrasing...there's no page here.`}
    />
    <h1>Page Not Found!</h1>
    <p>
      It appears you're lost. Sorry about that!
    </p>
  </Layout>
);

export default NotFoundPage;
