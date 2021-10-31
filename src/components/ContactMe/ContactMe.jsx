import React from 'react'
import './ContactMe.scss'
import styles from '../../scss-styles/styles.module.scss';
import Heading from '../Heading/Heading'
import Button from '../Button/Button'

const ContactMe = () => {
    return (
        <div className="contact__section">
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
                            <input type="phone" placeholder="Type your name" />
                        </div>

                        <div className="email__container">
                            <label>EMAIL</label>
                            <input type="email" placeholder="Type your name" />
                        </div>
                        
                        <div className="message__container">
                            <label>YOUR MESSAGE</label>
                            <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here"></textarea>
                        </div>
                    </form>
                    <Button title={"Send Message"} />
                </div>

            </div>
            
        </div>
    )
}

export default ContactMe
