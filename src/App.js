import './css/App.css';
import './css/SideBar/SideBar.css'
import './css/ContentPage/ContentPage.css'
import './css/ContentPage/MainPage/MainPage.css'
import './css/ContentPage/MainPage/ProfileCard/ProfileCard.css'
import './css/ContentPage/MainPage/WhatIDoCard/WhatIDoCard.css'
import './css/ContentPage/MainPage/LanguageCard/LanguageCard.css'
import './css/ContentPage/MainPage/FrameWorkCard/FrameWorkCard.css'
import './css/ContentPage/ResumePage/ResumePage.css'

import SidePane from './SideBar/SidePane';
import ContentPage from './MainContent/ContentPage';
function App() {
  return (
    <div className="App">
      <SidePane/>
      <ContentPage/>
    </div>
  );
}

export default App;
