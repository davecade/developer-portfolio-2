import './App.scss';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AbutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AbutMe />
    </div>
  );
}

export default App;
