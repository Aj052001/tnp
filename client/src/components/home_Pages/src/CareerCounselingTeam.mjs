import "./AboutUs.css";
import "./PlacementTeam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import members from "./CareerCounselingTeamData.js";
import TeamCards from "./TeamCards.mjs";

function createCard(member)
{
    return (
      <TeamCards
       position = {member.position}
        branch = {member.branch}
        imageUrl ={member.imageUrl}
        memberName = {member.memberName}

       memberEmail={member.memberEmail}
       memberPhoneNO= {member.memberPhoneNO}

       />
    );
}
function CareerCounselingTeams()
{
    return (
        <div className="aboutContainer">
          <div className="aboutHeader">
            <FontAwesomeIcon icon={faUsers} /> Career Counselling Committee
          </div>
    
          <div className="teamcontainer">
          {members.map(createCard)}
          </div>
        </div>
      );
}

export default CareerCounselingTeams;