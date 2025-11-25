import React from 'react'
import {Link} from 'react-router-dom'

const SideBarMenuElements = ({MenuElements,MenuPath}) => {
  return (

          <Link to={MenuPath} className='side-bar-menu-elements side-bar-menu-element-text'>
            {MenuElements}
          </Link>

  )
}

export default SideBarMenuElements
