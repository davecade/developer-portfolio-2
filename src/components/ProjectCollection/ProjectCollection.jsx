import React, {useRef, useEffect} from 'react'
import Heading from '../Heading/Heading'
import './ProjectCollection.scss'
import Project from '../Project/Project'
import projectsArray from './data'
import image from '../../assets/quit.svg'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateProjects } from '../../redux/section/section.actions'


const ProjectCollection = ({ activateProjects }) => {

    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() =>{
        if(isVisible) {
            activateProjects()
        }
    }, [isVisible, activateProjects])

    return (
        <div id="projects" className="projects__section">
            <div ref={ref}></div>
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

const mapDispatchToProps = dispatch => ({
    activateProjects: () => dispatch(activateProjects())
})

export default connect(null, mapDispatchToProps)(ProjectCollection)
