// import "./AboutUs.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
// import Accordion from 'react-bootstrap/Accordion';
import { Accordion } from 'react-bootstrap';



function TnpBrochure() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faChartSimple} />TNP BROCHURE
      </div>
      <div className="jafForm">
      <div className="pdfViewer">
      <iframe src="https://drive.google.com/file/d/1LrjPlKc4HEHldX9F0ssLlz2qPWfc4Z09/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
      
      </div>
    </div>
  );
}

export default TnpBrochure;
