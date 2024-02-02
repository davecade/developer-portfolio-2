//-- Preview Images
import netflixImage from "../../assets/netflix1.PNG";
import caitysClothingImage from "../../assets/caitys-clothing-store.PNG";
import pokemonImage from "../../assets/daves-pokedex.PNG";
import ticketLoggerImage from "../../assets/ticket-logger.PNG";
import algoCloneImage from "../../assets/algo-clone.PNG";
import aIBlogImage from "../../assets/AIBlogImage.PNG";

//-- Icons
import reactIcon from "../../assets/icons/react.svg";
import firebaseIcon from "../../assets/icons/firebase.svg";
import herokuIcon from "../../assets/icons/heroku.svg";
import reduxIcon from "../../assets/icons/redux.svg";
import stripeIcon from "../../assets/icons/stripe.svg";
import expressIcon from "../../assets/icons/express.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import recoilIcon from "../../assets/icons/recoil.svg";
import nestjsIcon from "../../assets/icons/nestjs.svg";
import nextjsIcon from "../../assets/icons/nextjs.svg";
import mongodbIcon from "../../assets/icons/mongodb.svg";
import vercelIcon from "../../assets/icons/vercel.svg";

const projectsArray = [
	{
		title: "Netflix Clone",
		description: `
            Created using ReactJS Frontend and NodeJS Backend. This app uses an API from
            themoviedb.org, and mimics the Netflix website funcitonality. For embedding
            youtube trailers, I used the following libraries: react-youtube and movie-trailer.
            Redux / Redux Sagas for state management.Hosted on Heroku.
        `,
		image: netflixImage,
		url: "https://netflix-clone-live.herokuapp.com/",
		github: "https://github.com/davecade/netflix-clone",
		technologies: [reactIcon, reduxIcon, expressIcon, nodejsIcon, herokuIcon],
	},
	{
		title: "Ticket Logger",
		description: `
          Basic Ticket Logger application created using ReactJS. Similar to Jira and other task
          tracking applications. This app is using Firebase as a back-end Database. Libraries include
          Redux, Redux Sagas, and React Router. Hosted on Heroku.
      `,
		image: ticketLoggerImage,
		url: "https://ticket-logger-live.herokuapp.com/",
		github: "https://github.com/davecade/ticket-logger",
		technologies: [reactIcon, reduxIcon, firebaseIcon, herokuIcon],
	},
	{
		title: "AI Blog Generator",
		description: `
          Created using OpenAI's GPT-4 API, this blog generator is capable of creating a blog using
          a users input of topic and keywords. The app was created using NextJS and TailwindCSS. Hosted on Vercel.
        `,
		image: aIBlogImage,
		url: "https://openai-blog-one.vercel.app/",
		github: "https://github.com/davecade/openai-blog",
		technologies: [nextjsIcon, mongodbIcon, vercelIcon],
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
		url: "https://caitys-clothing-live.herokuapp.com/",
		github: "https://github.com/davecade/caitys-clothing",
		technologies: [
			reactIcon,
			reduxIcon,
			firebaseIcon,
			expressIcon,
			nodejsIcon,
			stripeIcon,
			herokuIcon,
		],
	},
	{
		title: "Algo Clone",
		description: `
          This is a web-based platform made for programmers to engage in coding challenges.
          It was inspired by algoexpert.io. The platform's frontend was developed using ReactJS,
          and state management was handled by RecoilJS. NestJS was utilized for backend server
          construction. Moreover, integration with JDoodle's websocket APIs was implemented,
          enabling the execution of users' code.
        `,
		image: algoCloneImage,
		url: "https://mysterious-meadow-53796.herokuapp.com/",
		github: "https://github.com/davecade/coding-game",
		technologies: [reactIcon, recoilIcon, nestjsIcon, nodejsIcon, herokuIcon],
	},
	{
		title: "Dave's Pokedex",
		description: `
            When I was a kid, I was a huge fan of Pokemon. So creating this app was like making
            one of my childhood dreams a reality. This was made using ReactJS for the fontend,
            and NodeJS for the backend. Utilizing a 3rd party RESTful API for Pokemon data, it
            displays information about 151 different Pokemon. React Libraries included are: Redux
            for state management.
        `,
		image: pokemonImage,
		url: "https://daves-pokedex-live.herokuapp.com/",
		github: "https://github.com/davecade/pokedex",
		technologies: [reactIcon, reduxIcon, expressIcon, nodejsIcon, herokuIcon],
	},
];

export default projectsArray;
