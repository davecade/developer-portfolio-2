import React from 'react'
import './Tab.scss'
import styles from '../../scss-styles/styles.module.scss';
import { connect } from 'react-redux';
import { activateHome, activateAbout, activateProjects, activateContact } from '../../redux/section/section.actions'

const Tab = ({ className, title, current, setTabsOpen, scroll, activateHome, activateAbout, activateProjects, activateContact }) => {

    const handleClick = () => {
        switch(title) {

            case 'Home':
                setTimeout(() => activateHome(), 600)
                break;
    
            case 'About':
                setTimeout(() => activateAbout(), 600)
                break;

            case 'Projects':
                setTimeout(() => activateProjects(), 600)
                break;

            case 'Contact':
                setTimeout(() => activateContact(), 600)
                break;

            default:
                break;
        }
    }

    return (
        <li className={`tab ${className}`} style={current ? {
            color: styles.primary
        }:null} >
            <a href={scroll} onClick={handleClick}>{title}</a>
            <div className="underline" style={current ? {
                width: '1.5rem',
                visibility: 'visible'
            }:null}></div>
        </li>
    )
}


const mapDispatchToProps = dispatch => ({
    activateHome: () => dispatch(activateHome()),
    activateAbout: () => dispatch(activateAbout()),
    activateProjects: () => dispatch(activateProjects()),
    activateContact: () => dispatch(activateContact()),
})

export default connect(null, mapDispatchToProps)(Tab)
