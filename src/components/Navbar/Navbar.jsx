import React, { useEffect, useState, useCallback } from 'react'
import './Navbar.scss'
import Tab from '../Tab/Tab'
import { connect } from 'react-redux'
import { activateHome } from '../../redux/section/section.actions'


const navBarTransparent = {
    background: "rgba(18, 24, 27, 0)"
}
const navBarSolid = {
    backgroundColor: "rgba(18, 24, 27, 1)"
}

const Navbar = ({ homeState, aboutState, projectsState, contactState, activateHome }) => {
    const [ offset, setOffset ] = useState(0);
    const [ background, setBackground ] = useState({})
    const [ windowWidth, setWindowWidth ] = useState(null)

    const handleScroll = useCallback(() => {
        if(offset > 20) {
            setBackground(navBarSolid)
        } else {
            setBackground(navBarTransparent)
            activateHome()
        }
    }, [offset, activateHome])

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, [setWindowWidth])

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
            handleScroll()
        }

        window.onresize = () => {
            setWindowWidth(window.innerWidth)
        }

    }, [handleScroll]);


    return (
        <div className="navbar" style={background}>
            <div className="navbar__container">
                <div className="navbar__logo">
                    <h1><a href="#home">D.</a></h1>
                </div>
                {
                    windowWidth > 800 ?
                    <ul className="navbar__tabs">
                        <Tab className="navbar__home" title="Home" scroll="#home" current={homeState ? true : false} />
                        <Tab className="navbar__about" title="About" scroll="#about" current={aboutState ? true : false} />
                        <Tab className="navbar__projects" title="Projects" scroll="#projects" current={projectsState ? true : false}/>
                        <Tab className="navbar__contact" title="Contact" scroll="#contact" current={contactState ? true : false}/>
                    </ul>
                    :
                    <div className="navbar__list__tabs">
                        <input type="checkbox" className="toggler" />
                        <div className="hamburger">
                            <div></div>
                        </div>
                    </div>
                }
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

const mapDispatchToProps = dispatch => ({
    activateHome: () => dispatch(activateHome())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
