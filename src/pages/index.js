import * as React from 'react'
import { graphql, Link } from 'gatsby'

const IndexPage = ({ data }) => {
  const posts = data.allMdx
  return (
    <>
      <h4>{posts.totalCount} Posts</h4>
      {posts.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
          <p>
            <Link to={node.frontmatter.slug}>Lire la suite</Link>
          </p>
        </div>
      ))}
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "DD/MM/YYYY")
          }
          excerpt
        }
      }
    }
  }
`
