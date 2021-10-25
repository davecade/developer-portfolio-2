import React from 'react'
import './AboutMe.scss'
import Heading from '../Heading/Heading'
import image from '../../assets/proud.svg'
import Button from '../Button/Button'
import firebase from '../../assets/icons/firebase.svg'
import nodejs from '../../assets/icons/nodejs.svg'
import reactjs from '../../assets/icons/react.svg'
import express from '../../assets/icons/express.svg'

const AboutMe = () => {

    return (
        <div className="aboutme-section">
            <div className="aboutme-container">
                <div className="image-container">
                    <img className="aboutme-image" src={image} alt="" />
                </div>
                <div className="content">
                    <Heading className={"aboutme"} title={"About Me"} />
                    <div className="text">
                        <p>I'm a Software Developer from Sydney Australia. I specialize in Web Development using ReactJS.</p>
                        <br />
                        <p>Preferred technology stack: Firebase, Express, React, Node.</p>
                        <div className="tech">
                            <img src={firebase} alt="" className="stack__image" />
                            <img src={express} alt="" className="stack__image" />
                            <img src={reactjs} alt="" className="stack__image" />   
                            <img src={nodejs} alt="" className="stack__image" />
                        </div>
                    </div>
                    <div className="buttons-container">
                        <Button className={"about-button"} title={"View Projects"} />
                        <Button className={"about-button"} title={"Download CV"} inverse />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutMe