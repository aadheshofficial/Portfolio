import React from 'react'
import SideBarContent from './SideBarContent'
import RevealOnScroll from '../Animation/RevealOnScroll'
const SidePane = ({isOpen}) => {
  return (
    <div className={isOpen ? "side-bar side-bar-open" : "side-bar side-bar-close"}>
      {/* <RevealOnScroll animation='fade-left'> */}
        <SideBarContent/>
      {/* </RevealOnScroll> */}
    </div>
  )
}

export default SidePane
