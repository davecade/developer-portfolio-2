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
    const [ loadedImage, setLoadedImage ] = useState(false)
    const [ loadedHeading, setLoadedHeading ] = useState(false)
    const [ loadedText1, setLoadedText1 ] = useState(false)
    const [ loadedTech, setLoadedTech ] = useState(false)
    const [ loadedButtons, setLoadedButtons ] = useState(false)
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        
        if(isVisible) {

            setTimeout(()=> setLoadedHeading(true), 300)
            setTimeout(()=> setLoadedText1(true), 500)
            setTimeout(()=> setLoadedTech(true), 900)
            setTimeout(()=> setLoadedButtons(true), 1100)
            setTimeout(()=> setLoadedImage(true), 1300)
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
                <div className="image-container" style={loadedImage ? entranceStyle : null}>
                    <img className="aboutme-image" src={image} alt="" />
                </div>
                <div className="content" ref={ref}>
                    <Heading className={"aboutme"} title={"About Me"} style={loadedHeading ? entranceStyle : null}/>
                    <div className="text__container">
                        <p className="text" style={loadedText1 ? entranceStyle : null}>
                            I'm a Software developer from Sydney Australia. I specialize in creating web applications using the FERN stack (Firebase, Express, React, Node).
                        </p>
                        <div className="tech" style={loadedTech ? entranceStyle : null}>
                            <img src={firebase} alt="" className="stack__image" />
                            <img src={express} alt="" className="stack__image" />
                            <img src={reactjs} alt="" className="stack__image" />   
                            <img src={nodejs} alt="" className="stack__image" />
                        </div>
                    </div>
                    <div className="buttons-container" style={loadedButtons ? entranceStyle : null}>
                        <Button className={"about__view__projets"} title={"View Projects"} link={"#projects"} />
                        <Button className={"about__request__cv"} title={"Hire Me"} link={"#contact"} inverse />
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