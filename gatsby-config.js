module.exports = {
  siteMetadata: {
    title: `A Nerd's Word`,
  },
plugins: [
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
  {
	  resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
	  options: {
	      // Fields to index
	      fields: [
	          'title',
	          'keywords',
	      ],
	      // How to resolve each field's value for a supported node type
	      resolvers: {
	          // For any node of type MarkdownRemark, list how to resolve the fields' values
	          MarkdownRemark: {
	              title: node => node.frontmatter.title,
	              keywords: node => node.frontmatter.keywords,
	          },
	      },
	  },
	},
  {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72182085-2",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
