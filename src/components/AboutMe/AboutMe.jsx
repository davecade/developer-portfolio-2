import React from 'react'
import './AboutMe.scss'
import Heading from '../Heading/Heading'
import image from '../../assets/coding.svg'

const AboutMe = () => {
    return (
        <div className="aboutme-section">
            <div className="aboutme-container">
                <div className="title-container">
                    {/* <img className="aboutme-image" src={image} alt="" /> */}
                    <Heading className={"aboutme"} title={"About Me"} />
                </div>
                <div className="content">

                    <div className="text">
                        <p>I'm a Font-End developer eager to further my career in the software engineering industry. My work experience and background is mainly in the telecommunications industry, but because I was very passionate about coding, I decided to pursue a career in software development. I specialize in Web Development using ReactJS.</p>
                        <br />
                        <p>Technology Stack: HTML & CSS, JavaScript, React, Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe