import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not Found </h1>
      <h2>Return to Home</h2>
      <Link to="/" >Home</Link>
    </div>
  )
}

export default NotFoundPage
