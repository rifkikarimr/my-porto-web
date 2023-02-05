import React from 'react'
import './about.css'
import IM from '../../assets/12.jpg'
import { FaAward } from 'react-icons/fa'
import { TbFileCertificate } from 'react-icons/tb'
import {AiOutlineProject} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={IM} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>Graduated Bangkit Academy 2022</small>
            </article>

            <article className='about_card'>
              <TbFileCertificate className='about_icons'/>
              <h5>Cerificate</h5>
              <small>10++ Completed</small>
            </article>

            <article className='about_card'>
              <AiOutlineProject className='about_icons'/>
              <h5>Projects</h5>
              <small>7++ Developed</small>
            </article>

      
          </div>
            <p>
            I am a Fresh Graduate Computer Engineering major at Brawijaya University focusing on Computer Network and IT Infrastructure. I have shifted my focus to DevOps and also interesting in learning web development. I am also interested in writing articles on online platforms to provide tips and recommendations about technology and health. Strong passion for future
technological developments to encourage personal and professional development. Eager to join an innovative organization
and technology industry. 
            </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About