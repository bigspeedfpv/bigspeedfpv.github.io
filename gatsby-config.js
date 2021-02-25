module.exports = {
  siteMetadata: {
    title: `bigspeed`,
    description: `hi`,
    author: `Andrew Brower`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bigspeed`,
        short_name: `bigspeed`,
        start_url: `/`,
        background_color: `#f2187e`,
        theme_color: `#f2187e`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
