import React from 'react'
import Heading from '../Heading/Heading'
import './Projects.scss'
import Button from '../Button/Button'

const Projects = () => {
    return (
        <div className="projects">
            <Heading className={"heading"} title={"Projects"} />
            <div className="project">
                <div className="overview">
                    <h1>Netflix Clone</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita sint, mollitia amet dignissimos nesciunt tempore sunt autem accusantium veritatis.</p>
                    <div className="project-buttons-container">
                        <Button className={"project-button"} title={"See Live"} />
                        <Button className={"project-button"} title={"Source Code"} inverse />
                    </div>
                </div>
                <div className="image-container">

                </div>
            </div>
        </div>
    )
}

export default Projects
