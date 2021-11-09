import React from 'react'
import './Heading.scss'

const Heading = ({ className, title, style }) => {
    return (
        <div className={`heading ${className}`} style={style}>
            <h1 className="title">{title}</h1>
            <div className="underline"></div>
        </div>
    )
}

export default Heading