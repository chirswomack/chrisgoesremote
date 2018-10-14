import React from 'react'
import Layout from '../components/Layout'

import '../styles/components/post-teaser.css'
import '../styles/components/parallelogram.css'

const TestPage = () => (
    <Layout>
        <div>
            <div className="w-two-thirds relative fl">
                <a className="db no-underline" href="/">
                    <figure className="ma0 aspect-ratio aspect-ratio--16x9">
                        <img src="https://source.unsplash.com/random" alt="random" className="aspect-ratio--object teaser-image"/>
                    </figure>
                    <div className="absolute bottom-0 z-999 pl5 pb5">
                        <div className="bg-green parallelogram pt3 pb2 ph3 dib">
                            <p className="ttu white i fw3 f4 ma0 lh-solid">Featured post</p>
                        </div>
                        <div>
                            <p className="playfair white f1 mb0 mt4">Welcome to Chris Goes Remote</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="w-third relative fl flex flex-column">
                <a className="db flex-auto relative" href="/">
                    <figure className="ma0 aspect-ratio aspect-ratio--16x9">
                        <img src="https://source.unsplash.com/featured/?nature" alt="random" className="aspect-ratio--object teaser-image"/>
                    </figure>
                    <div className="absolute bottom-0 z-999 pl3 pb4">
                        <div className="bg-green parallelogram pt2 pb1 ph2 dib">
                            <p className="ttu white i fw3 f6 ma0 lh-solid">Travel</p>
                        </div>
                        <div className="bt bb bw1 b--green mt3 pa3 bg-white-70">
                            <p className="playfair f4 ma0">Why I wanted to do Remote Year</p>
                            <p className="f6">Small snippet hinting at what the second most recent post is about</p>
                        </div>
                    </div>
                </a>
                <a className="db flex-auto relative" href="/">
                    <figure className="ma0 aspect-ratio aspect-ratio--16x9">
                        <img src="https://source.unsplash.com/featured/?water" alt="random" className="aspect-ratio--object teaser-image"/>
                    </figure>
                    <div className="absolute bottom-0 z-999 pl3 pb4">
                        <div className="bg-green parallelogram pt2 pb1 ph2 dib">
                            <p className="ttu white i fw3 f6 ma0 lh-solid">Travel</p>
                        </div>
                        <div className="bt bb bw1 b--green mt3 pa3 bg-white-70">
                            <p className="playfair f4 ma0">Why I wanted to do Remote Year</p>
                            <p className="f6">Small snippet hinting at what the second most recent post is about</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </Layout>
)

export default TestPage