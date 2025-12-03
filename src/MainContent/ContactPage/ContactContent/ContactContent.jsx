import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactInfo from './ContactInfo/ContactInfo'

const ContactContent = () => {
  return (
    <div className="contact-content-box">
        <ContactForm/>
        <ContactInfo/>
      </div>
  )
}

export default ContactContent
