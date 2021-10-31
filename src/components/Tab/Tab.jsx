import React from 'react'
import './Tab.scss'
import styles from '../../scss-styles/styles.module.scss';

const Tab = ({ className, title, current, scroll }) => {
    return (
        <li className={`tab ${className}`} style={current ? {
            color: styles.primary
        }:null} >
            <a href={scroll}>{title}</a>
            <div className="underline" style={current ? {
                width: '1.5rem',
                visibility: 'visible'
            }:null}></div>
        </li>
    )
}

export default Tab
