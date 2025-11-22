import React from 'react'
import LanguageCardLogo from './LanguageCardLogo'
import LanguageCardContent from './LanguageCardContent';

const LanguageCard = ({MediaImage,MediaName,MediaLink,content}) => {
    
  return (
    <div className='language-card'>
      <LanguageCardLogo MediaImage={MediaImage} MediaLink={MediaLink} MediaName={MediaName}/>
      <LanguageCardContent content={content}/>
    </div>
  )
}

export default LanguageCard
