import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import DashBoardNav from './components/student_DashBoard/javascript_files/Navbar';
import SideBarMenu from './components/student_DashBoard/javascript_files/sideBarMenu';
import ChangePassword from './components/student_DashBoard/javascript_files/changePassword';
import EditProfile from './components/student_DashBoard/javascript_files/editProfile';
import AccountSettings from './components/student_DashBoard/javascript_files/accountSettings';
import DashBoard from './components/student_DashBoard/javascript_files/dashboard'
import StudentProfile from './components/student_DashBoard/javascript_files/studentProfile';
import StudentLogin from './components/home_Pages/studentLogin';
import Loader from './components/student_DashBoard/javascript_files/Loader';
import ViewResume from './components/student_DashBoard/javascript_files/viewResume';
import VarifierLogin from './components/verifier/javascriptFiles/verifierLogin';
import VarifierDashBoard from './components/verifier/javascriptFiles/VarifierDashBoard';
import VarifierSideBarMenu from './components/verifier/javascriptFiles/sideBarMenu';
import VarifierDashBoardNav from './components/verifier/javascriptFiles/Navbar';
import Nav from './components/home_Pages/src/Nav.mjs';
import Landing from './components/home_Pages/src/Landing.mjs';
import AboutUs from './components/home_Pages/src/AboutUs.mjs';
import ContactUs from './components/home_Pages/src/ContactUs.mjs';
import PlacementTeam from './components/home_Pages/src/PlacementTeam.mjs';
import CareerCounselingTeams from './components/home_Pages/src/CareerCounselingTeam.mjs';
import DirectorMessage from './components/home_Pages/src/DirectorMessage.mjs';
import ChairmanMessage from './components/home_Pages/src/ChairmanMessage.mjs';
import JAF from './components/home_Pages/src/JAF.mjs';
import IAF from './components/home_Pages/src/IAF.mjs';
import TnpBrochure from './components/home_Pages/src/TnpBroucher.mjs';
import PlacementStatistics from './components/home_Pages/src/PlacementStatistics.mjs';
import Footer from './components/home_Pages/src/Footer.mjs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import FullDetails from './components/verifier/javascriptFiles/fullDetails';

