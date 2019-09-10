/**
 * Use the createPages API (https://www.gatsbyjs.org/docs/node-apis/#createPages) to
 * query Sanity via GraphQL and build out static pages from the CMS.
 */
exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const pageComponent = require.resolve(`./src/templates/Page.js`);
    // Create pages for published Pages.
    resolve(
      graphql(
        `
          {
            allSanityPage(filter: {published: {eq: true}}) {
              edges {
                node {
                  _rawBody
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages.
        result.data.allSanityPage.edges.forEach(({node}) => {
          const path = `${node.slug}`;
          createPage({
            path,
            component: pageComponent,
            context: {
              page: node,
            },
          });
        });
      })
    );
  });
};
