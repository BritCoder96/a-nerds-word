module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
