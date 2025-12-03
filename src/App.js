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
import './css/NavBar/NavBar.css'
import './css/ContentPage/ContactPage/ContactPage.css'
import './css/ContentPage/ProjectPage/ProjectPage.css'
import SidePane from './SideBar/SidePane';
import ContentPage from './MainContent/ContentPage';

import { useState } from 'react';
import NavBar from './NavBar/NavBar';
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
        <NavBar isOpen={isOpen}/>
      :
        <SidePane isOpen={isOpen}/>
      }
      
      <ContentPage isOpen={isOpen}/>
    </div>
  );
}

export default App;
