import React from 'react'
import './Hero.scss'
import profilePic from '../../assets/hello.svg'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1 className="intro">I'm Dave</h1>
                <p className="title">Software Developer. 
                    <br />
                    Founding member of Ngeh Klan Productions.
                </p>
                <Button className={"hireme"} title={"Hire Me"} />
            </div>
            <div className="profile__container">
                <img className="profile" src={profilePic} alt="profile" />
            </div>
            
        </div>
    )
}

export default Hero
