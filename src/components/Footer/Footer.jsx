import React from 'react'
import "./footer.css"
import { BsMedium } from 'react-icons/bs'
import {FiLinkedin} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import { FaQuora } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>KARIM</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#porto">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/ln/rifkikarimr"><FiLinkedin/></a>
        <a href="https://medium.com/@rifkikarimr"><BsMedium/></a>
        <a href="https://github.com/rifkikarimr"><BsGithub/></a>
        <a href="https://www.quora.com/profile/Rifki-Karim" target="blank"><FaQuora/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; RIFKI KARIM RAMADHAN</small>
      </div>
    </footer>
  )
}

export default Footer