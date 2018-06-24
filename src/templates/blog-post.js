import React from "react";
import Helmet from "react-helmet";
import Tags from "./tags"
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <div className="blog-post-container">
     <Helmet title={`A Nerd's Word - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div>
          <h2>Tags</h2>
          <ul>
            {post.frontmatter.tags.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag)}/`}>
                  {tag}
                </Link>
              </li>
            ))}
            </ul>
          </div>
          <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
;