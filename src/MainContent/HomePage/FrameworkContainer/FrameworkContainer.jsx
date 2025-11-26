import React from 'react'
import FrameworkCard from './Card/FrameWorkCard'
import reactjs from "../../../Images/FrameworkImage/reactjs.png"
import git from "../../../Images/FrameworkImage/git.png"
import github from "../../../Images/FrameworkImage/github.png"
import mysql from "../../../Images/FrameworkImage/mysql.png"
import docker from "../../../Images/FrameworkImage/docker.png"
import restapi from "../../../Images/FrameworkImage/restapi.png"
import nodejs from "../../../Images/FrameworkImage/nodejs.png"
import expressjs from "../../../Images/FrameworkImage/expressjs.png"
import mongodb from "../../../Images/FrameworkImage/mongodb.svg"
import RevealOnScroll from '../../../Animation/RevealOnScroll'
const FrameworkContainer = () => {
    const frameworks = [
        {
            image:reactjs,
            link:"https://react.dev/",
            title:"React JS",
            content:"React JS"
        },
        {
            title:"Git",
            content:"git tool",
            image:git
        },
        {
            title:"GitHub",
            content:"Github CI/CD",
            image:github
        },
        {
            title:"MySQL",
            content:"Mysql",
            image:mysql
        },
        {
            title:"Mongo DB",
            content:"Mongo DB",
            image:mongodb
        },
        {
            title:"Docker",
            content:"Docker tool",
            image:docker
        },
        {
            title:"REST API",
            content:"REST API",
            image:restapi
        },
        {
            title:"Node JS",
            content:"Node JS",
            image:nodejs
        },
        {
            title:"Express JS",
            content:"Express JS",
            image:expressjs
        }
    ]
  return (
    <div className='framework-main'>
        <RevealOnScroll animation='fade-right'>
            <div className="framework-container-title">
                <h2>Frameworks</h2>
            </div>
            <div className="framework-container">
                {frameworks.map(f=>(
                    <FrameworkCard MediaImage={f.image} MediaLink={f.link} MediaName={f.title} content={f.content}/>
                ))}
            </div>
        </RevealOnScroll>
      
    </div>
  )
}

export default FrameworkContainer
