import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./TeamCards.css";
// import img2 from './images/IMGperson1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';


function TeamCards(props) {
  return (
    <div className="CardContainer">
      <div className="memberDetails">
        <p className="MemberPosition">{props.position}</p>
        <p className="MemberBranch">{props.branch}</p>
      </div>
      <div className="memberImage">
        <img src={props.imageUrl} alt=""  />
      </div>
      <div className="memberContact">
        <p className="memberName">{props.memberName}</p>
        <p className="memberMail"> <FontAwesomeIcon icon = {faEnvelope} />{props.memberEmail}</p>
        <p className="membercontactNo"><FontAwesomeIcon icon = {faPhone} />{props.memberPhoneNO}</p>
        
      </div>

      <div className="memberSocialMediaLinks">
     
          <FontAwesomeIcon icon={faTwitter} />
        
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
  );
}

export default TeamCards;
