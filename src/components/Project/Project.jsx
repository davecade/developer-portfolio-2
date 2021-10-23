import React from 'react'
import './Project.scss'
import Button from '../Button/Button'
import Tilt from 'react-tilt'

const Project = ({ title, description, image }) => {
    return (
        <div className="project">
            <div className="overview">
                <h1 className="project__title">{title}</h1>
                <p className="project__description">{description}</p>
                <div className="project-buttons-container">
                    <Button className={"project-button"} title={"See Live"} />
                    <Button className={"project-button"} title={"Source Code"} inverse />
                </div>
            </div>
            <Tilt className="Tilt" options={{ max : 15, scale: 1 }}>
                <div className="Tilt-inner">
                    <div className="image-container">
                        <img className="image" src={image} alt="" />
                    </div>
                </div>
            </Tilt>
        </div>
    )
}

export default Project
