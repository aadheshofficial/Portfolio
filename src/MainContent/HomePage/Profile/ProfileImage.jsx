import React from 'react'
import profile from "../../../Images/profile.jpeg"
const ProfileImage = () => {
  return (
    <div className='profile-image'>
        <img src={profile} alt="profile image" className='profile-image-pic'/>
      
    </div>
  )
}

export default ProfileImage
