import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AbutMe from './components/AboutMe/AboutMe'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AbutMe />
      <Projects />
    </div>
  );
}

export default App;
