module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`]
      },
      gatsbyRemarkPlugins: []
    }
  ]
}
