import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'
import PreviewImage from './PreviewImage'
import Tag from './Tag'

import '../styles/components/post-teaser.css'

const PostPreview = post => {
    const { title, description, image, tags } = post.frontmatter;
    return (
        <Link className="db flex-auto relative ma0-ltt mt3" to={post.fields.slug}>
            <PreviewImage src={image} />
            <div className="absolute bottom-0 z-999 pa3 mw-100">
                {tags && tags.map((tag, idx) => (
                    <Link to={`/tags/${kebabCase(tag)}/`} key={tag + `tag`} className="tag-link">
                        <Tag tag={tag} index={idx} />
                    </Link>
                ))}
                <div className="bt bb bw2 b--dark-green mt3-l mt2 pa3 bg-white-70 black relative teaser-title">
                    <div className="b--green bt bb bw2 absolute top-0 bottom-0 left-0 z-999 teaser-title-hover" />
                    <p className="playfair f6-xs f4-l f5 fw9 ma0">{title}</p>
                    {description && <p className="f6 mb0 mt3 dn db-l">{description}</p>}
                </div>
            </div>
        </Link>
    )
}

export default PostPreview