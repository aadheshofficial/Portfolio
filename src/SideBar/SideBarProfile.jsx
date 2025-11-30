import React from 'react'
import profile from "../Images/sidebar.jpeg"
import RevealOnScrollNoRepeat from '../Animation/RevealOnScrollNoRepeat'

const SideBarProfile = () => {
  return (
    <div >
      {/* <RevealOnScrollNoRepeat animation='zoom-in'> */}
        <img src={profile} alt="profile image" className='side-bar-profile' />
      {/* </RevealOnScrollNoRepeat> */}
      
    </div>
  )
}

export default SideBarProfile
