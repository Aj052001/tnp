import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "axios";
import Loader from './Loader';
import '../cssFiles/dashboard.css'

export default function DashBoard(props) {
  const [personalInformation, setPersonalInformation] = useState({});
  const [educationDetail, setEducationDetails] = useState({});
  const [opportunities, setOpportunities] = useState({});
  const [loading, setLoading] = useState(true);
  console.log("Personal Information");
  console.log(personalInformation);
  console.log("Education Details");
  console.log(educationDetail);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken_tnpWebsite');
    axios.get('http://localhost:5000/api/checkLoginStatus', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      if (response.data.isLoggedIn) {
        props.updateLoggedIn(response.data.isLoggedIn);
      }else{
        props.updateLoggedIn(false);
      }
      setTimeout(() => {
        setLoading(false);
      }, 800);
    })
    .catch(error => {
      console.log(error);
    });

    if(props.isLoggedIn){
      axios.get('http://localhost:5000/api/getPersonalDetails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>{
        setPersonalInformation(response.data.user);
      })
      .catch(error =>{
        console.log(error);
      })

      axios.get('http://localhost:5000/api/getEducationDetails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setEducationDetails(response.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      })

      axios.get('http://localhost:5000/api/getAllOpportunities', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setOpportunities(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })

    }
  }, [props]);

  if (loading) {
    return <Loader />;
  }

  if (!props.isLoggedIn) {
    <Navigate to='/login' />
  }

  function convertDate(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
    return formattedDate;
  }

  const handleOnClick = (event)=>{
    console.log(event.target);
    console.log("clicked");
  }

  return (
    <div className='dashboardPage' style={{ height: props.windowSize[1] }}>
      <h2>Opportunities</h2>
      {opportunities.length > 0 ? (
          opportunities.map((opportunity, index) => (
            <div className="opportunity" key={index}>
              <div className="companyName">{opportunity.companyName}</div>
              <div className="position">{opportunity.position}</div>
              <div className="duration">{opportunity.Duration}</div>
              <div className="jobType">{opportunity.jobType}</div>
              <div className="location">{opportunity.Location}</div>
              <div className="stipend">{opportunity.Stipend}</div>
              <div className="endApplyDate">{convertDate(opportunity.endApplyDate)}</div>
              <button type="submit" onClick={handleOnClick}>Apply</button>
            </div>

          ))
      ) : <p style={{color: "#6c757d", marginBottom: "10px"}}>No Opportunities to Display.</p>}
    </div>
  )
}