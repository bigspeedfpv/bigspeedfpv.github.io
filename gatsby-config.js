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
        background_color: `#ff0000`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
