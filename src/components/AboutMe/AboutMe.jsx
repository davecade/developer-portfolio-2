import React, { useEffect, useRef, useState } from 'react'
import './AboutMe.scss'
import Heading from '../Heading/Heading'
import image from '../../assets/proud.svg'
import Button from '../Button/Button'
import firebase from '../../assets/icons/firebase.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import reactjs from '../../assets/icons/react.svg'
import express from '../../assets/icons/express.svg'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateAbout } from '../../redux/section/section.actions'

const entranceStyle = {
    transform: "translateX(0px)",
    visibility: "visible",
    opacity: "1"
}


const AboutMe = ({ activateAbout }) => {
    const [ loaded, setLoaded ] = useState(false)
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        
        if(isVisible) {
            setTimeout(()=> setLoaded(true), 300)
        }
        
    }, [isVisible])

    useEffect(() =>{
        if(isVisible) {
            activateAbout()
        }
    }, [isVisible, activateAbout])

    return (
        <div id="about" className="aboutme-section">
            <div className="aboutme-container">
                <div className="image-container" style={loaded ? entranceStyle : null}>
                    <img className="aboutme-image" src={image} alt="" />
                </div>
                <div className="content" ref={ref} style={loaded ? entranceStyle : null}>
                    <Heading className={"aboutme"} title={"About Me"} />
                    <div className="text__container">
                        <p className="text">My work experience and background is mainly in the telecommunications industry, but because I was very passionate about coding, I decided to pursue a career in software development. I specialize in Web Development using ReactJS.</p>
                        <p className="text">Technology Stack: Firebase, Express, React, NodeJS.</p>
                        <div className="tech">
                            <img src={firebase} alt="" className="stack__image" />
                            <img src={express} alt="" className="stack__image" />
                            <img src={reactjs} alt="" className="stack__image" />   
                            <img src={nodejs} alt="" className="stack__image" />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <Button className={"about-button"} title={"View Projects"} link={"#projects"} />
                        <Button className={"about-button"} title={"Request CV"} link={"#contact"} inverse />
                    </div>

                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    activateAbout: () => dispatch(activateAbout())
})

export default connect(null, mapDispatchToProps)(AboutMe)