import React from 'react'
import './AboutMe.scss'
import Heading from '../Heading/Heading'
import image from '../../assets/proud.svg'
import Button from '../Button/Button'
import mongodb from '../../assets/MERN/mongodb.svg'
import nodejs from '../../assets/MERN/nodejs.svg'
import reactjs from '../../assets/MERN/reactjs.svg'
import express from '../../assets/MERN/express.svg'

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
                        <p>Technology Stack: HTML & CSS, JavaScript, React, Firebase</p>
                        <div className="tech" style={{ backgroundColor: "#f2f2f2" }}>
                            <img src={mongodb} alt="" style={{height: "5rem"}} />
                            <img src={nodejs} alt="" style={{height: "5rem"}} />
                            <img src={reactjs} alt="" style={{height: "5rem"}} />
                            <img src={express} alt="" style={{height: "5rem"}} />
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