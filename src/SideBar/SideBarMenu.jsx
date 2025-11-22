import React from 'react'
import SideBarMenuElements from './SideBarMenuElements'
const SideBarMenu = () => {
  return (
    <ul className='side-bar-menu'>
      <SideBarMenuElements MenuElements={"Home"}/>
      <SideBarMenuElements MenuElements={"About"}/>
      <SideBarMenuElements MenuElements={"Contact"}/>
      <SideBarMenuElements MenuElements={"Projects"}/>
      <SideBarMenuElements MenuElements={"Resume"}/>
    </ul>
  )
}

export default SideBarMenu
