import React, { useEffect, useRef, useState } from 'react'
import './Hero.scss'
import profilePic from '../../assets/dave-profile-5.jpg'
import Button from '../Button/Button'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateHome } from '../../redux/section/section.actions'

const entranceStyle = {
    transform: "translateX(0px)",
    visibility: "visible",
    opacity: "1"
}

const Hero = ({ activateHome }) => {
    const [ loaded, setLoaded ] = useState(false)
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if(isVisible){
            setTimeout(()=> setLoaded(true), 300)
        }
    }, [isVisible])

    useEffect(() =>{
        if(isVisible) {
            activateHome()
        }
    }, [isVisible, activateHome])

    return (
        <div id="home" className="hero">
            <div className="hero__content" style={loaded ? entranceStyle : null}>
                <h1 ref={ref} className="intro">I'm Dave</h1>
                <p className="title">Software Developer from Australia. 
                </p>
                <Button className={"know-more"} title={"Know More"} link={"#about"} />
            </div>
            <div className="profile__container" style={loaded ? entranceStyle : null}>
                <img className="profile" src={profilePic} alt="profile" />
            </div>
            
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    activateHome: () => dispatch(activateHome())
})

export default connect(null, mapDispatchToProps)(Hero)
