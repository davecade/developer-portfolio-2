import React from 'react'
import './Tab.scss'

const Tab = ({ className, title }) => {
    return (
        <li className={`tab ${className}`}>
            {title}
            <div className="underline"></div>
        </li>
    )
}

export default Tab
