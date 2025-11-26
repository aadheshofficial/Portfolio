import React from 'react'
import LanguageCard from './Card/LanguageCard'
import javascript from "../../../Images/LanguageImage/javascript.jpg"
import python from "../../../Images/LanguageImage/python.png"
import java from "../../../Images/LanguageImage/java.png"
import sql from "../../../Images/LanguageImage/sql.jpg"
import nosql from "../../../Images/LanguageImage/nosql.png"
import c_language from "../../../Images/LanguageImage/c_language.png"
import html from "../../../Images/LanguageImage/html.png"
import css from "../../../Images/LanguageImage/css.png"
import RevealOnScroll from '../../../Animation/RevealOnScroll'


const LanguageContainer = () => {
    const languages = [
        {
            image: javascript,
            title : "Venilla javascript",
            link:"https://en.wikipedia.org/wiki/JavaScript",
            content:"Created multiple javascript programs to understand real world application of the language to grasp the concepts "
        },
        {
            title:"Java",
            content:"java",
            image:java
        },
        {
            image:python,
            title:"Python",
            link:"link",
            content:"python"
        },
        {
            image : c_language,
            title: "C programming",
            link: "c Link",
            content : "c language"
        },
        {
            image : sql,
            title: "SQL",
            link: "sql Link",
            content : "sql language"
        },
        {
            image : nosql,
            title: "NoSql",
            link: "nosql Link",
            content : "nosql language"
        },
        {
            title:"HTML 5",
            content:"HTML version 5",
            image: html
        },
        {
            title:"CSS",
            content:"Css version 3",
            image:css
        }
    ]
  return (
    <div className='language-main'>
        <RevealOnScroll animation='fade-right'>
            <div className="language-container-title">
                <h2>Languages</h2>
            </div>
            <div className="language-container">
                {languages.map(language=>(
                    <LanguageCard MediaImage={language.image} MediaLink={language.link} MediaName={language.title} content={language.content}/>
                ))}
            </div>
        </RevealOnScroll>
      
    </div>
  )
}

export default LanguageContainer
