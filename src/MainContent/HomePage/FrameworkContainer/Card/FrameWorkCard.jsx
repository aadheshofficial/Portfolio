import React from 'react'
import FrameworkCardLogo from "./FrameworkCardLogo"
import FrameworkCardContent from './FramworkContent'
import RevealOnScroll from '../../../../Animation/RevealOnScroll'

const FrameworkCard = ({MediaImage,MediaName,MediaLink,content}) => {
    
  return (

    <div className='framework-card'>
      <RevealOnScroll animation='zoom-in'>
        <FrameworkCardLogo MediaImage={MediaImage} MediaLink={MediaLink} MediaName={MediaName}/>
        <FrameworkCardContent content={content}/>
      </RevealOnScroll>
    </div>
  )
}

export default FrameworkCard
