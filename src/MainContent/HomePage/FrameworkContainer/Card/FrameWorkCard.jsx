import React from 'react'
import FrameworkCardLogo from "./FrameworkCardLogo"
import FrameworkCardContent from './FramworkContent'

const FrameworkCard = ({MediaImage,MediaName,MediaLink,content}) => {
    
  return (
    <div className='framework-card'>
      <FrameworkCardLogo MediaImage={MediaImage} MediaLink={MediaLink} MediaName={MediaName}/>
      <FrameworkCardContent content={content}/>
    </div>
  )
}

export default FrameworkCard
