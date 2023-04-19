import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./JAF.css";


function IAF() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faFile} /> IAF FORM
      </div>
      <div className="jafForm">
      <div className="pdfViewer">
      <iframe src="https://drive.google.com/file/d/1WUhCoUDgJgrgFe9O8geJzIiHVrfvfUCr/preview" width="640" height="480" allow="autoplay"></iframe>
      </div>
      
      </div>
    </div>
  );
}

export default IAF;