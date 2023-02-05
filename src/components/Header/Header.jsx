import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me12.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container" id='home'>
        <h5>Hello I'am</h5>
        <h1>Rifki Karim</h1>
        <h5 className="text-light">
          Fresh Graduate Computer Engineering major 2023
        </h5>
        <CTA />
        <HeaderSocial/>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header