import './App.css';

// Import images
import Me from './images/1.png'

// Import components
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'

// Import icons
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="skillsContainer">
      <Skills />
      </div>
      <Contact />
    </div>
  );
}

export default App;
