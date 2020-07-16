import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image";


import Layout from '../components/layout'

const Article = ({ data }) => {
  const post = data.nodeArticle

  return (
    <Layout>
      <h1>{post.title}</h1>
      <Img
        fluid={post.relationships.field_image.localFile.childImageSharp.fluid}
        alt={post.field_image.alt}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}
      />
    </Layout>
  )
}

export const query = graphql`
  query($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Article