import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='not-found-page'>
      <h1>404 - Page not Found </h1>
      
      <span><Link to="/" ><h2>Return to Home</h2></Link></span>
    </div>
  )
}

export default NotFoundPage
