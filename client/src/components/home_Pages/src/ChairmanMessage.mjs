import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
function ChairmanMessage() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <FontAwesomeIcon icon={faComment} /> TPO's Message
      </div>
      <div className="aboutContent">
        Comming soon........
      </div>
    </div>
  );
}
export default ChairmanMessage;