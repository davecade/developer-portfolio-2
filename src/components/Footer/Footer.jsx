import React from 'react'
import './Footer.scss'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()
    
    return (
        <div className="footer__container">
            <p>{`Copyright © ${year}`} <span>davecade</span></p>
        </div>
    )
}

export default Footer
