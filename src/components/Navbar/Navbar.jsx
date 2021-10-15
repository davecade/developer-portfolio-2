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
                    <Tab className="home" title="Home" current />
                    <Tab className="about" title="About" />
                    <Tab className="projects" title="Projects" />
                    <Tab className="contact" title="Contact" />
                    <Tab className="blog" title="Blog" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar
