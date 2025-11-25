import React from 'react'
import {NavLink} from 'react-router-dom'

const SideBarMenuElements = ({MenuElements,MenuPath}) => {
  return (

          <NavLink to={MenuPath} 
          className={({ isActive }) =>
          isActive ? "side-bar-menu-elements side-bar-menu-element-text active" : "side-bar-menu-elements side-bar-menu-element-text"
        }
        end>
            {MenuElements}
          </NavLink>

  )
}

export default SideBarMenuElements
