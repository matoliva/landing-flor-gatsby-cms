import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";

const TestPage = ({ data }) => (
  <Layout>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </Layout>
)

/* export const query = graphql`
    {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            description
            tags
            templateKey
            title
            blurbs {
              text
              image {
                relativePath
                childImageSharp {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
` */

export default TestPage
