import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useRedux } from "./hooks";
import './css/tailwind.css';
import { StartCampaign } from "./components/StartCampaign";
import { LandingPage } from "./pages/LandingPage";
import { LinkedInCallback } from 'react-linkedin-login-oauth2';


const App = () => (
  <div className="bg-white h-screen w-screen overflow-x-hidden">
    <Router>
      <Routes>
        <Route path="/createcampaign" element={<StartCampaign />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        {/* <Route  path="/linkedin" element={<LinkedInCallback/>} /> */}
      </Routes>
    </Router>
  </div>
);

export default App;
