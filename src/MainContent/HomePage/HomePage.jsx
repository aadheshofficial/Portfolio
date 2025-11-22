import React from 'react'
import Profile from './Profile/ProfileCard'
import Whatido from './Whatido/Whatido'
import LanguageContainer from './LanguageContainer/LanguageContainer'
import FrameworkContainer from './FrameworkContainer/FrameworkContainer'

const HomePage = () => {
  return (
    <div className='home-page'>
      <Profile/>
      <Whatido/>
      <FrameworkContainer/>
      <LanguageContainer/>
    </div>
  )
}

export default HomePage
