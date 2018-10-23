import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import '../styles/blog-post.css'

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    helmet,
    image,
    date,
    readingTime
}) => {
    const PostContent = contentComponent || Content

    return (
        <section>
            {helmet || ''}
            <div className="flex flex-row flex-wrap mb5-l mb4">
                <div className="w-50-l w-100 postHead-image cover" style={{background: `url(${image})`}} />
                <div className="pt3-l pt4 pl4-l postHead-info w-90">
                    <h1 className="playfair fw9 f2-l f3 ma0">
                        {title}
                    </h1>
                    {description && <p className="f5-ns f6 lh-copy">{description}</p>}
                    <p className="f6-ns f7">
                        {date}
                        <span className="mh2 f7 v-mid">&#9670;</span>
                        {readingTime} min read
                    </p>
                    <div className="mt4 flex">
                        <div className="br-100 h3 w3 mr3 cover" style={{background: `url(${image})`}} />
                        <p className="f6-ns f7 mt0 pt1 lh-copy">Written by <br/> Chris Womack</p>
                    </div>
                </div>
            </div>
            <div className="container content">
                <div className="center w-90">
                    <PostContent content={content} />
                    {tags && tags.length ? (
                        <div style={{ marginTop: `4rem` }}>
                            <h4>Tags</h4>
                            <ul className="taglist">
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>
                                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.instanceOf(Helmet),
    image: PropTypes.string,
    date: PropTypes.string,
    readingTime: PropTypes.string
}

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                image={post.frontmatter.image}
                date={post.frontmatter.date}
                readingTime={post.timeToRead}
            />
        </Layout>
    )
}

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        image
      }
      timeToRead
    }
  }
`
