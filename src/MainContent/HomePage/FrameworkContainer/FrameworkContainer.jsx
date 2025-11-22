import React from 'react'
import FrameworkCard from './Card/FrameWorkCard'

const FrameworkContainer = () => {
    const frameworks = [
        {

        }
    ]
  return (
    <div className='framework-main'>
        <div className="framework-container-title">
            <h2>Frameworks</h2>
        </div>
        <div className="framework-container">
            {frameworks.map(f=>(
                <FrameworkCard MediaImage={f.image} MediaLink={f.link} MediaName={f.title} content={f.content}/>
            ))}
        </div>
      
    </div>
  )
}

export default FrameworkContainer
