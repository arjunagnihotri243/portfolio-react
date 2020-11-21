// Import images
import Me from '../images/1.png'

// Import libraries
import Typical from 'react-typical' // Animation

// Import icons
import { FaArrowDown } from "react-icons/fa";

function Home() {
  return (
      <div>
        <div className="text-main-left">
        <Typical
        steps={['UI/UX DEVELOPER', 2000, 'UI/UX DEVELOPER ', 1000]}
        loop={Infinity}
        wrapper="p"
      />
            <h1>Hi !</h1>
            <h1>I Am Arjun</h1>
        </div>
        <div className="imageContainer absolute">
            <img src={Me} alt="me"></img>
        </div>
        <a href="#skillscrollid">
        <div className="arrowContainer">
            <div style={{color: 'white'}}>
            <FaArrowDown  size={200}/>
            </div>
        </div>
        </a>
      </div>
  );
}

export default Home;
