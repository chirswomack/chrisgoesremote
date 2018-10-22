import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={`f5-ns f6 lh-copy center post`} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={`w-50 ${className}`}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
