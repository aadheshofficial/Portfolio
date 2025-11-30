import React from 'react'
import HomePage from './HomePage/HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage/AboutPage'
import ContactPage from './ContactPage/ContactPage'
import ResumePage from './ResumePage/ResumePage'
import ProjectPage from './ProjectsPage/ProjectPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'

const ContentPage = ({isOpen}) => {
  return (
      <div className={isOpen ? "content-page content-page-half" : "content-page content-page-full"}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/home" element={<Navigate to="/" />} />
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
