import React, { useEffect, useState, useCallback } from 'react'
import './Navbar.scss'
import Tab from '../Tab/Tab'
import { connect } from 'react-redux'


const navBarTransparent = {
    background: "rgba(18, 24, 27, 0)"
}
const navBarSolid = {
    backgroundColor: "rgba(18, 24, 27, 1)"
}

const Navbar = ({ homeState, aboutState, projectsState, contactState }) => {
    const [ offset, setOffset ] = useState(0);
    const [ background, setBackground ] = useState({})

    const handleScroll = useCallback(() => {
        if(offset > 20) {
            setBackground(navBarSolid)
        } else {
            setBackground(navBarTransparent)
        }
    }, [offset])

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
            handleScroll()
        }
    }, [handleScroll]);


    return (
        <div className="navbar" style={background}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1>D.</h1>
                </div>
                <ul className="navbar__tabs">
                    <Tab className="navbar__home" title="Home" scroll="#home" current={homeState ? true : false} />
                    <Tab className="navbar__about" title="About" scroll="#about" current={aboutState ? true : false} />
                    <Tab className="navbar__projects" title="Projects" scroll="#projects" current={projectsState ? true : false}/>
                    <Tab className="navbar__contact" title="Contact" scroll="#contact" current={contactState ? true : false}/>
                    {/* <Tab className="navbar__blog" title="Blog" /> */}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    homeState: state.section.home,
    aboutState: state.section.about,
    projectsState: state.section.projects,
    contactState: state.section.contact
})

export default connect(mapStateToProps)(Navbar)
