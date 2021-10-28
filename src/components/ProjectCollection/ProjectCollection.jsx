import React from 'react'
import Heading from '../Heading/Heading'
import './ProjectCollection.scss'
import Project from '../Project/Project'
import projectsArray from './data'


const ProjectCollection = () => {
    return (
        <div className="project__section">
            <div className="projects">
                <Heading className={"projects__heading"} title={"Projects"} />
                {
                    projectsArray.map( (project, index) => (
                        <Project key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectCollection
