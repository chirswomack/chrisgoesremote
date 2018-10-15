import React from 'react'


const PreviewImage = props => (
    <figure className="ma0 aspect-ratio aspect-ratio--16x9">
        <img src={props.src} alt="random" className="aspect-ratio--object teaser-image"/>
    </figure>
)

export default PreviewImage