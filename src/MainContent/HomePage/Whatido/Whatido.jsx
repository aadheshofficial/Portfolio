import React from 'react'
import Title from './Title'
import Content from './Content'
import RevealOnScroll from '../../../Animation/RevealOnScroll'

const Whatido = () => {
  return (
    <RevealOnScroll animation='fade-right'>
    <div className='what-i-do-card'>
      <Title/>
      <Content/>
    </div>
    </RevealOnScroll>
  )
}

export default Whatido
