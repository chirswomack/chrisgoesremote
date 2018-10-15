import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import FeaturedPost from '../components/FeaturedPost'

export default class IndexPage extends React.Component {
    render() {
        const { data } = this.props;
        const { edges: nodes } = data.allMarkdownRemark;
        const posts = [];
        nodes.map(({ node: post }) => posts.push(post));
        const [featured, second, third, ...olderPosts] = posts;

        return (
            <Layout>
                <div>
                    <div className="w-two-thirds-ltt w-100 relative fl">
                        <FeaturedPost {...featured} />
                    </div>
                    <div className="w-third-ltt w-90 center relative fl-ltt flex flex-column">
                        <PostPreview {...second} />
                        <PostPreview {...third} />
                    </div>
                </div>
            </Layout>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            tags
            image
          }
        }
      }
    }
  }
`
