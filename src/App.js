import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import ProjectCollection from './components/ProjectCollection/ProjectCollection'
import ContactMe from './components/ContactMe/ContactMe'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectCollection />
      <ContactMe />
    </div>
  );
}

export default App;
