/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Chidlows Portfolio`,
        short_name: `BenC Portfolio`,
        start_url: `/`,
        background_color: `#060606`,
        theme_color: `#61DAFB`,
        display: `standalone`,
        icon: `src/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      // options: {
      //   precachePages: [`/about-us/`, `/projects/*`],
      // },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
