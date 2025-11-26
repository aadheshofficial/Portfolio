import React from 'react'
import ProfileContents from './ProfileContents'
import ProfileImage from './ProfileImage'
import RevealOnScroll from '../../../Animation/RevealOnScroll'
import RevealOnScrollNoRepeat from '../../../Animation/RevealOnScrollNoRepeat'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <RevealOnScrollNoRepeat animation='fade-left'>
        <ProfileContents/>
      </RevealOnScrollNoRepeat>
      <RevealOnScrollNoRepeat animation='zoom-in'>
        <ProfileImage/>
      </RevealOnScrollNoRepeat>
      
    </div>
  )
}

export default ProfileCard
