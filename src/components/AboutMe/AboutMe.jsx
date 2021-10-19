import React from 'react'
import './AboutMe.scss'
import Heading from '../Heading/Heading'
import image from '../../assets/developer.svg'
import Button from '../Button/Button'

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