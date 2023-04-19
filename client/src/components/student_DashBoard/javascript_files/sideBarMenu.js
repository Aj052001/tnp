import React, { useEffect } from 'react';
import { NavLink, Navigate } from "react-router-dom"
import axios from "axios";
import '../cssFiles/sideBarMenu.css'

export default function SideBarMenu(props) {

    const handleLogOut = () => {
        localStorage.removeItem('jwtToken_tnpWebsite');
        props.updateLoggedIn(false);
    }

    useEffect(() => {
        const token = localStorage.getItem('jwtToken_tnpWebsite');
        axios.get('http://localhost:5000/api/checkLoginStatus', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                if(response.data.isLoggedIn){
                    props.updateLoggedIn(response.data.isLoggedIn);
                  }else{
                    props.updateLoggedIn(false);
                  }
            })
            .catch(error => {
                console.log(error);
            });
    }, [props]);

    if (!props.isLoggedIn) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <div className="sideNavBar" style={(props.sideBarShow === false) ? { display: "none" } : { display: "block" }}>
                <ul className="sideNavBarlist">
                    <li className="sideNavBarLists-item">
                        <NavLink to="/dashboard" className="sideNavBar-listItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart me-2 text-900"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                            </svg>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <NavLink to="/studentProfile" className="sideNavBar-listItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user me-2 text-900"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span>Student Profile</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <NavLink to="/viewResume" className="sideNavBar-listItem">
                        <svg className = "text-900" height="16px" width="16px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path className="st0" d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
                                    c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
                                <path className="st0" d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
                                    c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
                                <path className="st0" d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
                                    h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
                                    c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
                                    c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
                            </g>
                        </svg>
                        <span>View Resume</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <NavLink to="/editProfile" className="sideNavBar-listItem">
                            <svg className="text-900" focusable="false" aria-hidden="true" viewBox="0 0 32 32" data-testid="Editor.svgIcon" width="16px" height="16px"><path d="M5.333 5.333h8V2.666H2.666v10.667h2.667v-8zM26.667 18.667V24c0 1.473-1.194 2.667-2.667 2.667h-5.333v2.667H24c2.946 0 5.333-2.388 5.333-5.333v-5.333zM8.12 20.12l-2.8 6.533 6.56-2.733-3.76-3.8zM22.716 5.515l3.771 3.771-13.199 13.199-3.771-3.771L22.716 5.515z"></path></svg>
                            <span>Edit Profile</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <NavLink to="/accountSettings" className="sideNavBar-listItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings me-2 text-900"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            <span>Account Setting</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <NavLink to="/changePassword" className="sideNavBar-listItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock me-2 uil text-900"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                    <li className="sideNavBarLists-item">
                        <div className="sideNavBar-signout" onClick={handleLogOut}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-900"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                            <span>Sign out</span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
