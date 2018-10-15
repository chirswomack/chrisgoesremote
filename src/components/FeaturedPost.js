import React from 'react'
import { Link } from 'gatsby'
import PreviewImage from './PreviewImage'

import '../styles/components/post-teaser.css'

const PostPreview = post => (
    <Link className="db no-underline" to={post.fields.slug}>
        <PreviewImage src={post.frontmatter.image} />
        <div className="absolute bottom-0 z-999 ph4-l pb4-l ph3 pb3">
            <div className="ml3-l ml2 bg-dark-green parallelogram pt3-l pb2-l ph3-l pt2 pb1 ph2 dib">
                <p className="ttu white i fw1 f6 f4-l ma0 lh-solid">Featured post</p>
            </div>
            <div>
                <p className="playfair white f5-xs f4 f3-m f1-l fw9 mb0  mt3">{post.frontmatter.title}</p>
            </div>
        </div>
    </Link>
)

export default PostPreview