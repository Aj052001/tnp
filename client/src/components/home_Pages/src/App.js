import AboutUs from './AboutUs.mjs';
import './App.css';
import Nav from './Nav.mjs'
import Footer from './Footer.mjs';
import DirectorMessage from './DirectorMessage.mjs';
import ChairmanMessage from './ChairmanMessage.mjs';
import PastRecruiters from './PastRecruiters.mjs';
import ContactUs from './ContactUs.mjs';
import PlacementTeam from './PlacementTeam.mjs';
import TeamCards from './TeamCards.mjs';
import CareerCounselingTeams from './CareerCounselingTeam.mjs';
import JAF from './JAF.mjs';
import IAF from './IAF.mjs';
import React from "react";
import TnpBrochure from './TnpBroucher.mjs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import PlacementStatistics from './PlacementStatistics.mjs';
import MySlider from './MySlider.jsx';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Landing from './Landing.mjs';






// import members from './TeamMemberData.js';

function App() {
  return (
    <Router>
          <Nav/>
      <Routes>
          <Route exact path='/' element={<Landing/>}/>
          <Route exact path='/aboutus' element={<AboutUs/>}/>
          <Route exact path = '/contactUs' element = {<ContactUs />} />
          <Route exact path = '/placementTeam' element = {<PlacementTeam />} />
          <Route exact path = '/CareerCommittee' element = {<CareerCounselingTeams />} />
          <Route exact path = '/directorMessage' element = {<DirectorMessage />} />
          <Route exact path = '/tpoMessage' element = {<ChairmanMessage />} />
          <Route exact path = '/jaf' element = {<JAF />} />
          <Route exact path = '/iaf' element = {<IAF />} />
           <Route exact path = '/TnpBrochure' element = {<TnpBrochure />} />
           <Route exact path = '/placementStatistics' element = {<PlacementStatistics />} />
      </Routes>
  

    
          <Footer/>
    </Router>
  );
}

export default App;
