import React, { useEffect } from 'react';
import { NavLink, Navigate } from "react-router-dom"
import axios from "axios";
import '../cssFiles/sideBarMenu.css'

export default function SideBarMenu(props) {

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
                  }else{
                    props.updateLoggedIn(false);
                  }
            })
            .catch(error => {
                console.log(error);
            });
    }, [props]);

    if (!props.isLoggedIn) {
        return <Navigate to='/verifierLogin' />
    }

    return (
        <>
            <div className="sideNavBar" style={(props.sideBarShow === false) ? { display: "none" } : { display: "block" }}>
                <ul className="sideNavBarlist">
                    <li className="sideNavBarLists-item">
                        <NavLink to="/dashboardVarifier" className="sideNavBar-listItem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-pie-chart me-2 text-900"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                            </svg>
                            <span>Dashboard</span>
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
