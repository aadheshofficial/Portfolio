import React from 'react'
import ProfileContents from './ProfileContents'
import ProfileImage from './ProfileImage'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
        <ProfileContents/>
        <ProfileImage/>
      
    </div>
  )
}

export default ProfileCard
