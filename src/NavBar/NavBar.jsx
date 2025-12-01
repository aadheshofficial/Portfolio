import React from 'react'
import home from '../Images/NavBar/home.png'
import about from '../Images/NavBar/about.png'
import contact from '../Images/NavBar/contact.png'
import project from '../Images/NavBar/project.png'
import resume from '../Images/NavBar/resume.png'
import { NavLink } from 'react-router-dom';

const NavBar = ({isOpen}) => {
  return (
    <div className={!isOpen ? "short-nav" : "short-nav-hide"}>
          <div className="short-nav-bar">
            <div className="nav-bar-box">
              <NavLink to={"/"} className={"nav-icon"} end>
                <img src={home} alt="home" className='nav-img'/>
                <span className="nav-tooltip">Home</span>
              </NavLink>
              <NavLink to={"/about"} className={"nav-icon"}>
                <img src={about} alt="about" className='nav-img'/>
                <span className="nav-tooltip">About</span>
              </NavLink>
              <NavLink to={"/contact"} className={"nav-icon"}>
                <img src={contact} alt="contact" className='nav-img' />
                <span className="nav-tooltip">Contact</span>
              </NavLink>
              <NavLink to={"/projects"} className={"nav-icon"}>
                <img src={project} alt="projects" className='nav-img' />
                <span className="nav-tooltip">projects</span>
              </NavLink>
              <NavLink to={"/resume"} className={"nav-icon"}>
                <img src={resume} alt="resume" className='nav-img' />
                <span className="nav-tooltip">Resume</span>
              </NavLink>
            </div>
          </div>
      </div> 
  )
}

export default NavBar
