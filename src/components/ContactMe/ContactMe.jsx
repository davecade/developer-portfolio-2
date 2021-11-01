import React, { useEffect, useRef } from 'react'
import './ContactMe.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateContact } from '../../redux/section/section.actions'

const ContactMe = ({ activateContact }) => {

    const ref = useRef()
    const isVisible = useOnScreen(ref)
    
    useEffect(() =>{
        if(isVisible) {
            activateContact()
        }
    }, [isVisible, activateContact])

    return (
        <div id="contact" className="contact__section">
            <div ref={ref}></div>
            <Heading className={"contact__heading"} title={"Contact Me"}/>
            <div className="contact__content">
                {/* <div className="contact__info">
                    <h4 className="contact__info__title">Contact info</h4>
                    <div className="email__container">
                        <p>dave.cadelina@outlook.com</p>
                    </div>

                    <h4 className="contact__info__title">Follow Me</h4>
                    <div className="icons__container">

                    </div>
                </div> */}
                <div className="contact__form__container">
                    <form className="contact__form">
                        <div className="name__container">
                            <label>NAME</label>
                            <input type="text" placeholder="Type your name" />
                        </div>

                        <div className="phone__container">
                            <label>PHONE NUMBER</label>
                            <input type="phone" placeholder="Type your phone number" />
                        </div>

                        <div className="email__container">
                            <label>EMAIL</label>
                            <input type="email" placeholder="Type your email" />
                        </div>
                        
                        <div className="message__container">
                            <label>YOUR MESSAGE</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here"></textarea>
                        </div>
                    </form>
                    <Button title={"Send Message"} className={"contact__button"} />
                    
                    <div className="social__container">
                        <h4>Follow Me</h4>
                        <div className="social__icons">
                            
                            <a href="https://www.facebook.com/dave.cadelina" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            
                            <a href="https://github.com/davecade/" target="_blank" rel="noreferrer">
                                <i className="fab fa-github-square"></i>
                            </a>

                            <a href="https://twitter.com/Dave25903679" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    activateContact: () => dispatch(activateContact())
})


export default connect(null, mapDispatchToProps)(ContactMe)
