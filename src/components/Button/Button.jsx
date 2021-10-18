import React from 'react'
import './Button.scss'

const Button = ({ className, title }) => {
    return (
        <div>
            <button className={`button ${className}`}>{title}</button>
        </div>
    )
}

export default Button
