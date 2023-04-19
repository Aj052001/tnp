import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import '../cssFiles/studentProfile.css'
import { Link } from "react-router-dom"
import profileImage from '../assets/uploads/avatar.jpg'
import companyLogo from '../assets/images/companyLogo.jpg'
import collegeLogo from '../assets/images/iiitbhopallogo.png';
import schoolLogo from '../assets/images/schoolLogo.jpg';
import Loader from './Loader';

export default function StudentProfile(props) {
  const [loading, setLoading] = useState(true);
  const [personalInformation, setPersonalInformation] = useState({});
  const [experienceDetail, setExperienceDetails] = useState({});
  const [projectsDetail, setProjectsDetails] = useState({});
  const [educationDetail, setEducationDetails] = useState({});
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
        } else {
          props.updateLoggedIn(false);
        }
        setTimeout(() => {
          setLoading(false);
        }, 800);
      })
      .catch(error => {
        console.log(error);
      });

    if (props.isLoggedIn) {
      axios.get('http://localhost:5000/api/getPersonalDetails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setPersonalInformation(response.data.user);
        })
        .catch(error => {
          console.log(error);
        })

      axios.get('http://localhost:5000/api/getExperienceDetails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setExperienceDetails(response.data.results);
        })
        .catch(error => {
          console.log(error);
        })

      axios.get('http://localhost:5000/api/getProjectDetails', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setProjectsDetails(response.data.results);
        })
        .catch(error => {
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

  function dateToMonthandYear(dateStr) {
    const date = new Date(dateStr);
    const formattedDate = date.toLocaleDateString('en-IN', {
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    })
    return formattedDate;
  }

  return (
    <div className='studentProfilePage'>
      {/* ------------------------------------------------------------Logo Name & Description ---------------------------------------------------- */}
      <div className="studentProfileImage">
        <div className="profileImage">
          <img src={profileImage} alt="Profile Pic" />
        </div>
        <div className='student_About'>
          <div className="student_name">{personalInformation["First Name"] + " " + personalInformation["Last Name"]}</div>
          <div className="about">{personalInformation.Description}</div>
          <Link to='/editProfile' className="editProfileshortcut">&#128393;&nbsp;&nbsp;Edit Profile</Link>
        </div>
      </div>
      {/* -------------------------------------------------------------Completed----------------------------------------------------------------- */}


      <div className='information'>

        {/* ----------------------------------------------------------Personal Information ------------------------------------------------------ */}
        <div className="personalInformation">
          <h2>Personal Information</h2>
          <div className="personalInformationSection1">
            <div> <div className="first">First Name </div><div className="second">{personalInformation["First Name"]}</div> </div>
            <div> <div className="first">Last Name </div><div className="second">{personalInformation["Last Name"]}</div> </div>
            <div> <div className="first">Scholar No </div><div className="second">{personalInformation["Scholar No"]}</div> </div>
            <div> <div className="first">Scholar Status </div><div className="second">{personalInformation["status"]}</div> </div>
            <div> <div className="first">Father's Name </div><div className="second">{personalInformation["Father's Name"]}</div> </div>
            <div> <div className="first">Mother's Name </div><div className="second">{personalInformation["Mother's Name"]}</div> </div>
            <div> <div className="first">Gender </div><div className="second">{personalInformation["Gender"]}</div> </div>
            <div> <div className="first">D.O.B. </div><div className="second">{convertDate(personalInformation['D.O.B.'])}</div> </div>
            <div> <div className="first">Category </div><div className="second">{personalInformation["Category"]}</div> </div>
            <div> <div className="first">Community </div><div className="second">{personalInformation["Community"]}</div> </div>
            <div> <div className="first">Nationality </div><div className="second">{personalInformation["Nationality"]}</div> </div>
            <div> <div className="first">Aadhar Card No. </div><div className="second">{personalInformation["Aadhar Card No."]}</div> </div>
            <div> <div className="first">Contact No. </div><div className="second">{personalInformation["Contact No."]}</div> </div>
            <div> <div className="first">Email </div><div className="second">{personalInformation["Email"]}</div> </div>
            <div> <div className="first">Course </div><div className="second">{personalInformation["Course"]}</div> </div>
            <div> <div className="first">Department </div><div className="second">{personalInformation["Department"]}</div> </div>
            <div> <div className="first">Specialization </div><div className="second">{personalInformation["Specialization"]}</div> </div>
            <div> <div className="first">Admission Year </div><div className="second">{personalInformation["Admission Year"]}</div> </div>
            <div> <div className="first">Additional Email </div><div className="second">{personalInformation["Additional Email"]}</div> </div>
            <div> <div className="first">Additional Contact No. </div><div className="second">{personalInformation["Additional Contact No."]}</div> </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------- Completed ------------------------------------------------------------------------- */}


      {/* ---------------------------------------------------------- Education ------------------------------------------------------------------ */}
      <div className="education">
        <h2>Education</h2>
        {experienceDetail.length > 0 ? <>
          <div className="educationLogoAndDetail" style={{borderBottom: "1px solid #ebebeb"}}>
            <div className="educationLogo">
              <img src={collegeLogo} alt="IIIT BHOPAL" />
            </div>
            <div className="educationDetails">
              <div className="educationtitle">{educationDetail.college_name}</div>
              <div className='degreeandSpecialization'>{educationDetail.degree}, {educationDetail.specialization}</div>
              <div className="educationDuration">{educationDetail.college_start_year} - {educationDetail.college_end_year}</div>
              <div className="educationGrade">Grade: {educationDetail.college_grades}</div>
            </div>
          </div>

          <div className="educationLogoAndDetail" style={{borderBottom: "1px solid #ebebeb"}}>
            <div className="educationLogo">
              <img src={schoolLogo} alt="CLASS XII" />
            </div>
            <div className="educationDetails">
              <div className="educationtitle">{educationDetail["12th_schoolName"]}</div>
              <div className='degreeandSpecialization'>CLASS XII</div>
              <div className="educationDuration">{educationDetail["12th_startYear"]} - {educationDetail["12th_endYear"]}</div>
              <div className="educationGrade">Grade: {educationDetail["12th_Grades"]}%</div>
            </div>
          </div>

          <div className="educationLogoAndDetail">
            <div className="educationLogo">
              <img src={schoolLogo} alt="CLASS X" />
            </div>
            <div className="educationDetails">
              <div className="educationtitle">{educationDetail["10th_schoolName"]}</div>
              <div className='degreeandSpecialization'>CLASS X</div>
              <div className="educationDuration">{educationDetail["10th_startYear"]} - {educationDetail["10th_endYear"]}</div>
              <div className="educationGrade">Grade: {educationDetail["10th_Grades"]}%</div>
            </div>
          </div> </>: <p style={{color: "#6c757d", marginBottom: "10px"}}>No Education to Display.</p>}

      </div>
      {/* -----------------------------------------------------Completed -------------------------------------------------------------------- */}


      {/* ----------------------------------------------------------Experience ------------------------------------------------------------------ */}
      <div className="experience">
        <h2>Experience</h2>
        {experienceDetail.length > 0 ? (
          experienceDetail.map((experience, index) => (
            <div className="logoanddetail" key={index}>
              <div className="companyLogo">
                <img src={companyLogo} alt="Profile Pic" />
              </div>
              <div className="detail">
                <div className="title">{experience.Title}</div>
                <div className="companyName">
                  {experience["Company Name"]} · {experience['Job Type']}
                </div>
                <div className="duration">
                  {dateToMonthandYear(experience.startDate) + " "} - {experience.isPresent === "yes" ? " Present" : dateToMonthandYear(experience.endDate)}
                </div>
                <div className="location">{experience.Location}</div>
              </div>
            </div>
          ))
        ) : <p style={{color: "#6c757d", marginBottom: "10px"}}>No Experiences to Display.</p>}
      </div>
      {/* -----------------------------------------------------Completed -------------------------------------------------------------------- */}


      {/* -----------------------------------------------------Project Details -------------------------------------------------------------- */}
      <div className="project">
        <h2>Projects</h2>
        {projectsDetail.length > 0 ? (
          projectsDetail.map((project, index) => (
            <div className="detail" key={index}>
              <div className="title">{project.Title}</div>
              <div className="duration">
                {dateToMonthandYear(project.startDate)} - {project.isWorking === "yes" ? " Present" : dateToMonthandYear(project.endDate)}
              </div>
              <div className="creators">{project.Creators.split('_*_&_*_').join(" · ")}</div>
              <div className="projectLink"><a href={project["Project Link"]} target="_blank" rel="noreferrer">Show Project&nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                  <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                </svg></a></div>
            </div>
          ))
        ) : <p style={{color: "#6c757d", marginBottom: "10px"}}>No Projects to Display.</p>}
      </div>
      {/* -----------------------------------------------------Completed -------------------------------------------------------------------- */}
    </div>
  )
}
