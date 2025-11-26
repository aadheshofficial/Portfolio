import React from 'react'
import SideBarContent from './SideBarContent'
import RevealOnScroll from '../Animation/RevealOnScroll'
const SidePane = () => {
  return (
    <div className='side-bar-color side-bar'>
      <RevealOnScroll animation='fade-left'>
        <SideBarContent/>
      </RevealOnScroll>
    </div>
  )
}

export default SidePane
