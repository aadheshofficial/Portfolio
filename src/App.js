import './css/App.css';
import './css/SideBar/SideBar.css'
import './css/ContentPage/ContentPage.css'
import './css/ContentPage/MainPage/MainPage.css'
import './css/ContentPage/MainPage/ProfileCard/ProfileCard.css'
import './css/ContentPage/MainPage/WhatIDoCard/WhatIDoCard.css'
import './css/ContentPage/MainPage/LanguageCard/LanguageCard.css'
import './css/ContentPage/MainPage/FrameWorkCard/FrameWorkCard.css'
import './css/ContentPage/ResumePage/ResumePage.css'
import './css/ContentPage/NotFoundPage/NotFoundPage.css'
import './css/Animation/Animation.css'
import profile from "./Images/profile.jpg"
import SidePane from './SideBar/SidePane';
import ContentPage from './MainContent/ContentPage';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className="App">
      <button className={`hamburger ${isOpen ? "hamburger-active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      { !isOpen ? 
        <div className={!isOpen ? "short-nav" : "short-nav-hide"}>
        <div className="short-nav-bar">
          <div className="nav-bar-box">
            <NavLink to={"/"} className={"nav-icon"}>
              <img src={profile} alt="home" />
            </NavLink>
            <NavLink to={"/about"} className={"nav-icon"}>
              <img src={profile} alt="home" />
            </NavLink>
            <NavLink to={"/contact"} className={"nav-icon"}>
              <img src={profile} alt="home" />
            </NavLink>
            <NavLink to={"/contact"} className={"nav-icon"}>
              <img src={profile} alt="home" />
            </NavLink>
            <NavLink to={"/contact"} className={"nav-icon"}>
              <img src={profile} alt="home" />
            </NavLink>
          </div>
        </div>
      </div> 
      
      :

      <SidePane isOpen={isOpen}/>

      }
      
      <ContentPage isOpen={isOpen}/>
    </div>
  );
}

export default App;
