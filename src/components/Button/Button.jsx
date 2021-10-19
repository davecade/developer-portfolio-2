import React, { useState, useLayoutEffect } from 'react'
import './Button.scss'

const Button = ({ className, title, inverse }) => {
    const [ buttonStyle, setButtonStyle ] = useState({})
    const [ styleType, setStyleType ] = useState(inverse)

    useLayoutEffect(() => {
        if(!styleType) {
            setButtonStyle({
                backgroundColor: '#536DFE',
                border: '2px solid #536DFE',
                color: '#feffff'
            })
        } else {
            setButtonStyle({
                backgroundColor: '#252829',
                border: '2px solid #536DFE',
                color: '#536DFE'
            })
        }
    }, [styleType])

    const toggleStyle = () => {
        setStyleType(!styleType)
    }

    return (
        <div>
            <button style={buttonStyle} onMouseEnter={toggleStyle} onMouseLeave={toggleStyle} className={`button ${className}`}>{title}</button>
        </div>
    )
}

export default Button
