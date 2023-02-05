import React from 'react'
import './experience.css'
import { BsPatchCheck } from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Webdev">
          <h3>Website Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Vue JS</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>React JS</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Node JS</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
          </div>
        </div>

        {/* end of webdev */}

        <div className="experience_backdev">
          <h3>DevOps</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon' />
              <div>
                <h4>Linux SysAdm</h4>
                {/* <small className='text-light'></small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Docker</h4>
                {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Jenkins</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Google Cloud Platform</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Kubernetes</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheck className='experience_details-icon'/>
              <div>
                <h4>Terraform</h4>
                {/* <small className='text-light'>Beginner</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience