import React, { useState, useLayoutEffect } from 'react'
import styles from '../../scss-styles/styles.module.scss';
import './Button.scss'

const Button = ({ className, title, link='', inverse, project }) => {
    const [ buttonStyle, setButtonStyle ] = useState({})
    const [ styleType, setStyleType ] = useState(inverse)

    useLayoutEffect(() => {
        if(!styleType) {
            setButtonStyle({
                backgroundColor: styles.primary,
                border: `2px solid ${styles.primary}`,
                color: styles.textBody
            })
        } else {
            setButtonStyle({
                backgroundColor: styles.bgDark,
                border: `2px solid ${styles.primary}`,
                color: styles.primary
            })
        }
    }, [styleType])

    const toggleStyle = () => {
        setStyleType(!styleType)
    }

    return (
        <button style={buttonStyle} onMouseEnter={toggleStyle} onMouseLeave={toggleStyle} className={`button ${className}`}>
            <a href={link} target={project ? "_blank" : "" } rel="noreferrer">{title}</a>
        </button>
    )
}

export default Button
