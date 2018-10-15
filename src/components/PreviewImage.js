import React from 'react'


const PreviewImage = props => (
    <figure className="ma0 aspect-ratio aspect-ratio--16x9 overflow-hidden">
        <div className="aspect-ratio--object bg-black-20 z-999"/>
        <img src={props.src} alt="random" className="aspect-ratio--object teaser-image"/>
    </figure>
)

export default PreviewImage