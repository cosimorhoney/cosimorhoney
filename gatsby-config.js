/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `cosimorhoney.com`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cosimo Rhoney Productions`,
        short_name: `CR Productions`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#110c09`,
        theme_color: `#110c09`,
        display: `standalone`,
      },
    },
  ],
};
