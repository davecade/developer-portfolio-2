import React from 'react'
import './Tab.scss'

const Tab = ({ className, title, current }) => {
    return (
        <li className={`tab ${className}`} style={current ? {
            color: '#536DFE'
        }:null} >
            {title}
            <div className="underline" style={current ? {
                width: '1.5rem',
                visibility: 'visible'
            }:null}></div>
        </li>
    )
}

export default Tab
