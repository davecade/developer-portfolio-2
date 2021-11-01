import React, { useEffect, useRef } from 'react'
import './Hero.scss'
import profilePic from '../../assets/dave-profile-5.jpg'
import Button from '../Button/Button'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateHome } from '../../redux/section/section.actions'

const Hero = ({ activateHome }) => {

    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() =>{
        if(isVisible) {
            activateHome()
        }
    }, [isVisible, activateHome])

    return (
        <div id="home" className="hero">
            <div ref={ref}></div>
            <div className="hero__content">
                <h1 className="intro">I'm Dave</h1>
                <p className="title">Software Developer from Australia. 
                </p>
                <Button className={"know-more"} title={"Know More"} link={"#about"} />
            </div>
            <div className="profile__container">
                <img className="profile" src={profilePic} alt="profile" />
            </div>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    activateHome: () => dispatch(activateHome())
})

export default connect(null, mapDispatchToProps)(Hero)
