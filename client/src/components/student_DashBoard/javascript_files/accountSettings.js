import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import '../cssFiles/accountSettings.css'

export default function AccountSettings(props) {
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!props.isLoggedIn) {
    <Navigate to='/login' />
  }
  return (
    <div className='accountSettingsPage' style={{ height: props.windowSize[1] }}>
      No Content Till Now in Account Settings Page
    </div>
  )
}