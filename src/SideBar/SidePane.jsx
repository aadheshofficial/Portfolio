import React from 'react'
import SideBarContent from './SideBarContent'
import RevealOnScroll from '../Animation/RevealOnScroll'
const SidePane = () => {
  return (
    // <div className={isOpen ? "side-bar side-bar-open" : "side-bar side-bar-close"}>
    <div className={"side-bar"}>
      {/* <RevealOnScroll animation='fade-left'> */}
        <SideBarContent/>
      {/* </RevealOnScroll> */}
    </div>
  )
}

export default SidePane
