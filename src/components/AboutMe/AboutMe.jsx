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
        <div id="about" className="aboutme-section">
            <div className="aboutme-container">
                <div className="image-container">
                    <img className="aboutme-image" src={image} alt="" />
                </div>
                <div className="content">
                    <Heading className={"aboutme"} title={"About Me"} />
                    <div className="text__container">
                        <p className="text">I'm a Software Developer from Sydney Australia working for a software company called Paladine Systems. I specialize in Web Development using ReactJS.</p>
                        <p className="text">The Technology Stack I use: Firebase, Express, React, NodeJS.</p>
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

export default AboutMe