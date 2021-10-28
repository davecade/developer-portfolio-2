import React from 'react'
import './ContactMe.scss'
import Heading from '../Heading/Heading'

const ContactMe = () => {
    return (
        <div className="contact__section">
            <Heading className={"contact__heading"} title={"Contact Me"}/>

            <div className="contact__content">
                <div className="contact__info">
                    <h4>Contact info</h4>
                    <div className="email__container">
                        <p>dave.cadelina@outlook.com</p>
                    </div>

                    <h4>Follow Me</h4>
                    <div className="icons__container">

                    </div>
                </div>
                <div className="contact__form__container">
                    <form className="contact__form">
                        <label>NAME</label>
                        <input type="text" placeholder="Type your name" />

                        <label>PHONE NUMBER</label>
                        <input type="phone" placeholder="Type your name" />

                        <label>EMAIL</label>
                        <input type="email" placeholder="Type your name" />

                        <label>YOUR MESSAGE</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>

            </div>
            
        </div>
    )
}

export default ContactMe
