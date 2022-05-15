const { LanguageList } = require("./src/intl/languages");

module.exports = {
  siteMetadata: {
    title: `Video Hub App`,
    description: `Browse, search, and organize your videos`,
    author: `@whyboris`,
    siteUrl: `https://videohubapp.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-WXY3YFNQ7Z'],
        pluginConfig: {
          head: true
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://videohubapp.com`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `svg`,
        path: `${__dirname}/src/svg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Video Hub App`,
        short_name: `VHA`,
        start_url: `/`,
        background_color: `#80cf0f`,
        theme_color: `#80cf0f`,
        display: `minimal-ui`,
        icon: `static/vha-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: LanguageList,
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
  ],
}
