import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import ProjectCollection from './components/ProjectCollection/ProjectCollection'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectCollection />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
