import React, { useState, useLayoutEffect } from 'react'
import { connect } from 'react-redux';
import styles from '../../scss-styles/styles.module.scss';
import './Button.scss'
import { activateAbout, activateProjects, activateContact } from '../../redux/section/section.actions'

const Button = ({ className, title, link='', inverse, formButton, project, activateAbout, activateProjects, activateContact }) => {
    const [ buttonStyle, setButtonStyle ] = useState({})
    const [ styleType, setStyleType ] = useState(inverse)

    useLayoutEffect(() => {
        if(!styleType) {
            setButtonStyle({
                backgroundColor: styles.primary,
                border: `2px solid ${styles.primary}`,
                color: styles.textBody
            })
        } else {
            setButtonStyle({
                backgroundColor: styles.bgDark,
                border: `2px solid ${styles.primary}`,
                color: styles.primary
            })
        }
    }, [styleType])

    const toggleStyle = () => {
        setStyleType(!styleType)
    }
    
    const handleClick = () => {
        switch(title) {
    
            case 'Know More':
                setTimeout(() => activateAbout(), 500)
                break;

            case 'View Projects':
                setTimeout(() => activateProjects(), 500)
                break;

            case 'Request CV':
                setTimeout(() => activateContact(), 1000)
                break;

            default:
                break;
        }
    }

    return (
        <button type={formButton ? "submit" : ""} style={buttonStyle} onMouseEnter={toggleStyle} onMouseLeave={toggleStyle} className={`button ${className}`}>
            {
                formButton ? title
                :
                <a href={link} onClick={handleClick} target={project ? "_blank" : "" } rel="noreferrer">{title}</a>
            }
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    activateAbout: () => dispatch(activateAbout()),
    activateProjects: () => dispatch(activateProjects()),
    activateContact: () => dispatch(activateContact()),
})

export default connect(null, mapDispatchToProps)(Button)
