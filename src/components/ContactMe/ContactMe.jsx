import React, { useEffect, useRef } from 'react'
import './ContactMe.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateContact } from '../../redux/section/section.actions'
import emailjs from 'emailjs-com'

const ContactMe = ({ activateContact }) => {
    const form = useRef();
    const ref = useRef()
    const isVisible = useOnScreen(ref)
    
    useEffect(() =>{
        if(isVisible) {
            activateContact()
        }
    }, [isVisible, activateContact])


    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_ze7tl93', 'template_4ngndlk', form.current, 'user_nrBGO1U1IPcSxMQe5wAe6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div id="contact" className="contact__section">
            <div ref={ref}></div>
            <Heading className={"contact__heading"} title={"Contact Me"}/>
            <div className="contact__content">
                <div className="contact__form__container">
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="name__container">
                            <label>NAME</label>
                            <input type="text" name="name" placeholder="Type your name" />
                        </div>

                        <div className="phone__container">
                            <label>PHONE NUMBER</label>
                            <input type="phone" name="phone" placeholder="Type your phone number" />
                        </div>

                        <div className="email__container">
                            <label>EMAIL</label>
                            <input type="email" name="email" placeholder="Type your email" />
                        </div>
                        
                        <div className="message__container">
                            <label>YOUR MESSAGE</label>
                            <textarea name="message" id="" cols="30" rows="10" placeholder="Type your message here"></textarea>
                        </div>

                        <Button formButton title={"Send Message"} className={"contact__button"} />
                    </form>
                    
                    
                    <div className="social__container">
                        <h4>Follow Me</h4>
                        <div className="social__icons">
                            
                            <a href="https://www.facebook.com/dave.cadelina" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            
                            <a href="https://github.com/davecade/" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
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
