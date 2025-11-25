import React from 'react'
import SideBarMenuElements from './SideBarMenuElements'
const SideBarMenu = () => {
  return (
    <nav>
      <ul className='side-bar-menu'>
        <SideBarMenuElements MenuElements={"Home"} MenuPath={"/home"}/>
        <SideBarMenuElements MenuElements={"About"} MenuPath={"/about"}/>
        <SideBarMenuElements MenuElements={"Contact"} MenuPath={"/contact"}/>
        <SideBarMenuElements MenuElements={"Projects"} MenuPath={"/projects"}/>
        <SideBarMenuElements MenuElements={"Resume"} MenuPath={"/resume"}/>
      </ul>
    </nav>
  )
}

export default SideBarMenu
