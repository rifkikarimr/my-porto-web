import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsMedium } from 'react-icons/bs'
import { FaQuora } from 'react-icons/fa'


const HeaderSocial = () => {
  return (
    <div className='header_socials'>
          <a href="https://linkedin.com/rifkikarimr/ln" target="blank"><BsLinkedin/></a>
          <a href="https://github.com/rifkikarimr" target="blank"><BsGithub/></a>
          <a href="https://medium.com/@rifkikarimr" target="blank"><BsMedium/></a>
          <a href="https://www.quora.com/profile/Rifki-Karim" target="blank"><FaQuora/></a>
    </div>
  )
}

export default HeaderSocial