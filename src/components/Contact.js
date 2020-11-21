// Import images
import Me from '../images/1.png'

// Import libraries
import Typical from 'react-typical' // Animation

// Import icons
import { FaArrowDown } from "react-icons/fa";
import { GoLogoGithub, GoMail } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
      <div className="contactContainer">
        <div className="text-main-left">
        <Typical
        steps={['MY SOCIALS', 2000, 'CONTACT ', 1000]}
        loop={Infinity}
        wrapper="p"
      />
      <div className="contactIconsContainer">
        </div>
        <div className="gitHubIconHolder">
            <a href="https://github.com/arjunagnihotri243" target="blank">
                <GoLogoGithub size={100} color="black"/>
            </a>
        </div>
        <div className="emailIconHolder">
            <a href="https://web.whatsapp.com/send?phone=917007448965&app_absent=0" target="blank">
                <FaWhatsapp size={100} color="black"/>
            </a>
        </div>
        </div>
      </div>
  );
}

export default Contact;
