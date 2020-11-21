// Import images
import Me from '../images/1.png'

// Import libraries
import Typical from 'react-typical' // Type Animation

// Import icons
import { FaArrowDown } from "react-icons/fa";

function Skills() {
    
  return (
      <div className="skillsPageHeading" id="skillscrollid">
        <h2>
            <Typical
            steps={['My Skills !', 500]}
            loop={Infinity}
            wrapper="p"
        />
        </h2>
    
    <div className="skillset">
      <h3>Website Development:</h3>
      <h5>HTML</h5>
      <h5>CSS</h5>
      <h5>JavaScript</h5>
    </div>

    <div className="skillset">
    <h3>General Programming Languages:</h3>
      <h5>Python</h5>
      <h5>Node JS</h5>
    </div>


    <div className="skillset">
    <h3>Serverside Development:</h3>
      <h5>Express JS</h5>
      <h5>Mongo DB</h5>
    </div>


    <div className="skillset">
    <h3>Frontend Development:</h3>
      <h5>React JS</h5>
      <h5>W3 CSS</h5>
      <h5>Bootstrap</h5>
    </div>


    <div className="skillset">
        
      <h3>Python Automation Modules:</h3>
      <h5>Selenium</h5>
      <h5>PyAutoGUI</h5>
    </div>
    
    <div className="skillset">
<h3>Graphic Designing:</h3>
      <h5>Corel Draw Graphic Suite</h5>
    </div>



      

      </div>
  );
}

export default Skills;
