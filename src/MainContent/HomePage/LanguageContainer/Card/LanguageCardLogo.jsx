import React from 'react'

const LanguageCardLogo = ({MediaImage,MediaLink,MediaName}) => {
  return (
    <div style={{display:"flex",flexDirection:'row'}}>
      <a href={MediaLink} target='_blank' rel="noopener noreferrer">
        <img src={MediaImage} alt={MediaLink} className='link-image language-logo'
            style={{cursor:"pointer"}}
        />
      </a>
      <div style={{marginTop:"5px",marginLeft:"10px",fontWeight:"bold"}}>{MediaName}</div>
    </div>
  )
}

export default LanguageCardLogo
