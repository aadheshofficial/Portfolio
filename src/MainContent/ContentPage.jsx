import React from 'react'
import HomePage from './HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import ResumePage from './ResumePage/ResumePage'
import ProjectPage from './ProjectsPage/ProjectPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'

const ContentPage = () => {
  return (
      <div className='content-page'>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/projects' element={<ProjectPage/>}/>
            <Route path='/resume' element={<ResumePage/>}/>

            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        
      </div>
  )
}

export default ContentPage