function App() {
  // ---------------------------------------------------    Handle Login Status of User ----------------------------------------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInVarifier, setIsLoggedInVarifier] = useState(false);
  const [loading, setLoading] = useState(true);
  function updateLoggedIn(newValue) {
    setIsLoggedIn(newValue);
  }
  function updateLoggedInVarifier(newValue){
    setIsLoggedInVarifier(newValue);
  }
  const checkLoginStatus = () => {
    const token = localStorage.getItem('jwtToken_tnpWebsite');
    axios.get('http://localhost:5000/api/checkLoginStatus', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.data.isLoggedIn) {
          setIsLoggedIn(response.data.isLoggedIn);
        } else {
          setIsLoggedIn(false);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const checkLoginStatus2 = () => {
    const token = localStorage.getItem('jwtToken_tnpWebsite2');
    axios.get('http://localhost:5000/api/checkLoginStatus2', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.data.isLoggedIn) {
          setIsLoggedInVarifier(response.data.isLoggedIn);
        } else {
          setIsLoggedInVarifier(false);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    checkLoginStatus();
    checkLoginStatus2();
  }, [isLoggedIn]);
  // --------------------------------------------------------------- Completed -----------------------------------------------------------------------------------


  // ---------------------------------------------------    Handle state of resizing window ----------------------------------------------------------------------
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  // --------------------------------------------------------------- Completed -----------------------------------------------------------------------------------


  // ---------------------------------------------------    Handle Profile Logo Click function in Navigation Menu   ----------------------------------------------
  const [navDropdownShow, setNavDropdownShow] = useState("none");
  const navProfileLogoClick = () => {
    if (navDropdownShow === "none")
      setNavDropdownShow("block");
    else
      setNavDropdownShow("none");
  }
  // ---------------------------------------------------------------------------    Completed   ------------------------------------------------------------------


  // -------------------------------------------------    Handle HamBurgar Icon Click function in Navigation Menu   ----------------------------------------------
  const [sideBarShow, setSideBarShow] = useState((window.innerWidth > 1050) ? true : false);
  const toggleSideBar = () => {
    if (sideBarShow === false)
      setSideBarShow(true);
    else
      setSideBarShow(false);
  }
  // ---------------------------------------------------------------------------    Completed   ------------------------------------------------------------------


  // ---------------------------------------------------    Handle on resize of window ---------------------------------------------------------------------------
  window.onresize = function (event) {
    // For Navigation menu
    setWindowSize([window.innerWidth, window.innerHeight]);
    // for sidebar menu
    if (window.innerWidth <= 1050)
      setSideBarShow(false);
    else
      setSideBarShow(true);
  }
  // --------------------------------------------------------------- Completed -----------------------------------------------------------------------------------


  // ---------------------------------------------------    Handle click on whole window -------------------------------------------------------------------------
  window.onclick = function (event) {
    // For Navigation menu
    if (!event.target.matches('.navDropdown') && !event.target.matches('.profileLogo')) {
      if (navDropdownShow === "block")
        setNavDropdownShow("none");
    }
    // For side Bar Menu
    if (window.innerWidth <= 1050 && !event.target.matches('.nav-hamburgerIcon') && !event.target.closest('.nav-hamburgerIcon') && !event.target.matches('.sideNavBar')) {
      setSideBarShow(false);
    }
  }
  // --------------------------------------------------------------- Completed -----------------------------------------------------------------------------------

  if (loading) {
    return <Loader />;
  }
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <>
            <Nav />
            <Landing />
            <Footer />
          </>
        } />
        <Route exact path='/aboutus' element={
          <>
            <Nav />
            <AboutUs />
            <Footer />
          </>
        } />
        <Route exact path='/contactUs' element={
          <>
            <Nav />
            <ContactUs />
            <Footer />
          </>} />
        <Route exact path='/placementTeam' element={<>
          <Nav />
          <PlacementTeam />
          <Footer />
        </>} />
        <Route exact path='/CareerCommittee' element={<>
          <Nav />
          <CareerCounselingTeams />
          <Footer />
        </>} />
        <Route exact path='/directorMessage' element={<>
          <Nav />
          <DirectorMessage />
          <Footer />
        </>} />
        <Route exact path='/tpoMessage' element={<>
          <Nav />
          <ChairmanMessage />
          <Footer />
        </>} />
        <Route exact path='/jaf' element={<>
          <Nav />
          <JAF />
          <Footer />
        </>} />
        <Route exact path='/iaf' element={<>
          <Nav />
          <IAF />
          <Footer />
        </>} />
        <Route exact path='/TnpBrochure' element={<>
          <Nav />
          <TnpBrochure />
          <Footer />
        </>} />
        <Route exact path='/placementStatistics' element={<>
          <Nav />
          <PlacementStatistics />
          <Footer />
        </>} />
        <Route exact path='/verifierLogin' element={<>
          {isLoggedInVarifier ? <Navigate to='/dashboardVarifier' /> : <VarifierLogin isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} />}
        </>} />

        <Route exact path="/dashboardVarifier" element={
          <>
            {isLoggedInVarifier ? <VarifierDashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : null}
            {isLoggedInVarifier ? <VarifierSideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : null}
            {isLoggedInVarifier ? <VarifierDashBoard windowSize={windowSize} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : <Navigate to="/verifierLogin" />}
          </>
        }></Route>

        <Route exact path="/fullDetails" element={
          <>
            {isLoggedInVarifier ? <VarifierDashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : null}
            {isLoggedInVarifier ? <VarifierSideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : null}
            {isLoggedInVarifier ? <FullDetails windowSize={windowSize} isLoggedIn={isLoggedInVarifier} updateLoggedIn={updateLoggedInVarifier} /> : <Navigate to="/verifierLogin" />}
          </>
        }></Route>


        <Route exact path="/student_dashboard" element={<Navigate to="/dashboard" />}></Route>

        <Route exact path='/login' element={
          <>
            {isLoggedIn ? <Navigate to='/dashboard' /> : <StudentLogin isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} />}
          </>
        }></Route>

        <Route exact path="/studentProfile" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <StudentProfile windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to='/login' />}
          </>
        }></Route>

        <Route exact path="/changePassword" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <ChangePassword windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to='/login' />}
          </>
        }></Route>

        <Route exact path="/editProfile" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <EditProfile windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to='/login' />}
          </>
        }></Route>

        <Route exact path="/viewResume" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <ViewResume windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to='/login' />}
          </>
        }></Route>

        <Route exact path="/dashboard" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <DashBoard windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to="/login" />}
          </>
        }></Route>

        <Route exact path="/accountSettings" element={
          <>
            {isLoggedIn ? <DashBoardNav toggleSideBar={toggleSideBar} navProfileLogoClick={navProfileLogoClick} navDropdownShow={navDropdownShow} windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <SideBarMenu sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : null}
            {isLoggedIn ? <AccountSettings windowSize={windowSize} isLoggedIn={isLoggedIn} updateLoggedIn={updateLoggedIn} /> : <Navigate to='/login' />}
          </>
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
