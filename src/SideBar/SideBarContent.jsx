import React from 'react'
import SideBarName from './SideBarName'
import SideBarProfile from './SideBarProfile'
import SideBarDescription from './SideBarDescription'
import SideBarSocialMedia from './SideBarSocialMedia'
import SideBarMenu from './SideBarMenu'
const SideBarContent = () => {
  return (
    <div className='side-bar-content'>
        <SideBarName/>
        <SideBarProfile/>
        <SideBarDescription/>
        <SideBarSocialMedia/>
        <hr />
        <SideBarMenu/>
        
     </div>
  )
}

export default SideBarContent
