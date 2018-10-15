import React from 'react'
import Layout from '../components/Layout'
import PostPreview from '../components/PostPreview'
import FeaturedPost from '../components/FeaturedPost'

import '../styles/components/post-teaser.css'
import '../styles/components/parallelogram.css'

const TestPage = () => (
    <Layout>
        <div>
            <div className="w-two-thirds-ns w-100 relative fl">
                <FeaturedPost to="/" title="Welcome to Chris&nbsp;Goes&nbsp;Remote" />
            </div>
            <div className="w-third-ns w-90 center relative fl-ns flex flex-column">
                <PostPreview 
                    to="/"
                    title="Why I wanted to do Remote Year"
                    description="Small snippet hinting at what the second most recent post is about" />
                <PostPreview 
                    to="/"
                    title="Why I wanted to do Remote Year"
                    description="Small snippet hinting at what the second most recent post is about" />
            </div>
        </div>
    </Layout>
)

export default TestPage