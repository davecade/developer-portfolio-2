import React from 'react'
import './Heading.scss'

const Heading = ({ className, title }) => {
    return (
        <div className={className}>
            <h1 className="title">{title}</h1>
            <div className="underline"></div>
        </div>
    )
}

export default Heading