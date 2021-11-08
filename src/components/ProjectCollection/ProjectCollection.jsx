import React, {useRef, useEffect, useState} from 'react'
import Heading from '../Heading/Heading'
import './ProjectCollection.scss'
import Project from '../Project/Project'
import projectsArray from './data'
import image from '../../assets/quit.svg'
import useOnScreen from '../OnScreen/OnScreen'
import { connect } from 'react-redux'
import { activateProjects } from '../../redux/section/section.actions'

const entranceStyle = {
    transform: "translateY(0px)",
    visibility: "visible",
    opacity: "1"
}

const ProjectCollection = ({ activateProjects }) => {
    const ref = useRef()
    const headingRef = useRef()
    const imageRef = useRef()
    const isVisible = useOnScreen(ref)
    const headingVisible = useOnScreen(headingRef)
    const imageVisible = useOnScreen(imageRef)
    const [ loadedHeading, setLoadedHeading ] = useState(false)
    const [ loadedImage, setLoadedImage ] = useState(false)

    useEffect(() => {

        if(headingVisible) {
            setTimeout(()=> setLoadedHeading(true), 300)
        }

        if(imageVisible) {
            setTimeout(()=> setLoadedImage(true), 300)
        }

    }, [headingVisible, imageVisible])

    useEffect(() =>{
        if(isVisible) {
            activateProjects()
        }
    }, [isVisible, activateProjects])

    return (
        <div id="projects" className="projects__section">
            <div className="projects">
                <div className="projects__heading__container" ref={headingRef} style={loadedHeading ? entranceStyle : null} >
                    <Heading className={"projects__heading"} title={"Projects"} />    
                </div>
                {
                    projectsArray.map( (project, index) => {
                        if(index === 1) {
                            return (
                                <div key={index}>
                                    <Project project={project} />
                                    <div ref={ref}></div>
                                </div>
                            )
                            
                        } else {
                            return <Project key={index} project={project} />
                        }
                    })
                }
                <div className="projects__image__container" ref={imageRef} style={loadedImage ? entranceStyle : null}>
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
