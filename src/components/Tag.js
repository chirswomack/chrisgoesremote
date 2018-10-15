import React from 'react'

const Tag = ({tag, index}) => {
    const even = index % 2 === 0;
    const bg = even ? 'bg-dark-green' : 'bg-green'
    return (
        <div className={`${bg} ml2 parallelogram pt2 pb1 ph2 dib`}>
            <p className="ttu white i fw3 f6-l f7 ma0 lh-solid">{tag}</p>
        </div>
    )
}

export default Tag