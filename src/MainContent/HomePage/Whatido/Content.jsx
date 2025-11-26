import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <p>
      I have more than 4+ years experience in software development for complex scalable real world application.Want to know how may I help your project? <span><Link to="/projects">Check out my projects</Link></span> and <span><Link to="/resume">Online resume</Link></span>
    </p>
  )
}

export default Content
