import React from 'react'
import './Navbar.scss'
import Tab from '../Tab/Tab'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1>D.</h1>
                </div>
                <ul className="navbar__tabs">
                    <Tab className="navbar__home" title="Home" current />
                    <Tab className="navbar__about" title="About" />
                    <Tab className="navbar__projects" title="Projects" />
                    <Tab className="navbar__contact" title="Contact" />
                    <Tab className="navbar__blog" title="Blog" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
