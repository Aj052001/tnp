import React, {useState, useEffect } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../cssFiles/Navbar.css'
import Logo from '../assets/images/iiitbhopallogo.png';
import { Link } from "react-router-dom"

export default function Navbar(props) {
  const [Name, setName] = useState("");

  const handleLogOut = () => {
    localStorage.removeItem('jwtToken_tnpWebsite2');
    props.updateLoggedIn(false);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwtToken_tnpWebsite2');
    axios.get('http://localhost:5000/api/checkLoginStatus2', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if(response.data.isLoggedIn){
        props.updateLoggedIn(response.data.isLoggedIn);
        setName(response.data.user.Name);
      }else{
        props.updateLoggedIn(false);
      }
    })
    .catch(error => {
      console.log(error);
    });
  }, [props]);

  if (!props.isLoggedIn) {
    <Navigate to='/login' />
  }
  return (
    <div className="nav_container">
      <div className="navFirst">
        <div className="nav-hamburgerIcon" id="menu" onClick={props.toggleSideBar}>
          <div className="box11"></div>
          <div className="box12"></div>
          <div className="box13"></div>
        </div>
        <Link to='https://www.iiitbhopal.ac.in/' target="_blank" rel="noreferrer">
          <img className='iiitbhopalLogo' src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navSecond">
        <div className="studentName">
          {Name}
        </div>
        <div className="navProfilePic">
          <span className='profileLogo'>{Name.substring(0,1)}</span>
        </div>
      </div>
      <div id="navDropdownContent" className='navDropdown' style={{ display: props.navDropdownShow, maxHeight: "317px", height: props.windowSize[1] - 85 }}>
        <div className="profileAndName">
          <div className="dropprofilePic">
            <span className='dropprofileLogo'>{Name.substring(0,1)}</span>
          </div>
          <div className="dropstudentName">
            {Name}
          </div>
        </div>
        <ul>
          <li className="nav-item">
            <Link className="nav-item-class" to="/studentProfile">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user me-2 text-900"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item-class" to="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart me-2 text-900"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
              </svg>
              <span>DashBoard</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/editProfile" className="nav-item-class">
              <svg className="text-900" focusable="false" aria-hidden="true" viewBox="0 0 32 32" data-testid="Editor.svgIcon" width="16px" height="16px"><path d="M5.333 5.333h8V2.666H2.666v10.667h2.667v-8zM26.667 18.667V24c0 1.473-1.194 2.667-2.667 2.667h-5.333v2.667H24c2.946 0 5.333-2.388 5.333-5.333v-5.333zM8.12 20.12l-2.8 6.533 6.56-2.733-3.76-3.8zM22.716 5.515l3.771 3.771-13.199 13.199-3.771-3.771L22.716 5.515z"></path></svg>
              <span>Edit Profile</span>
            </Link>
          </li>
        </ul>
        <div className="signOutFunction">
          <div className="nav-item-signout" onClick={handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-900"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span>Sign out</span>
          </div>
        </div>
      </div>
    </div>
  )
}
