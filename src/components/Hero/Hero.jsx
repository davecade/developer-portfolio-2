import React from 'react'
import './Hero.scss'
import profilePic from '../../assets/dave-profile-5.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1 className="intro">I'm Dave</h1>
                <p className="title">Software Developer at Google</p>
                <button className="button hireme">Hire Me</button>
            </div>
            <div className="profile__container">
                <img className="profile" src={profilePic} alt="profile" />
            </div>
            
        </div>
    )
}

export default Hero
