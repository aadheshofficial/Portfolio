import React from 'react'

const SocialMediaLink = ({MediaLink,MediaImage}) => {
  return (
    <div className='social-media-link'>
      <a href={MediaLink} target='_blank' rel="noopener noreferrer">
        <img src={MediaImage} alt="social media link" className='link-image'
            style={{cursor:"pointer"}}
        />
      </a>
    </div>
  )
}

export default SocialMediaLink
