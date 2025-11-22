import React from 'react'
import SocialMediaLink from './SocialMediaLink'
import instagram from "../Images/instagram.jpeg"
import gmail from "../Images/gmail.png"
import whatsapp from "../Images/whatsapp.jpg"
import telegram from "../Images/telegram.png"
import github from "../Images/github.png"


const SideBarSocialMedia = () => {
    const instagram_link = "https://www.instagram.com"
    const gmail_link = "https://www.gmail.com"
    const whatsapp_link = "https://www.whatsapp.com"
    const telegram_link = "https://www.telegram.com"
    const github_link = "https://www.github.com"

  return (
    <div className='side-bar-link-column'>
      <SocialMediaLink MediaLink={instagram_link} MediaImage={instagram}/>
      <SocialMediaLink MediaLink={whatsapp_link} MediaImage={whatsapp}/>
      <SocialMediaLink MediaLink={telegram_link} MediaImage={telegram}/>
      <SocialMediaLink MediaLink={gmail_link} MediaImage={gmail}/>
      <SocialMediaLink MediaLink={github_link} MediaImage={github}/>
    </div>
  )
}

export default SideBarSocialMedia
