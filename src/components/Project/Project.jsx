import React, { useRef, useEffect, useState } from 'react'
import './Project.scss'
import Button from '../Button/Button'
import Tilt from 'react-tilt'
import useOnScreen from '../OnScreen/OnScreen'


const entranceStyle = {
    transform: "translateX(0px)",
    visibility: "visible",
    opacity: "1"
}

const Project = ({ project }) => {
    const { title, description, image, url, github, technologies } = project
    const [ loadedOverview, setLoadedOverview ] = useState(false)
    const [ loadedImage, setLoadedImage ] = useState(false)
    const refOverview = useRef()
    const refImage = useRef()
    const overviewVisible = useOnScreen(refOverview)
    const imageVisible = useOnScreen(refImage)

    useEffect(() => {
        if(overviewVisible){
            setTimeout(()=> setLoadedOverview(true), 300)
        }
        if(imageVisible){
            setTimeout(()=> setLoadedImage(true), 300)
        }

    }, [overviewVisible, imageVisible])

    return (
        <div className="project">
            <div className="overview" ref={refOverview} style={loadedOverview ? entranceStyle : null}>
                <h1 className="project__title">{title}</h1>
                <p className="project__description">{description}</p>
                <div className="technologies">
                    {
                        technologies.map( (tech, index) => (
                            <img key={index} className="tech-icon" src={tech} alt="" />
                        ))
                    }
                </div>
                <div className="project-buttons-container">
                    <Button className={"project-button"} title={"See Live"} link={url} project/>
                    <Button className={"project-button"} title={"Source Code"} link={github} inverse project/>
                </div>
            </div>
            <div>
            <Tilt className="Tilt" options={{ max : 15, scale: 1 }}>
                <div className="Tilt-inner" ref={refImage} style={loadedImage ? entranceStyle : null}>
                    <div className="image-container">
                        <img className="image" src={image} alt="" />
                    </div>
                </div>
            </Tilt>

            </div>
        </div>
    )
}

export default Project
