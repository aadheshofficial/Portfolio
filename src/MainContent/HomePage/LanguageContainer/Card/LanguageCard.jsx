import React from 'react'
import LanguageCardLogo from './LanguageCardLogo'
import LanguageCardContent from './LanguageCardContent';
import RevealOnScroll from '../../../../Animation/RevealOnScroll';

const LanguageCard = ({MediaImage,MediaName,MediaLink,content}) => {
    
  return (
    <div className='language-card'>
      <RevealOnScroll animation='zoom-in'>
        <LanguageCardLogo MediaImage={MediaImage} MediaLink={MediaLink} MediaName={MediaName}/>
        <LanguageCardContent content={content}/>
      </RevealOnScroll>
    </div>
  )
}

export default LanguageCard
