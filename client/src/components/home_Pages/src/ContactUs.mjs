import "./AboutUs.mjs";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faContactBook,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faCompass} /> Contact Us
      </div>
      <div className="contactContent">
        <div className="address">
          <div className="aboutContentHead">
            <FontAwesomeIcon icon={faLocationDot} /> Indian Institute Of
            Information Technology Bhopal
          </div>
          <div className="addressDesc">
            <p>New Teaching Block</p>
            <p>MANIT</p>
            <p>Bhopal, Madhya Pradesh</p>
          </div>
        </div>
        <div className="contactInfo">
          <div className="aboutContentHead">
            <FontAwesomeIcon icon={faContactBook} /> Contact Information
          </div>
          <div className="addressDesc">
            <p>
              <FontAwesomeIcon icon={faPhone} /> 0755-4051950
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 0755-4051950
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />  info@iiitbhopal.ac.in
            </p>
          </div>
        </div>

        
      </div>
      <div className="mapLocation">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.69748082199!2d77.40644251496462!3d23.21769298485456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4377bd0627f5%3A0xf968cf9fe4da497a!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Bhopal!5e0!3m2!1sen!2sin!4v1680403418478!5m2!1sen!2sin"width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}

export default ContactUs;
