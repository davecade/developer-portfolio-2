import React from 'react'
import './Tab.scss'
import styles from '../../scss-utils/utilities.module.scss';

const Tab = ({ className, title, current }) => {
    return (
        <li className={`tab ${className}`} style={current ? {
            color: styles.primary
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
