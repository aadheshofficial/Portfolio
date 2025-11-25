import React from 'react'
import resume from "../../Resume/resume.png"
const ResumePage = () => {
  return (
    <div className='resume-page-main'>
      <h1>Resume</h1>
      {/* <iframe
      src={resume}
      width="100%"
      height="100%"
      style={{border:"none"}}
      ></iframe> */}
      <img src={resume}/>
    </div>
  )
}

export default ResumePage
