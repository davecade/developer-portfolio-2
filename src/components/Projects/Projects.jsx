import React from 'react'
import Heading from '../Heading/Heading'
import './Projects.scss'
import Project from '../Project/Project'
import netflixImage from '../../assets/netflix1.PNG'
import caitysClothingImage from '../../assets/caitys-clothing-store.PNG'
import pokemonImage from '../../assets/daves-pokedex.PNG'
import ticketLoggerImage from '../../assets/ticket-logger.PNG'
import sortImaage from '../../assets/visual-sorting.PNG'


const projectsArray = [
    {
        title: "Netflix Clone",
        description: `
            Recreating Netflix Font-End. Created using React JS and an API from themoviedb.org.
            This web app mimics the Netflix website funcitonality. For embedding youtube trailers,
            I used the following libraries: react-youtube and movie-trailer. Additional libraries used:
            Redux / Redux Sagas for state management. Hosted on Heroku.
        `,
        image: netflixImage,
        url: 'https://netflix-clone-live.herokuapp.com/',
        github: 'https://github.com/davecade/netflix-clone'
    },
    {
        title: "Caity's Clothing Store",
        description: `
            Ecommerce clothing store created with ReactJS, complete with Stripe Payment system
            using Express and NodeJS as a Backend Server. It also uses Firebase as the Database,
            which includes user login, google authentication, and security. Libraries include Redux,
            Redux Sagas, and React Router. Responsive design. Hosted on Heroku.
        `,
        image: caitysClothingImage,
        url: 'https://caitys-clothing-live.herokuapp.com/',
        github: 'https://github.com/davecade/caitys-clothing'
    },
    {
        title: "Ticket Logger",
        description: `
            Basic Ticket Logger application created using ReactJS. Similar to Jira and other task
            tracking applications. This app is using Firebase as a back-end Database. Libraries include
            Redux, Redux Sagas, and React Router. Hosted on Heroku.
        `,
        image: ticketLoggerImage,
        url: 'https://ticket-logger-live.herokuapp.com/',
        github: 'https://github.com/davecade/ticket-logger'
    },
    {
        title: "Dave's Pokedex",
        description: `
            When I was a kid, I was a huge fan of Pokemon. So creating this app was like making
            one of my childhood dreams a reality. This was made using ReactJS. Utilizing a 3rd
            party RESTful API for Pokemon data, it displays information about 151 different Pokemon.
            React Libraries included are: Redux for state management and Redux Sagas to manage API
            calls. Responsive Design
        `,
        image: pokemonImage,
        url: 'https://daves-pokedex-live.herokuapp.com/',
        github: 'https://github.com/davecade/pokedex'
    },
    {
        title: "Visual Sorting",
        description: `
            Simple app created using ReactJS that displays how different sorting algorithms sort
            data in their own unique ways. Currently displays 4 types of sorting algoritms: Bubble,
            Insertion, Selection, and Quick. Libraries include Redux for state management.
            Responsive Design. Hosted on Heroku.
        `,
        image: sortImaage,
        url: 'https://visual-sorting-live.herokuapp.com/',
        github: 'https://github.com/davecade/visual-sorting'
    },
]


const Projects = () => {
    return (
        <div className="project__section">
            <div className="projects">
                <Heading className={"heading"} title={"Projects"} />

                {
                    projectsArray.map( project => (
                        <Project project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
