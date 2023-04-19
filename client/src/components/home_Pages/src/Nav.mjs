import "./Nav.css";
import img1 from './images/iiitBhopal_logo.png'
import {Link} from 'react-router-dom'



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCaretDown } from "@fortawesome/free-solid-svg-icons";





function Nav() {

  return (
    <>
      <nav className="navBar">
      <div className="logoContainer">
      <Link to="/"><img src={img1} alt="Institute Logo" /></Link>  
      </div>
      <div className="navContainer">
        <ul className="navList">
          <li className="listItem">
          <Link to="#">
            Home <FontAwesomeIcon icon={faCaretDown} className="favIcon" />  </Link>
            <ul className="dropDownList">
              <li className="dropDownItem"><Link to="/aboutus">About Us</Link></li>
              <li className="dropDownItem"><Link to="/directorMessage">Director's Message</Link></li>
              <li className="dropDownItem"><Link to="/tpoMessage">TPO's Message</Link></li>
            </ul>
            
          </li>
          {/* <li className="listItem">
          <Link to="#">
            Academics <FontAwesomeIcon icon={faCaretDown} className="favIcon" />  </Link>
            <ul className="dropDownList">
              <li className="dropDownItem"><Link to="#">Programmes</Link></li>
              <li className="dropDownItem"><Link to="#">Course Highlights</Link></li>
              <li className="dropDownItem"><Link to="#">Grade System</Link></li>
              <li className="dropDownItem"><Link to="#">Admission Procedure</Link></li>
            </ul>
            
          </li> */}
          {/* <li className="listItem">
          <Link to="#">
            Students <FontAwesomeIcon icon={faCaretDown} className="favIcon" />  </Link>
            <ul className="dropDownList">
              <li className="dropDownItem"><Link to="#">Student Login</Link></li>
              <li className="dropDownItem"><Link to="#">Achievements</Link></li>
              <li className="dropDownItem"><Link to="#">Registration Procedure</Link></li>
              <li className="dropDownItem"><Link to="#">Career Development Activity</Link></li>
            </ul>
            
          </li> */}
          <li className="listItem">
          <Link to="#">
            Recruiter <FontAwesomeIcon icon={faCaretDown} className="favIcon" /> </Link>
            <ul className="dropDownList">
              {/* <li className="dropDownItem"><Link to="#">Why Recruit?</Link></li> */}
              <li className="dropDownItem"><Link to="/TnpBrochure">TNP Brochure</Link></li>
              <li className="dropDownItem"><Link to="/placementStatistics">Placement Statistics</Link></li>
              <li className="dropDownItem"><Link to="#">Our Alumni</Link></li>
              <li className="dropDownItem"><Link to="#">Past Recruiters</Link></li>
            </ul>
          </li>
          <li className="listItem">
          <Link to="#">
            Forms <FontAwesomeIcon icon={faCaretDown} className="favIcon"/></Link>
            <ul className="dropDownList">
              <li className="dropDownItem"><Link to="/jaf">NOC</Link></li>
              {/* <li className="dropDownItem"><Link to="/iaf">IAF</Link></li> */}
              
            </ul>
          
          </li>
          <li className="listItem">
          <Link to="#">
            TNP-Team <FontAwesomeIcon icon={faCaretDown}  className="favIcon"/>  </Link>
            <ul className="dropDownList">
              <li className="dropDownItem"><Link to='/contactUs'>Contact Us</Link></li>
              <li className="dropDownItem"><Link to='/placementTeam'>Placement Team</Link></li>
              {/* <li className="dropDownItem">Members</li> */}
            </ul>
           
          </li>
          <li className="listItem" >
          <Link to="/login">
            Login 
            </Link>
          </li>
        </ul>
        </div>
        <div className = "hambergerIcon" onClick={open}>
        <FontAwesomeIcon icon={faBars} className="faBar" />
        </div>
      </nav>
      
      
    </>
  );
}


function open()
{
  console.log("clicked");
    document.querySelector(".navContainer").classList.toggle("active");

}

// function open1()
// {
//   document.querySelector(".dropDownList").style.visibility = 'visible';
// }

export default Nav;
