import React, { useState, useEffect, useRef } from 'react'
import './ContactMe.scss'
import Heading from '../Heading/Heading'
import Button from '../Button/Button'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateContact } from '../../redux/section/section.actions'
import emailjs from 'emailjs-com'



const styles = {
    visible: {
        transform: "translateY(0)",
        opacity: '1'
    },
    invisible: {
        transform: "translateY(-1rem)",
        opacity: '0'
    },
    redBorder: {
        border: "1px solid red"
    }
}

const entranceStyleY = {
    transform: "translateY(0px)",
    visibility: "visible",
    opacity: "1"
}

const entranceStyleX = {
    transform: "translateX(0px)",
    visibility: "visible",
    opacity: "1"
}


const ContactMe = ({ activateContact }) => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ messageFailed, setMessageFailed ] = useState(false) 
    const [ sentNoticeVisible, setSentNoticeVisible ] = useState(false)

    //--fade in
    const [ loadedHeading, setLoadedHeading ] = useState(false)
    const [ loadedForm, setLoadedForm ] = useState(false)
    const [ loadedSocial, setLoadedSocial ] = useState(false)
    const formRef = useRef()
    const socialRef = useRef()
    const formVisible = useOnScreen(formRef)
    const socialVisible = useOnScreen(socialRef)

    //-- tab highlight
    const form = useRef();
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {

        if(isVisible){
            setTimeout(()=> setLoadedHeading(true), 300)
        }

        if(formVisible){
            setTimeout(()=> setLoadedForm(true), 300)
        }

        if(socialVisible){
            setTimeout(()=> setLoadedSocial(true), 300)
        }

    }, [isVisible, formVisible, socialVisible])
    
    useEffect(() =>{
        if(isVisible) {
            activateContact()
        }
    }, [isVisible, activateContact])

    const manageSentNotice = () => {
        setSentNoticeVisible(true)
        setTimeout(() => setSentNoticeVisible(false), 4000)
    }


    const sendEmail = (e) => {
        e.preventDefault();
        if(name && message && (email || phone)) {
            emailjs.sendForm('service_ze7tl93', 'template_4ngndlk', form.current, 'user_nrBGO1U1IPcSxMQe5wAe6')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
              setName('')
              setPhone('')
              setEmail('')
              setMessage('')
              setMessageFailed(false)
              manageSentNotice();
        } else {
            console.log("failed: mandatory fields empty")
            setMessageFailed(true)
        }

    }
        
    return (
        <div id="contact" className="contact__section">
            <div ref={ref} className="contact__heading__container" style={loadedHeading ? entranceStyleY : null}>
                <Heading className={"contact__heading"} title={"Contact Me"}/>
            </div>
            <div className="contact__content">
                <div className="contact__form__container" ref={formRef} style={loadedForm ? entranceStyleX : null}>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="name__container">
                            <label>NAME<span style={messageFailed ? {color: 'red'} : null}>*</span></label>
                            <input
                                type="text"
                                onChange={e => setName(e.target.value)}
                                name="name"
                                placeholder="Type your name"
                                style={(messageFailed && !name) ? {border: '1px solid red'}: null}    
                            />
                        </div>

                        <div className="phone__container">
                            <label>PHONE NUMBER</label>
                            <input
                                type="tel"
                                name="phone"
                                onChange={e => setPhone(e.target.value)}
                                placeholder="Type your phone number"
                            />
                        </div>

                        <div className="email__container">
                            <label>EMAIL<span style={messageFailed ? {color: 'red'} : null}>*</span></label>
                            <input type="email"
                                name="email"
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Type your email"
                                style={(messageFailed && !email) ? {border: '1px solid red'}: null}
                            />
                        </div>
                        
                        <div className="message__container">
                            <label>YOUR MESSAGE<span style={messageFailed ? {color: 'red'} : null}>*</span></label>
                            <textarea
                                name="message"
                                onChange={e => setMessage(e.target.value)}
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Type your message here"
                                style={(messageFailed && !message)  ? {border: '1px solid red'}: null}
                            ></textarea>
                        </div>

                        <Button formButton title={"Send Message"} className={"contact__button"} />   
                    </form>

                    <div className="message__sent__conatiner" style={sentNoticeVisible ? styles.visible : styles.invisible}>
                        <i className="fas fa-check-circle"></i>
                        <h4 className="message__sent">Message Sent</h4>
                    </div>
                </div>
                <div className="social__container" ref={socialRef} style={loadedSocial ? entranceStyleY : null}>
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
    )
}

const mapDispatchToProps = dispatch => ({
    activateContact: () => dispatch(activateContact())
})


export default connect(null, mapDispatchToProps)(ContactMe)
