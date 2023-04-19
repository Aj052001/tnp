import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter,faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';




function Footer() {
  return (
    <div className="footerContainer">
      <footer className="footerSec">
        <div className="footerSec1">
          <div className="footerContent">
            <p className="contentHeader">TNP IIITB</p>
            <p>Indian Institute of Information</p>
            <p>Technology Bhopal</p>
            <p>New Teaching Block, MANIT, Bhopal,</p>
            <p>MP, India Pin code : 462003</p>
            <p><span className="contactDeatilsHeader">Phone: </span>0755-4051950</p>
            <p><span className="contactDeatilsHeader">Phone: </span>0755-4051950</p>
            <p><span className="contactDeatilsHeader">Email: </span> info@iiitbhopal.ac.in</p>
          </div>
          <div className="footerContent">
            <p className="contentHeader">Downloads</p>
            <p><a href = "#">JAF</a></p>
            <p><a href = "#">IAF</a></p>
            <p><a href = "#">Brochure</a></p>
          </div>
          <div className="footerContent">
            <p className="contentHeader">Quick Links</p>
            <p><a href = "#">Placement registration link</a></p>
            <p><a href = "#">Placement Statistics</a></p>
            <p><a href = "#">Meet our Team</a></p>
          </div>
          <div className="footerContent">
            <p className="contentHeader">External Links</p>
            <p><a href = "#">IIIT Bhopal</a></p>
            <p><a href = "#">Kratigence</a></p>
            <p><a href = "#">Codame</a></p>
          </div>
        </div>
        <div className="footerSec2">
          <div className="socialMediaContainer">
        <a href ="#">  <FontAwesomeIcon icon={faInstagram} /></a>
        <a href ="#"> <FontAwesomeIcon icon={faTwitter} /></a>
        <a href ="#">   <FontAwesomeIcon icon={faFacebook} /></a>
        <a href ="#"> <FontAwesomeIcon icon={faGithub} /></a>
        <a href ="#"> <FontAwesomeIcon icon={faLinkedin} /></a> 
          </div>
          <div className="copyrightContainer">
            <p>Designed & Maintained by Training And Placement Cell, IIIT Bhopal</p>
            <p>Copyright © TNP, IIITB 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
