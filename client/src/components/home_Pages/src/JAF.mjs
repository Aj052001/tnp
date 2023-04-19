import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import "./JAF.css";


function JAF() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faFile} /> NOC FORM
      </div>
      <div className="jafForm">
      <div className="pdfViewer">
      <iframe src="https://drive.google.com/file/d/147-s3GINkFxSBf49jixqblQ2ujsyN3yd/preview"  allow="autoplay"></iframe>
      </div>
      
      </div>
    </div>
  );
}

export default JAF;
