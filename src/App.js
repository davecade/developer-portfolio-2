import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AbutMe from './components/AboutMe/AboutMe'
import ProjectCollection from './components/ProjectCollection/ProjectCollection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AbutMe />
      <ProjectCollection />
    </div>
  );
}

export default App;
