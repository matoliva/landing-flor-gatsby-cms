import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout";

const TestPage = ({ data }) => (
  <Layout>
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </Layout>
)

export const query = graphql`
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
                absolutePath
              }
            }
          }
        }
      }
    }
  }
`

export default TestPage
