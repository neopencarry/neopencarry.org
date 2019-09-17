// Use dotenv to read in .env files, which become available in process.env Object
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // ie .env.development || .env.production
});

module.exports = {
  // Generic meta tag information for SEO, etc. Some of this is overwritten
  // for each page (such as the title and description).
  siteMetadata: {
    title: `Nebraska Open Carry`,
    description: `Working to maintain the right to keep and bear arms.`,
    author: `Caleb Larsen`,
    url: `https://neopencarry.netlify.com`,
    siteUrl: `https://neopencarry.netlify.com`,
    image: `https://neopencarry.netlify.com/images/logo.png`,
    twitterUsername: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // Ignore all paths beginning with /ignore/
        exclude: ["/ignore/*"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neopencarry`,
        short_name: `neopencarry`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136834298-2",
        head: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    // TODO: Consider enabling offline functionality (https://gatsby.dev/offline).
  ],
};
