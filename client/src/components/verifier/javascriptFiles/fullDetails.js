import React from 'react';
import '../cssFiles/fullDetails.css';
import {Link} from 'react-router-dom';

export default function FullDetails(props) {
  return (
      <div className="fullDetailsInformation">
          <h2>Personal Information</h2>
          <div className="fullDetailsInformationSection1">
            <div> <div className="first">First Name </div><div className="second">Yash</div> </div>
            <div> <div className="first">Last Name </div><div className="second">Agarwal</div> </div>
            <div> <div className="first">Scholar No </div><div className="second">20U03054</div> </div>
            <div> <div className="first">Scholar Status </div><div className="second">Active</div> </div>
            <div> <div className="first">Father's Name </div><div className="second">_______ Agarwal</div> </div>
            <div> <div className="first">Mother's Name </div><div className="second">_______ Agarwal</div> </div>
            <div> <div className="first">Gender </div><div className="second">Male</div> </div>
            <div> <div className="first">D.O.B. </div><div className="second">28-05-2002</div> </div>
            <div> <div className="first">Category </div><div className="second">General</div> </div>
            <div> <div className="first">Community </div><div className="second">Hindu</div> </div>
            <div> <div className="first">Nationality </div><div className="second">Indian</div> </div>
            <div> <div className="first">Aadhar Card No. </div><div className="second">5555 5555 5555</div> </div>
            <div> <div className="first">Contact No. </div><div className="second">+91-9602560917</div> </div>
            <div> <div className="first">Email </div><div className="second">yashagarwal2852002@gmail.com</div> </div>
            <div> <div className="first">Course </div><div className="second">B.Tech.</div> </div>
            <div> <div className="first">Department </div><div className="second">Information Technology</div> </div>
            <div> <div className="first">Specialization </div><div className="second">Information Technology</div> </div>
            <div> <div className="first">Admission Year </div><div className="second">2020</div> </div>
            <div> <div className="first">Additional Email </div><div className="second">N.A.</div> </div>
            <div> <div className="first">Additional Contact No. </div><div className="second">N.A.</div> </div>
          </div>
          <div style={{display: "flex", justifyContent:"center", alignContent:"center", marginTop: "20px"}}>
            <Link to="/dashboardVarifier" className='buttonsofverify'>Approve</Link>
            <Link to="/dashboardVarifier" className='buttonsofverify'>Cancel</Link>
          </div>
        </div>
    )
}
