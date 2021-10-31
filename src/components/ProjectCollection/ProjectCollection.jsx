import React from 'react'
import Heading from '../Heading/Heading'
import './ProjectCollection.scss'
import Project from '../Project/Project'
import projectsArray from './data'
import image from '../../assets/quit.svg'


const ProjectCollection = () => {
    return (
        <div id="projects" className="projects__section">
            <div className="projects">
                <div className="projects__heading__container">
                    <Heading className={"projects__heading"} title={"Projects"} />    
                </div>
                {
                    projectsArray.map( (project, index) => (
                        <Project key={index} project={project} />
                    ))
                }
                    <div className="projects__image__container">
                        <img className="projects__image" src={image} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default ProjectCollection
